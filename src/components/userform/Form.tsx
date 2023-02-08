import React from "react";
import Input from "../global/Input";
import GoogleBtn from "./GoogleBtn";
import CtaButton from "../global/CtaButton";
import Divider from "./Divider";

type FormProps = {
  text: string;
  link: string;
};

const Form: React.FC<FormProps> = ({ text, link }) => {
  return (
    <div>
      <div className="flex flex-col gap-[15px]">
        <Input placeholder="Enter your email" />
        <CtaButton label="Login to your account" />
        <p className="text-Text-Relevant text-center">
          {text}{" "}
          <a href="" className="text-CTA-Default">
            {link}
          </a>
        </p>
        <Divider />
        <GoogleBtn />
      </div>
    </div>
  );
};
export default Form;
