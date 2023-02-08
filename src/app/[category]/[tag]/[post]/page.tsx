import React from "react";
import RootLayout from "@/components/layout/layout";
import Aside from "@/components/Aside/Aside";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={false}>
      <Aside />
    </RootLayout>
  );
};
export default page;
