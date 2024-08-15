import ButtonActionTable from "@/components/dashboard/shared/ButtonActionTable";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
import useResponsive from "@/hooks/shared/useResponsive";
import { ProductData } from "@/types/dashboard/type";
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
import { green } from "@mui/material/colors";
import { useState } from "react";
import TableBodyChildInventory from "./TableBodyChildInventory";
import { tableHeadCells } from "./utils/tableInventory.data";

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
    sort: "-createdAt",
  });
  const { mutate: editProductApi, isPending } = useEditProduct();

  const handleShowInput = (event: unknown, item: ProductData) => {
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
              {tableHeadCells.map((item, index) => (
                <TableCell
                  key={index}
                  align={`${mdDown ? item.alignMobile : item.alignDesktop}`}
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item: ProductData, index: number) => (
              <TableBodyChildInventory
                product={item}
                handleShowInput={handleShowInput}
                showInput={showInput}
                rowData={rowData}
                setNewPrice={setNewPrice}
                setNewQuantity={setNewQuantity}
              />
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
