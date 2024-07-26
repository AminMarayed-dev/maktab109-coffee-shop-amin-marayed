import { localization } from "@/constant/localization";
import { Box, Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import TextDivider from "./TextDivider";

type LinkImagesType = {
  title: string;
  imageList: any;
};
const { home } = localization;
function LinkImages({ title, imageList }: LinkImagesType) {
  return (
    <Stack rowGap={3}>
      <TextDivider text={title} />
      <Grid container lg={12}>
        {imageList.map((item, index) => (
          <Grid item lg={3} key={index}>
            <Button
              sx={{
                bgcolor: "primary.main",
                ":hover": {
                  bgcolor: "primary.main",
                },
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={265}
                height={210}
                objectFit="cover"
              />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default LinkImages;
