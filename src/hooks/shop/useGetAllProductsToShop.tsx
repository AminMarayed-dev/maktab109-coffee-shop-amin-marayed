import { getAllProductsShop } from "@/api/shop/getAllProductsShop";
import { useQuery } from "@tanstack/react-query";

type Props = {
  limit: string | number;
  sort: string;
  initialData: any;
};

function useGetAllProductsToShop({ limit, initialData, sort }: Props) {
  return useQuery<any>({
    queryKey: ["products-shop", "products-dashboard", limit, sort],
    queryFn: () => getAllProductsShop({ limit, sort }),
    initialData,
  });
}

export default useGetAllProductsToShop;
