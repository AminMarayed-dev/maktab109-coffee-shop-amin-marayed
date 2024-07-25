import { addProductApi } from "@/api/dashboard/addProduct.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useAddProducts() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (productData: any) => addProductApi(productData),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["products-dashboard"],
      });
    },
  });
  return mutation;
}

export default useAddProducts;
