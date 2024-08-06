import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import useCommonStore from "@/zustand/common/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Drawer,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import ButtonDrawerFilter from "../shared/ButtonDrawerFilter";
import DrawerFilter from "../shared/DrawerFilter";
import SelectFilter from "../shared/SelectFilter";
import CheckQuantityAndRate from "./checkQuantityAndRate";
import useGetAllProductsToShop from "@/hooks/shop/useGetAllProductsToShop";

const { shop, common } = localization;
const { styleCard, styleButtonLink } = cssClass;

function Shop({ props }) {
  const { data: productsShop } = useGetAllProductsToShop({
    limit: props.limit || 15,
    sort: props?.sort || "-createdAt",
    initialData: props.dehydratedState,
  });
  const router = useRouter();
  const handleLimitProduct = () => {
    const currentLimit = router.query.limit ? parseInt(router.query.limit) : 15;
    const newLimit = currentLimit + 15;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, limit: newLimit },
    });
  };
  const handleSelectFilterProduct = (filter) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: filter },
    });
  };

  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const openDrawerFilter = useCommonStore((state) => state.openDrawerFilter);
  const handleCloseDrawerFilter = useCommonStore(
    (state) => state.handleCloseDrawerFilter
  );

  return (
    <Container>
      <Typography variant="h4" mb={7} textAlign="center">
        {shop.shopInternet}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography variant="body2">{shop.shopInternet}</Typography>
        <Typography variant="body1">نمایش 1–48 از 2584 نتیجه</Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <ButtonDrawerFilter />
        <SelectFilter handleSelectFilterProduct={handleSelectFilterProduct} />
        <Drawer
          open={openDrawerFilter}
          anchor={"left"}
          onClose={handleCloseDrawerFilter}
        >
          <DrawerFilter />
        </Drawer>
      </Box>

      <Stack justifyContent="center" alignItems="center" rowGap={2}>
        <Grid container lg={15} xs={12} mt={3} spacing={2}>
          {productsShop?.map((product, index) => (
            <Grid item lg={3} xs={6} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  ...styleCard,
                }}
                elevation={0}
                onClick={() => router.push(`/shop/${product._id}`)}
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
        <Button onClick={handleLimitProduct}>{shop.moreProducts}</Button>
      </Stack>
    </Container>
  );
}

export default Shop;
