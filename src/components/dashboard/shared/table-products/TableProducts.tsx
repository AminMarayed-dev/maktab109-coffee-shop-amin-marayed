import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
import truncateText from "@/utils/trancateText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  IconButton,
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
import Image from "next/image";
import { useState } from "react";
import ButtonActionTable from "../ButtonActionTable";

import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import TableModalProducts from "./TableModalProducts";

const { dashboard } = localization;
const { center, styleModal } = cssClass;

function TableProducts() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [page, setPage] = useState(0);
  const handleOpenModal = useDashboardStore((state) => state.handleOpenModal);

  const { data, isLoading, isError } = useGetAllProductsToDashboard({
    page: page + 1,
    limit: 5,
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
              <TableCell align="center">{dashboard.category}</TableCell>
              <TableCell align="center">{dashboard.subCategory}</TableCell>
              <TableCell align={`${mdDown ? "left" : "center"}`}>
                {dashboard.actions}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item, index) => (
              <TableRow key={index}>
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
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
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
        onClick={handleOpenModal}
      />
      <TableModalProducts />
    </Box>
  );
}

export default TableProducts;
