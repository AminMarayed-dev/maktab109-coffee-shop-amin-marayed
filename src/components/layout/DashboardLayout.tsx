import { PropsWithChildren } from "react";

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header>header-da</header>
      {children}
      <footer>footer-da</footer>
    </div>
  );
}

export default DashboardLayout;
