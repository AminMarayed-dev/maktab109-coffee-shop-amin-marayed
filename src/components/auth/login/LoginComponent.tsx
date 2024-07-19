import { localization } from "@/constant/localization";

import textFieldItems from "@/components/auth/login/login.data";
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { cssClass } from "@/constant/cssClass";
import { routes } from "@/constant/routes";
import useLogin from "@/hooks/auth/login/useLogin";
import { FormData } from "@/types/auth/login/login.type";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  Container,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginValidationSchema } from "../validation/auth.valiation";

function LoginComponent() {
  const { auth } = localization;
  const [open, setOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidationSchema) });
  const { mutateAsync, isPending } = useLogin();

  const handleLogin = async (userData: any) => {
    try {
      const {
        status,
        data: { token },
        data: {
          data: { user },
        },
      } = await mutateAsync(userData);
      if (status === 200) {
        setIsLoginSuccess(true);
        setCookie("accessToken", token.accessToken);
        setCookie("refreshToken", token.refreshToken);
        setCookie("role", user.role);

        setTimeout(() => {
          router.push(routes.home);
        }, 2000);

        // setCookie("userID", user.id);
      }
    } catch (error) {
      setIsLoginSuccess(false);
      console.log(error);
    }
    setOpen(true);
  };

  const router = useRouter();
  return (
    <Container
      sx={{
        my: 8,
        bgcolor: "primary.main",
        flexDirection: "column",
        ...cssClass.center,
        py: 3,
        borderRadius: 3,
      }}
      maxWidth="sm"
    >
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        {auth.loginPage}
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(handleLogin)}>
        {textFieldItems.map((item, index) => (
          <TextField
            key={index}
            fullWidth
            error={!!errors[item.name as keyof FormData]}
            placeholder={item.placeholder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{item.icon}</InputAdornment>
              ),
            }}
            {...register(item.name as keyof FormData)}
            type={item.type}
            sx={{ mb: 2 }}
            helperText={errors[item.name as keyof FormData]?.message}
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
        <Button onClick={() => router.push(routes.register)} color="secondary">
          {auth.submit}
        </Button>
      </Box>
    </Container>
  );
}

export default LoginComponent;
