import useLogout from "@/hooks/dashboard/useLogout";
import { useStorage } from "@/hooks/shared/useStorage";
import useHeaderStore from "@/zustand/root-layout/header/store";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

const menuItems = [
  { label: "پیشخوان", icon: <DashboardIcon /> },
  { label: "سفارش ها", icon: <ShoppingBagIcon /> },
  { label: "خروج", icon: <ExitToAppIcon /> },
];

function MenuUser() {
  const [user] = useStorage<any>("user", null);
  const logout = useLogout();
  const anchorMenu = useHeaderStore((state) => state.anchorMenu);
  const handleCloseMenu = useHeaderStore((state) => state.handleCloseMenu);
  const handleOpenMenu = useHeaderStore((state) => state.handleOpenMenu);
  return (
    <Stack>
      <IconButton
        size="large"
        edge="start"
        onClick={handleOpenMenu}
        sx={{ color: "#000" }}
      >
        <PersonIcon />
      </IconButton>
      <Menu
        open={!!anchorMenu}
        anchorEl={anchorMenu}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{
          style: {
            width: 200, // adjust the width to your desired value
          },
        }}
      >
        <>
          <Typography sx={{ p: 1 }} textAlign="center">
            {user.firstname} {user.lastname}
          </Typography>
          <Divider />
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleCloseMenu();
                if (item.label === "خروج") logout();
              }}
            >
              <ListItemIcon sx={{ color: "#000" }}>{item.icon}</ListItemIcon>
              {item.label}
            </MenuItem>
          ))}
        </>
      </Menu>
    </Stack>
  );
}

export default MenuUser;
