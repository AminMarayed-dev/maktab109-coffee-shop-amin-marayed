import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
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

const { cart } = localization;
const { center } = cssClass;

function DrawerBasket() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  return (
    <Stack sx={{ mb: 2, width: mdDown ? 280 : 350 }}>
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
      <Box padding={3} sx={{ ...center, flexDirection: "column", gap: 3 }}>
        <Typography variant="body1">{cart.noProduct}</Typography>
        <Button>{cart.backToShop}</Button>
      </Box>
    </Stack>
  );
}

export default DrawerBasket;
