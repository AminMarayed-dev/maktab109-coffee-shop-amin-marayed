import RootLayout from "@/components/layout/root-layout/RootLayout";
import { ReactElement } from "react";

function Payment() {
  return <div>Payment</div>;
}

Payment.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Payment;
