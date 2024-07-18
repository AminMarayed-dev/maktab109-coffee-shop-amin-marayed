import TableProducts from "@/components/dashboard/table-products/TableProducts";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { Container, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { a11yProps, CustomTabPanel } from "./CustomTabPanel";
import TableInventory from "./TableInventory";
import TableOrders from "./TableOrders";

function Dashboard() {
  const { dashboard } = localization;
  const { center } = cssClass;
  const matchesMdDown = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
    <Container
      sx={{
        ...center,
        flexDirection: matchesMdDown ? "column" : "row",
        gap: matchesMdDown ? 2 : 5,
        mb: 3,
        position: "relative",
        padding: matchesMdDown ? 2 : 0,
      }}
    >
      <Typography variant="h3" color="secondary">
        {dashboard.adminPanel}
      </Typography>
      <Tabs
        value={value}
        onChange={handleChangeValue}
        textColor="secondary"
        indicatorColor="primary"
        orientation={`${matchesMdDown ? "horizontal" : "vertical"}`}
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
    </Container>
  );
}

export default Dashboard;
