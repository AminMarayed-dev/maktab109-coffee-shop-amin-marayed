import { localization } from "@/constant/localization";
import CancelIcon from "@mui/icons-material/Cancel";
import { Alert, IconButton, Snackbar, Stack, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";

import ButtonLoading from "@/components/shared/ButtonLoading";
import useAddProducts from "@/hooks/dashboard/useAddProducts";
import useDashboardStore from "@/zustand/dashboard/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FieldsAddProductsModal from "./FieldsAddProductsModal";

const { dashboard } = localization;
function AddProductModal() {
  const [open, setOpen] = useState(false);
  const [isAddSuccess, setIsAddSuccess] = useState(false);
  const { description, categoryID, subCategoryID, images, handleCloseModal } =
    useDashboardStore();
  const { register, handleSubmit } = useForm();

  const { mutate: addProductApi, isPending } = useAddProducts();
  const addProducts = (productData: any) => {
    const formData = new FormData();
    formData.append("name", productData.nameProduct);
    formData.append("brand", productData.brand);
    formData.append("description", description);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("category", categoryID);
    formData.append("subcategory", subCategoryID);
    images?.map((i, index) => formData.append("images", i));
    addProductApi(formData, {
      onSuccess: (res) => {
        setOpen(true);
        setIsAddSuccess(!!res);
      },
    });
  };

  return (
    <Stack
      spacing={{ xs: 2, lg: 1 }}
      component="form"
      onSubmit={handleSubmit(addProducts)}
    >
      <Typography variant="h5">{dashboard.addAndEditProduct}</Typography>
      <IconButton
        onClick={handleCloseModal}
        sx={{ position: "absolute", right: 10, top: 8 }}
      >
        <CancelIcon />
      </IconButton>
      <FieldsAddProductsModal register={register} />

      <ButtonLoading text={dashboard.save} loading={isPending} />
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity={isAddSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isAddSuccess
            ? dashboard.successAddProduct
            : dashboard.failAddProduct}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AddProductModal;
