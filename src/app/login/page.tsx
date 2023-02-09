import RootLayout from "@/components/layout/layout";
import React from "react";
import Form from "@/components/userform/Form";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <RootLayout isUserEntering={true}>
      <div className="h-screen flex flex-col justify-center items-center gap-[60px]">
        <h1 className="text-Text-Relevant font-black text-xxl">Log In</h1>
        <Form text="Don't have an account?" link="Sign up" url="/signup"/>
      </div>
    </RootLayout>
  );
};
export default page;
