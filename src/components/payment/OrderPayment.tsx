import { localization } from "@/constant/localization";
import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { SyntheticEvent, useState } from "react";
import RadioGroupPayment from "./RadioGroupPayment";
import TableOrderPayment from "./TableOrderPayment";

const { payment } = localization;
function OrderPayment() {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setIsChecked(checked);
  };
  const handleSubmitOrder = () => {
    isChecked ? (location.href = "/result-payment") : setOpen(true);
  };
  return (
    <Stack
      padding={2.5}
      rowGap={2}
      bgcolor="primary.dark"
      justifyContent="center"
      borderRadius={3}
      maxWidth={650}
    >
      <Typography variant="h5" textAlign="center">
        {payment.order}
      </Typography>
      <TableOrderPayment />
      <RadioGroupPayment />
      <Divider />
      <Typography variant="body1">{payment.warningMessage}</Typography>
      <Divider />
      <FormControlLabel
        onChange={handleCheckboxChange}
        control={<Checkbox />}
        label={payment.messageCheckBox}
      />
      <Button onClick={handleSubmitOrder}>{payment.submitOrder}</Button>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          {payment.warningTickMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default OrderPayment;
