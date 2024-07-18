import { Button, styled } from "@mui/material";

const ResponsiveButton = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: "44px",
    top: "0",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

function ButtonActionTable({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <ResponsiveButton>
      <Button
        sx={{
          bgcolor: "secondary.dark",
          color: "primary.main",
        }}
        fullWidth
        onClick={onClick}
      >
        {text}
      </Button>
    </ResponsiveButton>
  );
}

export default ButtonActionTable;
