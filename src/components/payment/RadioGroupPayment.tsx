import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";

import parsianLogo from "@/assets/images/parsian.png";
import zarinLogo from "@/assets/images/zarin.png";
import Image from "next/image";

const { payment } = localization;
function RadioGroupPayment() {
  return (
    <FormControl>
      <RadioGroup name="orders" defaultValue={payment.pasian} row={false}>
        <Stack direction="row" mb={1.5}>
          <FormControlLabel
            value={payment.pasian}
            control={<Radio />}
            label={payment.pasian}
          />
          <Image src={parsianLogo} width={35} height={35} alt="parsian-logo" />
        </Stack>
        <Stack direction="row">
          <FormControlLabel
            value={payment.zarin}
            control={<Radio />}
            label={payment.zarin}
          />
          <Image src={zarinLogo} width={35} height={35} alt="zarin-logo" />
        </Stack>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupPayment;
