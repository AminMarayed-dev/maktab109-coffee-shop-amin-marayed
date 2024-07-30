import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import { useQuery } from "@tanstack/react-query";

function useGetAllProductsToShop(initialData: any) {
  return useQuery<any>({
    queryKey: ["products-shop"],
    queryFn: getAllProductsShop,
    initialData,
    refetchOnWindowFocus: false,
  });
}

export default useGetAllProductsToShop;
