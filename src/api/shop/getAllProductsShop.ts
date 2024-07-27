import { api } from "../config/config";
import { Props } from "../shared/shared.api";

export async function getAllProductsShop({ page, limit }: Props) {
  try {
    const response = await api.get(
      `/products?sort=createdAt&page=${page}&limit=${limit}`
    );
    return response.data.data.products;
  } catch (error) {
    console.log(error);
  }
}
