import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllOrdersToDashboard } from "@/hooks/dashboard/useGetAllOrders";
import formatDatePersian from "@/utils/formatDatePersian";
import {
  Box,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

function TableOrders() {
  const { center } = cssClass;
  const { dashboard, common } = localization;
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { data } = useGetAllOrdersToDashboard({ page: page + 1, limit: 5 });

  return (
    <Box sx={{ ...center, flexDirection: "column", mb: 4, gap: 3 }}>
      <Typography variant="h4">
        {dashboard.table} {dashboard.orders}
      </Typography>
      <FormControl>
        <RadioGroup name="orders" defaultValue={dashboard.deliveredOrders}>
          <FormControlLabel
            value={dashboard.deliveredOrders}
            control={<Radio />}
            label={dashboard.deliveredOrders}
          />
          <FormControlLabel
            value={dashboard.ordersPendingShipment}
            control={<Radio />}
            label={dashboard.ordersPendingShipment}
          />
        </RadioGroup>
      </FormControl>
      <TableContainer component={Paper} sx={{ margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {dashboard.username}
              </TableCell>
              <TableCell>{dashboard.totalAmount}</TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {dashboard.orderRegistrationTime}
              </TableCell>
              <TableCell>{dashboard.actions}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.orders?.map((item, index) => {
              const { user, products, totalPrice, deliveryDate } = item;
              return (
                <TableRow key={index}>
                  <TableCell>
                    {user.firstname} {user.lastname}
                  </TableCell>
                  <TableCell>
                    {totalPrice}
                    {common.rial}
                  </TableCell>
                  <TableCell align="center">
                    {formatDatePersian(deliveryDate)}
                  </TableCell>
                  <TableCell align="center">{dashboard.checkOrder}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableOrders;
