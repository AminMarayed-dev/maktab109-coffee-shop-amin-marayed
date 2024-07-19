import LoginComponent from "@/components/auth/login/LoginComponent";
import AuthLayout from "@/components/layout/auth-layout/AuthLayout";
import { ReactElement } from "react";

function Login() {
  return <LoginComponent />;
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
