import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import useHeaderStore from "@/zustand/root-layout/header/store";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const { common } = localization;
function RecentSearchProducts() {
  const router = useRouter();

  const { recentSearchProducts, handleCloseDialogSearchBox } = useHeaderStore();
  return (
    <>
      {recentSearchProducts.map((product: any, index: any) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              bgcolor: "primary.dark",
            }}
            onClick={() => {
              handleCloseDialogSearchBox();
              router.push(`/shop/${product._id}`);
            }}
          >
            <Image
              // src={`http://${product.images[0]}`}
              src={product.images[0]}
              width={265}
              height={200}
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
                {truncateText(product.name, 25)}
              </Typography>
              <Typography variant="body2" mt={1} color="secondary.dark">
                {toPersianNumbersWithComma(product.price)} {common.rial}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default RecentSearchProducts;
