import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
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
  const setDeliveryStatus = useDashboardStore(
    (state) => state.setDelivaryStatus
  );
  const deliveryStatus = useDashboardStore((state) => state.delivaryStatus);
  const handleDeliveryStatus = (e) => {
    setDeliveryStatus(e.target.value);
  };
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
          defaultValue={deliveryStatus}
          row={!mdDown}
          onChange={(e) => handleDeliveryStatus(e)}
        >
          <FormControlLabel
            value={"false"}
            control={<Radio />}
            label={dashboard.ordersPendingShipment}
          />
          <FormControlLabel
            value={"true"}
            control={<Radio />}
            label={dashboard.deliveredOrders}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioGroupOrders;
