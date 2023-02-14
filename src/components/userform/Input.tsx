import React from "react";

const Input: React.FC = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="Email" className="text-Text-Relevant">
        {" "}
        Email{" "}
      </label>
      <input
        className="ease-out duration-150 p-[15px] rounded bg-Background-Light border border-Background-Variations text-base font-normal text-Text-Relevant placeholder-Extras outline-none focus:border-CTA-Default"
        placeholder="Enter your email"
        id="Email"
        name="Email"
      ></input>
    </div>
  );
};
export default Input;
