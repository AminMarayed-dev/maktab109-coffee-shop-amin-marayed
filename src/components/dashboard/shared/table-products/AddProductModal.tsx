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

import ButtonLoading from "@/components/shared/ButtonLoading";
import useAddProducts from "@/hooks/dashboard/useAddProducts";
import useDashboardStore from "@/zustand/dashboard/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SelectFormModal from "./SelectFormModal";
import TextAreaModal from "./TextAreaModal";
import UploadImageModal from "./UploadImageModal";
import { textFieldItems } from "./utils/textFieldItems.data";

const { dashboard } = localization;
function AddProductModal() {
  const [open, setOpen] = useState(false);
  const [isAddSuccess, setIsAddSuccess] = useState(false);
  const { description, categoryID, subCategoryID, images, handleCloseModal } =
    useDashboardStore((state) => ({
      description: state.description,
      categoryID: state.categoryID,
      subCategoryID: state.subCategoryID,
      images: state.images,
      handleCloseModal: state.handleCloseModal,
    }));
  const { mutate: addProductApi, isPending } = useAddProducts();
  const { register, handleSubmit } = useForm();
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
      // direction="row"
      // useFlexGap
      // flexWrap="wrap"
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
            <Grid item lg={5} xs={12}>
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
