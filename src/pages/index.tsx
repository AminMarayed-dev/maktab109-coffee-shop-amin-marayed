import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import Home from "@/components/home/Home";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { ReactElement } from "react";

export default function HomePage(props) {
  return <Home data={props.dehydratedState} />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products-shop"],
    queryFn: () => getAllProductsShop({ limit: 12, sort: "createdAt" }),
  });

  const dehydratedState = dehydrate(queryClient);
  return {
    props: {
      dehydratedState,
    },
    revalidate: 60 * 30,
  };
}
