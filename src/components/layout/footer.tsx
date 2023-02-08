import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    //El target blank es para abrirlo en otra pestaña en lugar de salir de la página
    <div className="text-Extras text-base fixed bottom-[32px] right-[32px] select-none">
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-Text-Relevant">
        Gmail
      </a>{" "}
      |{" "}
      <a href="https://github.com/LuisEmbonStrizzi/Tech-Gap" target="_blank" rel="noopener noreferrer" className="text-Text-Relevant">
        Github
      </a>{" "}
      |{" "}
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-Text-Relevant">
        Instagram
      </a>
    </div>
  );
};
export default Footer;
