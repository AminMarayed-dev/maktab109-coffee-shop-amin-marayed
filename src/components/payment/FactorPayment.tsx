import { localization } from "@/constant/localization";
import { useStorage } from "@/hooks/shared/useStorage";
import { Box, Stack, TextField, Typography } from "@mui/material";
import InputPayment from "./InputPayment";
import SelectPayment from "./SelectPayment";
import { cities, textFieldItems } from "./utils/cities.data";

export interface User {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  _id: string;
}

const { payment, auth } = localization;
function FactorPayment() {
  const [user] = useStorage<User | null>("user", null);
  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Stack rowGap={4}>
      <Typography variant="h5">{payment.factorPayment}</Typography>
      <Box
        component="form"
        sx={{
          mt: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Stack direction="row" spacing={2}>
          <InputPayment
            label={auth.firstname}
            disabled={true}
            value={user.firstname}
          />
          <InputPayment
            label={auth.lastname}
            disabled={true}
            value={user.lastname}
          />
        </Stack>
        <SelectPayment
          label={payment.state}
          placeholder={payment.placeholderState}
          menuList={cities}
        />
        {textFieldItems.map((item, index) => (
          <InputPayment
            key={index}
            label={item.label}
            disabled={item.disabled}
            placeholder={item.placeholder}
          />
        ))}
        <InputPayment
          label={auth.phoneNumber}
          disabled={true}
          value={user.phoneNumber}
        />
        <Stack rowGap={1}>
          <Typography>{payment.orderNotes}</Typography>
          <TextField
            placeholder={payment.placeholderOrderNotes}
            multiline
            rows={8}
            maxRows={4}
          />
        </Stack>
      </Box>
    </Stack>
  );
}

export default FactorPayment;
