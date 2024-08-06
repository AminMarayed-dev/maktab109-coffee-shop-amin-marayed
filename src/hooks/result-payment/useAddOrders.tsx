import { addOrdersApi } from "@/api/shared/shared.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useAddOrders() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: any) => addOrdersApi(data),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products-dashboard"],
      });
    },
  });
  return mutation;
}

export default useAddOrders;
