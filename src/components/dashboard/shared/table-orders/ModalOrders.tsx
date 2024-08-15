import ModalOrdersFactor from "@/components/dashboard/shared/table-orders/ModalOrdersFactor";
import TableModalOrdres from "@/components/dashboard/shared/table-orders/TableModalOrdres";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useEditOrderById from "@/hooks/dashboard/useEditOrderById";
import useGetOrderById from "@/hooks/dashboard/useGetOrderById";
import useResponsive from "@/hooks/shared/useResponsive";
import useDashboardStore from "@/zustand/dashboard/store";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const { styleModal, styleButtonModalOrder } = cssClass;
const { dashboard } = localization;
function ModalOrders() {
  const [open, setOpen] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const { orderID, openModalOrder, handleCloseModal } = useDashboardStore();
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });

  const { data, isLoading, isError } = useGetOrderById(orderID);
  const { mutate: editOrderByID } = useEditOrderById();

  const handleEditOrder = () => {
    editOrderByID(
      {
        id: orderID,
        orderData: { user: data?.user?._id, deliveryStatus: "true" },
      },
      {
        onSuccess: () => {
          setIsDelivery(true);
          setOpen(true);
        },
        onError: () => {
          setIsDelivery(false);
          setOpen(true);
        },
      }
    );
  };
  return (
    <Modal
      open={openModalOrder}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={openModalOrder}>
        <Box sx={styleModal} width={mdDown ? 400 : 600}>
          <Stack>
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", right: 10, top: 8 }}
            >
              <CancelIcon />
            </IconButton>
            <Typography variant="h6">{dashboard.showOrder}</Typography>
            <ModalOrdersFactor userData={data} />
            <TableModalOrdres data={data} />
            {!data?.deliveryStatus && (
              <Button sx={styleButtonModalOrder} onClick={handleEditOrder}>
                {dashboard.delivary}
              </Button>
            )}
            <Snackbar
              open={open}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              autoHideDuration={3000}
              onClose={() => setOpen(false)}
            >
              <Alert
                severity={isDelivery ? "success" : "error"}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {isDelivery
                  ? dashboard.messageSuccessDelivery
                  : dashboard.messageFailDelivery}
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalOrders;
