import { localization } from "@/constant/localization";
import useShopStore from "@/zustand/shop/store";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const { common } = localization;

const options = [
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
    text: common.filterNewer,
    value: "-createdAt",
  },
  {
    text: common.filterOlder,
    value: "createdAt",
  },
];

export default function SelectFilter({ handleSelectFilterProduct }) {
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
