import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import TextDivider from "./TextDivider";
import { Scale } from "@mui/icons-material";

type LinkImagesType = {
  title: string;
  imageList: any;
};
const { home } = localization;
function LinkImages({ title, imageList }: LinkImagesType) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  return (
    <Stack rowGap={3}>
      <TextDivider text={title} />
      <Grid container lg={12} xs={12}>
        {imageList.map((item, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <Button
              sx={{
                bgcolor: "primary.main",
                ":hover": {
                  bgcolor: "primary.main",
                },
                borderRadius: "16px",
                overflow: "hidden",
              }}
              fullWidth
            >
              <Image
                src={item.src}
                alt={item.name}
                width={mdDown ? 180 : 265}
                height={mdDown ? 160 : 210}
                objectFit="cover"
                className="image-rounded"
              />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default LinkImages;
