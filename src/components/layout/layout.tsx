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
      <body className="font-satoshi bg-Background-Default selection:text-Text-Relevant selection:bg-CTA-Default">
        {isUserEntering ? (
          <>
            <header className="fixed top-0 h-[80px] lg:h-auto w-full px-[32px] lg:pt-[32px] flex lg:flex-col lg:gap-[30px] justify-between items-center lg:items-start border-b lg:border-none border-b-Background-Light">
              <Logo />
              <Settings/>
            </header>
            {children}
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
