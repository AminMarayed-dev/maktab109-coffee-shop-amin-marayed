import emptyBasket from "@/assets/images/empty-cart.png";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { useCartStore } from "@/zustand/cart/store";
import useHeaderStore from "@/zustand/root-layout/header/store";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import FactorCart from "./FactorCart";
import TableCart from "./TableCart";
const { center } = cssClass;
const { cart } = localization;
function Cart() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const carts = useCartStore((state) => state.cart);
  const router = useRouter();
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  return (
    <Container
      sx={{
        display: "flex",
        columnGap: 3,
        flexDirection: mdDown ? "column" : "row",
        rowGap: mdDown ? 3 : 0,
        minHeight: "50vh", // Full height of the viewport
        justifyContent: carts.length === 0 ? "center" : "flex-start",
        alignItems: carts.length === 0 ? "center" : "flex-start",
      }}
    >
      {carts.length > 0 ? (
        <>
          <TableCart />
          <FactorCart />
        </>
      ) : (
        <Stack justifyContent="center" alignItems="center" rowGap={3}>
          <Box ml={6.6}>
            <Image
              src={emptyBasket}
              width={200}
              height={200}
              alt="empty-cart"
            />
          </Box>

          <Typography variant="h4">{cart.noProduct}</Typography>
          <Button
            onClick={() => {
              router.push("/shop");
              handleCloseDrawer();
            }}
          >
            {cart.backToShop}
          </Button>
        </Stack>
      )}
    </Container>
  );
}

export default Cart;
