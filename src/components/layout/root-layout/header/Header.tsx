import logo from "@/assets/images/marayedcoffee-high-resolution-logo.png";
import LinkCategory from "@/components/layout/root-layout/header/desktop/LinkCategory";
import DrawerMenu from "@/components/layout/root-layout/header/mobile/DrawerMenu";
import DrawerBasket from "@/components/layout/root-layout/header/shared/drawer-basket/DrawerBasket";
import ToolbarStyled from "@/components/layout/root-layout/header/shared/ToolbarStyled";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import { routes } from "@/constant/routes";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useCartStore } from "@/zustand/cart/store";
import useHeaderStore from "@/zustand/root-layout/header/store";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MenuUser from "./shared/MenuUser";

type anchor = "left" | "right" | "bottom" | "top" | undefined;
const {
  home: { menuList },
} = localization;
const { center, styleContainerToobar, styleButtonLink } = cssClass;

function Header() {
  const totalItems = useCartStore((state) => state.totalItems);
  const router = useRouter();
  const onlyMobile = useResponsive({ query: "only", breakpoints: "xs" });
  const onlyDesktop = useResponsive({ query: "only", breakpoints: "xl" });
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const openDrawer = useHeaderStore((state) => state.openDrawer);
  const anchorDrawer: anchor = useHeaderStore((state) => state.anchorDrawer);
  const isPersist = useHeaderStore((state) => state.isPersist);
  const setIsPersist = useHeaderStore((state) => state.setIsPersist);
  const handleDrawerMenu = useHeaderStore((state) => state.handleDrawerMenu);
  const handleDrawerBasket = useHeaderStore(
    (state) => state.handleDrawerBasket
  );
  const handleCloseDrawer = useHeaderStore((state) => state.handleCloseDrawer);
  useEffect(() => {
    const token = getCookie("accessToken");
    if (token) {
      setIsPersist(true);
    }
  }, []);

  return (
    <AppBar elevation={0} position="sticky">
      <ToolbarStyled>
        <Container sx={styleContainerToobar}>
          {onlyMobile && (
            <IconButton
              size="large"
              edge="start"
              onClick={handleDrawerMenu}
              sx={{ mr: `${isPersist && 3}` }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Button
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "primary.main",
              },
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Box width={mdDown ? 80 : 100} height={mdDown ? 80 : 100}>
              <Image src={logo} layout="fill" alt="Logo" />
            </Box>
          </Button>

          <Box sx={center}>
            {isPersist ? (
              <MenuUser />
            ) : (
              onlyDesktop && (
                <Button
                  sx={{
                    mr: 2,
                  }}
                  onClick={() => router.push(routes.login)}
                >
                  {menuList.loginOrSignUp}
                </Button>
              )
            )}
            {onlyDesktop && (
              <IconButton size="large" edge="start">
                <SearchIcon />
              </IconButton>
            )}
            <IconButton
              size="large"
              edge="start"
              onClick={() => {
                if (router.pathname !== "/cart") handleDrawerBasket();
              }}
            >
              <Badge
                badgeContent={toPersianNumbers(totalItems)}
                color="secondary"
              >
                <LocalMallIcon />
              </Badge>
            </IconButton>
          </Box>
        </Container>

        <Drawer
          open={openDrawer}
          anchor={anchorDrawer}
          onClose={handleCloseDrawer}
        >
          {anchorDrawer === "right" ? <DrawerBasket /> : <DrawerMenu />}
        </Drawer>
      </ToolbarStyled>
      <Divider />
      <LinkCategory />
    </AppBar>
  );
}

export default Header;
