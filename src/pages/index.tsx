import Home from "@/components/home/Home";
import RootLayout from "@/components/layout/root-layout/RootLayout";
import { ReactElement } from "react";

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
