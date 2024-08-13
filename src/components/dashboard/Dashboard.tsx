import useResponsive from "@/hooks/shared/useResponsive";

import SideBarDesktop from "@/components/dashboard/desktop/SideBarDesktop";
import TabsMobile from "@/components/dashboard/mobile/TabsMobile";

function Dashboard() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });

  return mdDown ? <TabsMobile /> : <SideBarDesktop />;
}

export default Dashboard;
