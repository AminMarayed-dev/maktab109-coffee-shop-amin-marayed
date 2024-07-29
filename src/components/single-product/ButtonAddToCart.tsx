import { localization } from "@/constant/localization";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const { common } = localization;
function ButtonAddToCart() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(1, prevCount - 1));
  };

  return (
    <Stack direction="row" columnGap={2} alignItems="center" mt={5}>
      <Box
        display="flex"
        alignItems="center"
        border="1px solid #ddd"
        borderRadius="5px"
      >
        <IconButton size="small" onClick={handleIncrement}>
          <AddIcon fontSize="small" />
        </IconButton>

        <Typography
          variant="body1"
          sx={{ minWidth: "20px", textAlign: "center" }}
        >
          {toPersianNumbers(count)}
        </Typography>

        <IconButton size="small" onClick={handleDecrement}>
          <RemoveIcon fontSize="small" />
        </IconButton>
      </Box>
      <Button variant="contained">{common.addProductToBasket}</Button>
    </Stack>
  );
}

export default ButtonAddToCart;
