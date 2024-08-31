import { localization } from "@/constant/localization";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/trancateText";
import useHeaderStore from "@/zustand/root-layout/header/store";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import RecentSearchProducts from "./RecentSearchProducts";

const { common, home } = localization;
function ResultSearchBox({ filteredProducts }: { filteredProducts: any }) {
  const router = useRouter();
  const {
    handleCloseDialogSearchBox,
    debouncedSearchValue,
    recentSearchProducts,
  } = useHeaderStore();

  return (
    <Container>
      <Stack
        mt={5}
        mb={3}
        rowGap={4}
        justifyContent="center"
        alignItems="center"
      >
        {recentSearchProducts.length > 0 && (
          <Typography variant="h4" textAlign="center">
            {home.recentSearch}
          </Typography>
        )}

        <Grid container spacing={4} mt={3} justifyContent="center">
          {debouncedSearchValue ? (
            filteredProducts?.length > 0 ? (
              filteredProducts.map((item: any, index: any) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      bgcolor: "primary.dark",
                    }}
                    onClick={() => {
                      handleCloseDialogSearchBox();
                      router.push(`/shop/${item._id}`);
                    }}
                  >
                    <Image
                      src={`http://${item.images[0]}`}
                      // src={item.images[0]}
                      width={265}
                      height={200}
                      objectFit="cover"
                      alt={item.name}
                      loading="lazy"
                    />
                    <CardContent>
                      <Typography
                        sx={{ whiteSpace: "nowrap" }}
                        variant="body1"
                        fontWeight={"bold"}
                      >
                        {truncateText(item.name, 25)}
                      </Typography>
                      <Typography variant="body2" mt={1} color="secondary.dark">
                        {toPersianNumbersWithComma(item.price)} {common.rial}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography variant="h5" color="error" textAlign="center">
                {home.showMessageFailSearchBox}
              </Typography>
            )
          ) : (
            <>
              {recentSearchProducts.length > 0 ? (
                <RecentSearchProducts />
              ) : (
                <Typography variant="h5" textAlign="center">
                  {home.showMessageSearchBox}
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Stack>
    </Container>
  );
}

export default ResultSearchBox;
