import { cssClass } from "@/constant/cssClass";
import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import { Backdrop, Box, Fade, Modal } from "@mui/material";
import { ReactNode } from "react";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./editProductModal";

const { styleModal } = cssClass;
type Props = { children: ReactNode };
function TableModalProducts() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const openModalAdd = useDashboardStore((state) => state.openModalAdd);
  const openModalEdit = useDashboardStore((state) => state.openModalEdit);
  const handleCloseModal = useDashboardStore((state) => state.handleCloseModal);
  return (
    <>
      <Modal
        open={openModalAdd}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalAdd}>
          <Box sx={styleModal} width={mdDown ? 400 : 800}>
            <AddProductModal />
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModalEdit}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModalEdit}>
          <Box sx={styleModal}>
            <EditProductModal />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default TableModalProducts;
