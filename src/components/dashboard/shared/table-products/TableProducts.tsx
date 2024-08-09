import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
import truncateText from "@/utils/trancateText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ButtonActionTable from "../ButtonActionTable";

import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import DeleteDialogProduct from "./DeleteDialogProduct";
import TableModalProducts from "./TableModalProducts";

const { dashboard } = localization;
const { center, styleModal } = cssClass;

function TableProducts() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const [isSort, setIsSort] = useState(false);
  const handleOpenModalAdd = useDashboardStore(
    (state) => state.handleOpenModalAdd
  );
  const handleOpenModalEdit = useDashboardStore(
    (state) => state.handleOpenModalEdit
  );
  const handleOpenDialogDelete = useDashboardStore(
    (state) => state.handleOpenDialogDelete
  );
  const setProductID = useDashboardStore((state) => state.setProductID);
  const setIsEdit = useDashboardStore((state) => state.setIsEdit);
  const setIsUpload = useDashboardStore((state) => state.setIsUpload);
  // reset description, images, categoryid and subcategory id state
  const resetFieldsEdit = useDashboardStore((state) => state.resetFieldsEdit);
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

  const handleSortByCategory = () => {
    setIsSort((prev) => !prev);
  };

  const { data, isLoading, isError } = useGetAllProductsToDashboard({
    page: page + 1,
    limit: 5,
    sort: isSort ? "-category" : "category",
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
              <TableCell align="center">{dashboard.picture}</TableCell>
              <TableCell align="center">{dashboard.nameProduct}</TableCell>
              <TableCell
                align="center"
                sx={{ whiteSpace: "nowrap", cursor: "pointer" }}
                onClick={handleSortByCategory}
              >
                <Stack direction="row" justifyContent="center">
                  {isSort ? (
                    <>
                      {dashboard.category}
                      <ArrowDropUpIcon />
                    </>
                  ) : (
                    <>
                      {dashboard.category}
                      <ArrowDropDownIcon />
                    </>
                  )}
                </Stack>
              </TableCell>
              <TableCell align="center">{dashboard.subCategory}</TableCell>
              <TableCell align={`${mdDown ? "left" : "center"}`}>
                {dashboard.actions}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item, index) => (
              <TableRow key={data._id}>
                <TableCell align={`${mdDown ? "left" : "center"}`}>
                  <Image
                    src={`http://${item.images[0]}`}
                    width={mdDown ? 50 : 60}
                    height={mdDown ? 50 : 60}
                    alt="Logo"
                  />
                </TableCell>
                <TableCell align="center">
                  {mdDown ? truncateText(item.name, 13) : item.name}
                </TableCell>
                <TableCell align="center">{item.category.name}</TableCell>
                <TableCell align="center">{item.subcategory.name}</TableCell>
                <TableCell
                  align={`${mdDown ? "left" : "center"}`}
                  sx={{ whiteSpace: mdDown ? "wrap" : "nowrap" }}
                >
                  <IconButton
                    onClick={() => {
                      handleEditIcon(item?._id);
                      setIsEdit(true);
                      setIsUpload(false);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDeleteIcon(item?._id);
                      setIsEdit(false);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
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
        text={dashboard.addProduct}
        onClick={handleShowModalAdd}
      />
      <TableModalProducts />
      <DeleteDialogProduct />
    </Box>
  );
}

export default TableProducts;
