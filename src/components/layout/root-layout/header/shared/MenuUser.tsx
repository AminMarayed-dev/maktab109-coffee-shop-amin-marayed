import useLogout from "@/hooks/dashboard/useLogout";
import useHeaderStore from "@/zustand/root-layout/header/store";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";

const menuItems = ["پیشخوان", "سفارش ها", "خروج"];

function MenuUser() {
  const logout = useLogout();
  const anchorMenu = useHeaderStore((state) => state.anchorMenu);
  const handleCloseMenu = useHeaderStore((state) => state.handleCloseMenu);
  const handleOpenMenu = useHeaderStore((state) => state.handleOpenMenu);
  return (
    <Stack>
      <IconButton size="large" edge="start" onClick={handleOpenMenu}>
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
          <MenuItem
            key={index}
            onClick={() => {
              handleCloseMenu();
              if (item === "خروج") logout();
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
}

export default MenuUser;
