import { listItemsFooter } from "@/components/layout/root-layout/footer/utils/list.data";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

function Footer() {
  return (
    <Grid
      container
      lg={12}
      xs={12}
      sx={{ bgcolor: "primary.dark" }}
      padding={3.5}
      rowGap={1.5}
    >
      {listItemsFooter.map((item, index) => (
        <Grid item lg={3} xs={6} key={index} textAlign="center">
          <Typography variant="h6" mb={2}>
            {item.title}
          </Typography>
          <Stack rowGap={1}>
            {item.hasImage ? (
              <Box>
                <Image src={item.imageURL ?? ""} alt={item.title} />
              </Box>
            ) : (
              item.body?.map((text, i) => (
                <Typography key={i} variant="body1">
                  {text}
                </Typography>
              ))
            )}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default Footer;
