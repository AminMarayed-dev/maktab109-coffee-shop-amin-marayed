import { api } from "../config/config";

export async function addProductApi(productData: any) {
  try {
    return await api.post("products", productData);
  } catch (error) {
    console.log(error);
  }
}
