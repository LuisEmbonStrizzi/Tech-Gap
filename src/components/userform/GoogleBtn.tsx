"use client";

import { auth } from "../../../firebase/client";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState} from "react-firebase-hooks/auth"
import { useEffect } from "react";

type GoogleBtnProps = {};

const GoogleBtn: React.FC<GoogleBtnProps> = () => {
  const [user, setAuthUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  useEffect(()=>{

  },[user]);

  

  return (
    <button
      type="button"
      className="text-[#767676] cursor-pointer bg-[#fff] rounded text-base px-[42.5px] py-[16px] text-center flex items-center gap-[15px] font-normal border border-[#767676] justify-center"
      onClick={login}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg%22%3E"
      >
        <g clip-path="url(#clip0_184_500)">
          <path
            d="M23.444 12.2245C23.444 11.2413 23.3642 10.5238 23.1916 9.77966H11.9636V14.2176H18.5542C18.4213 15.3205 17.7038 16.9815 16.1093 18.0976L16.0869 18.2462L19.637 20.9964L19.883 21.0209C22.1418 18.9347 23.444 15.8653 23.444 12.2245Z"
            fill="#4285F4"
          />
          <path
            d="M11.9636 23.9176C15.1924 23.9176 17.903 22.8545 19.8829 21.0209L16.1093 18.0976C15.0994 18.8018 13.7441 19.2934 11.9636 19.2934C8.80117 19.2934 6.11711 17.2074 5.16032 14.324L5.02008 14.3359L1.32866 17.1927L1.28038 17.3269C3.24691 21.2334 7.28633 23.9176 11.9636 23.9176Z"
            fill="#34A853"
          />
          <path
            d="M5.16032 14.324C4.90786 13.5799 4.76175 12.7826 4.76175 11.9588C4.76175 11.1349 4.90786 10.3377 5.14704 9.5936L5.14035 9.43513L1.40267 6.53241L1.28038 6.59058C0.469875 8.21168 0.00480652 10.0321 0.00480652 11.9588C0.00480652 13.8855 0.469875 15.7058 1.28038 17.3269L5.16032 14.324Z"
            fill="#FBBC05"
          />
          <path
            d="M11.9636 4.62403C14.2091 4.62403 15.7239 5.59401 16.5876 6.40461L19.9626 3.10928C17.8898 1.1826 15.1924 0 11.9636 0C7.28633 0 3.24691 2.68406 1.28038 6.59056L5.14704 9.59359C6.11711 6.7102 8.80117 4.62403 11.9636 4.62403Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_184_500">
            <rect width="23.46" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      Continue with Google
    </button>
  );
};
export default GoogleBtn;
