import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { ProductData } from "@/types/dashboard/type";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import { Box, TableCell, TableRow, TextField } from "@mui/material";

type TypeTableBodyChildInventory = {
  product: ProductData;
  showInput: boolean;
  rowData: any;
  handleShowInput: (event: unknown, item: ProductData) => void;
  setNewPrice: (item: number) => void;
  setNewQuantity: (item: number) => void;
};
const { common } = localization;

function TableBodyChildInventory({
  product,
  showInput,
  rowData,
  handleShowInput,
  setNewPrice,
  setNewQuantity,
}: TypeTableBodyChildInventory) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <TableRow key={product._id}>
      <TableCell align={`${mdDown ? "center" : "left"}`}>
        {mdDown ? truncateText(product.name, 22) : product.name}
      </TableCell>
      <TableCell
        align={`${mdDown ? "center" : "left"}`}
        onClick={(e) => handleShowInput(e, product)}
      >
        {showInput && rowData?._id === product?._id ? (
          <TextField
            fullWidth
            defaultValue={product.price}
            onChange={(e) => setNewPrice(+e.target.value)}
            type="number"
          />
        ) : (
          <Box>
            {toPersianNumbers(product.price)}
            {common.rial}
          </Box>
        )}
      </TableCell>
      <TableCell
        align="center"
        defaultValue={product.quantity}
        onClick={(e) => handleShowInput(e, product)}
      >
        {showInput && rowData?._id === product?._id ? (
          <TextField
            type="number"
            defaultValue={product.quantity}
            onChange={(e) => setNewQuantity(+e.target.value)}
          />
        ) : (
          toPersianNumbers(product.quantity as number)
        )}
      </TableCell>
    </TableRow>
  );
}

export default TableBodyChildInventory;
