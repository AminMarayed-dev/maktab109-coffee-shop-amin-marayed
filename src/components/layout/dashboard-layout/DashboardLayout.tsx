import Header from "@/components/layout/dashboard-layout/header/Header";
import useResponsive from "@/hooks/shared/useResponsive";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Stack sx={{ bgcolor: "secondary.light", minHeight: "100vh" }}>
      {mdDown && <Header />}
      {children}
    </Stack>
  );
}

export default DashboardLayout;
