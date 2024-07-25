import { localization } from "@/constant/localization";
import useDeleteProduct from "@/hooks/dashboard/useDeleteProduct";
import useDashboardStore from "@/zustand/dashboard/store";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Snackbar,
} from "@mui/material";
import { useState } from "react";

const { dashboard, common } = localization;
function DeleteDialogProduct() {
  const [open, setOpen] = useState(false);
  const openDialog = useDashboardStore((state) => state.openDialogDelete);
  const handleCloseDialog = useDashboardStore(
    (state) => state.handleCloseDialogDelete
  );
  const productID = useDashboardStore((state) => state.productID);
  const { mutate: deleteProduct } = useDeleteProduct();

  const handleSubmitYes = () => {
    deleteProduct(productID);
    handleCloseDialog();
    setOpen(true);
  };
  return (
    <>
      <Dialog open={openDialog} keepMounted>
        <DialogTitle>{dashboard.questionDeleteProduct}</DialogTitle>
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
          {dashboard.deleteProduct}
        </Alert>
      </Snackbar>
    </>
  );
}

export default DeleteDialogProduct;
