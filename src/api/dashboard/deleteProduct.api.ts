import { api } from "../config/config";

export async function deleteProductById(id: string) {
  try {
    return await api.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
}
