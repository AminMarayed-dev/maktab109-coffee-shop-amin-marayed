import { localization } from "@/constant/localization";
import { useStorage } from "@/hooks/shared/useStorage";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface CartState {
  state: {
    cart: {
      name: string;
      count: number;
      price: number;
    }[];
  };
}

const { common, cart } = localization;
const costTransportation = 300000;

function TableOrderPayment() {
  const [state] = useStorage<CartState | null>("cart-storage", null);
  if (!state) {
    return <Typography>Loading...</Typography>;
  }

  const subRows = state?.state.cart.map((item: any) =>
    createData(
      `${item.name} x${item.count}`,
      `${toPersianNumbersWithComma(item.count * item.price)} ${common.rial}`
    )
  );
  const totalAllPrice = state?.state.cart.reduce(
    (acc: any, curr: any) => acc + curr.count * curr.price,
    0
  );

  const rows = [
    ...subRows,
    createData(
      cart.total,
      `${toPersianNumbersWithComma(totalAllPrice)} ${common.rial}`,

      true
    ),
    createData(cart.transport, "ارسال با پست پیشتاز: ۳۰۰,۰۰۰ریال"),
    createData(
      cart.totalPrice,
      `${toPersianNumbersWithComma(totalAllPrice + costTransportation)} ${
        common.rial
      }`,
      true
    ),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ p: 2, bgcolor: "primary.dark", mb: 4 }}
    >
      <Table sx={{ minWidth: 150 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", fontSize: 18 }}>
              {cart.product}
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold", fontSize: 18 }}>
              {cart.total}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  fontWeight: row.isBold ? "bold" : "normal",
                  fontSize: row.isBold ? 16 : 14,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: row.isBold ? "bold" : "normal",
                  fontSize: row.isBold ? 16 : 14,
                }}
              >
                {row.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function createData(name: string, price: number | string, isBold = false) {
  return { name, price, isBold };
}

export default TableOrderPayment;
