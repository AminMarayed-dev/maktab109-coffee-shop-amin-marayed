import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import Shop from "@/components/shop/Shop";
import useGetAllProductsToShop from "@/hooks/shop/useGetAllProductsToShop";
import { ReactElement } from "react";

function ShopPage(props) {
  const { data: productsShop } = useGetAllProductsToShop(props.serverData);
  return <Shop data={productsShop} />;
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const products = await getAllProductsShop();

  return {
    props: {
      serverData: products,
    },
    revalidate: 60 * 30,
  };
}

export default ShopPage;
