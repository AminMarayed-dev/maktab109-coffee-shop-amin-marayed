import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useCartStore } from "@/zustand/cart/store";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

const { cart, common } = localization;
function FactorCart() {
  const router = useRouter();

  const carts = useCartStore((state) => state.cart);
  const totalPrice = carts.reduce(
    (acc, cart) => acc + cart.count * cart.price,
    0
  );
  const costTransportation = 300000;
  return (
    <Card
      elevation={0}
      sx={{ border: "2px solid #9ca3af", padding: 1.5, minWidth: 380 }}
    >
      <CardContent>
        <Typography variant="h5" mb={2.5}>
          {cart.totalBasketCart}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          padding={2}
        >
          <Typography variant="body1">{cart.total}</Typography>
          <Typography variant="body2">
            {toPersianNumbersWithComma(totalPrice)} {common.rial}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          padding={2}
        >
          <Typography variant="body1">{cart.transport}</Typography>
          <Typography variant="body2" textAlign={"right"}>
            {cart.messageTransportation}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          padding={2}
        >
          <Typography variant="h6">
            {toPersianNumbersWithComma(cart.totalPrice)}
          </Typography>
          <Typography variant="h5">
            {toPersianNumbersWithComma(totalPrice + costTransportation)}{" "}
            {common.rial}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={() => router.push("/payment")}>
          {cart.continuePayment}
        </Button>
      </CardActions>
    </Card>
  );
}

export default FactorCart;
