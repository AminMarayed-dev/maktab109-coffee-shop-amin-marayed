import SelectFormModal from "@/components/dashboard/shared/table-products/SelectFormModal";
import TextAreaModal from "@/components/dashboard/shared/table-products/TextAreaModal";
import UploadImageModal from "@/components/dashboard/shared/table-products/UploadImageModal";
import { textFieldItems } from "@/components/dashboard/shared/table-products/utils/textFieldItems.data";
import useResponsive from "@/hooks/shared/useResponsive";
import truncateText from "@/utils/trancateText";
import useDashboardStore from "@/zustand/dashboard/store";
import { Chip, Grid, Stack, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface ProductFormData {
  nameProduct: string;
  brand: string;
  price: number;
  quantity: number;
}

interface FieldsAddProductsModalProps {
  register: UseFormRegister<ProductFormData>;
}

function FieldsAddProductsModal({ register }: FieldsAddProductsModalProps) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const { images, removeImage } = useDashboardStore();
  return (
    <Grid
      container
      xs={12}
      lg={12}
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
        <Stack direction="row" spacing={2} alignItems="center">
          <UploadImageModal />
          {images.length > 0 &&
            images.map((image, index) => (
              <Chip
                key={index}
                label={
                  mdDown
                    ? truncateText(image.name, 4)
                    : truncateText(image.name, 8)
                }
                onDelete={() => removeImage(image.name)}
              />
            ))}
        </Stack>
      </Grid>
      <Grid item lg={12} xs={12}>
        <TextAreaModal />
      </Grid>
    </Grid>
  );
}

export default FieldsAddProductsModal;
