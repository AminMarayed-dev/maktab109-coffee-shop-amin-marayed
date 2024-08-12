import { editOrderByID } from "@/api/shared/shared.api";
import { OrderData } from "@/types/dashboard/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditOrderById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, orderData }: { id: string; orderData: OrderData }) =>
      editOrderByID({ id, orderData }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["orders-dashboard"],
      });
    },
  });
};

export default useEditOrderById;
