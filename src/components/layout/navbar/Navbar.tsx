import React from "react";
import Logo from "@/components/global/Logo";
import NavButtons from "./NavButtons";
import Settings from "./Settings";
import { useState } from "react";

//Falta las settings hay que tener conocimiento del valor del estado de Navbuttons acerca de settings y a partir de ahi saber. Un contexto sería apropiado.

const Navbar: React.FC = () => {
  const [settings, setSettings] = useState<boolean>(false);

  const toggleSettings = () => {
    setSettings(!settings);
  };

  return (
    <>
      {" "}
      <header className="fixed top-0 w-full h-[80px] flex items-center justify-between border-b border-b-Background-Light bg-Background-Default">
        <div className="ml-[32px]">
          <Logo />
        </div>
        <div className={`lg:fixed right-0 top-[80px] lg:mt-[30px] mr-[30px] ease-out duration-500 ${settings ? '' : 'lg:opacity-0 lg:top-[95px] lg:select-none' }`}>
          <Settings />
        </div>
        <NavButtons toggleMethod={toggleSettings} state={settings} />
      </header>
    </>
  );
};
export default Navbar;
