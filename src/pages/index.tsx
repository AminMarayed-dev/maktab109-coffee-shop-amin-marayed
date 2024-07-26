import { getAllProducts } from "@/api/shared/shared.api";
import Home from "@/components/home/Home";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import useGetProductsByLimit from "@/hooks/home/useGetAllProductsByLimit";
import { ReactElement } from "react";

export default function HomePage(props) {
  const { data: productsByLimit } = useGetProductsByLimit({ limit: 12, props });
  return <Home data={productsByLimit} />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const serverData = await getAllProducts({ page: 1, limit: 12 });
  return {
    props: {
      serverData,
    },
    revalidate: 60 * 30,
  };
}
