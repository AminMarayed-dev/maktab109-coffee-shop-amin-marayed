import { api } from "@/api/config/config";

type userDataRegister = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  address: string;
  phoneNumber: string;
};

export async function postUserApi(data: userDataRegister) {
  try {
    const response = await api.post("/auth/signup", data);
    return response;
  } catch (error) {
    throw error;
  }
}
