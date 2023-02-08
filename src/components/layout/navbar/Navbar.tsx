import React from "react";
import Logo from "@/components/global/Logo";
import NavButtons from "./NavButtons";
import Settings from "./Settings";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  //Instanciamos un nuevo objeto de la clase Date
  const date = new Date();

<<<<<<< HEAD
  //Aca establecemos el formato de la  fecha en cuestion
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  //Aca formateamos el objeto con las opciones que declaramos antes y además definimos según el idioma del navegador de lo contrario ingles será
  const dateString = date.toLocaleDateString(
    typeof window !== "undefined" ? window.navigator.language : "en-US",
    options
  );

  //Aca usamos expresiones regulares para reemplazar todos los '/' por '.', sin el 'g' (global), solo lo haría la primera vez que se topase con la '/'.
  const formattedDateString = dateString.replace(/\//g, ".");

=======
>>>>>>> aa48630ff5b746d740ab587f4bfe91947c7e3f5a
  return (
    <>
      {" "}
      <header className="w-full h-[80px] flex items-center justify-between border border-b-Background-Light">
        <Logo />
        <NavButtons />
      </header>
      {/* <Settings /> */}
    </>
  );
};
export default Navbar;
