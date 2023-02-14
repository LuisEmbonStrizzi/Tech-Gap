"use client";
import React, { useEffect, useState } from "react";
import RootLayout from "@/components/layout/layout";
import Bowser from "bowser";
import BraveAlert from "@/components/global/BraveAlert";
import ContactForm from "@/components/contactform/ContactForm";
import TeamMember from "@/components/about/TeamMember";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const [browserName, setBrowserName] = useState<string>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browser = Bowser.getParser(window.navigator.userAgent);
      setBrowserName(browser.getBrowserName());
      console.log(browser.getBrowserName());

      /*
      var request = new XMLHttpRequest();

      request.open(
        "GET",
        "https://api.duckduckgo.com/?q=useragent&format=json",
        true
      );

      request.onload = function () {
        var data = JSON.parse(this.response);
        var isBrave = data["Answer"].includes("Brave");
        console.log(data["Answer"])
        console.log(isBrave)
        if (isBrave) {
          console.log(isBrave);
        }
      };

      request.send();
      */
    }
  }, []);

  return (
    <RootLayout isUserEntering={false}>
      {/*{browserName === "Chrome" ? <BraveAlert /> : ""}*/}
      <div className="full-w flex justify-center mt-[80px]">
        <div className="w-full lg:w-[60%] 2xl:w-[40%]">
          <div className="w-full px-[30px] py-[60px] border-b border-Background-Light lg:border-x">
            <h1 className="text-mdxxl lg:text-xxl text-Text-Relevant font-black text-center">
              About Tech Gap.
            </h1>
          </div>
          <TeamMember
            name="Ariel A.F"
            role="Build team & Author"
            url="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/"
          />
          <TeamMember
            name="Alan Y."
            role="Build team & Author"
            url="https://www.linkedin.com/in/alan-yeger-aa1174266/"
          />
          <TeamMember
            name="Luis E.S"
            role="Build team & Author"
            url="https://www.linkedin.com/in/luis-embon-strizzi-9a288624a/"
          />
          <TeamMember
            name="Brian S."
            role="Author"
            url="https://www.linkedin.com/in/alan-yeger-aa1174266/"
          />
          <TeamMember
            name="Lucas C."
            role="Author"
            url="https://www.linkedin.com/in/luis-embon-strizzi-9a288624a/"
          />
          <div className="w-full p-[30px] border-b border-Background-Light lg:border-x flex gap-[30px] flex-col mb-[80px] lg:mb-0">
            <p className="font-normal text-Text-Relevant text-lg">
              Welcome to Tech-Gap, a website made by students and for students.
              Here, we aim to provide answers to your questions, offer advice,
              and discuss current topics in the fields of development, design,
              and more. Our goal is to offer you relevant and informative
              content, and your input is key in helping us achieve that aim.
            </p>
            <p className="font-normal text-Text-Relevant text-lg">
              We constantly try to improve and provide the best possible
              experience for our users. That's why we welcome any feedback,
              suggestions, or ideas for new features or improvements. If you
              have any thoughts on how we can make our site even better, please
              don't hesitate to reach out and let us know.
            </p>
            <p className="font-normal text-Text-Relevant text-lg">
              Tech-Gap Team
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};
export default page;
