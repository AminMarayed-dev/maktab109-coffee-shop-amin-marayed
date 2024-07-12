import { loginUserApi } from "@/api/auth/login/login.api";
import { useMutation } from "@tanstack/react-query";

function useLogin() {
  const mutation = useMutation({
    mutationKey: ["login-User"],
    mutationFn: loginUserApi,
  });
  return mutation;
}

export default useLogin;
