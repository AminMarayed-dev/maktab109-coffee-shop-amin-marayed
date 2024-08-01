import { cssClass } from "@/constant/cssClass";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { localization } from "@/constant/localization";
import useHeaderStore from "@/zustand/root-layout/header/store";
import useCommonStore from "@/zustand/common/store";
const { center, styleButtonLink } = cssClass;
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
