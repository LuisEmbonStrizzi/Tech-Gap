import React from "react";
import CtaButton from "../global/CtaButton";
import Input from "../userform/Input";
import TextArea from "./TextArea";

type ContactFormProps = {};

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <Input/>
      <TextArea/>
      <CtaButton label="Submit message" icon={<></>}/>
    </div>
  );
};
export default ContactForm;
