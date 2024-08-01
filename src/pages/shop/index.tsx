import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import Shop from "@/components/shop/Shop";
import useGetAllProductsToShop from "@/hooks/shop/useGetAllProductsToShop";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ReactElement } from "react";

function ShopPage(props) {
  const { data: productsShop, status } = useGetAllProductsToShop({
    limit: props.limit,
    sort: props.sort,
    initialData: props.dehydratedState,
  });

  return <Shop data={productsShop} status={status} />;
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const limit = context.query.limit ? parseInt(context.query.limit) : 15;
  const sort = context.query?.sort || "createdAt";

  const queryClient = new QueryClient();

  const queries = [];

  await queryClient.prefetchQuery({
    queryKey: ["products-shop", limit, sort],
    queryFn: () => getAllProductsShop({ limit, sort }),
  });

  const dehydratedState = dehydrate(queryClient);
  return {
    props: {
      dehydratedState,
      limit,
      sort,
    },
  };
}

export default ShopPage;
