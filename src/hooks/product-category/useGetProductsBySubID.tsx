import { getProductsBySubCategory } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";

function useGetProductsBySubCategoryID({
  categoryID,
  subCategoryID,
}: {
  categoryID: string;
  subCategoryID: string;
}) {
  return useQuery<any>({
    queryKey: ["products-by-subCategoryID", categoryID, subCategoryID],
    queryFn: () => getProductsBySubCategory({ categoryID, subCategoryID }),
  });
}

export default useGetProductsBySubCategoryID;
