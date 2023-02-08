import React from "react";

type CtaButtonProps = {
  label: string;
};

const CtaButton: React.FC<CtaButtonProps> = ({ label }) => {
  return (
    //Falta agregar el gradiente en el border del botón, probe con un plugin pero no funciono. Luego lo vemos.
    <button className="ease-out duration-150 text-base font-normal text-Text-Relevant px-[30px] py-[15px] bg-CTA-Default border border-t-[#3F7FFD] border-x-CTA-Default border-b-[#0042EB] rounded hover:bg-CTA-Hovered">
      {label}
    </button>
  );
};
export default CtaButton;
