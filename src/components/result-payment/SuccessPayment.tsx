import success from "@/assets/images/success.png";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const { resultPayment } = localization;
function SuccessPayment() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();
  return (
    <Stack spacing={4} justifyContent="center" alignItems="center" mt={6}>
      <Image
        src={success}
        width={mdDown ? 200 : 400}
        height={mdDown ? 200 : 400}
        alt="success"
      />
      <Typography variant="h2">{resultPayment.successPaymentTitle}</Typography>
      <Typography variant="body1">
        {resultPayment.successPaymentBody}
      </Typography>
      <Button onClick={() => router.push("/")}>
        {resultPayment.backToHome}
      </Button>
    </Stack>
  );
}

export default SuccessPayment;
