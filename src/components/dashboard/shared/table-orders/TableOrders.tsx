import { localization } from "@/constant/localization";
import { useGetAllOrdersToDashboard } from "@/hooks/dashboard/useGetAllOrders";
import useResponsive from "@/hooks/shared/useResponsive";

import ModalOrders from "@/components/dashboard/shared/table-orders/ModalOrders";
import RadioGroupOrders from "@/components/dashboard/shared/table-orders/RadioGroupOrders";
import { cssClass } from "@/constant/cssClass";
import useDashboardStore from "@/zustand/dashboard/store";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TableBodyChildOrders from "./TableBodyChildOrders";

const { center } = cssClass;
const { dashboard } = localization;
type Item = {
  user: { firstname: string; lastname: string };
  totalPrice: number;
  createdAt: string;
  _id: string;
};

function TableOrders() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isSort, setIsSort] = useState(false);
  const { setOrderID, delivaryStatus, handleOpenModalOrder } =
    useDashboardStore();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleSortByTime = () => {
    setIsSort((prev) => !prev);
  };

  const { data, isLoading, isError } = useGetAllOrdersToDashboard({
    page: page + 1,
    limit: rowsPerPage,
    time: isSort ? "createdAt" : "-createdAt",
    deliveryStatus: delivaryStatus,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Stack spacing={7}>
      <RadioGroupOrders />
      {data?.orders.length > 0 ? (
        <>
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
                    sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
                    onClick={handleSortByTime}
                    align={mdDown ? "left" : "center"}
                  >
                    <Stack direction="row" justifyContent="center">
                      {isSort ? (
                        <>
                          {dashboard.orderRegistrationTime}
                          <ArrowDropUpIcon />
                        </>
                      ) : (
                        <>
                          {dashboard.orderRegistrationTime}
                          <ArrowDropDownIcon />
                        </>
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell align={mdDown ? "left" : "center"}>
                    {dashboard.actions}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.orders?.map((item: Item, index: number) => {
                  const { user, totalPrice, createdAt } = item;
                  return (
                    <TableBodyChildOrders
                      key={index}
                      data={item}
                      handleOpenModalOrder={handleOpenModalOrder}
                      setOrderID={setOrderID}
                    />
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={data?.totalOrders || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              sx={{ ...center }}
            />
          </TableContainer>
          <ModalOrders />
        </>
      ) : (
        <Typography textAlign="center" variant="h4" mt={2}>
          {dashboard.noOrders}
        </Typography>
      )}
    </Stack>
  );
}

export default TableOrders;
