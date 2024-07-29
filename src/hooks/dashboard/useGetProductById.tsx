import { getProductById } from "@/api/dashboard/getProductById.api";
import { useQuery } from "@tanstack/react-query";

function useGetProductById(id: string) {
  return useQuery<any>({
    queryKey: ["product-dashboard", "single-product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    refetchOnMount: "always",
  });
}

export default useGetProductById;
