import { localization } from "@/constant/localization";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { TableCell, TableRow } from "@mui/material";

type TypeTableBodyChildOrders = {
  handleOpenModalOrder: () => void;
  setOrderID: (orderID: string) => void;
  data: {
    user: {
      firstname: string;
      lastname: string;
    };
    totalPrice: number;
    _id: string;
    createdAt: string;
  };
};
const { dashboard, common } = localization;
function TableBodyChildOrders({
  data,
  handleOpenModalOrder,
  setOrderID,
}: TypeTableBodyChildOrders) {
  return (
    <TableRow>
      <TableCell>
        {data?.user.firstname} {data?.user.lastname}
      </TableCell>
      <TableCell>
        {toPersianNumbersWithComma(data?.totalPrice)} {common.rial}
      </TableCell>
      <TableCell align="center">
        {toLocalDateStringShort(data?.createdAt)}
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
          setOrderID(data?._id);
        }}
      >
        {dashboard.checkOrder}
      </TableCell>
    </TableRow>
  );
}

export default TableBodyChildOrders;
