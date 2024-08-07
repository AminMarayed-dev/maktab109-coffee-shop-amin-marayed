import { localization } from "@/constant/localization";
import useGetOrderById from "@/hooks/dashboard/useGetOrderById";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import useDashboardStore from "@/zustand/dashboard/store";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const { common, dashboard, cart } = localization;
function TableModalOrdres({ data }: { data: any }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: "primary.dark", mt: 2 }}
      elevation={0}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{dashboard.product}</TableCell>
            <TableCell align="center">{common.price}</TableCell>
            <TableCell align="center">{cart.quantity}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.products?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.product.name}</TableCell>
              <TableCell align="center">
                {toPersianNumbersWithComma(item.product.price)} {common.rial}
              </TableCell>
              <TableCell align="center">
                {toPersianNumbers(item.count)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableModalOrdres;
