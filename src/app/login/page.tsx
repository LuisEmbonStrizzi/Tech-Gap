import RootLayout from "@/components/layout/layout";
import React from "react";
import GoogleBtn from "@/components/userform/GoogleBtn";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <GoogleBtn />
    </RootLayout>
  );
};
export default page;
