import { api } from "../config/config";
import { Props } from "../shared/shared.api";

export async function getAllProductsShop() {
  try {
    const response = await api.get(`/products?sort=createdAt&page=1&limit=all`);
    return response.data.data.products;
  } catch (error) {
    console.log(error);
  }
}
