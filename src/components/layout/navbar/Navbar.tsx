import React from "react";
import Logo from "@/components/global/Logo";
import NavButtons from "./NavButtons";
import Settings from "./Settings";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {

  return (
    <>
      {" "}
      <header className="w-full h-[80px] flex items-center justify-between border border-b-Background-Light">
        <Logo />
        <NavButtons />
      </header>
      <Settings />
    </>
  );
};
export default Navbar;
