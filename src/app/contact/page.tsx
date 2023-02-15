import ContactForm from "@/components/contactform/ContactForm";
import RootLayout from "@/components/layout/layout";
import React from "react";

const page: React.FC = () => {
  return (
    <RootLayout isUserEntering={false}>
      <div className="full-w flex justify-center mt-[140px] lg:mt-[80px]">
        <div className="w-full lg:w-[60%] 2xl:w-[40%]">
          <div className="w-full px-[30px] py-[60px] border-b border-Background-Light lg:border-x">
            <h1 className="text-mdxxl lg:text-xxl text-Text-Relevant font-black text-center">
              Contact us.
            </h1>
          </div>
          <div className="w-full p-[30px] border-b border-Background-Light lg:border-x flex gap-[30px] flex-col">
            <p className="font-normal text-Text-Relevant text-lg">
              Don't be shy to drop us a line if you have any feedback or if you
              spot any bugs on our site. We value your suggestions and comments,
              and are always working to improve our site to deliver the best
              possible experience for you.
            </p>
            <p className="font-normal text-Text-Relevant text-lg">
              And if you have any ideas for future posts or topics you'd like us
              to cover, we're all ears. Your input is crucial in helping us
              achieve our goal of providing informative and relevant content.
              The Tech-Gap team is always open to new ideas and suggestions.
            </p>
          </div>
          <div className="w-full p-[30px] lg:border-b border-Background-Light lg:border-x flex gap-[30px] flex-col mb-[80px] lg:mb-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};
export default page;
