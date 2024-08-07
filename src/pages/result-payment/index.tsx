import dynamic from "next/dynamic";

const NoSSR = dynamic(
  () => import("@/components/result-payment/ResultPayment"),
  { ssr: false }
);

function ResultPaymentPage() {
  return <NoSSR />;
}

export default ResultPaymentPage;
