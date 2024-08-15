import { localization } from "@/constant/localization";
import { useGetAllCategory } from "@/hooks/dashboard/useGetAllCategory";
import useGetAllSubCategory from "@/hooks/dashboard/useGetAllSubCategory";
import useDashboardStore from "@/zustand/dashboard/store";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useEffect } from "react";

const { dashboard } = localization;

function SelectFormModal() {
  const { categoryID, setCategoryID, subCategoryID, setSubCategoryID } =
    useDashboardStore();

  const handleChangeCategoryID = (event: SelectChangeEvent) =>
    setCategoryID(event.target.value);
  const handleChangeSubCategoryID = (event: SelectChangeEvent) =>
    setSubCategoryID(event.target.value);
  const { data: categoryList, isLoading, isError } = useGetAllCategory();
  const { data: subCategoryList, refetch } = useGetAllSubCategory(categoryID);

  useEffect(() => {
    if (categoryID) {
      refetch();
    }
  }, [categoryID, refetch]);

  if (isLoading) <div>loading...</div>;
  if (isError) <div>Errro...</div>;
  console.log(categoryID);
  return (
    <Stack direction="row" spacing={2}>
      <FormControl fullWidth>
        <Select
          value={categoryID}
          onChange={handleChangeCategoryID}
          displayEmpty
        >
          <MenuItem value="" disabled>
            <em>{dashboard.category}</em>
          </MenuItem>
          {categoryList?.map((category, index) => (
            <MenuItem key={index} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Select
          value={subCategoryID}
          onChange={handleChangeSubCategoryID}
          displayEmpty
        >
          <MenuItem value="" disabled>
            <em>{dashboard.subCategory}</em>
          </MenuItem>
          {subCategoryList?.map((subCategory, index) => (
            <MenuItem key={index} value={subCategory._id}>
              {subCategory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default SelectFormModal;
