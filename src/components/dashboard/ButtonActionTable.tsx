import { Button } from "@mui/material";

function ButtonActionTable({ text }: { text: string }) {
  return (
    <Button sx={{ bgcolor: "secondary.dark", color: "primary.main" }} fullWidth>
      {text}
    </Button>
  );
}

export default ButtonActionTable;
