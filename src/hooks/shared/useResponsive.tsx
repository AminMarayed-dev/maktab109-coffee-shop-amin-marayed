import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  query: string;
  breakpoints: "xs" | "sm" | "md" | "lg" | "xl";
};

function useResponsive({ query, breakpoints }: Props) {
  const theme = useTheme();
  const mediaUp = useMediaQuery(theme.breakpoints.up(breakpoints));
  const mediaDown = useMediaQuery(theme.breakpoints.down(breakpoints));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(breakpoints));

  if (query === "up") return mediaUp;
  else if (query === "down") return mediaDown;
  else if (query === "only") return mediaOnly;
}

export default useResponsive;
