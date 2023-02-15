import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    //El target blank es para abrirlo en otra pestaña en lugar de salir de la página

    <div className="text-Extras text-base font-normal select-none fixed top-[80px] lg:bottom-[30px] lg:top-auto lg:right-[30px] h-[60px] lg:h-auto w-full lg:w-auto flex items-center justify-center gap-[10px] lg:gap[2px] bg-Background-Default border-b lg:border-b-0 border-Background-Light">
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
  );
};
export default Footer;
