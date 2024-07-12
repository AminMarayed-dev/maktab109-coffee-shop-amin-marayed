import DashboardLayout from "@/components/layout/DashboardLayout";
import { ReactElement } from "react";

function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
