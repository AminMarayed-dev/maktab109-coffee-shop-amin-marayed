import FailPayment from "@/components/result-payment/FailPayment";
import SuccessPayment from "@/components/result-payment/SuccessPayment";
import { useRouter } from "next/router";

function SuccessOrFailPagePayment() {
  const router = useRouter();
  const { slug } = router.query;

  return slug === "success" ? <SuccessPayment /> : <FailPayment />;
}

export default SuccessOrFailPagePayment;
