import DrawerFilter from "@/components/shared/DrawerFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import useGetAllProductsToShop from "@/hooks/shop/useGetAllProductsToShop";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
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
import CheckQuantityAndRate from "./checkQuantityAndRate";

const { shop, common } = localization;
const { styleCard } = cssClass;

function Shop({ props }: { props: any }) {
  const router = useRouter();
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const openDrawerFilter = useCommonStore((state) => state.openDrawerFilter);
  const { data } = useGetAllProductsToShop({
    limit: props.limit || 15,
    sort: props?.sort || "-createdAt",
    initialData: props.dehydratedState,
  });

  const handleLimitProduct = () => {
    const currentLimit = router.query.limit
      ? parseInt(router.query.limit as any)
      : 15;
    const newLimit = currentLimit + 15;
    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, limit: newLimit },
      },
      undefined,
      { scroll: false }
    );
  };
  const handleSelectFilterProduct = (filter: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: filter },
    });
  };

  const handleCloseDrawerFilter = useCommonStore(
    (state) => state.handleCloseDrawerFilter
  );

  const productsShop = data?.data?.products;

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
        <Typography variant="body1">{`نمایش ${toPersianNumbers(
          1
        )}-${toPersianNumbers(productsShop?.length)}`}</Typography>
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
          <DrawerFilter slugname={props.slugname} />
        </Drawer>
      </Box>

      <Stack justifyContent="center" alignItems="center" rowGap={2}>
        <Grid container lg={15} xs={12} mt={3} spacing={2}>
          {productsShop?.map((product: any, index: number) => (
            <Grid item lg={3} xs={6} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  ...styleCard,
                  justifyContent:
                    product.quantity > 0 ? "space-between" : "flex-start",
                }}
                elevation={0}
                onClick={() => router.push(`/shop/${product._id}`)}
              >
                <Image
                  // src={`http://${product.images[0]}`}
                  src={product.images[0]}
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
        {data?.total <= props.limit ||
          (15 && (
            <Button onClick={handleLimitProduct}>{shop.moreProducts}</Button>
          ))}
      </Stack>
    </Container>
  );
}

export default Shop;
