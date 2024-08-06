import { Container } from "@mui/material";
import FactorPayment from "./FactorPayment";
import OrderPayment from "./OrderPayment";

function Payment() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <FactorPayment />
      <OrderPayment />
    </Container>
  );
}

export default Payment;
