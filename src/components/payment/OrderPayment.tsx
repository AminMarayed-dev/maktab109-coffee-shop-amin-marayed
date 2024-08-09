import { localization } from "@/constant/localization";
import "@/styles/datepicker.module.css";
import usePaymentStore from "@/zustand/payment/store";
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
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { DateObject } from "react-multi-date-picker";
import InputIcon from "react-multi-date-picker/components/input_icon";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import RadioGroupPayment from "./RadioGroupPayment";
import TableOrderPayment from "./TableOrderPayment";
const { payment } = localization;
function OrderPayment() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const setValueDataPicker = usePaymentStore(
    (state) => state.setValueDatePicker
  );
  const valueDatePicker = usePaymentStore((state) => state.valueDatePicker);
  const handleCheckboxChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setIsChecked(checked);
  };

  const handleDateChange = (date) => {
    setValueDataPicker(new Date(date).toISOString());
  };
  const handleSubmitOrder = () => {
    isChecked ? router.push("/result-payment") : setOpen(true);
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">
          {payment.delivaryDate}
          {":"}
        </Typography>
        <DatePicker
          monthYearSeparator="|"
          render={<InputIcon />}
          calendar={persian}
          locale={persian_fa}
          minDate={new DateObject({ calendar: persian }).set(
            "valueDatePicker",
            1
          )}
          calendarPosition="bottom-center"
          showOtherDays
          value={valueDatePicker}
          onChange={handleDateChange}
          plugins={[weekends()]}
        />
      </Stack>

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
