import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllOrdersToDashboard } from "@/hooks/dashboard/useGetAllOrders";
import useResponsive from "@/hooks/shared/useResponsive";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import RadioGroupOrders from "./RadioGroupOrders";

const { center } = cssClass;
const { dashboard, common } = localization;

function TableOrders() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { data, isLoading, isError } = useGetAllOrdersToDashboard({
    page: page + 1,
    limit: 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Stack spacing={3}>
      <RadioGroupOrders />
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
