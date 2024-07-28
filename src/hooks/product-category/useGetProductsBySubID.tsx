import { getProductsBySubCategory } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";

function useGetProductsBySubCategoryID({ categoryID, subCategoryID }) {
  return useQuery<any>({
    queryKey: ["products-by-subCategoryID", categoryID, subCategoryID],
    queryFn: () => getProductsBySubCategory({ categoryID, subCategoryID }),
    // initialData: props.serverData,
  });
}

export default useGetProductsBySubCategoryID;
