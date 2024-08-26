import ButtonActionTable from "@/components/dashboard/shared/ButtonActionTable";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
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

import DeleteDialogProduct from "@/components/dashboard/shared/table-products/DeleteDialogProduct";
import TableBodyChildProducts from "@/components/dashboard/shared/table-products/TableBodyChildProducts";
import TableModalProducts from "@/components/dashboard/shared/table-products/TableModalProducts";
import { tableHeadCells } from "@/components/dashboard/shared/table-products/utils/TableProducts.data";
import useDashboardStore from "@/zustand/dashboard/store";

const { dashboard } = localization;
const { center } = cssClass;

function TableProducts() {
  const [page, setPage] = useState(0);
  const {
    handleOpenModalAdd,
    handleOpenModalEdit,
    handleOpenDialogDelete,
    setProductID,
    resetFieldsEdit,
  } = useDashboardStore();

  const handleShowModalAdd = () => {
    resetFieldsEdit();
    handleOpenModalAdd();
  };
  const handleDeleteIcon = (id: string) => {
    setProductID(id);
    handleOpenDialogDelete();
  };

  const handleEditIcon = (id: string) => {
    setProductID(id);
    handleOpenModalEdit();
  };

  const { data, isLoading, isError } = useGetAllProductsToDashboard({
    page: page + 1,
    limit: 5,
    sort: "-createdAt",
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Box
      sx={{
        ...center,
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h4">
        {dashboard.table} {dashboard.products}
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {tableHeadCells.map((item, index) => (
                <TableCell
                  key={index}
                  align={
                    item.align as
                      | "center"
                      | "right"
                      | "left"
                      | "inherit"
                      | "justify"
                  }
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item: any, index: any) => (
              <TableBodyChildProducts
                key={index}
                product={item}
                handleDeleteIcon={handleDeleteIcon}
                handleEditIcon={handleEditIcon}
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
        text={dashboard.addProduct}
        onClick={handleShowModalAdd}
      />
      <TableModalProducts />
      <DeleteDialogProduct />
    </Box>
  );
}

export default TableProducts;
