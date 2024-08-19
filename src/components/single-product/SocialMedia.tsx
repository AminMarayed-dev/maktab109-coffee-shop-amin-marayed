import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { IconButton, Stack } from "@mui/material";
import { blue, red } from "@mui/material/colors";

function SocialMedia() {
  return (
    <Stack direction="row" columnGap={1}>
      <IconButton aria-label="Telegram" sx={{ color: blue[500] }}>
        <TelegramIcon />
      </IconButton>
      <IconButton aria-label="Pinterest" sx={{ color: red[500] }}>
        <PinterestIcon />
      </IconButton>
      <IconButton aria-label="Twitter" sx={{ color: "#333" }}>
        <XIcon />
      </IconButton>
      <IconButton aria-label="Facebook" sx={{ color: red[500] }}>
        <InstagramIcon />
      </IconButton>
    </Stack>
  );
}

export default SocialMedia;
