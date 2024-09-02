type LinkImagesType = {
  title: string;
  imageList: Item[];
};

type Item = {
  name: string;
  subSlug: string;
  slug: string;
  src: string;
  aos: string;
};

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TextDivider from "@/components/home/TextDivider";
import useResponsive from "@/hooks/shared/useResponsive";
import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

function LinkImages({ title, imageList }: any) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <Stack rowGap={3}>
      <TextDivider text={title} />
      <Grid container lg={12} xs={12}>
        {imageList.map((item: any, index: number) => (
          <Grid item lg={3} xs={6} key={index}>
            <Button
              sx={{
                bgcolor: "primary.main",
                ":hover": {
                  transform: "scale(0.9)",
                  bgcolor: "primary.main",
                },
                borderRadius: "16px",
                overflow: "hidden",
              }}
              onClick={() =>
                router.push(`/product-category/${item.slug}/${item.subSlug}`)
              }
              fullWidth
              data-aos={`fade-${item.aos}`}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={mdDown ? 210 : 265}
                height={mdDown ? 140 : 210}
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
