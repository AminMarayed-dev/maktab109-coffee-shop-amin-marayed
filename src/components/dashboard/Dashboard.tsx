import useResponsive from "@/hooks/shared/useResponsive";

import SideBarDesktop from "./desktop/SideBarDesktop";
import TabsMobile from "./mobile/TabsMobile";

function Dashboard() {
  const mdDown = useResponsive({ query: "down", breakpoints: "md" });

  return mdDown ? <TabsMobile /> : <SideBarDesktop />;
}

export default Dashboard;
