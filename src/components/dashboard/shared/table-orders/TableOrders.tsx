import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllOrdersToDashboard } from "@/hooks/dashboard/useGetAllOrders";
import useResponsive from "@/hooks/shared/useResponsive";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

import {
  Box,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const { center } = cssClass;
const { dashboard, common } = localization;

function TableOrders() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { data } = useGetAllOrdersToDashboard({ page: page + 1, limit: 5 });

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          ...center,
          flexDirection: mdDown ? "column" : "row",
          mb: 4,
          gap: 3,
        }}
      >
        <Typography variant="h4">
          {dashboard.table} {dashboard.orders}
        </Typography>
        <FormControl>
          <RadioGroup
            name="orders"
            defaultValue={dashboard.deliveredOrders}
            row={!mdDown}
          >
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
      </Box>
      <TableContainer component={Paper} sx={{ margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {dashboard.username}
              </TableCell>
              <TableCell sx={{ whiteSpace: "nowrap" }}>
                {dashboard.totalAmount}
              </TableCell>
              <TableCell
                sx={{ whiteSpace: "nowrap" }}
                align={mdDown ? "left" : "center"}
              >
                {dashboard.orderRegistrationTime}
              </TableCell>
              <TableCell align={mdDown ? "left" : "center"}>
                {dashboard.actions}
              </TableCell>
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
                    {toPersianNumbers(totalPrice)} {common.rial}
                  </TableCell>
                  <TableCell align="center">
                    {toLocalDateStringShort(deliveryDate)}
                  </TableCell>
                  <TableCell align="center">{dashboard.checkOrder}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default TableOrders;
