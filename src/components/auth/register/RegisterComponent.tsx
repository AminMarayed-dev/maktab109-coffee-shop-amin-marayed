import logo from "@/assets/images/marayedcoffee-high-resolution-logo.png";
import textFieldItems from "@/components/auth/register/utils/register.data";
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { routes } from "@/constant/routes";
import useRegister from "@/hooks/auth/register/useRegister";
import { IUserDataRegister } from "@/types/auth/register/register.type";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerValidationSchema } from "@/components/auth/validation/auth.valiation";
import { Token } from "@/types/auth/login/login.type";
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
import { setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const { auth } = localization;
const { styleContainerAuth, styleLinkAuth } = cssClass;

function RegisterComponent() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isRegisterSuccess, setIsRegisterSucces] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataRegister>({
    resolver: yupResolver(registerValidationSchema),
  });
  const { mutateAsync, isPending } = useRegister();
  const handleRegister = async (userData: IUserDataRegister) => {
    try {
      const {
        status,
        data: { token },
      } = (await mutateAsync(userData)) as AxiosResponse<{
        token: Token;
      }>;

      if (status === 201) {
        setIsRegisterSucces(true);
        setCookie("accessToken", token.accessToken);
        setCookie("refreshToken", token.refreshToken);
        setTimeout(() => {
          router.push(routes.login);
        }, 2000);
      }
    } catch (error) {
      setIsRegisterSucces(false);
      throw error;
    }
    setOpen(true);
  };

  return (
    <Container sx={styleContainerAuth} maxWidth="sm">
      <Box sx={{ transform: "scale(1.4)", display: "inline-block" }}>
        <Image src={logo} alt="Logo" width={80} height={80} />
      </Box>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(handleRegister)}
      >
        {textFieldItems.map((item, index) => (
          <TextField
            key={index}
            fullWidth
            error={!!errors[item.name as keyof IUserDataRegister]}
            placeholder={item.placeholder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{item.icon}</InputAdornment>
              ),
            }}
            {...register(item.name as keyof IUserDataRegister)}
            type={item.type}
            sx={{ mb: 2 }}
            helperText={errors[item.name as keyof IUserDataRegister]?.message}
          />
        ))}
        <ButtonAuth loading={isPending} text={auth.submit} />
        <Snackbar
          open={open}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity={isRegisterSuccess ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {isRegisterSuccess ? auth.registerSuccess : auth.registerFail}
          </Alert>
        </Snackbar>

        <Button onClick={() => router.push(routes.login)} sx={styleLinkAuth}>
          {auth.login}
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterComponent;
