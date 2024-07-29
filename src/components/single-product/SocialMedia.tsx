import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Stack } from "@mui/material";

function SocialMedia() {
  return (
    <Stack direction="row" columnGap={1}>
      <IconButton aria-label="Telegram">
        <TelegramIcon />
      </IconButton>
      <IconButton aria-label="Pinterest">
        <PinterestIcon />
      </IconButton>
      <IconButton aria-label="Twitter">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="Facebook">
        <FacebookIcon />
      </IconButton>
    </Stack>
  );
}

export default SocialMedia;
