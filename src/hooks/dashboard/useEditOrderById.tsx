import { editOrderByID } from "@/api/shared/shared.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditOrderById = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, orderData }) => editOrderByID({ id, orderData }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["orders-dashboard"],
      });
    },
  });
};

export default useEditOrderById;
