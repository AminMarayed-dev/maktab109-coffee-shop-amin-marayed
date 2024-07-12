import ThemeContextProvider from "@/context/ThemeContextProvider";
import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}
