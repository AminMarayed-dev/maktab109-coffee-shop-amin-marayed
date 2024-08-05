import Cart from "@/components/cart/Cart";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import { ReactElement } from "react";

function CartPage() {
  return <Cart />;
}

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CartPage;
