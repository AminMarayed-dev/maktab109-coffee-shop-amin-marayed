import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import { Box, Stack, Typography } from "@mui/material";

type TypeModalOrdersFactor = {
  createdAt: string;
  deliveryDate: string;
  user: {
    firstname: string;
    lastname: string;
    address: string;
    phoneNumber: string;
  };
};

const { center } = cssClass;
const { dashboard } = localization;
function ModalOrdersFactor({ userData }: { userData: TypeModalOrdersFactor }) {
  return (
    <Box sx={{ ...center, flexDirection: "column", rowGap: 2 }}>
      <Stack direction="row" columnGap={2} alignItems="center">
        <Typography variant="body1">
          {dashboard.customer}
          {":"}
        </Typography>
        <Typography variant="body2">
          {userData?.user.firstname} {userData?.user.lastname}
        </Typography>
      </Stack>
      <Stack direction="row" columnGap={2} alignItems="center">
        <Typography variant="body1">
          {dashboard.address}
          {":"}
        </Typography>
        <Typography variant="body2">{userData?.user.address}</Typography>
      </Stack>
      <Stack direction="row" columnGap={2} alignItems="center">
        <Typography variant="body1">
          {dashboard.mobile}
          {":"}
        </Typography>
        <Typography variant="body2">{userData?.user.phoneNumber}</Typography>
      </Stack>
      <Stack direction="row" columnGap={2} alignItems="center">
        <Typography variant="body1">
          {dashboard.delivaryDate}
          {":"}
        </Typography>
        <Typography variant="body2">
          {toLocalDateStringShort(userData?.deliveryDate)}
        </Typography>
      </Stack>
      <Stack direction="row" columnGap={2} alignItems="center">
        <Typography variant="body1">
          {dashboard.createdDate}
          {":"}
        </Typography>
        <Typography variant="body2">
          {toLocalDateStringShort(userData?.createdAt)}
        </Typography>
      </Stack>
    </Box>
  );
}

export default ModalOrdersFactor;
