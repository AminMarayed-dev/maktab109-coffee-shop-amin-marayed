import resultPaymantLogo from "@/assets/images/result-payment-img.jpg";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useEditProduct from "@/hooks/dashboard/useEditProductById";
import useAddOrders from "@/hooks/result-payment/useAddOrders";
import useResponsive from "@/hooks/shared/useResponsive";
import { useStorage } from "@/hooks/shared/useStorage";
import { useCartStore } from "@/zustand/cart/store";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Timer from "./Timer";

const { resultPayment } = localization;
const { styleButtonResultPayment, styleCardResultPayment } = cssClass;

function ResultPayment() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const { mutate: editQuantityProduct } = useEditProduct();
  const { mutate: addOrders } = useAddOrders();
  const [, , removeCartBasket] = useStorage("cart-storage", null);
  const [user] = useStorage("user", null);
  const carts = useCartStore((state) => state.cart);
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
    addOrders({
      user: user._id,
      products: productsOrders,
    });
    // delete local storage
    removeCartBasket();
    //
    location.href = "/result-payment/success";
  };

  const handleFailPayment = () => {
    location.href = "/result-payment/fail";
  };

  return (
    <Stack rowGap={3} justifyContent="center">
      <Typography variant="h2" mt={2} textAlign="center">
        {resultPayment.internetPortal}
      </Typography>
      <Divider />
      <Container>
        <Card
          sx={{
            minHeight: mdDown ? 300 : 600,
            justifyContent: mdDown ? "center" : "space-between",
            ...styleCardResultPayment,
            position: "relative",
          }}
          elevation={0}
        >
          <CardMedia>
            <Image
              src={resultPaymantLogo}
              width={mdDown ? 300 : 500}
              height={mdDown ? 200 : 300}
              alt="result"
            />
          </CardMedia>
          <CardContent>
            <Typography variant={mdDown ? "h4" : "h3"}>
              {resultPayment.questionResultPayment}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button
              fullWidth
              onClick={handleSuccessPayment}
              sx={styleButtonResultPayment.pay}
            >
              {resultPayment.pay}
            </Button>
            <Button
              fullWidth
              sx={styleButtonResultPayment.cancel}
              onClick={handleFailPayment}
            >
              {resultPayment.cancel}
            </Button>
          </CardActions>
          <Timer timeLeft={timeLeft} />
        </Card>
      </Container>
    </Stack>
  );
}

export default ResultPayment;
