import { getAllOrders } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

export const useGetAllOrdersToDashboard = ({
  page,
  limit,
  time,
  deliveryStatus,
}) => {
  return useQuery<any>({
    queryKey: ["orders-dashboard", page, limit, time, deliveryStatus],
    queryFn: () => getAllOrders({ page, limit, time, deliveryStatus }),
  });
};
