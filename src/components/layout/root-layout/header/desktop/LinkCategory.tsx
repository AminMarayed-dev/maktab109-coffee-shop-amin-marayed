import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Container, Stack, styled } from "@mui/material";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { useRouter } from "next/router";
import { useState } from "react";
import menuItems from "../utils/menu.data";
import ListSubCategory from "./ListSubCategory";

const TooltipStyled = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
  },
}));

const LinkCategory = () => {
  const OnlyDesktop = useResponsive({ query: "only", breakpoints: "xl" });
  const router = useRouter();

  // delete first and last element
  const slicedMenuItems = menuItems.slice(1, menuItems.length - 1);

  return (
    OnlyDesktop && (
      <Container>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          {slicedMenuItems.map((menuItem, index) => (
            <TooltipStyled
              key={index}
              title={
                <ListSubCategory
                  subCategoryItems={menuItem.items}
                  slugCategory={menuItem.slug}
                />
              }
            >
              <Button
                sx={{
                  bgcolor: "primary.main",
                  "&:hover": {
                    bgcolor: "primary.main",
                    color: "secondary.light",
                  },
                }}
                onClick={() => {
                  router.push(`/product-category/${menuItem.slug}`);
                }}
              >
                {menuItem.category}
              </Button>
            </TooltipStyled>
          ))}
        </Stack>
      </Container>
    )
  );
};

export default LinkCategory;
