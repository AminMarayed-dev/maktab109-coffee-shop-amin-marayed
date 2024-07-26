import Header from "@/components/layout/root-layout/header/Header";
import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import Footer from "./footer/Footer";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <Stack rowGap={5}>
      <Header />
      {children}
      <Footer />
    </Stack>
  );
}

export default RootLayout;
