"use client";
import React, { useState } from "react";
import Input from "./Input";
import GoogleBtn from "./GoogleBtn";
import CtaButton from "../global/CtaButton";
import Divider from "./Divider";
import Link from "next/link";
import { auth } from "../../firebase/client";
import { sendSignInLinkToEmail } from "firebase/auth";

type FormProps = {
  text: string;
  link: string;
  url: string;
};

const Form: React.FC<FormProps> = ({ text, link, url }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const actionCodeSettings = {
    url: "https://localhost:3000",
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "localhost:3000",
  };

  const signin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendSignInLinkToEmail(auth, value, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", value);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <form className="flex flex-col gap-[15px] mx-[30px]" onSubmit={signin}>
      <Input changeProp={handleChange} />
      <CtaButton
        btnType="submit"
        label="Login to your account"
        icon={<></>}
      />
      <p className="text-Text-Relevant text-center">
        {text}{" "}
        <Link href={url} className="text-CTA-Default hover:underline">
          {link}
        </Link>
      </p>
      <Divider />
      <GoogleBtn />
    </form>
  );
};
export default Form;
