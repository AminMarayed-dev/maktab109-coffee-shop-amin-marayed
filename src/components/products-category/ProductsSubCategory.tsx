import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useGetCategoryBySlug from "@/hooks/product-category/useGetCategoryBySlug";
import useGetProductsBySubCategoryID from "@/hooks/product-category/useGetProductsBySubID";
import useGetSubCategoryBySlug from "@/hooks/product-category/useGetSubCategoryByslug";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CheckQuantityAndRate from "../shop/checkQuantityAndRate";

const { shop, common } = localization;
const { center } = cssClass;
function ProductsSubCategory({ slug }: { slug: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const { data: categoryData } = useGetCategoryBySlug(slug[0]);
  console.log(slug[1]);
  const { data: subCategoryData } = useGetSubCategoryBySlug(slug[1]);
  console.log(subCategoryData);

  console.log(categoryData?._id, subCategoryData?._id);
  const {
    data: productsBySubCategory,
    isLoading,
    isError,
  } = useGetProductsBySubCategoryID({
    categoryID: categoryData?._id,
    subCategoryID: subCategoryData?._id,
  });
  console.log(productsBySubCategory);
  if (isLoading) <div>loading...</div>;
  if (isError) <div>isError...</div>;
  return (
    <Container>
      <Typography variant="h4" mb={7} textAlign="center">
        {subCategoryData?.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="body2">{subCategoryData?.name}</Typography>
        <Typography variant="body1">نمایش 1–48 از 2584 نتیجه</Typography>
      </Box>
      <Divider />
      <Stack justifyContent="center" alignItems="center">
        <Grid container lg={15} xs={12} mt={3} spacing={2}>
          {productsBySubCategory?.map((product, index) => (
            <Grid item lg={3} xs={6} key={index}>
              <Card
                sx={{
                  ...center,
                  flexDirection: "column",
                  height: `${mdDown} ? 200px : 400px`,
                  border: "1px solid #52525b",
                }}
                elevation={0}
              >
                <Image
                  src={`http://${product.images[0]}`}
                  width={mdDown ? 200 : 300}
                  height={195}
                  objectFit="cover"
                  alt={product.name}
                  loading="lazy"
                />
                {product.quantity > 0 ? (
                  <>
                    <CardContent>
                      <Typography
                        variant="body1"
                        fontWeight={"bold"}
                        textAlign="center"
                      >
                        {mdDown
                          ? truncateText(product.name, 16)
                          : truncateText(product.name, 25)}
                      </Typography>
                      <CheckQuantityAndRate rate={3} />
                      <Typography
                        variant="body2"
                        mt={1}
                        color="secondary.dark"
                        textAlign={"center"}
                      >
                        {toPersianNumbersWithComma(product.price)} {common.rial}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button>{common.addProductToBasket}</Button>
                    </CardActions>
                  </>
                ) : (
                  <CardContent>
                    <Typography
                      variant="body1"
                      fontWeight={"bold"}
                      textAlign="center"
                    >
                      {mdDown
                        ? truncateText(product.name, 16)
                        : truncateText(product.name, 25)}
                    </Typography>
                    <Typography
                      variant="h6"
                      textAlign={"center"}
                      mt={3}
                      color="error"
                    >
                      {shop.unavailable}
                    </Typography>
                  </CardContent>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default ProductsSubCategory;
