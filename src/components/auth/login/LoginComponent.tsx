import { localization } from "@/constant/localization";

import logo from "@/assets/images/marayedcoffee-high-resolution-logo.png";
import textFieldItems from "@/components/auth/login/utils/login.data";
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { cssClass } from "@/constant/cssClass";
import { routes } from "@/constant/routes";
import useLogin from "@/hooks/auth/login/useLogin";
import { useStorage } from "@/hooks/shared/useStorage";
import { Token, User, userDataLogin } from "@/types/auth/login/login.type";
import useHeaderStore from "@/zustand/root-layout/header/store";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  Container,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import { AxiosResponse } from "axios";
import { getCookie, setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginValidationSchema } from "../validation/auth.valiation";

const { auth } = localization;
const { styleContainerAuth, styleLinkAuth } = cssClass;

function LoginComponent() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [user, setUser] = useStorage<User | null>("user", null);
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });
  const { mutateAsync, isPending } = useLogin();

  const handleLogin = async (userData: userDataLogin) => {
    try {
      const {
        status,
        data: { token },
        data: {
          data: { user },
        },
      } = (await mutateAsync(userData)) as AxiosResponse<{
        token: Token;
        data: { user: User };
      }>;
      if (status === 200) {
        console.log(token, user);
        setIsLoginSuccess(true);
        setCookie("accessToken", token.accessToken);
        setCookie("refreshToken", token.refreshToken);
        setCookie("role", user.role);
        setUser(user);

        // close drawer when success
        handleCloseDrawer();

        setTimeout(() => {
          if (getCookie("role") === "ADMIN") router.push(routes.dashboard);
          else router.push(routes.home);
        }, 2000);
      }
    } catch (error) {
      setIsLoginSuccess(false);
      throw error;
    }
    setOpen(true);
  };

  return (
    <Container sx={styleContainerAuth} maxWidth="sm">
      <Image src={logo} alt="Logo" width={130} height={130} />

      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(handleLogin)}>
        {textFieldItems.map((item, index) => (
          <TextField
            key={index}
            fullWidth
            error={!!errors[item.name as keyof userDataLogin]}
            placeholder={item.placeholder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{item.icon}</InputAdornment>
              ),
            }}
            {...register(item.name as keyof userDataLogin)}
            type={item.type}
            sx={{ mb: 2 }}
            helperText={errors[item.name as keyof userDataLogin]?.message}
          />
        ))}
        <ButtonAuth loading={isPending} text={auth.login} />
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity={isLoginSuccess ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {isLoginSuccess ? auth.loginSuccess : auth.loginFail}
          </Alert>
        </Snackbar>
        <Button onClick={() => router.push(routes.register)} sx={styleLinkAuth}>
          {auth.submit}
        </Button>
      </Box>
    </Container>
  );
}

export default LoginComponent;
