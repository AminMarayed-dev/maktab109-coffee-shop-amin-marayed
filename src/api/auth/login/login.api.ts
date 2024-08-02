import { api } from "@/api/config/config";

type userDataLogin = {
  username: string;
  password: string;
};
export async function loginUserApi(data: userDataLogin) {
  try {
    const response = await api.post("/auth/login", data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
