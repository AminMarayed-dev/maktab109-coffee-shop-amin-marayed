import { sideBarItems } from "@/components/dashboard/desktop/utils/SideBarItems";
import TableInventory from "@/components/dashboard/shared/table-inventory/TableInventory";
import TableOrders from "@/components/dashboard/shared/table-orders/TableOrders";
import TableProducts from "@/components/dashboard/shared/table-products/TableProducts";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { routes } from "@/constant/routes";
import useLogout from "@/hooks/dashboard/useLogout";
import useDashboardStore from "@/zustand/dashboard/store";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
const {
  dashboard,
  home: { menuList },
  common,
} = localization;
const { styleSidbar, hoverButtonSidebar } = cssClass;

function SideBarDesktop() {
  const router = useRouter();
  const logout = useLogout();
  const selectedTab = useDashboardStore((state) => state.selectedTab);
  const setSelectedTab = useDashboardStore((state) => state.setSelectedTab);
  const handleTabClick = (tab: string) => {
    if (tab !== menuList.home && tab !== common.logout) setSelectedTab(tab);
    else if (tab === menuList.home) router.push(routes.home);
    else {
      logout();
    }
  };
  return (
    <Stack direction="row-reverse" spacing={2} mt={2}>
      <Drawer variant="permanent" sx={styleSidbar}>
        <Typography variant="h5" textAlign={"center"} sx={{ my: 2 }}>
          {dashboard.adminPanel}
        </Typography>
        <Divider sx={{ bgcolor: "primary.main" }} />
        <List>
          {sideBarItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                onClick={() => handleTabClick(item.text)}
                sx={hoverButtonSidebar}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box sx={{ width: "80%" }}>
        {selectedTab === dashboard.products && <TableProducts />}
        {selectedTab === dashboard.InventoryAndPrices && <TableInventory />}
        {selectedTab === dashboard.orders && <TableOrders />}
      </Box>
    </Stack>
  );
}

export default SideBarDesktop;
