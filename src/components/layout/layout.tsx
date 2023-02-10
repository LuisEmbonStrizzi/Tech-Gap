"use client";
import "../../styles/Fonts/WEB/css/globals.css";
import Head from "./head";
import Navbar from "./navbar/Navbar";
import Footer from "./footer";
import Logo from "../global/Logo";
import Settings from "./navbar/Settings";

type RootLayoutProps = {
  children: React.ReactNode;
  isUserEntering: boolean;
};

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  isUserEntering,
}) => {
  return (
    <html lang="en">
      <Head />
      <body className="font-satoshi bg-Background-Default">
        {isUserEntering ? (
          <>
            <div className=" flex flex-col items-start gap-[30px] p-[32px] mb-[32px] ">
              <Logo />
              <Settings />
            </div>
            {children}
            <Footer />
          </>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;
