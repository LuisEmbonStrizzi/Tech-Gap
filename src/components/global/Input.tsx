import React from "react";

type InputProps = {
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label htmlFor="Email" className="text-Text-Relevant">
        {" "}
        Email{" "}
      </label>
      <input
        className="ease-out duration-150 p-[15px] rounded bg-Background-Light border border-Background-Variations text-base font-normal text-Text-Relevant placeholder-Extras outline-none focus:border-CTA-Default"
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export default Input;
