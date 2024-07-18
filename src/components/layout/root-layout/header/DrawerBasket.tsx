import { Box, ListItemButton, ListItemText } from "@mui/material";

function DrawerBasket() {
  return (
    <Box sx={{ mb: 2 }}>
      <ListItemButton>
        <ListItemText primary="hhh" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="nts" />
      </ListItemButton>

      <ListItemButton>
        <ListItemText primary="Other" />
      </ListItemButton>
    </Box>
  );
}

export default DrawerBasket;
