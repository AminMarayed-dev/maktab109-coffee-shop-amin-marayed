// import { getProductById } from "@/api/dashboard/getProductById.api";
// import { getAllProducts } from "@/api/shared/shared.api";
// import RootLayout from "@/components/layout/root-layout/RootLayout";
// import SingleProduct from "@/components/single-product/SingleProduct";
// import { useQuery } from "@tanstack/react-query";
// import { ReactElement } from "react";

// function SingleProductPage({
//   productID,
//   initialData,
// }: {
//   productID: any;
//   initialData: any;
// }) {
//   const { data: product } = useQuery({
//     queryKey: ["productID", productID],
//     queryFn: () => getProductById(productID),
//     initialData,
//   });
//   return <SingleProduct product={product} />;
// }

// export async function getStaticPaths() {
//   const response = await getAllProducts({ page: 1, limit: "all" });
//   const paths = response?.products.map((product: any) => ({
//     params: { slug: product._id },
//   }));
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }: { params: any }) {
//   const initialData = await getProductById(params.slug);
//   if (!initialData) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { productID: params.slug, initialData }, revalidate: 60 };
// }

// SingleProductPage.getLayout = function getLayout(page: ReactElement) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export default SingleProductPage;

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
  return <SingleProduct product={initialData} />;
}

export async function getStaticPaths() {
  try {
    const response = await getAllProducts({ page: 1, limit: "all" });
    const paths = response?.products.map((product: any) => ({
      params: { slug: product._id },
    }));
    return { paths, fallback: true };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { paths: [], fallback: true };
  }
}

// export async function getStaticProps({ params }: { params: any }) {
//   try {
//     const initialData = await getProductById(params.slug);
//     if (!initialData) {
//       return {
//         notFound: true,
//       };
//     }
//     return { props: { productID: params.slug, initialData }, revalidate: 60 };
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return {
//       notFound: true,
//     };
//   }
// }

export async function getStaticProps({ params }: { params: any }) {
  try {
    const initialData = await getProductById(params.slug);
    if (!initialData) {
      return {
        notFound: true,
      };
    }
    return { props: { productID: params.slug, initialData }, revalidate: 60 };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}

SingleProductPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default SingleProductPage;
