import menuItems from "@/components/layout/root-layout/header/utils/menu.data";
import { localization } from "@/constant/localization";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Collapse, Divider, List, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

// need refactor
function DrawerMenu() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const persistMenuItems =
    getCookie("accessToken") && menuItems.slice(0, menuItems.length - 1);

  const handleOpen: (index: number) => void = (index) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [index]: !prevOpenItems[index],
    }));
  };
  const router = useRouter();
  return (
    <Box sx={{ mb: 2, width: 250 }}>
      {(persistMenuItems || menuItems).map((menuItem, index) => (
        <List key={index} sx={{ paddingTop: 0, paddingBottom: 0 }}>
          <ListItemButton
            onClick={() => {
              if (menuItem.icon) router.push("/auth/login");
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
              {menuItem.icon && <menuItem.icon />}
            </ListItemIcon>
            <ListItemText primary={menuItem.category} />
            {menuItem.isChevron ? (
              <ListItemIcon
                onClick={() => {
                  handleOpen(index);
                }}
                sx={{ minWidth: 0 }}
              >
                {openItems[index] ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowLeftIcon />
                )}
              </ListItemIcon>
            ) : (
              ""
            )}
          </ListItemButton>
          <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem?.items.map((item, itemIndex) => (
                <>
                  <ListItemButton sx={{ pl: 4 }} key={itemIndex}>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                  {itemIndex < menuItem.items.length - 1 && <Divider />}
                </>
              ))}
            </List>
          </Collapse>
          <Divider />
        </List>
      ))}
    </Box>
  );
}

export default DrawerMenu;
