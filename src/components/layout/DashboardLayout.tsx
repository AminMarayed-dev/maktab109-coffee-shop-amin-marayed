import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Header from "./dashboard-layout/header/Header";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack sx={{ bgcolor: "secondary.light", minHeight: "100vh" }}>
      <Header />
      {children}
    </Stack>
  );
}

export default DashboardLayout;
