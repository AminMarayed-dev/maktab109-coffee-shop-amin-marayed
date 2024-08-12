import {
  a11yProps,
  CustomTabPanel,
} from "@/components/dashboard/mobile/CustomTabPanel";
import TableInventory from "@/components/dashboard/shared/table-inventory/TableInventory";
import TableOrders from "@/components/dashboard/shared/table-orders/TableOrders";
import TableProducts from "@/components/dashboard/shared/table-products/TableProducts";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import { Stack, Tab, Tabs, Typography } from "@mui/material";

const tabPanelData = [
  {
    component: <TableProducts />,
  },
  {
    component: <TableInventory />,
  },
  {
    component: <TableOrders />,
  },
];

const { dashboard } = localization;
const { center } = cssClass;

function TabsMobile() {
  const step = useDashboardStore((state) => state.step);
  const setStep = useDashboardStore((state) => state.setStep);
  const handleChangeStep = (event: React.SyntheticEvent, newStep: number) => {
    setStep(newStep);
  };
  return (
    <Stack
      sx={{
        ...center,
        flexDirection: "column",
        gap: 2,
        mb: 3,
        position: "relative",
        padding: 2,
      }}
    >
      <Typography variant="h3" color="secondary">
        {dashboard.adminPanel}
      </Typography>
      <Tabs
        value={step}
        onChange={handleChangeStep}
        textColor="secondary"
        indicatorColor="primary"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Tab label={dashboard.products} {...a11yProps(0)} />
        <Tab label={dashboard.InventoryAndPrices} {...a11yProps(1)} />
        <Tab label={dashboard.orders} {...a11yProps(2)} />
      </Tabs>
      {tabPanelData.map((tabPanel, index) => (
        <CustomTabPanel key={index} value={step} index={index}>
          {tabPanel.component}
        </CustomTabPanel>
      ))}
    </Stack>
  );
}
export default TabsMobile;
