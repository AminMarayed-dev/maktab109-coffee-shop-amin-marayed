import DialogDeleteCart from "@/components/cart/DialogDeleteCart";
import CountBox from "@/components/shared/CountBox";
import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import { useCartStore } from "@/zustand/cart/store";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Image from "next/image";
import { useState } from "react";

const { cart, common, dashboard } = localization;

function TableCart() {
  const [cartID, setCartID] = useState("");
  const carts = useCartStore((state) => state.cart);
  const handleOpenDialog = useCartStore((state) => state.handleOpenDialog);
  const handleDeleteIcon = (id: string) => {
    setCartID(id);
    handleOpenDialog();
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{cart.product}</TableCell>
            <TableCell>{common.price}</TableCell>
            <TableCell>{cart.quantity}</TableCell>
            <TableCell>{cart.total}</TableCell>
            <TableCell>{dashboard.actions}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {carts.map((item, index) => (
            <>
              <TableRow key={index}>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Image
                    width={55}
                    height={55}
                    src={`http://${item.images[0]}`}
                    alt={item.name}
                  />
                  <Typography variant="body2">
                    {truncateText(item.name, 30)}
                  </Typography>
                </TableCell>
                <TableCell sx={{ whiteSpace: "nowrap" }}>
                  <Typography variant="body2" color="primary.light">
                    {toPersianNumbersWithComma(item.price)} {common.rial}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack maxWidth={80}>
                    <CountBox product={item} />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">
                    {toPersianNumbersWithComma(item.price * item.count)}{" "}
                    {common.rial}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleDeleteIcon(item._id.toString())}
                    id={item._id}
                  >
                    <DeleteIcon sx={{ fill: red[600] }} />
                  </IconButton>
                </TableCell>
              </TableRow>
              <DialogDeleteCart cartID={cartID} />
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCart;
