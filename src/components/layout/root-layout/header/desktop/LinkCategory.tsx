import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Container, Stack, styled } from "@mui/material";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { useRouter } from "next/router";
import menuItems from "../utils/menu.data";
import ListSubCategory from "./ListSubCategory";

const TooltipStyled = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(75, 54, 33)",
    color: "#fff",
    maxWidth: 300,
  },
}));

const {
  home: { menuList },
} = localization;

const LinkCategory = () => {
  const OnlyDesktop = useResponsive({ query: "only", breakpoints: "xl" });
  const router = useRouter();

  // delete first and last element
  const slicedMenuItems = menuItems.slice(1, menuItems.length - 1);

  return (
    OnlyDesktop && (
      <Container>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button
            sx={{
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "secondary.light",
              },
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            {menuList.home}
          </Button>
          {slicedMenuItems.map((menuItem: any, index) => (
            <TooltipStyled
              key={index}
              title={
                <ListSubCategory
                  subCategoryItems={menuItem.items}
                  slugCategory={menuItem.slug}
                />
              }
              disableFocusListener={true}
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
