import { api } from "@/api/config/config";

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
    throw error;
  }
}
