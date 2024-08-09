import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useCartStore } from "@/zustand/cart/store";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function CountBox({ product }: { product: any }) {
  const router = useRouter();
  const count = useCartStore((state) => state.productCounts[product._id] || 1);
  const setCount = useCartStore((state) => state.setCount);
  const setCountAndTotal = useCartStore((state) => state.setCountAndTotal);
  const cart = useCartStore((state) => state.cart);
  const handleOpenDialog = useCartStore((state) => state.handleOpenDialog);

  useEffect(() => {
    if (router.pathname === "/cart") {
      const cartItem = cart.find((item) => item._id === product._id);
      if (cartItem && cartItem.count !== count) {
        setCount(product._id, cartItem.count);
      }
    }
  }, [cart, count, product._id, router.pathname, setCount]);

  const handleIncrement = () => {
    if (count < product.quantity) {
      if (router.pathname === "/cart") {
        setCountAndTotal(product._id, count + 1);
      } else {
        setCount(product._id, count + 1);
      }
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      if (router.pathname === "/cart") {
        setCountAndTotal(product._id, count - 1);
      } else {
        setCount(product._id, count - 1);
      }
    } else {
      handleOpenDialog();
    }
  };
  const displayCount =
    router.pathname === "/cart"
      ? cart.find((item) => item._id === product._id)?.count || count
      : count;

  return (
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
        {toPersianNumbers(displayCount)}
      </Typography>

      <IconButton size="small" onClick={handleDecrement}>
        <RemoveIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default CountBox;
