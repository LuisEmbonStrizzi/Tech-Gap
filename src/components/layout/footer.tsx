import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    //El target blank es para abrirlo en otra pestaña en lugar de salir de la página
    <div className="text-Extras text-base font-normal select-none fixed bottom-0 md:flex md:justify-end p-[32px] w-full [32px] flex justify-center bg-Background-Default border-t-[1px]">
      <div className="">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Text-Relevant"
        >
          Gmail
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/LuisEmbonStrizzi/Tech-Gap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Text-Relevant"
        >
          Github
        </a>{" "}
        |{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-Text-Relevant"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};
export default Footer;
