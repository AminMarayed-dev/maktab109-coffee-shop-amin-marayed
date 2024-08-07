import shaparak from "@/assets/images/shaparak-logo.webp";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { useStorage } from "@/hooks/shared/useStorage";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useCartStore } from "@/zustand/cart/store";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { User } from "../payment/FactorPayment";

const { resultPayment, common } = localization;
const { styleCardResultPayment } = cssClass;
function UserCartResultPayment() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [user] = useStorage<User | null>("user", null);

  const carts = useCartStore((state) => state.cart);
  const totalPrice = carts.reduce(
    (acc, cart) => acc + cart.count * cart.price,
    0
  );
  const costTransportation = 300000;
  return (
    <Card
      elevation={0}
      sx={{
        justifyContent: mdDown ? "center" : "space-between",
        ...styleCardResultPayment,
      }}
    >
      <CardMedia>
        <Image src={shaparak} width={150} height={150} alt="shaparak-logo" />
      </CardMedia>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", rowGap: 2.5, mt: 1 }}
      >
        <Stack direction="row" columnGap={2.5} alignItems="center">
          <Typography variant="h6">
            {resultPayment.name}
            {": "}
          </Typography>
          <Typography variant="body2">
            {user?.firstname} {user?.lastname}
          </Typography>
        </Stack>
        <Stack direction="row" columnGap={2.5} alignItems="center">
          <Typography variant="h6">{resultPayment.website}</Typography>
          <Typography variant="body2">{resultPayment.shapark}</Typography>
        </Stack>
        <Stack direction="row" columnGap={2.5} alignItems="center">
          <Typography variant="h6">{resultPayment.code}</Typography>
          <Typography variant="body2">{user?._id}</Typography>
        </Stack>
        <Stack direction="row" columnGap={2.5} alignItems="center">
          <Typography variant="h6">{resultPayment.price}</Typography>
          <Typography variant="body2">
            {toPersianNumbersWithComma(totalPrice + costTransportation)}{" "}
            {common.rial}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default UserCartResultPayment;
