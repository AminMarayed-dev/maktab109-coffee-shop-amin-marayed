import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <div>سلام خوش اومدین</div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
