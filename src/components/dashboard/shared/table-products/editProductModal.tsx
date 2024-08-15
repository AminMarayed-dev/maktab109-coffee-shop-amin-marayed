import { localization } from "@/constant/localization";
import CancelIcon from "@mui/icons-material/Cancel";
import { Alert, IconButton, Snackbar, Stack, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";

import { convertImagesToFiles } from "@/api/shared/shared.api";
import ButtonLoading from "@/components/shared/ButtonLoading";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import useGetProductById from "@/hooks/dashboard/useGetProductById";
import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import FieldsEditProductsModal from "./FieldsEditProductsModal";

const { dashboard } = localization;
function EditProductModal() {
  const [open, setOpen] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

  const mdDown = useResponsive({ query: "down", breakpoints: "md" });

  const {
    description,
    categoryID,
    subCategoryID,
    images,
    handleCloseModal,
    productID,
    setDescription,
    setImages,
    setCategoryID,
    setSubCategoryID,
  } = useDashboardStore();

  const { data: product } = useGetProductById(productID);

  const { register, handleSubmit, setValue } = useForm({});
  const { mutate: editProductApi, isPending } = useEditProduct();
  const editProduct = (productData: any) => {
    const formData = new FormData();
    formData.append("name", productData.nameProduct);
    formData.append("brand", productData.brand);
    formData.append("description", description);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("category", categoryID);
    formData.append("subcategory", subCategoryID);
    images?.map((i, index) => formData.append("images", i));

    editProductApi(
      { id: product._id, productData: formData },
      {
        onSuccess: (res) => {
          setOpen(true);
          setIsEditSuccess(!!res);
        },
      }
    );
  };

  useEffect(() => {
    if (product) {
      setValue("nameProduct", product.name);
      setValue("quantity", product.quantity);
      setValue("brand", product.brand);
      setValue("price", product.price);
      setDescription(product.description);
      convertImagesToFiles(product.images).then(setImages);
      setCategoryID(product.category._id);
      setSubCategoryID(product.subcategory._id);
    }
  }, [product, setValue]);

  return (
    <Stack
      spacing={{ xs: 2, lg: 1 }}
      component="form"
      onSubmit={handleSubmit(editProduct)}
    >
      <Typography variant="h5">{dashboard.addAndEditProduct}</Typography>
      <IconButton
        onClick={handleCloseModal}
        sx={{ position: "absolute", right: 10, top: mdDown ? 8 : 18 }}
      >
        <CancelIcon />
      </IconButton>
      <FieldsEditProductsModal register={register} images={product?.images} />
      <ButtonLoading text={dashboard.edit} loading={isPending} />
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity={isEditSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {isEditSuccess
            ? dashboard.successEditProduct
            : dashboard.failEditProduct}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default EditProductModal;
