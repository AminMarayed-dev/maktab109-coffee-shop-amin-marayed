import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import backgroundAuth from "../../../../public/background-auth.jpg";

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Stack
      sx={{
        backgroundImage: `url(/background-auth.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      padding={3}
    >
      {children}
    </Stack>
  );
}

export default AuthLayout;
