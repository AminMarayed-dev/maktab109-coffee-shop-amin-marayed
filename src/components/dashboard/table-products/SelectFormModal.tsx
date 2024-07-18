import { localization } from "@/constant/localization";
import useDashboardStore from "@/zustand/dashboard/store";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { menuSelectItems } from "./utils/selectItems.data";

const {
  dashboard,
  common,
  home: { menuList },
} = localization;

function SelectFormModal() {
  const { categoryList, subCategoryList } = menuSelectItems;
  const category = useDashboardStore((state) => state.category);
  const setCategory = useDashboardStore((state) => state.setCategory);
  const subCategory = useDashboardStore((state) => state.subCategory);
  const setSubCategory = useDashboardStore((state) => state.setSubCategory);
  const handleChangeCategory = (event: SelectChangeEvent) =>
    setCategory(event.target.value);
  const handleChangeSubCategory = (event: SelectChangeEvent) =>
    setSubCategory(event.target.value);
  return (
    <>
      <FormControl>
        <Select
          value={category}
          onChange={handleChangeCategory}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{dashboard.category}</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled>
            <em>{dashboard.category}</em>
          </MenuItem>
          {categoryList.map((category, index) => (
            <MenuItem key={index} value={category.value}>
              {category.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          value={subCategory}
          onChange={handleChangeSubCategory}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{dashboard.subCategory}</em>;
            }
            return selected;
          }}
        >
          <MenuItem value="" disabled>
            <em>{dashboard.subCategory}</em>
          </MenuItem>
          {subCategoryList.map((subCategory, index) => (
            <MenuItem key={index} value={subCategory.value}>
              {subCategory.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default SelectFormModal;
