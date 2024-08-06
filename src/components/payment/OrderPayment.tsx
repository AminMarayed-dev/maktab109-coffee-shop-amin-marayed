import { localization } from "@/constant/localization";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import RadioGroupPayment from "./RadioGroupPayment";
import TableOrderPayment from "./TableOrderPayment";

const { payment } = localization;
function OrderPayment() {
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
        control={<Checkbox />}
        label={payment.messageCheckBox}
      />
      <Button onClick={() => (location.href = "/result-payment")}>
        {payment.submitOrder}
      </Button>
    </Stack>
  );
}

export default OrderPayment;
