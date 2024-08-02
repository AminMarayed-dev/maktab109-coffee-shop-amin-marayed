import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
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
  TextField,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";
import ButtonActionTable from "../ButtonActionTable";

const { center } = cssClass;
const { dashboard, common } = localization;

function TableInventory() {
  const [page, setPage] = useState(0);
  const [rowData, setRowData] = useState<any>(null);
  const [newPrice, setNewPrice] = useState(0);
  const [newQuantity, setNewQuantity] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [buttonBgColor, setButtonBgColor] = useState("secondary.dark");

  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const { data, isLoading, isError } = useGetAllProductsToDashboard({
    page: page + 1,
    limit: 5,
  });
  const { mutate: editProductApi, isPending } = useEditProduct();

  const handleShowInput = (event, item) => {
    setShowInput(true);
    setRowData(item);
    setButtonBgColor(green[500]);
  };

  const handleCloseInput = () => {
    setShowInput(false);
    setRowData(null);
    setButtonBgColor("secondary.dark");
  };

  const editQuantityOrPrice = () => {
    if (newPrice || newQuantity) {
      const formData = new FormData();
      newPrice && formData.append("price", newPrice.toString());
      newQuantity && formData.append("quantity", newQuantity.toString());
      editProductApi(
        { id: rowData._id, productData: formData },
        {
          onSuccess: (res) => {
            // setOpen(true);
            // setIsEditSuccess(!!res);
          },
        }
      );
      setNewPrice(0);
      setNewQuantity(0);
    }
    handleCloseInput();
  };

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
                <TableCell
                  align={`${mdDown ? "center" : "left"}`}
                  onClick={(e) => handleShowInput(e, item)}
                >
                  {showInput && rowData?._id === item?._id ? (
                    <TextField
                      fullWidth
                      defaultValue={item.price}
                      onChange={(e) => setNewPrice(+e.target.value)}
                      type="number"
                    />
                  ) : (
                    <Box>
                      {toPersianNumbers(item.price)}
                      {common.rial}
                    </Box>
                  )}
                </TableCell>
                <TableCell
                  align="center"
                  defaultValue={item.quantity}
                  onClick={(e) => handleShowInput(e, item)}
                >
                  {showInput && rowData?._id === item?._id ? (
                    <TextField
                      type="number"
                      defaultValue={item.quantity}
                      onChange={(e) => setNewQuantity(+e.target.value)}
                    />
                  ) : (
                    toPersianNumbers(item.quantity)
                  )}
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
      <ButtonActionTable
        text={dashboard.save}
        onClick={editQuantityOrPrice}
        sx={{
          bgcolor: buttonBgColor,
          "&:hover": {
            backgroundColor: buttonBgColor,
          },
        }}
      />
    </Box>
  );
}

export default TableInventory;
