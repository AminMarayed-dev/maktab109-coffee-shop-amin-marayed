import { api } from "@/api/config/config";
import { userDataLogin } from "@/types/auth/login/login.type";

export async function loginUserApi(data: userDataLogin) {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
