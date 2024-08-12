import FactorPayment from "@/components/payment/FactorPayment";
import OrderPayment from "@/components/payment/OrderPayment";
import useResponsive from "@/hooks/shared/useResponsive";
import { Container } from "@mui/material";

function Payment() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: mdDown ? "column" : "row",
        rowGap: 4,
      }}
    >
      <FactorPayment />
      <OrderPayment />
    </Container>
  );
}

export default Payment;
