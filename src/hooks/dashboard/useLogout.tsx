import { routes } from "@/constant/routes";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function useLogout() {
  const router = useRouter();

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    deleteCookie("role");
    router.push(routes.login);
  };

  return logout;
}

export default useLogout;
