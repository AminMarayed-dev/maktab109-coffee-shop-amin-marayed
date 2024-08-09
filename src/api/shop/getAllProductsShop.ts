import { api } from "../config/config";

export async function getAllProductsShop({
  limit,
  sort,
}: {
  limit: string | number;
  sort: string;
}) {
  try {
    const response = await api.get(
      `/products?sort=${sort}&page=1&limit=${limit}
     `
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
