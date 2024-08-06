import { editProductById } from "@/api/dashboard/editProduct.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, productData }) => editProductById({ id, productData }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products-dashboard", "products-shop"],
      });
    },
  });
};

export default useEditProduct;
