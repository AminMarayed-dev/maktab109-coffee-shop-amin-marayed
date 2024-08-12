import { api } from "@/api/config/config";
import { ProductData } from "@/types/dashboard/type";

export async function editProductById({
  id,
  productData,
}: {
  id: string | number;
  productData: ProductData;
}) {
  try {
    return await api.patch(`/products/${id}`, productData);
  } catch (error) {
    console.log(error);
  }
}
