import React from "react";
import Link from "next/link";

type NavButtonsProps = {};

const NavButtons: React.FC<NavButtonsProps> = () => {
  return (
    <nav className="w-1/4 h-[80px]">
      <ul className="h-full w-full flex items-center justify-center">
        <style >
          {`
            li:hover span {
              bottom: 0px;
              transition: all 150ms ease-out;
            }
          `}
        </style>
        <li className="overflow-hidden relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant">
          <Link
            href="/"
            className="w-full h-full text-center flex items-center justify-center"
          >
            Posts
          </Link>
          <span className=" w-full h-[3px] absolute bottom-[-3px] bg-Text-Relevant ease-in duration-150"></span>
        </li>
        <li className="overflow-hidden relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant">
          <Link
            href="/about"
            className="w-full h-full text-center flex items-center justify-center"
          >
            About
          </Link>
          <span className="w-full h-[3px] absolute bottom-[-3px] bg-Text-Relevant ease-in duration-150"></span>
        </li>
        <li className="overflow-hidden cursor-pointer relative h-full w-1/3 flex items-center justify-center border border-l-Background-Light border-b-Background-Light border-r-Background-Default border-t-Background-Default text-Text-Relevant">
          <svg
            width="46"
            height="17"
            viewBox="0 0 46 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="46"
              height="2"
              transform="translate(0 15)"
              fill="#EDEDED"
            />
            <rect
              width="46"
              height="2"
              transform="translate(0 7.5)"
              fill="#EDEDED"
            />
            <rect width="46" height="2" fill="#EDEDED" />
          </svg>
          <span className="w-full h-[3px] absolute bottom-[-3px] bg-Text-Relevant ease-in duration-150"></span>
        </li>
      </ul>
    </nav>
  );
};
export default NavButtons;
