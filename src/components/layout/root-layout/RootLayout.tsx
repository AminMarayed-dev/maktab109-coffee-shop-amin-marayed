import Header from "@/components/layout/root-layout/header/Header";
import { Container, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <Stack rowGap={5}>
      <Header />
      {children}
      <footer>footasfdasdder</footer>
    </Stack>
  );
}

export default RootLayout;
