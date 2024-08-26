import { localization } from "@/constant/localization";
import useHeaderStore from "@/zustand/root-layout/header/store";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Autocomplete,
  IconButton,
  TextField,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";

const { home: menuList } = localization;
function AppBarSearchBox({ handleSearchValue }: { handleSearchValue: any }) {
  const { handleCloseDialogSearchBox, searchValue } = useHeaderStore();
  return (
    <AppBar sx={{ position: "relative", p: 2 }}>
      <Toolbar>
        <Autocomplete
          freeSolo
          disableClearable
          fullWidth
          sx={{ mr: 2 }}
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={menuList.searchProducts}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={searchValue}
              onChange={handleSearchValue}
            />
          )}
        />
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCloseDialogSearchBox}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarSearchBox;
