import { getAllOrders } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  page: number;
  limit: string | number;
  time: string;
  deliveryStatus: boolean | string;
};
export const useGetAllOrdersToDashboard = ({
  page,
  limit,
  time,
  deliveryStatus,
}: Props) => {
  return useQuery<any>({
    queryKey: ["orders-dashboard", page, limit, time, deliveryStatus],
    queryFn: () => getAllOrders({ page, limit, time, deliveryStatus }),
  });
};
