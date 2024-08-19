import { getProductById } from "@/api/dashboard/getProductById.api";
import { getAllProducts } from "@/api/shared/shared.api";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import SingleProduct from "@/components/single-product/SingleProduct";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";

function SingleProductPage({
  productID,
  initialData,
}: {
  productID: any;
  initialData: any;
}) {
  const { data: product } = useQuery({
    queryKey: ["productID", productID],
    queryFn: () => getProductById(productID),
    initialData,
  });
  return <SingleProduct product={product} />;
}

export async function getStaticPaths() {
  const response = await getAllProducts({ page: 1, limit: "all" });
  const paths = response?.products.map((product: any) => ({
    params: { slug: product._id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: any }) {
  const initialData = await getProductById(params.slug);
  return { props: { productID: params.slug, initialData }, revalidate: 60 };
}

SingleProductPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default SingleProductPage;
