import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { useCartStore } from "@/zustand/cart/store";
import useHeaderStore from "@/zustand/root-layout/header/store";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import ButtonDrawerBasket from "./ButtonDrawerBasket";
import CardBasket from "./CardBasket";

const { cart, common } = localization;
const { center, styleDrawerBasket } = cssClass;

function DrawerBasket() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  const carts = useCartStore((state) => state.cart);
  const router = useRouter();

  return (
    <Stack
      sx={{
        mb: 2,
        width: mdDown ? 280 : 350,
        ...(carts.length > 0 && styleDrawerBasket),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6">{cart.basket}</Typography>
        <IconButton onClick={handleCloseDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      {carts.length > 0 ? (
        <>
          <Box sx={{ flex: 1, overflowY: "auto" }}>
            {carts.map((card, index) => (
              <CardBasket key={index} card={card} />
            ))}
          </Box>
          <ButtonDrawerBasket />
        </>
      ) : (
        <Box padding={3} sx={{ ...center, flexDirection: "column", gap: 3 }}>
          <Typography variant="body1">{cart.noProduct}</Typography>
          <Button
            onClick={() => {
              router.push("/shop");
              handleCloseDrawer();
            }}
          >
            {cart.backToShop}
          </Button>
        </Box>
      )}
    </Stack>
  );
}

export default DrawerBasket;
