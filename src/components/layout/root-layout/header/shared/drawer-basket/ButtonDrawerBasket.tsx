import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useCartStore } from "@/zustand/cart/store";
import useHeaderStore from "@/zustand/root-layout/header/store";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
const { cart, common } = localization;
function ButtonDrawerBasket() {
  const router = useRouter();
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  const carts = useCartStore((state) => state.cart);
  const totalPrice = carts.reduce(
    (acc, cart) => acc + cart.price * cart.count,
    0
  );
  return (
    <Stack padding={1} rowGap={2} borderTop={2}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="secondary.dark">
          {cart.total}
        </Typography>
        <Typography variant="body1" color="secondary.dark">
          {toPersianNumbersWithComma(totalPrice)} {common.rial}
        </Typography>
      </Box>

      <Button
        sx={{ color: "primary.main" }}
        onClick={() => {
          router.push("/cart");
          handleCloseDrawer();
        }}
      >
        {cart.showBasket}
      </Button>
      <Button
        onClick={() => {
          router.push("/payment");
          handleCloseDrawer();
        }}
      >
        {cart.payment}
      </Button>
    </Stack>
  );
}

export default ButtonDrawerBasket;
