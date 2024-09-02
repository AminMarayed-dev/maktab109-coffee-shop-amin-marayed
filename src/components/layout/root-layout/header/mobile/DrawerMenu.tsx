import menuItems from "@/components/layout/root-layout/header/utils/menu.data";
import { localization } from "@/constant/localization";
import useHeaderStore from "@/zustand/root-layout/header/store";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Collapse, Divider, List, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { home: menuList } = localization;
function DrawerMenu() {
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});
  const persistMenuItems =
    getCookie("accessToken") && menuItems.slice(0, menuItems.length - 1);

  const handleOpen = (index: number) => {
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
              else if (menuItem.category === "خانه") {
                router.push("/");
                handleCloseDrawer();
              } else {
                if (menuItem.items) {
                  router.push(`/product-category/${menuItem.slug}`);
                } else {
                  handleOpen(index);
                }
                handleCloseDrawer();
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
              {menuItem.icon && <menuItem.icon sx={{ fill: "black" }} />}
            </ListItemIcon>
            <ListItemText primary={menuItem.category} />
            {menuItem.isChevron && menuItem.items ? (
              <ListItemIcon
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(index);
                }}
                sx={{
                  minWidth: 0,
                  bgcolor: "rgb(75, 54, 33)",
                  borderRadius: "5px",
                  transition: "transform 0.3s ease",
                  transform: openItems[index]
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <KeyboardArrowDownIcon sx={{ fill: "#fff" }} />
              </ListItemIcon>
            ) : null}
          </ListItemButton>
          <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuItem?.items?.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => {
                      router.push(
                        `/product-category/${menuItem.slug}/${item.slug}`
                      );
                      handleCloseDrawer();
                    }}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                  {itemIndex < menuItem.items.length - 1 && <Divider />}
                </div>
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
