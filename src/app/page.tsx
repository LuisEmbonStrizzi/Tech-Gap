"use client";
import RootLayout from "@/components/layout/layout";
import CtaButton from "@/components/global/CtaButton";
import Alert from "@/components/global/Alert";
import PostCard from "@/components/postcard/PostCard";
import BraveAlert from "@/components/global/BraveAlert";
import * as Bowser from "bowser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      /*const browser = Bowser.getParser(window.navigator.userAgent);
      console.log(`The current browser name is "${browser.getBrowserName()}"`);*/
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
      
    }
  }, []);
  return (
    <RootLayout isUserEntering={false}>
      <div>/Home</div>
      <Alert label="Alerta por error random" />
      <PostCard
        url="/desing/ux-ui/epic-title-for-amazing-post"
        title="Epic title for amazing post"
        author="Arotu"
        authorcontact="https://www.linkedin.com/in/ariel-alzogaray-flores-666833246/"
        category="Design"
        date="08.02.2023"
        readtime={2}
        views={13}
      />
      <BraveAlert></BraveAlert>
    </RootLayout>
  );
}
