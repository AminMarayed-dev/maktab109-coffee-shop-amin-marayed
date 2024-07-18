import { localization } from "@/constant/localization";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton, Stack, TextField, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import SelectFormModal from "./SelectFormModal";
import TextAreaModal from "./TextAreaModal";
import { textFieldItems } from "./utils/textFieldItems.data";

function FormModal({ onClose }) {
  const {
    dashboard,
    common,
    home: { menuList },
  } = localization;

  return (
    <Stack spacing={{ xs: 2 }} component="form">
      <Typography variant="h5">{dashboard.addAndEditProduct}</Typography>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 10, top: 8 }}
      >
        <CancelIcon />
      </IconButton>
      {textFieldItems.map((item, index) => (
        <TextField key={index} placeholder={item.placeholder} />
      ))}
      <SelectFormModal />
      <TextAreaModal />
    </Stack>
  );
}

export default FormModal;
