import { localization } from "@/constant/localization";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Rating, Stack, Typography } from "@mui/material";
const { shop } = localization;
function CheckQuantityAndRate({ rate }: { rate: number }) {
  return (
    <Stack justifyContent="center" alignItems="center" mt={2} mb={2}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckIcon color="secondary" />
        <Typography variant="body2">{shop.available}</Typography>
      </Box>
      <Rating name="read-only" value={rate} readOnly />
    </Stack>
  );
}

export default CheckQuantityAndRate;
