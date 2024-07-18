import { Home, Logout } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import Image from "next/image";

function Header() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        src="https://www.melocoffee.com/wp-content/uploads/2019/11/logo-png.png"
        width={60}
        height={60}
        alt="Logo"
      />
      <Box>
        <IconButton>
          <Home />
        </IconButton>
        <IconButton>
          <Logout />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Header;
