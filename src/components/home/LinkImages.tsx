import TextDivider from "@/components/home/TextDivider";
import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

type LinkImagesType = {
  title: string;
  imageList: Item[];
};

type Item = {
  name: string;
  subSlug: string;
  slug: string;
  src: string;
};

function LinkImages({ title, imageList }: LinkImagesType) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();
  return (
    <Stack rowGap={3}>
      <TextDivider text={title} />
      <Grid container lg={12} xs={12}>
        {imageList.map((item, index: number) => (
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
              onClick={() =>
                router.push(`/product-category/${item.slug}/${item.subSlug}`)
              }
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
