import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { a11yProps, CustomTabPanel } from "./CustomTabPanel";
import TableInventory from "./TableInventory";
import TableOrders from "./TableOrders";
import TableProducts from "./TableProducts";

function Dashboard() {
  const { dashboard } = localization;
  const { center } = cssClass;
  const [value, setValue] = useState(0);
  const handleChangeValue = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  return (
    <Box sx={{ ...center, flexDirection: "column", gap: 2, mb: 3 }}>
      <Typography variant="h3" color="secondary">
        {dashboard.adminPanel}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChangeValue}
        textColor="secondary"
        indicatorColor="primary"
      >
        <Tab label={dashboard.products} {...a11yProps(0)} />
        <Tab label={dashboard.InventoryAndPrices} {...a11yProps(1)} />
        <Tab label={dashboard.orders} {...a11yProps(2)} />
      </Tabs>
      {tabPanelData.map((tabPanel, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tabPanel.component}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default Dashboard;
