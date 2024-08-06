import { FormControl, MenuItem, Select, Typography } from "@mui/material";

function SelectPayment({
  placeholder,
  menuList,
  label,
}: {
  placeholder: string;
  menuList: string[];
  label: string;
}) {
  return (
    <FormControl fullWidth>
      <Typography variant="body1" mb={1}>
        {label}
      </Typography>
      <Select displayEmpty>
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
