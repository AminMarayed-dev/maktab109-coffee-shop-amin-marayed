import Header from "@/components/layout/root-layout/header/Header";
import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="sm">
      <Header />
      {children}
      <footer>footasfdasdder</footer>
    </Container>
  );
}

export default RootLayout;
