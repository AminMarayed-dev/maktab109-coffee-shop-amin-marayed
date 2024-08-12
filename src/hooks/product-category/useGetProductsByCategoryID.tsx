import { getProductsByCategory } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";

function useGetProductsByCategoryID(categoryID: string) {
  return useQuery({
    queryKey: ["products-by-categoryID", categoryID],
    queryFn: () => getProductsByCategory(categoryID),
  });
}

export default useGetProductsByCategoryID;
