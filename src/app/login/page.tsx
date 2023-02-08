import RootLayout from "@/components/layout/layout";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div>/login</div>
    </RootLayout>
  );
};
export default page;
