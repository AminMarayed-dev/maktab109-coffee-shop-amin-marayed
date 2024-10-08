import { api } from "@/api/config/config";

export async function deleteProductById(id: string) {
  try {
    return await api.delete(`/products/${id}`);
  } catch (error) {
    throw error;
  }
}
