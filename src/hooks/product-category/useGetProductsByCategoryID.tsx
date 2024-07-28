import { getProductsByCategory } from "@/api/product-category/productCategory.api";
import { useQuery } from "@tanstack/react-query";


function useGetProductsByCategoryID(categoryID:string) {
    return useQuery<any>({
        queryKey: ["products-by-categoryID", categoryID],
        queryFn: () => getProductsByCategory(categoryID),
        // initialData: props.serverData,
      });
}

export default useGetProductsByCategoryID