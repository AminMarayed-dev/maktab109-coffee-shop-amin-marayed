import { getCategoryBySlug } from "@/api/product-category/productCategory.api";
import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import Shop from "@/components/shop/Shop";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ReactElement } from "react";

function ShopPage(props: any) {
  return (
    <Shop
      props={{
        data: props.dehydratedState,
        limit: props.limit,
        sort: props.sort,
        slugname: props.slugname,
      }}
    />
  );
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context: any) {
  const limit = context.query.limit ? parseInt(context.query.limit) : 15;
  const sort = context.query?.sort || "-createdAt";
  const slugname = context.query.slugname || "";
  // const urlRoute = context?.resolvedUrl?.split("?")[1].split("&");
  // console.log(urlRoute);

  const queryClient = new QueryClient();

  const queries = [
    queryClient.prefetchQuery({
      queryKey: ["products-shop", limit, sort],
      queryFn: () => getAllProductsShop({ limit, sort }),
    }),
    // queryClient.prefetchQuery({
    //   queryKey: ["products-by-slug", slugname],
    //   queryFn: () => getCategoryBySlug(slugname),
    // }),
  ];
  await Promise.all(queries);

  // await queryClient.prefetchQuery({
  //   queryKey: ["products-shop", limit, sort],
  //   queryFn: () => getAllProductsShop({ limit, sort }),
  // });

  const dehydratedState = dehydrate(queryClient);
  return {
    props: {
      dehydratedState,
      limit,
      sort,
      slugname,
    },
  };
}

export default ShopPage;
