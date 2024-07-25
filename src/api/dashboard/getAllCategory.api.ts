import { api } from "../config/config";

export async function getAllCategory() {
  try {
    const response = await api.get("/categories");
    return response.data.data.categories;
  } catch (error) {
    console.log(error);
  }
}
