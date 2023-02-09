import React from "react";
import Input from "../global/Input";
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
    <div>
      <div className="flex flex-col gap-[15px]">
        <Input placeholder="Enter your email" />
        <CtaButton label="Login to your account" />
        <p className="text-Text-Relevant text-center">
          {text}{" "}
          <Link href={url} className="text-CTA-Default hover:underline">
            {link}
          </Link>
        </p>
        <Divider />
        <GoogleBtn />
      </div>
    </div>
  );
};
export default Form;
