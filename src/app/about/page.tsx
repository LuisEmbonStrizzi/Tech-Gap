"use client";
import React, { useEffect, useState } from "react";
import RootLayout from "@/components/layout/layout";
import Bowser from "bowser";
import BraveAlert from "@/components/global/BraveAlert";

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
      {browserName === "Chrome" ? <BraveAlert /> : ""}
      <div>/about</div>
    </RootLayout>
  );
};
export default page;
