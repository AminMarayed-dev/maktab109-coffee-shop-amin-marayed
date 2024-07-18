import Dashboard from "@/components/dashboard/Dashboard";
import DashboardLayout from "@/components/layout/dashboard-layout/DashboardLayout";
import { ReactElement } from "react";

function DashboardPage() {
  return <Dashboard />;
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
