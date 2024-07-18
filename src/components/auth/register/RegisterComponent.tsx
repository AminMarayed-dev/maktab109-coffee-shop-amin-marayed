import textFieldItems from "@/components/auth/register/register.data";
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { routes } from "@/constant/routes";
import useRegister from "@/hooks/auth/register/useRegister";
import { FormData } from "@/types/auth/register/register.type";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerValidationSchema } from "../validation/auth.valiation";

function RegisterComponent() {
  const [open, setOpen] = useState(false);
  const [isRegisterSuccess, setIsRegisterSucces] = useState(false);
  const { auth } = localization;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(registerValidationSchema) });
  const { mutateAsync, isPending } = useRegister();
  const handleRegister = async (userData: FormData) => {
    try {
      const {
        status,
        data: { token },
      } = await mutateAsync(userData);

      if (status === 201) {
        setIsRegisterSucces(true);
        setCookie("accessToken", token.accessToken);
        setCookie("refreshToken", token.refreshToken);
      }
    } catch (error) {
      setIsRegisterSucces(false);
      console.log(error);
    }
    setOpen(true);
  };
  const router = useRouter();

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        flexDirection: "column",
        ...cssClass.center,
      }}
    >
      <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
        {auth.submitPage}
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(handleRegister)}
      >
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

        <Button onClick={() => router.push(routes.login)}>{auth.login}</Button>
      </Box>
    </Box>
  );
}

export default RegisterComponent;
