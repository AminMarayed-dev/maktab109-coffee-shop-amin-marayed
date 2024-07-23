import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const { center } = cssClass;
const { dashboard, common } = localization;

function RadioGroupOrders() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Box
      sx={{
        ...center,
        flexDirection: mdDown ? "column" : "row",
        mb: 4,
        gap: 3,
      }}
    >
      <Typography variant="h4">
        {dashboard.table} {dashboard.orders}
      </Typography>
      <FormControl>
        <RadioGroup
          name="orders"
          defaultValue={dashboard.deliveredOrders}
          row={!mdDown}
        >
          <FormControlLabel
            value={dashboard.deliveredOrders}
            control={<Radio />}
            label={dashboard.deliveredOrders}
          />
          <FormControlLabel
            value={dashboard.ordersPendingShipment}
            control={<Radio />}
            label={dashboard.ordersPendingShipment}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioGroupOrders;
