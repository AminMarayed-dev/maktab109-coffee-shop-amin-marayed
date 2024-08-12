import { localization } from "@/constant/localization";
import { useCartStore } from "@/zustand/cart/store";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import { useState } from "react";

const { cart, common } = localization;
function DialogDeleteCart({ cartID }: { cartID: string }) {
  const [open, setOpen] = useState(false);
  const openDialog = useCartStore((state) => state.openDialog);

  const handleCloseDialog = useCartStore((state) => state.handleCloseDialog);
  const removeCart = useCartStore((state) => state.removeCart);
  const handleSubmitYes = () => {
    removeCart(cartID);
    handleCloseDialog();
    setOpen(true);
  };
  return (
    <>
      <Dialog open={openDialog} keepMounted>
        <DialogTitle>{cart.questionDeleteCart}</DialogTitle>
        <DialogActions>
          <Button onClick={handleSubmitYes}>{common.yes}</Button>
          <Button onClick={handleCloseDialog}>{common.no}</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          {cart.messageDeleteCart}
        </Alert>
      </Snackbar>
    </>
  );
}

export default DialogDeleteCart;
