import resultPaymantLogo from "@/assets/images/cheque_7377382.png";
import Timer from "@/components/result-payment/Timer";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

type Props = {
  handleSuccessPayment: () => void;
  handleFailPayment: () => void;
  timeLeft: number;
};

const { styleCardResultPayment, styleButtonResultPayment } = cssClass;
const { resultPayment } = localization;
function CartResultPayment({
  handleSuccessPayment,
  handleFailPayment,
  timeLeft,
}: Props) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Card
      sx={{
        minHeight: mdDown ? 300 : 600,
        justifyContent: mdDown ? "center" : "space-between",
        ...styleCardResultPayment,
        position: "relative",
      }}
      elevation={0}
    >
      <CardMedia sx={{ mt: 4 }}>
        <Image
          src={resultPaymantLogo}
          width={mdDown ? 150 : 200}
          height={mdDown ? 100 : 200}
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
  );
}

export default CartResultPayment;
