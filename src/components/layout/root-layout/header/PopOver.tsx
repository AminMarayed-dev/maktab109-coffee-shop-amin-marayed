import { cssClass } from "@/constant/cssClass";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Popover,
} from "@mui/material";
import menuItems from "./utils/menu.data";

function PopOver({
  openPopOver,
  anchorEl,
  handlePopoverOpen,
  handlePopoverClose,
}) {
  const { center } = cssClass;
  return (
    <>
      <Box sx={{ ...center }}>
        {menuItems.map((menuItem, index) => (
          <>
            <Button
              aria-owns={openPopOver ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
            >
              {menuItem.category}
            </Button>

            <Popover
              id="mouse-over-popover"
              open={openPopOver}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Box onMouseLeave={handlePopoverClose}>
                <List>
                  <ListItem>
                    <ListItemButton>ff</ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Popover>
          </>
        ))}
      </Box>
    </>
  );
}

export default PopOver;
