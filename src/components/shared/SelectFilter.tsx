import { localization } from "@/constant/localization";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { ChangeEvent } from "react";

const { common } = localization;

const options = [
  {
    text: common.filterNewer,
    value: "-createdAt",
  },
  {
    text: common.filterQuantity,
    value: "-quantity",
  },
  {
    text: common.filterHighPrice,
    value: "-price",
  },
  {
    text: common.filterLowPrice,
    value: "price",
  },
  {
    text: common.filterOlder,
    value: "createdAt",
  },
];

type Props = {
  handleSelectFilterProduct: (input:string) => void;
};

export default function SelectFilter({ handleSelectFilterProduct }: Props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <NativeSelect
          onChange={(e) => handleSelectFilterProduct(e.target.value)}
        >
          {options.map((optionItem, index) => (
            <option key={index} value={optionItem.value}>
              {optionItem.text}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
