import resultPaymantLogo from "@/assets/images/result-payment-img.jpg";
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
import Timer from "./Timer";

const { styleCardResultPayment, styleButtonResultPayment } = cssClass;
const { resultPayment } = localization;
function CartResultPayment({
  handleSuccessPayment,
  handleFailPayment,
  timeLeft,
}) {
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
  );
}

export default CartResultPayment;
