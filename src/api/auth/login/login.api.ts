import { api } from "@/api/config/config";

export async function loginUserApi(data: any) {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
