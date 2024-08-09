import { localization } from "@/constant/localization";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import useAddOrders from "@/hooks/result-payment/useAddOrders";
import useResponsive from "@/hooks/shared/useResponsive";
import { useStorage } from "@/hooks/shared/useStorage";
import { useCartStore } from "@/zustand/cart/store";
import usePaymentStore from "@/zustand/payment/store";
import { Container, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CartResultPayment from "./CartResultPayment";
import UserCartResultPayment from "./UserCartResultPayment";

const { resultPayment } = localization;

function ResultPayment() {
  const [timeLeft, setTimeLeft] = useState(300);
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const { mutate: editQuantityProduct } = useEditProduct();
  const { mutate: addOrders } = useAddOrders();
  const [, , removeCartBasket] = useStorage("cart-storage", null);
  const [user] = useStorage("user", null);
  const carts = useCartStore((state) => state.cart);
  const { valueDatePicker } = usePaymentStore();

  const router = useRouter();

  useEffect(() => {
    if (timeLeft === 0) {
      router.push("/result-payment/fail");
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, router]);

  const handleSuccessPayment = () => {
    // edit quantity by id
    const updatedQuantityProducts = carts.map((cart) => ({
      _id: cart._id,
      count: cart.count,
      quantity: cart.quantity - cart.count,
    }));

    updatedQuantityProducts.forEach(({ _id, quantity }) => {
      editQuantityProduct({ id: _id, productData: { quantity } });
    });
    // post to orders
    const productsOrders = carts.map((cart) => ({
      product: cart._id,
      count: cart.count,
    }));
    addOrders(
      {
        user: user._id,
        products: productsOrders,
        deliveryDate: valueDatePicker,
      },
      {
        onSuccess: () => {
          location.href = "/result-payment/success";
          removeCartBasket();
        },
        onError: () => {
          location.href = "/result-payment/fail";
        },
      }
    );
  };

  const handleFailPayment = () => {
    location.href = "/";
  };

  return (
    <Stack rowGap={3} justifyContent="center">
      <Typography variant="h2" mt={2} textAlign="center">
        {resultPayment.internetPortal}
      </Typography>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: mdDown ? "column" : "row",
          justifyContent: mdDown ? "center" : "space-evenly",
          alignItems: mdDown ? "center" : "flex-start",
          rowGap: 3,
          bgcolor: "primary.dark",
          padding: 2,
          borderRadius: "8px",
        }}
      >
        <UserCartResultPayment />
        <CartResultPayment
          handleSuccessPayment={handleSuccessPayment}
          handleFailPayment={handleFailPayment}
          timeLeft={timeLeft}
        />
      </Container>
    </Stack>
  );
}

export default ResultPayment;
