import React from "react";
import Input from "./Input";
import GoogleBtn from "./GoogleBtn";
import CtaButton from "../global/CtaButton";
import Divider from "./Divider";
import Link from "next/link";

type FormProps = {
  text: string;
  link: string;
  url: string;
};

const Form: React.FC<FormProps> = ({ text, link, url }) => {
  return (
    <div className="flex flex-col gap-[15px] mx-[30px]">
      <Input />
      <CtaButton label="Login to your account" icon={<></>} />
      <p className="text-Text-Relevant text-center">
        {text}{" "}
        <Link href={url} className="text-CTA-Default hover:underline">
          {link}
        </Link>
      </p>
      <Divider />
      <GoogleBtn />
    </div>
  );
};
export default Form;