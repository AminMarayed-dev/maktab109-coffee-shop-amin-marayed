import { cssClass } from "@/constant/cssClass";
import useHeaderStore from "@/zustand/root-layout/header/store";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";

const menuItems = ["پیشخوان", "سفارش ها", "خروج"];

const { onlyMobile } = cssClass;
function MenuAdminUser() {
  const anchorMenu = useHeaderStore((state) => state.anchorMenu);
  const handleCloseMenu = useHeaderStore((state) => state.handleCloseMenu);
  const handleOpenMenu = useHeaderStore((state) => state.handleOpenMenu);
  return (
    <Stack>
      <IconButton
        size="large"
        edge="start"
        sx={{ ...onlyMobile, mt: 1 }}
        onClick={handleOpenMenu}
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
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}

export default MenuAdminUser;
