import { localization } from "@/constant/localization";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Alert,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "react-quill/dist/quill.snow.css";

import { convertImagesToFiles } from "@/api/shared/shared.api";
import ButtonLoading from "@/components/shared/ButtonLoading";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import useGetProductById from "@/hooks/dashboard/useGetProductById";
import useDashboardStore from "@/zustand/dashboard/store";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SelectFormModal from "./SelectFormModal";
import TextAreaModal from "./TextAreaModal";
import UploadImageModal from "./UploadImageModal";
import { textFieldItems } from "./utils/textFieldItems.data";

const { dashboard } = localization;
function EditProductModal() {
  const [open, setOpen] = useState(false);
  const [isEditSuccess, setIsEditSuccess] = useState(false);

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
  } = useDashboardStore((state) => ({
    description: state.description,
    categoryID: state.categoryID,
    subCategoryID: state.subCategoryID,
    images: state.images,
    handleCloseModal: state.handleCloseModal,
    productID: state.productID,
    setDescription: state.setDescription,
    setImages: state.setImages,
    setCategoryID: state.setCategoryID,
    setSubCategoryID: state.setSubCategoryID,
  }));

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
        sx={{ position: "absolute", right: 10, top: 8 }}
      >
        <CancelIcon />
      </IconButton>
      <Grid
        container
        xs={12}
        lg={12}
        // spacing={{ xs: 0, lg: 2 }}
        gap={{ xs: 2, lg: 2 }}
        justifyContent="center"
      >
        {textFieldItems.map((item, index) => {
          return (
            <Grid key={index} item lg={5} xs={12}>
              <TextField
                type={`${item.name === "quantity" ? "number" : "text"}`}
                key={index}
                fullWidth
                placeholder={item.placeholder}
                {...register(item.name)}
              />
            </Grid>
          );
        })}
        <Grid item lg={10.26} xs={12}>
          <SelectFormModal />
        </Grid>
        <Grid item lg={12} xs={12}>
          <UploadImageModal />
        </Grid>

        <Grid item lg={12} xs={12}>
          <TextAreaModal />
        </Grid>
      </Grid>
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
