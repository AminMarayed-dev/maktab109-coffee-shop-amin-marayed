import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
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
import ButtonActionTable from "./ButtonActionTable";

function TableInventory() {
  const { center } = cssClass;
  const { dashboard, common } = localization;
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const { data } = useGetAllProductsToDashboard({ page: page + 1, limit: 5 });
  return (
    <Box sx={{ ...center, flexDirection: "column", mb: 4, gap: 3 }}>
      <Typography variant="h4">
        {dashboard.table} {dashboard.InventoryAndPrices}
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{dashboard.product}</TableCell>
              <TableCell>{common.price}</TableCell>
              <TableCell>{common.inventory}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{truncateText(item.name, 22)}</TableCell>
                <TableCell>
                  {item.price}
                  {common.rial}
                </TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
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
        />
      </TableContainer>
      <ButtonActionTable text={dashboard.save} />
    </Box>
  );
}

export default TableInventory;
