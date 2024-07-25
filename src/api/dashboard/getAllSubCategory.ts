import { api } from "../config/config";

export async function getAllSubCategory(id: string) {
  try {
    const response = await api.get(`/subcategories?category=${id}`);
    return response.data.data.subcategories;
  } catch (error) {
    console.log(error);
  }
}
