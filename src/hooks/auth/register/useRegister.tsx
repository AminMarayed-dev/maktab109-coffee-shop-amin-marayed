import { postUserApi } from "@/api/auth/register/register.api";
import { useMutation } from "@tanstack/react-query";

function useRegister() {
  const mutation = useMutation({
    mutationKey: ["Regiser-User"],
    mutationFn: postUserApi,
  });
  return mutation;
}

export default useRegister;
