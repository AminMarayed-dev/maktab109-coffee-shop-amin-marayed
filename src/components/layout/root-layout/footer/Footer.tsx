import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { listItemsFooter } from "./utils/list.data";

function Footer() {
  return (
    <Grid
      container
      lg={12}
      xs={12}
      sx={{ bgcolor: "primary.dark" }}
      padding={1}
      rowGap={1.5}
    >
      {listItemsFooter.map((item, index) => (
        <Grid item lg={3} xs={6} key={index} textAlign="center">
          <Typography variant="h5" mb={2}>
            {item.title}
          </Typography>
          <Stack rowGap={0.5}>
            {item.hasImage ? (
              <Box>
                <Image src={item.imageURL} alt={item.title} />
              </Box>
            ) : (
              item.body?.map((text, i) => (
                <Typography key={i}>{text}</Typography>
              ))
            )}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default Footer;
