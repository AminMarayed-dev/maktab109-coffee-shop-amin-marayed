import RootLayout from "@/components/layout/root-layout/RootLayout";
import Payment from "@/components/payment/Payment";
import { ReactElement } from "react";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/payment/Payment"), {
  ssr: false,
});

function PaymentPage() {
  return <NoSSR />;
}

PaymentPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PaymentPage;
