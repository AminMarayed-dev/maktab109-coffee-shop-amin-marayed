import useResponsive from "@/hooks/shared/useResponsive";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

function SingleProductImages({ product }: any) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const [mainImage, setMainImage] = useState(product.images[0]);

  useEffect(() => {
    if (product?.images && product?.images.length > 0) {
      setMainImage(product?.images[0]);
    }
  }, [product]);

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };
  return (
    <Stack justifyContent="center" rowGap={2}>
      <Box>
        <Image
          width={mdDown ? 380 : 450}
          height={mdDown ? 260 : 450}
          // src={`http://${mainImage}`}
          src={mainImage}
          alt={product?.name}
          style={{ borderRadius: "10px" }}
        />
      </Box>
      {product?.images.length > 1 && (
        <Box sx={{ display: "flex", gap: 1 }}>
          {product?.images.slice(0, 3).map((image: string, index: number) => (
            <Image
              key={index}
              width={mdDown ? 95 : 110}
              height={mdDown ? 95 : 110}
              // src={`http://${image}`}
              src={image}
              alt={product?.name}
              style={{ borderRadius: "10px", cursor: "pointer" }}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
}

export default SingleProductImages;
