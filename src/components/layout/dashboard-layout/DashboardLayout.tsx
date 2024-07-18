import Header from "@/components/layout/dashboard-layout/header/Header";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Stack sx={{ bgcolor: "secondary.light", minHeight: "100vh" }}>
      <Header />
      {children}
    </Stack>
  );
}

export default DashboardLayout;
