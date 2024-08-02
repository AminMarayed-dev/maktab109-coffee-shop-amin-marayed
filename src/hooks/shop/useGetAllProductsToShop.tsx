import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import { useQuery } from "@tanstack/react-query";

function useGetAllProductsToShop({ limit, initialData, sort }) {
  return useQuery<any>({
    queryKey: ["products-shop", limit, sort],
    queryFn: () => getAllProductsShop({ limit, sort }),
    initialData,
  });
}

export default useGetAllProductsToShop;
