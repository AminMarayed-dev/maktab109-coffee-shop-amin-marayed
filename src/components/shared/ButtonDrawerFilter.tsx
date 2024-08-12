import { localization } from "@/constant/localization";
import useCommonStore from "@/zustand/common/store";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Stack, Typography } from "@mui/material";
const { common } = localization;
function ButtonDrawerFilter() {
  const handleDrawerFilter = useCommonStore(
    (state) => state.handleDrawerFilter
  );
  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={handleDrawerFilter}>
        <MenuIcon />
      </IconButton>
      <Typography variant="body2">{common.showFilter}</Typography>
    </Stack>
  );
}

export default ButtonDrawerFilter;
