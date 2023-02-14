import React, { ReactElement } from "react";

type CtaButtonProps = {
  label: string;
  icon: ReactElement;
};

const CtaButton: React.FC<CtaButtonProps> = ({ label, icon }) => {
  return (
    //Falta agregar el gradiente en el border del botón, probe con un plugin pero no funciono. Luego lo vemos.
    <button className="ease-out duration-150 gap-[15px] text-base font-normal text-Text-Relevant px-[30px] py-[15px] bg-CTA-Default border border-t-[#3F7FFD] border-x-CTA-Default border-b-[#0042EB] rounded hover:bg-CTA-Hovered">
      {label}
      {icon}
    </button>
  );
};
export default CtaButton;
