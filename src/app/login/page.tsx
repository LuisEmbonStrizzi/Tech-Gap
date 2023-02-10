import RootLayout from "@/components/layout/layout";
import React from "react";
import Form from "@/components/userform/Form";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div className="flex flex-col justify-center items-center gap-[60px] pb-[128px] md:pb-0">
        <h1 className="text-Text-Relevant font-black text-mdxxl md:text-xxl">
          Log In
        </h1>
        <Form text="Don't have an account?" link="Sign up" url="/signup" />
      </div>
    </RootLayout>
  );
};
export default page;
