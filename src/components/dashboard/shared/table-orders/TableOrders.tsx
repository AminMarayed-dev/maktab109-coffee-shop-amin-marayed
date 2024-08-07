import { localization } from "@/constant/localization";
import { useGetAllOrdersToDashboard } from "@/hooks/dashboard/useGetAllOrders";
import useResponsive from "@/hooks/shared/useResponsive";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

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
import ModalOrders from "./ModalOrders";
import RadioGroupOrders from "./RadioGroupOrders";

const { center } = cssClass;
const { dashboard, common } = localization;

function TableOrders() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const [isSort, setIsSort] = useState(false);
  const setOrderID = useDashboardStore((state) => state.setOrderID);
  const deliveryStatus = useDashboardStore((state) => state.delivaryStatus);
  const handleOpenModalOrder = useDashboardStore(
    (state) => state.handleOpenModalOrder
  );
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleSortByTime = () => {
    setIsSort((prev) => !prev);
  };
  const { data, isLoading, isError } = useGetAllOrdersToDashboard({
    page: page + 1,
    limit: "all",
    time: isSort ? "createdAt" : "-createdAt",
    deliveryStatus,
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
                {data?.orders?.map((item, index) => {
                  const { user, products, totalPrice, deliveryDate } = item;
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {user.firstname} {user.lastname}
                      </TableCell>
                      <TableCell>
                        {toPersianNumbersWithComma(totalPrice)} {common.rial}
                      </TableCell>
                      <TableCell align="center">
                        {toLocalDateStringShort(deliveryDate)}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            color: "secondary.light",
                          },
                        }}
                        onClick={() => {
                          handleOpenModalOrder();
                          setOrderID(item._id);
                        }}
                      >
                        {dashboard.checkOrder}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={data?.totalOrders || 0}
              rowsPerPage={5}
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
