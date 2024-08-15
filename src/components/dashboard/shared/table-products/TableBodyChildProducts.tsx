import useResponsive from "@/hooks/shared/useResponsive";
import truncateText from "@/utils/trancateText";
import useDashboardStore from "@/zustand/dashboard/store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, TableCell, TableRow } from "@mui/material";
import Image from "next/image";

type TypeTableBodyChildProducts = {
  product: {
    _id: string;
    images: string[];
    name: string;
    category: { name: string };
    subcategory: { name: string };
  };
  handleEditIcon: (id: string) => void;
  handleDeleteIcon: (id: string) => void;
};

function TableBodyChildProducts({
  product,
  handleEditIcon,
  handleDeleteIcon,
}: TypeTableBodyChildProducts) {
  const { setIsEdit, setIsUpload } = useDashboardStore();
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <TableRow key={product._id}>
      <TableCell align={`${mdDown ? "left" : "center"}`}>
        <Image
          src={`http://${product.images[0]}`}
          width={mdDown ? 50 : 60}
          height={mdDown ? 50 : 60}
          alt="Logo"
        />
      </TableCell>
      <TableCell align="center">
        {mdDown ? truncateText(product.name, 13) : product.name}
      </TableCell>
      <TableCell align="center">{product.category.name}</TableCell>
      <TableCell align="center">{product.subcategory.name}</TableCell>
      <TableCell
        align={`${mdDown ? "left" : "center"}`}
        sx={{ whiteSpace: mdDown ? "wrap" : "nowrap" }}
      >
        <IconButton
          onClick={() => {
            handleEditIcon(product?._id);
            setIsEdit(true);
            setIsUpload(false);
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            handleDeleteIcon(product?._id);
            setIsEdit(false);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default TableBodyChildProducts;
