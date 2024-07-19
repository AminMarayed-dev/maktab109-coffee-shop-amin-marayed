import RegisterComponent from "@/components/auth/register/RegisterComponent";
import AuthLayout from "@/components/layout/auth-layout/AuthLayout";
import { ReactElement } from "react";

function Register() {
  return <RegisterComponent />;
}

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
