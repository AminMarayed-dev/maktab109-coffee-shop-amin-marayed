import { getOrderByID } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

function useGetOrderById(id: string) {
  return useQuery<any>({
    queryKey: ["orders-dashboard", id],
    queryFn: () => getOrderByID(id),
    enabled: !!id,
    refetchOnMount: "always",
  });
}

export default useGetOrderById;
