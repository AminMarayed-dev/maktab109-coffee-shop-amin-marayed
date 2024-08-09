import { getAllProducts } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProductsToDashboard = ({ page, limit, sort }) => {
  return useQuery<any>({
    queryKey: ["products-dashboard", page, limit, sort],
    queryFn: () => getAllProducts({ page, limit, sort }),
  });
};
