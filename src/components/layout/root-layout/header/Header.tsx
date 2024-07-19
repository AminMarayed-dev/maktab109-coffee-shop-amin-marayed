import LinkCategory from "@/components/layout/root-layout/header/desktop/LinkCategory";
import DrawerMenu from "@/components/layout/root-layout/header/mobile/DrawerMenu";
import DrawerBasket from "@/components/layout/root-layout/header/shared/DrawerBasket";
import ToolbarStyled from "@/components/layout/root-layout/header/shared/ToolbarStyled";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useHeaderStore from "@/zustand/root-layout/header/store";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
} from "@mui/material";
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MenuAdminUser from "./mobile/MenuAdminUser";

const {
  home: { menuList },
} = localization;
const { onlyDesktop, onlyMobile, center, styleContainerToobar } = cssClass;

function Header() {
  const router = useRouter();
  const openDrawer = useHeaderStore((state) => state.openDrawer);
  const anchorDrawer = useHeaderStore((state) => state.anchorDrawer);
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
    <AppBar elevation={0}>
      <ToolbarStyled>
        <Container sx={styleContainerToobar}>
          <IconButton
            size="large"
            edge="start"
            onClick={handleDrawerMenu}
            sx={onlyMobile}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="https://www.melocoffee.com/wp-content/uploads/2019/11/logo-png.png"
            width={60}
            height={60}
            alt="Logo"
          />
          <Box sx={center}>
            <Button
              sx={{
                ...onlyDesktop,
                mr: 2,
              }}
              onClick={() => router.push("/auth/login")}
            >
              {isPersist ? menuList.myAccount : menuList.loginOrSignUp}
            </Button>

            <IconButton
              size="large"
              edge="start"
              sx={{
                ...onlyDesktop,
                mt: 1,
              }}
            >
              <SearchIcon />
            </IconButton>
            {isPersist && <MenuAdminUser />}
            <IconButton size="large" edge="start" onClick={handleDrawerBasket}>
              <LocalMallIcon />
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
