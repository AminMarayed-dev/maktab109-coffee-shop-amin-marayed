import { getAllOrders } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllOrdersToDashboard = ({ page, limit }) => {
  return useQuery<any>({
    queryKey: ["orders-dashboard", page, limit],
    queryFn: () => getAllOrders({ page, limit }),
  });
};
