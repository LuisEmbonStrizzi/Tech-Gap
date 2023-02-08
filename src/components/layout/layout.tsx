import "../../styles/globals.css";
import Head from "./head";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
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
            <div className="fixed top-[32px] left-[32px]">
              <div className="flex flex-col gap-[30px] ">
                <Logo />
                <Settings />
              </div>
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
