import { api } from "../config/config";

export async function getProductById(id: string) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data.data.product;
  } catch (error) {
    console.log(error);
  }
}
