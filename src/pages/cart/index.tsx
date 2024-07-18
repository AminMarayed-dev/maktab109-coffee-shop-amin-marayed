import RootLayout from "@/components/layout/root-layout/RootLayout";
import { ReactElement } from "react";

function Cart() {
  return <div>Cart</div>;
}

Cart.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Cart;
