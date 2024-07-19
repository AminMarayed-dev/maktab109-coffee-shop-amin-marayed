import { styled, Toolbar } from "@mui/material";

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "space-around",
  },
}));

export default ToolbarStyled;
