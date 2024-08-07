import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

function SelectPayment({
  placeholder,
  menuList,
  label,
}: {
  placeholder: string;
  menuList: string[];
  label: string;
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>
      <Select displayEmpty value={selectedValue} onChange={handleChange}>
        <MenuItem value="" disabled>
          <em>{placeholder}</em>
        </MenuItem>
        {menuList.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectPayment;
