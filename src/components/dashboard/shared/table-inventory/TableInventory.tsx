import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import {
  Box,
  Paper,
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
import ButtonActionTable from "../ButtonActionTable";

const { center } = cssClass;
const { dashboard, common } = localization;

function TableInventory() {
  const [page, setPage] = useState(0);
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { data, isLoading, isError } = useGetAllProductsToDashboard({
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
    <Box sx={{ ...center, flexDirection: "column", mb: 4, gap: 3 }}>
      <Typography variant="h4">
        {dashboard.table} {dashboard.InventoryAndPrices}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ margin: "auto", maxWidth: mdDown ? "100%" : "90%" }}
      >
        <Table sx={{ minWidth: mdDown ? "auto" : "700px" }}>
          <TableHead>
            <TableRow>
              <TableCell align={`${mdDown ? "center" : "left"}`}>
                {dashboard.product}
              </TableCell>
              <TableCell align={`${mdDown ? "center" : "left"}`}>
                {common.price}
              </TableCell>
              <TableCell align={`${mdDown ? "left" : "center"}`}>
                {common.inventory}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item, index) => (
              <TableRow key={index}>
                <TableCell align={`${mdDown ? "center" : "left"}`}>
                  {mdDown ? truncateText(item.name, 22) : item.name}
                </TableCell>
                <TableCell align={`${mdDown ? "center" : "left"}`}>
                  {toPersianNumbers(item.price)} {common.rial}
                </TableCell>
                <TableCell align="center">
                  {toPersianNumbers(item.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data?.totalProducts || 0}
          rowsPerPage={5}
          page={page}
          onPageChange={handleChangePage}
          sx={{ ...center }}
        />
      </TableContainer>
      <ButtonActionTable text={dashboard.save} />
    </Box>
  );
}

export default TableInventory;
