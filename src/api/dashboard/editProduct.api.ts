import { api } from "../config/config";

export async function editProductById({ id, productData }) {
  try {
    return await api.patch(`/products/${id}`, productData);
  } catch (error) {
    console.log(error);
  }
}
