import { api } from "@/api/config/config";

export async function postUserApi(data: any) {
  try {
    const response = await api.post("/auth/signup", data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
