import { getSubCategoryBySlug } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";

function useGetSubCategoryBySlug(slug: string) {
  return useQuery<any>({
    queryKey: ["subCategoryID-by-slug", slug],
    queryFn: () => getSubCategoryBySlug(slug),
  });
}

export default useGetSubCategoryBySlug;
