import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonsProps = {
  toggleMethod: () => void;
  state: boolean;
};

const NavButtons: React.FC<NavButtonsProps> = ({ toggleMethod, state }) => {
  const path = usePathname();

  //This line must be inside the span className
  // ${/* path.length === '/' ? 'h-full opacity-100' : 'h-[1px] opacity-0 group-hover:opacity-100' */}image.png
 //asdasd

  return (
    <>
      <nav className="h-[80px] fixed bottom-0 w-screen lg:static lg:w-auto bg-Background-Default">
        <ul className="h-full w-full flex items-center justify-center">
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b border-Background-Light">
            {" "}
            <Link
              href="/"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/" ? "text-Background-Default" : "text-Text-Relevant"
              }`}
            >
              Posts
            </Link>
            <span
              className={`w-full ${
                path === "/"
                  ? "h-full opacity-100"
                  : "h-[1px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] bg-Text-Relevant ease-in duration-200`}
            ></span>
          </li>
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b border-Background-Light text-Text-Relevant">
            {" "}
            <Link
              href="/about"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/about"
                  ? "text-Background-Default"
                  : "text-Text-Relevant"
              }`}
            >
              About
            </Link>
            <span
              className={`w-full ${
                path === "/about"
                  ? "h-full opacity-100"
                  : "h-[1px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] bg-Text-Relevant ease-in duration-200`}
            ></span>
          </li>
          <li className="h-full flex-grow lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b border-Background-Light text-Text-Relevant">
            {" "}
            <Link
              href="/contact"
              className={`w-full h-full text-center flex items-center justify-center z-10 font-medium ${
                path === "/contact"
                  ? "text-Background-Default"
                  : "text-Text-Relevant"
              }`}
            >
              Contact
            </Link>
            <span
              className={`w-full ${
                path === "/contact"
                  ? "h-full opacity-100"
                  : "h-[1px] opacity-0 group-hover:opacity-100"
              } absolute bottom-[0px] bg-Text-Relevant ease-in duration-200`}
            ></span>
          </li>
          <li
            onClick={toggleMethod}
            title="Settings"
            className="h-full flex-grow  cursor-pointer lg:flex-grow-0 lg:w-[170px] relative group overflow-hidden hidden lg:flex items-center justify-center border-t border-l lg:border-t-0 lg:border-b border-Background-Light text-Text-Relevant"
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
                fill={state ? "#010409" : "#EDEDED"}
                className="ease-out duration-200"
              />
              <rect
                width="46"
                height="2.5"
                transform="translate(0 7.5)"
                fill={state ? "#010409" : "#EDEDED"}
                className="ease-out duration-200 group-hover:w-[23px] group-hover:translate-x-[11px] group-hover:translate-y-[7.5px]"
              />
              <rect
                width="46"
                height="2.5"
                fill={state ? "#010409" : "#EDEDED"}
                className="ease-out duration-200"
              />
            </svg>
            <span
              className={`w-full ${
                state ? "h-full" : "h-[1px]"
              } absolute bottom-[0px] bg-Text-Relevant ease-in duration-200 ${
                state ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            ></span>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavButtons;
