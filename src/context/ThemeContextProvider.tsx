import theme from "@/theme/theme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import "@fontsource/vazirmatn";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

type Props = {
  children: ReactNode;
};
function ThemeContextProvider({ children }: Props) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}

export default ThemeContextProvider;
