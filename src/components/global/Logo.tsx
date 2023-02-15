import React from "react";
import Link from "next/link";

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="font-black text-Text-Relevant text-base">
      <Link href="/" className="flex items-center gap-[10px]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.97853 16H14.3971C15.2824 16 16 15.0449 16 13.8667V0L3.97853 16Z"
            fill="#EDEDED"
          />
          <path d="M3.97853 16L16 0H12.0215L0 16H3.97853Z" fill="#8189A8" />
        </svg>

        <p>Tech-Gap.</p>
      </Link>
    </div>
  );
};
export default Logo;
