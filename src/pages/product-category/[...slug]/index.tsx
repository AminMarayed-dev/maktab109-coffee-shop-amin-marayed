import RootLayout from "@/components/layout/root-layout/RootLayout";
import ProductsCategory from "@/components/products-category/ProductsCategory";
import ProductsSubCategory from "@/components/products-category/ProductsSubCategory";
import { slugs } from "@/components/products-category/utils/slug.data";
import { useRouter } from "next/router";
import { ReactElement } from "react";

function ProductsCategoryPage() {
  const { slug } = useRouter().query;

  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    return <div>404</div>;
  }

  const slugArray = slugs.find((subArray) => subArray.includes(slug[0]));

  if (!slugArray) return <div>404</div>;

  if (slug.length === 1) {
    return <ProductsCategory slug={slug[0]} />;
  } else if (slug.length === 2 && slugArray.includes(slug[1])) {
    return <ProductsSubCategory slug={slug} />;
  } else {
    return <div>404</div>;
  }
}

ProductsCategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProductsCategoryPage;
