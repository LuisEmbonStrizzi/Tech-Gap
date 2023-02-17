import React, { ReactElement } from "react";

type CtaButtonProps = {
  label: string;
  icon: ReactElement;
  btnType: "button" | "submit" | "reset" | undefined;
};

const CtaButton: React.FC<CtaButtonProps> = ({ label, icon, btnType }) => {
  return (
    //Falta agregar el gradiente en el border del botón, probe con un plugin pero no funciono. Luego lo vemos.
    <button type={btnType} className="ease-out duration-150 gap-[15px] text-base font-medium text-Text-Relevant px-[30px] py-[15px] bg-CTA-Default border border-t-[#3F7FFD] border-x-CTA-Default border-b-[#0042EB] rounded hover:bg-CTA-Hovered">
      {label}
      {icon}
    </button>
  );
};
export default CtaButton;
