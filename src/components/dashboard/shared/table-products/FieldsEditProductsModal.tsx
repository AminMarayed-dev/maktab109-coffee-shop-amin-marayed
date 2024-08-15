import ResultEditImage from "@/components/dashboard/shared/table-products/ResultEditImage";
import SelectFormModal from "@/components/dashboard/shared/table-products/SelectFormModal";
import TextAreaModal from "@/components/dashboard/shared/table-products/TextAreaModal";
import UploadImageModal from "@/components/dashboard/shared/table-products/UploadImageModal";
import { textFieldItems } from "@/components/dashboard/shared/table-products/utils/textFieldItems.data";
import { Box, Grid, TextField } from "@mui/material";

function FieldsEditProductsModal({ register, images }) {
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
        <Box sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
          <UploadImageModal />
          <ResultEditImage productImages={images} />
        </Box>
      </Grid>

      <Grid item lg={12} xs={12}>
        <TextAreaModal />
      </Grid>
    </Grid>
  );
}

export default FieldsEditProductsModal;
