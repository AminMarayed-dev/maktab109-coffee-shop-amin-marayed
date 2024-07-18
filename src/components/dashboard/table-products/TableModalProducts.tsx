import { Backdrop, Box, Fade, Modal } from "@mui/material";
import FormModal from "./FormModal";
import useDashboardStore from "@/zustand/dashboard/store";
import { cssClass } from "@/constant/cssClass";

const { styleModal } = cssClass;

function TableModalProducts() {
  const openModal = useDashboardStore((state) => state.openModal);
  const handleCloseModal = useDashboardStore((state) => state.handleCloseModal);
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={styleModal}>
          <FormModal onClose={handleCloseModal} />
        </Box>
      </Fade>
    </Modal>
  );
}

export default TableModalProducts;
