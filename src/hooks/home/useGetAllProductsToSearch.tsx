import { getAllProducts } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

function useGetAllProductsToSearch() {
  return useQuery<any>({
    queryKey: ["all-products-to-search"],
    queryFn: () => getAllProducts({ limit: "all", page: 1 }),
  });
}

export default useGetAllProductsToSearch;
