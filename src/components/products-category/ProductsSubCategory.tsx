import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useGetCategoryBySlug from "@/hooks/product-category/useGetCategoryBySlug";
import useGetProductsBySubCategoryID from "@/hooks/product-category/useGetProductsBySubID";
import useGetSubCategoryBySlug from "@/hooks/product-category/useGetSubCategoryByslug";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
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
import { useRouter } from "next/router";
import CheckQuantityAndRate from "../shop/checkQuantityAndRate";

const { shop, common } = localization;
const { center, styleCard } = cssClass;
function ProductsSubCategory({ slug }: { slug: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();
  const { data: categoryData } = useGetCategoryBySlug(slug[0]);
  const { data: subCategoryData } = useGetSubCategoryBySlug(slug[1]);

  const {
    data: productsBySubCategory,
    isLoading,
    isError,
  } = useGetProductsBySubCategoryID({
    categoryID: categoryData?._id,
    subCategoryID: subCategoryData?._id,
  });
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
        <Typography variant="body1">
          {toPersianNumbersWithComma(productsBySubCategory.length)} نتیجه
        </Typography>
      </Box>
      <Divider />
      <Stack justifyContent="center" alignItems="center">
        <Grid container lg={15} xs={12} mt={3} spacing={2}>
          {productsBySubCategory?.map((product: any, index: number) => (
            <Grid item lg={3} xs={6} key={index}>
              <Card
                sx={{
                  ...styleCard,
                  cursor: "pointer",
                  height: mdDown ? "400px" : "430px",
                }}
                elevation={0}
                onClick={() => router.push(`/shop/${product._id}`)}
              >
                <Image
                  src={`http://${product.images[0]}`}
                  // src={product.images[0]}
                  width={mdDown ? 210 : 300}
                  height={mdDown ? 150 : 195}
                  objectFit="cover"
                  alt={product.name}
                  loading="lazy"
                />
                {product.quantity > 0 ? (
                  <>
                    <CardContent>
                      <Typography
                        variant={mdDown ? "body2" : "body1"}
                        fontWeight={"bold"}
                        textAlign="center"
                      >
                        {product.name}
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
                      variant={mdDown ? "body2" : "body1"}
                      fontWeight={"bold"}
                      textAlign="center"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      mt={6}
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
