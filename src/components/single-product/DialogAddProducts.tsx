import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useShopStore from "@/zustand/shop/store";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";

const { cart } = localization;
const { center } = cssClass;
function DialogAddProducts() {
  const router = useRouter();
  const openDialog = useShopStore((state) => state.openDialog);
  const handleCloseDialog = useShopStore((state) => state.handleCloseDialog);
  const navigateToCart = () => {
    router.push("/cart");
    handleCloseDialog();
  };
  const nagigateToPayment = () => {
    router.push("/payment");
    handleCloseDialog();
  };
  return (
    <>
      <Dialog
        open={openDialog}
        keepMounted
        sx={{
          "& .MuiDialog-paper": {
            minHeight: 200,
            position: "relative",
          },
        }}
      >
        <DialogTitle mt={5}>{cart.messageAddCartToBasket}</DialogTitle>
        <DialogActions sx={center}>
          <Button onClick={navigateToCart}>{cart.showBasket}</Button>
          <Button onClick={nagigateToPayment}>{cart.continueBuy}</Button>
        </DialogActions>
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </Dialog>
    </>
  );
}

export default DialogAddProducts;
