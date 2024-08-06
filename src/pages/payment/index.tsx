import RootLayout from "@/components/layout/root-layout/RootLayout";
import Payment from "@/components/payment/Payment";
import { ReactElement } from "react";

function PaymentPage() {
  return <Payment />;
}

PaymentPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PaymentPage;
