import AddProductModal from "@/components/dashboard/shared/table-products/AddProductModal";
import EditProductModal from "@/components/dashboard/shared/table-products/editProductModal";
import { cssClass } from "@/constant/cssClass";
import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import { Backdrop, Box, Fade, Modal } from "@mui/material";

const { styleModal } = cssClass;

function TableModalProducts() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const { openModalAdd, openModalEdit, handleCloseModal } = useDashboardStore();
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
