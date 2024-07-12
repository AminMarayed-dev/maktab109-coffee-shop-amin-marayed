import { PropsWithChildren } from "react";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
}

export default RootLayout;
