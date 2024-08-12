import { cssClass } from "@/constant/cssClass";
import { localization } from "@/constant/localization";
import useResponsive from "@/hooks/shared/useResponsive";
import useGetAllProductsToShop from "@/hooks/shop/useGetAllProductsToShop";
import { ProductData } from "@/types/dashboard/type";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import TextDivider from "./TextDivider";

const { common, home } = localization;
const { styleButtonLink } = cssClass;
function ProductsCategory({ title, data }: { title: string; data: any }) {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });
  const router = useRouter();
  const { data: sampleData } = useGetAllProductsToShop({
    limit: 12,
    sort: "createdAt",
    initialData: data.dehydratedState,
  });
  const sampleProductsShop = sampleData?.data?.products;
  return (
    <Stack mt={5} mb={3} rowGap={4} justifyContent="center" alignItems="center">
      <TextDivider text={title} />
      <Grid container lg={12} xs={12} spacing={2}>
        {sampleProductsShop?.map((product: ProductData, index: number) => (
          <Grid item lg={4} xs={6} key={index}>
            <Button
              sx={styleButtonLink}
              onClick={() => router.push(`/shop/${product._id}`)}
            >
              <Card
                sx={{
                  height: `${mdDown} ? 200px : 400px`,
                  bgcolor: "primary.dark",
                }}
              >
                <Image
                  src={`http://${product.images[0]}`}
                  width={mdDown ? 200 : 380}
                  height={mdDown ? 200 : 300}
                  objectFit="cover"
                  alt={product.name}
                  loading="lazy"
                />
                <CardContent>
                  <Typography
                    sx={{ whiteSpace: "nowrap" }}
                    variant="body1"
                    fontWeight={"bold"}
                  >
                    {mdDown
                      ? truncateText(product.name, 16)
                      : truncateText(product.name, 40)}
                  </Typography>
                  <Typography variant="body2" mt={1} color="secondary.dark">
                    {toPersianNumbersWithComma(product.price)} {common.rial}
                  </Typography>
                </CardContent>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Button
        sx={{ bgColor: "secondary.main" }}
        onClick={() => router.push("/shop")}
      >
        {home.showAllProducts}
      </Button>
    </Stack>
  );
}

export default ProductsCategory;
