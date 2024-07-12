import { cssClass } from "@/constant/cssClass";

import { routes } from "@/constant/routes";

import useRegister from "@/hooks/auth/register/useRegister";
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
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { localization } from "@/constant/localization";
import textFieldItems from "@/components/auth/register/register.data";

function RegisterComponent() {
  const [open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { auth } = localization;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending } = useRegister();
  const handleRegister = async (userData: any) => {
    try {
      const {
        status,
        data: { token },
      } = await mutateAsync(userData);
      setOpen(true);
      if (status === 201) {
        setIsRegister(true);
        setCookie("accessToken", token.accessToken);
        setCookie("refreshToken", token.refreshToken);
      }
    } catch (error) {
      console.log(error);
    }
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
            // error={isError}
            placeholder={item.placeholder}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{item.icon}</InputAdornment>
              ),
            }}
            {...register(item.name)}
            type={item.type}
            sx={{ mb: 2 }}
            // helperText={errors[item.name]?.message}
          />
        ))}
        <ButtonAuth loading={isPending} text={auth.submit} />
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity={isRegister ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {isRegister ? "ورود موفقیت آمیز" : "ورود ناموفق"}
          </Alert>
        </Snackbar>

        <Button onClick={() => router.push(routes.login)}>{auth.login}</Button>
      </Box>
    </Box>
  );
}

export default RegisterComponent;
