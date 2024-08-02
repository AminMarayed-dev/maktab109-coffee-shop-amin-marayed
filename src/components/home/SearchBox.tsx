import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import SearchIcon from "@mui/icons-material/Search";
import { Divider, InputAdornment, Stack, TextField } from "@mui/material";

const { home } = localization;

function SearchBox() {
  const onlyMobile = useResponsive({ query: "only", breakpoints: "xs" });

  return (
    <>
      {onlyMobile && (
        <Stack rowGap={2}>
          <TextField
            fullWidth
            sx={{ mb: 2.2 }}
            placeholder={home.searchProducts}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Divider />
        </Stack>
      )}
    </>
  );
}

export default SearchBox;
