import DrawerBasket from "@/components/layout/root-layout/header/DrawerBasket";
import DrawerMenu from "@/components/layout/root-layout/header/DrawerMenu";
import PopOver from "@/components/layout/root-layout/header/PopOver";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [open, setState] = useState(false);
  const [anchor, setAnchor] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const openPopOver = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const {
    home: { menuList },
  } = localization;

  const toggleDrawer = (open) => {
    setState(open);
  };
  const handleDrawerMenu = () => {
    setAnchor("left");
    toggleDrawer(true);
  };
  const handleDrawerBasket = () => {
    setAnchor("right");
    toggleDrawer(true);
  };
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-around",
    },
  }));

  return (
    <AppBar elevation={0}>
      <ToolbarStyled
        sx={{ display: "flex", justifyContent: "space-between", py: 2.5 }}
      >
        <IconButton
          size="large"
          edge="start"
          onClick={handleDrawerMenu}
          sx={{
            display: {
              md: "none",
              sm: "inline",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="https://www.melocoffee.com/wp-content/uploads/2019/11/logo-png.png"
          width={60}
          height={60}
          alt="Logo"
        />
        <Box sx={{ ...cssClass }}>
          <Button
            sx={{
              display: {
                md: "inline",
                xs: "none",
              },
              mr: 2,
            }}
          >
            {menuList.loginOrSignUp}
          </Button>
          <IconButton
            size="large"
            edge="start"
            sx={{
              display: {
                md: "inline",
                xs: "none",
              },
              mt: 1,
            }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton size="large" edge="start" onClick={handleDrawerBasket}>
            <LocalMallIcon />
          </IconButton>
        </Box>
        <Drawer open={open} anchor={anchor} onClose={() => toggleDrawer(false)}>
          {anchor === "right" ? <DrawerBasket /> : <DrawerMenu />}
        </Drawer>
      </ToolbarStyled>
      <Divider />
      {/* <PopOver
        openPopOver={openPopOver}
        anchorEl={anchorEl}
        handlePopoverOpen={handlePopoverOpen}
        handlePopoverClose={handlePopoverClose}
      /> */}
    </AppBar>
  );
}

export default Header;
