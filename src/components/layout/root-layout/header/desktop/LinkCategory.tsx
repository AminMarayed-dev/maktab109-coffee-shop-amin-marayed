import { cssClass } from "@/constant/cssClass";
import { Button, Container, Stack, styled } from "@mui/material";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

import ListSubCategory from "./ListSubCategory";
import menuItems from "../utils/menu.data";

const TooltipStyled = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
  },
}));

const { onlyDesktop } = cssClass;

function LinkCategory() {
  // delete first and last element
  const slicedMenuItems = menuItems.slice(1, menuItems.length - 1);
  return (
    <Container sx={onlyDesktop}>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        {slicedMenuItems.map((menuItem, index) => (
          <TooltipStyled
            key={index}
            title={<ListSubCategory subCategoryItems={menuItem.items} />}
          >
            <Button
              sx={{
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "secondary.light",
                },
              }}
            >
              {menuItem.category}
            </Button>
          </TooltipStyled>
        ))}
      </Stack>
    </Container>
  );
}

export default LinkCategory;
