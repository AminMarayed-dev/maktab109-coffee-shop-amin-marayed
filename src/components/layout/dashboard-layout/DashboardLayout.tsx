import Header from "@/components/layout/dashboard-layout/header/Header";
import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <Container sx={{ bgcolor: "secondary.light", minHeight: "100vh" }}>
      <Header />
      {children}
    </Container>
  );
}

export default DashboardLayout;
