import React from "react";
import Logo from "@/components/global/Logo";
import NavButtons from "./NavButtons";
import Settings from "./Settings";

type NavbarProps = {};

//Falta las settings hay que tener conocimiento del valor del estado de Navbuttons acerca de settings y a partir de ahi saber. Un contexto sería apropiado.

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      {" "}
      <header className="fixed top-0 w-full h-[80px] flex items-center justify-between border-b border-b-Background-Light bg-Background-Default">
        <div className="ml-[32px]">
          <Logo />
        </div>
        <div className="lg:hidden mr-[32px]">
          <Settings />
        </div>
        <NavButtons />
      </header>
    </>
  );
};
export default Navbar;
