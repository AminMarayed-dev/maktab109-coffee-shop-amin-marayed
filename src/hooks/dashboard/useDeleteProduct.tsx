import { deleteProductById } from "@/api/dashboard/deleteProduct.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => deleteProductById(id),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products-dashboard"],
      });
    },
  });
  return mutation;
};

export default useDeleteProduct;
