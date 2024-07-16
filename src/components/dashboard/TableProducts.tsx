import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { useGetAllProductsToDashboard } from "@/hooks/dashboard/useGetAllProducts";
import truncateText from "@/utils/trancateText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
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
import ButtonActionTable from "./ButtonActionTable";

function TableProducts() {
  const { dashboard } = localization;
  const { center } = cssClass;
  const [page, setPage] = useState(0);

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
    <Box sx={{ ...center, flexDirection: "column", mb: 4, gap: 3 }}>
      <Typography variant="h4">
        {dashboard.table} {dashboard.products}
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "auto" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>{dashboard.picture}</TableCell>
              <TableCell align="center">{dashboard.nameProduct}</TableCell>
              <TableCell>{dashboard.category}</TableCell>
              <TableCell align="center">{dashboard.actions}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.products?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Image
                    src={`http://${item.images[0]}`}
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                </TableCell>
                <TableCell align="center">
                  {truncateText(item.name, 13)}
                </TableCell>
                <TableCell align="center">{item.category.name}</TableCell>
                <TableCell align="left">
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
        />
      </TableContainer>
      <ButtonActionTable text={dashboard.addProduct} />
    </Box>
  );
}

export default TableProducts;
