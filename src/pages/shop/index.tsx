import { api } from "@/api/config/config";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import Shop from "@/components/shop/Shop";
import { ReactElement } from "react";

function ShopPage(props) {
  return <Shop data={props.serverData} />;
}

ShopPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticProps() {
  const response = await api.get("/products?sort=createdAt&page=1&limit=15");
  const serverData = response.data.data.products;
  return {
    props: {
      serverData,
    },
    revalidate: 60 * 30,
  };
}

export default ShopPage;
