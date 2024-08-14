import ButtonLoading from "@/components/shared/ButtonLoading";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import useCommonStore from "@/zustand/common/store";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

const {
  common,
  home: { menuList },
} = localization;
function DrawerFilter({slugname} : {slugname:string}) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleCloseDrawerFilter = useCommonStore(
    (state) => state.handleCloseDrawerFilter
  );
  return (
    <Stack sx={{ mb: 2, width: mdDown ? 280 : 350 }} px={2}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h6">{common.pageFilter}</Typography>
        <IconButton onClick={handleCloseDrawerFilter}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box padding={2.5}>
        <Typography>
          {common.filterCategory}
          {": "}
        </Typography>
        <FormGroup sx={{ ml: 3, mt: 2 }}>
          <FormControlLabel
            control={<Checkbox />}
            label={menuList.marayedCoffee}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={menuList.InstantCoffee}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={menuList.foreignCoffee}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={menuList.accessories}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={menuList.coffeeMakers}
          />
        </FormGroup>
      </Box>
      <Divider />
      <ButtonLoading text={common.submitFilter} loading={false} />
    </Stack>
  );
}

export default DrawerFilter;
