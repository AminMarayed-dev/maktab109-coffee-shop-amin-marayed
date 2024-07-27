import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import { useQuery } from "@tanstack/react-query";

function useGetAllProductsToShop({
  initialData,
  limit,
}: {
  initialData: any;
  limit: string | number;
}) {
  return useQuery<any>({
    queryKey: ["products-shop", limit],
    queryFn: () => getAllProductsShop({ page: 1, limit }),
    initialData,
    refetchOnWindowFocus: false,
  });
}

export default useGetAllProductsToShop;
