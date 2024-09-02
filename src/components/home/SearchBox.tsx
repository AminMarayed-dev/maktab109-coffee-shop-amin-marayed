import { localization } from "@/constant/localization";
import useGetAllProductsToSearch from "@/hooks/home/useGetAllProductsToSearch";
import useResponsive from "@/hooks/shared/useResponsive";
import { Autocomplete, Divider, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ResultSearchBox from "./ResultSearchBox";

const { home: menuList } = localization;

function SearchBox() {
  const onlyMobile = useResponsive({ query: "only", breakpoints: "xs" });
  const [listResultSearch, setListResultSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [debounceSearchValue, setDebouncedSearchValue] = useState("");

  const { data, isLoading, isError } = useGetAllProductsToSearch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 1000);

    const filteredProducts = debounceSearchValue
      ? data?.products?.filter((product: any) =>
          product?.name.includes(debounceSearchValue)
        )
      : [];
    setListResultSearch(filteredProducts);

    return () => {
      clearTimeout(handler);
    };
  }, [
    searchValue,
    debounceSearchValue,
    data,
    setDebouncedSearchValue,
    setDebouncedSearchValue,
  ]);

  return (
    <>
      {onlyMobile && (
        <Stack rowGap={2}>
          <Autocomplete
            freeSolo
            disableClearable
            fullWidth
            sx={{ mr: 2 }}
            options={listResultSearch.length > 0 ? listResultSearch : []}
            getOptionLabel={(option: any) => option.name}
            renderOption={(props, option: any) => (
              <li {...props}>
                <ResultSearchBox resultSearchProduct={option} />
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={menuList.searchProducts}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            )}
          />

          <Divider />
        </Stack>
      )}
    </>
  );
}

export default SearchBox;
