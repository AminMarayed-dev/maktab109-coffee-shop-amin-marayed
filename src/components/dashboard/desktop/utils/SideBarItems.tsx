import { localization } from "@/constant/localization";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const {
  dashboard,
  common,
  home: { menuList },
} = localization;

export const sideBarItems = [
  {
    text: menuList.home,
    icon: <HomeIcon />,
  },
  {
    text: dashboard.products,
    icon: <CategoryIcon />,
  },
  {
    text: dashboard.InventoryAndPrices,
    icon: <InventoryIcon />,
  },
  {
    text: dashboard.orders,
    icon: <ShoppingCartIcon />,
  },
  {
    text: common.logout,
    icon: <LogoutIcon />,
  },
];
