import React, { ChangeEventHandler } from "react";

type InputProps = {
  changeProp: ChangeEventHandler;
};
const Input: React.FC<InputProps> = ({changeProp}) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="Email" className="text-Text-Relevant">
        {" "}
        Email{" "}
      </label>
      <input
        onChange={changeProp}
        className="ease-out duration-150 p-[15px] rounded bg-Background-Light border border-Background-Variations text-base font-normal text-Text-Relevant placeholder-Extras placeholder:font-medium outline-none focus:border-CTA-Default"
        placeholder="Enter your email"
        type={"email"}
        id="Email"
        name="Email"
      ></input>
    </div>
  );
};
export default Input;
