import { localization } from "@/constant/localization";

import textFieldItems from "@/components/auth/login/login.data";
import ButtonAuth from "@/components/auth/shared/ButtonAuth";
import { cssClass } from "@/constant/cssClass";
import { routes } from "@/constant/routes";
import useLogin from "@/hooks/auth/login/useLogin";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function LoginComponent() {
  const { auth } = localization;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutateAsync, isPending } = useLogin();

  const handleLogin = async (userData: any) => {
    try {
      const {
        status,
        data: { token },
      } = await mutateAsync(userData);
      if (status === 200) {
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
        {auth.loginPage}
      </Typography>
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(handleLogin)}>
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
        <ButtonAuth loading={isPending} text={auth.login} />
        <Button onClick={() => router.push(routes.register)} color="secondary">
          {auth.submit}
        </Button>
      </Box>
    </Box>
  );
}

export default LoginComponent;