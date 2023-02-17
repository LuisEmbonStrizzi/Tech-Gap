import React from "react";

const TextArea: React.FC = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="Message" className="text-Text-Relevant">
        {" "}
        Message{" "}
      </label>
      <textarea
        name="Message"
        id="Message"
        className="ease-out duration-150 p-[15px] rounded bg-Background-Light border border-Background-Variations text-base font-normal text-Text-Relevant placeholder-Extras outline-none focus:border-CTA-Default resize-y min-h-[76px]"
        placeholder="Enter your message"
      ></textarea>
    </div>
  );
};
export default TextArea;
