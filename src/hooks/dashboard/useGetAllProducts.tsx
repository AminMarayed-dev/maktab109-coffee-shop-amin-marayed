import { getAllProducts } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProductsToDashboard = ({ page, limit }) => {
  return useQuery<any>({
    queryKey: ["products-dashboard", page, limit],
    queryFn: () => getAllProducts({ page, limit }),
  });
};
