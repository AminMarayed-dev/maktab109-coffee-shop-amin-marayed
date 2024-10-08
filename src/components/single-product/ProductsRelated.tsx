import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useGetProductsByCategoryID from "@/hooks/product-category/useGetProductsByCategoryID";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

const { singleProduct, shop, common } = localization;
const { styleCard, styleButtonLink } = cssClass;
function ProductsRelated({ product }: { product: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();
  const numberSliceProducts = mdDown ? 2 : 4;
  const {
    data: productsRelatedCategory,
    isLoading,
    isError,
  } = useGetProductsByCategoryID(product.category._id);
  if (isLoading) <div>loading...</div>;
  if (isError) <div>error...</div>;

  const nextProducts = () => {
    if (currentIndex + numberSliceProducts < productsRelatedCategory?.length) {
      setCurrentIndex((prevIndex) => prevIndex + numberSliceProducts);
    }
  };

  const prevProducts = () => {
    if (currentIndex - numberSliceProducts >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - numberSliceProducts);
    }
  };

  return (
    <Stack mt={4} rowGap={3}>
      <Typography variant="h5">{singleProduct.productsRelated}</Typography>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={prevProducts} disabled={currentIndex === 0}>
          <KeyboardArrowRightIcon />
        </IconButton>
        <Grid container lg={12} xs={12} spacing={2}>
          {productsRelatedCategory
            ? productsRelatedCategory
                .slice(currentIndex, currentIndex + numberSliceProducts)
                .map((product: any, index: number) => (
                  <Grid key={index} item lg={3} xs={6}>
                    <Button
                      sx={styleButtonLink}
                      onClick={() => router.push(`/shop/${product?._id}`)}
                    >
                      <Card
                        sx={{
                          ...styleCard,
                          justifyContent: "flex-start",
                          height: mdDown ? "295px" : "300px",
                          alignItems: "center",
                        }}
                        elevation={0}
                      >
                        <Image
                          // src={`http://${product?.images[0]}`}
                          src={product.images[0]}
                          width={mdDown ? 200 : 300}
                          height={mdDown ? 150 : 180}
                          objectFit="cover"
                          alt={product?.name}
                          loading="lazy"
                        />
                        {product?.quantity > 0 ? (
                          <>
                            <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                variant={mdDown ? "body2" : "body1"}
                                fontWeight={"bold"}
                                textAlign="center"
                              >
                                {mdDown
                                  ? truncateText(product.name, 36)
                                  : product.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                mt={1}
                                color="secondary.dark"
                                textAlign={"center"}
                              >
                                {toPersianNumbersWithComma(product?.price)}{" "}
                                {common.rial}
                              </Typography>
                            </CardContent>
                            {/* <CardActions>
                              <Button
                                sx={{
                                  fontSize: mdDown ? "small" : "medium",
                                }}
                              >
                                {common.addProductToBasket}
                              </Button>
                            </CardActions> */}
                          </>
                        ) : (
                          <CardContent>
                            <Typography
                              variant={mdDown ? "body2" : "body1"}
                              fontWeight={"bold"}
                              textAlign="center"
                            >
                              {product.name}
                            </Typography>
                            <Typography
                              variant="h6"
                              textAlign={"center"}
                              color="error"
                            >
                              {shop.unavailable}
                            </Typography>
                          </CardContent>
                        )}
                      </Card>
                    </Button>
                  </Grid>
                ))
            : ""}
        </Grid>
        <IconButton
          onClick={nextProducts}
          disabled={
            currentIndex + numberSliceProducts >=
            productsRelatedCategory?.length
          }
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default ProductsRelated;
