import { Button, styled } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

const ResponsiveButton = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: "44px",
    top: "15px",
    width: "15%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

interface ButtonActionTableProps {
  text: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

function ButtonActionTable({
  text,
  onClick,
  sx,
  ...rest
}: ButtonActionTableProps) {
  return (
    <ResponsiveButton>
      <Button
        sx={{
          bgcolor: "secondary.dark",
          color: "primary.main",
          ...sx,
        }}
        fullWidth
        onClick={onClick}
        {...rest}
      >
        {text}
      </Button>
    </ResponsiveButton>
  );
}

export default ButtonActionTable;
