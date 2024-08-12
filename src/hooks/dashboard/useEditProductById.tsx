import { editProductById } from "@/api/dashboard/editProduct.api";
import { ProductData } from "@/types/dashboard/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      productData,
    }: {
      id: string | number;
      productData: ProductData;
    }) => editProductById({ id, productData }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["products-dashboard"],
      });
    },
  });
};

export default useEditProduct;
