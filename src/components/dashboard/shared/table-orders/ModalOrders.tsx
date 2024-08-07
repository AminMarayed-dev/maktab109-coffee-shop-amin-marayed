import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useEditOrderById from "@/hooks/dashboard/useEditOrderById";
import useGetOrderById from "@/hooks/dashboard/useGetOrderById";
import useResponsive from "@/hooks/shared/useResponsive";
import { toLocalDateStringShort } from "@/utils/formatDatePersian";
import useDashboardStore from "@/zustand/dashboard/store";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import TableModalOrdres from "./TableModalOrdres";

const orders = [
  {
    name: "fsdfsd",
    count: "2",
    price: "2222",
  },
  {
    name: "dfsdfs",
    count: "2",
    price: "222222",
  },
  {
    name: "dfsdf",
    count: "2",
    price: "22222",
  },
];

const { styleModal, center } = cssClass;
const { dashboard } = localization;
function ModalOrders() {
  const orderID = useDashboardStore((state) => state.orderID);
  const { data, isLoading, isError } = useGetOrderById(orderID);
  console.log(data);
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const openModalOrder = useDashboardStore((state) => state.openModalOrder);
  const handleCloseModal = useDashboardStore((state) => state.handleCloseModal);
  const { mutate: editOrderByID, isPending } = useEditOrderById();

  const handleEditOrder = () => {
    editOrderByID({
      id: orderID,
      orderData: { user: data?.user?._id, deliveryStatus: "true" },
    });
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
            <Box sx={{ ...center, flexDirection: "column", rowGap: 2 }}>
              <Stack direction="row" columnGap={2} alignItems="center">
                <Typography variant="body1">
                  {dashboard.customer}
                  {":"}
                </Typography>
                <Typography variant="body2">
                  {data?.user.firstname} {data?.user.lastname}
                </Typography>
              </Stack>
              <Stack direction="row" columnGap={2} alignItems="center">
                <Typography variant="body1">
                  {dashboard.address}
                  {":"}
                </Typography>
                <Typography variant="body2">{data?.user.address}</Typography>
              </Stack>
              <Stack direction="row" columnGap={2} alignItems="center">
                <Typography variant="body1">
                  {dashboard.mobile}
                  {":"}
                </Typography>
                <Typography variant="body2">{data?.user.phoneNumber}</Typography>
              </Stack>
              <Stack direction="row" columnGap={2} alignItems="center">
                <Typography variant="body1">
                  {dashboard.delivaryDate}
                  {":"}
                </Typography>
                <Typography variant="body2">
                  {toLocalDateStringShort(data?.deliveryDate)}
                </Typography>
              </Stack>
              <Stack direction="row" columnGap={2} alignItems="center">
                <Typography variant="body1">
                  {dashboard.createdDate}
                  {":"}
                </Typography>
                <Typography variant="body2">
                  {toLocalDateStringShort(data? .createdAt)}
                </Typography>
              </Stack>
            </Box>
            <TableModalOrdres data={data} />
            {!data?.deliveryStatus && (
              <Button
                sx={{
                  mt: 2.5,
                  backgroundColor: "green",
                  color: "primary.main",
                  "&:hover": { backgroundColor: "darkgreen" },
                }}
                onClick={handleEditOrder}
              >
                {dashboard.delivary}
              </Button>
            )}
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalOrders;
