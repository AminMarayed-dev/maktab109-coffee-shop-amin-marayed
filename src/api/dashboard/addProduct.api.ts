import { api } from "@/api/config/config";
import { ProductData } from "@/types/dashboard/type";

export async function addProductApi(productData: ProductData) {
  try {
    return await api.post("/products", productData);
  } catch (error) {
    console.log(error);
  }
}
