import { getCategoryBySlug } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";

function useGetCategoryBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["categoryID-by-slug", slug],
    queryFn: () => getCategoryBySlug(slug),
  });
}

export default useGetCategoryBySlug;
