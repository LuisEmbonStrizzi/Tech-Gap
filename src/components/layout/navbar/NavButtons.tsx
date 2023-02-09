import React from "react";
import Link from "next/link";
import { useState } from "react";

type NavButtonsProps = {};

const NavButtons: React.FC<NavButtonsProps> = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="w-1/4 h-[80px]">
      <ul className="h-full w-full flex items-center justify-center">
        <li className="group overflow-hidden relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant">
          <Link
            href="/"
            className="w-full h-full text-center flex items-center justify-center"
          >
            Posts
          </Link>
          <span className=" w-full h-[1px] absolute bottom-[0px] bg-Text-Relevant ease-in duration-150 opacity-0 group-hover:opacity-100"></span>
        </li>
        <li className="group overflow-hidden relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant">
          <Link
            href="/about"
            className="w-full h-full text-center flex items-center justify-center"
          >
            About
          </Link>
          <span className="w-full h-[1px] absolute bottom-[0px] bg-Text-Relevant ease-in duration-150 opacity-0 group-hover:opacity-100"></span>
        </li>
        <li
          onClick={toggleActive}
          className="group overflow-hidden cursor-pointer relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant"
        >
          <svg
            width="46"
            height="18"
            viewBox="0 0 46 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10"
          >
            <rect
              width="46"
              height="2.5"
              transform="translate(0 15)"
              fill={active ? "#010409" : "#EDEDED"}
              className="ease-out duration-200"
            />
            <rect
              width="46"
              height="2.5"
              transform="translate(0 7.5)"
              fill={active ? "#010409" : "#EDEDED"}
              className="ease-out duration-300 group-hover:w-[23px] group-hover:translate-x-[11px] group-hover:translate-y-[7.5px]"
            />
            <rect
              width="46"
              height="2.5"
              fill={active ? "#010409" : "#EDEDED"}
              className="ease-out duration-200"
            />
          </svg>
          <span className={`w-full ${active? 'h-full' : 'h-[1px]'} absolute bottom-[0px] bg-Text-Relevant ease-in duration-200 ${active? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
        </li>
      </ul>
    </nav>
  );
};
export default NavButtons;
