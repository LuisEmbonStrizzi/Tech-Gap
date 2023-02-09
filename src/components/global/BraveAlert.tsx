import React from "react";

type BraveAlertProps = {};

const BraveAlert: React.FC<BraveAlertProps> = () => {
  return (
    <div
      className=" flex items-center justify-center fixed w-full top-[80px] h-[60px] bg-Text-Relevant border text-center px-4 py-3"
      role="alert"
    >
      <div className="flex gap-[15px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.9043 6.52067 11 6.28333 11 6C11 5.71667 10.9043 5.479 10.713 5.287C10.521 5.09567 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6C9 6.28333 9.096 6.52067 9.288 6.712C9.47933 6.904 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
            fill="#010409"
          />
        </svg>

        <p className="text-base font-medium">
          If you like this website, consider giving us a Brave Reward
        </p>
      </div>
      <button className="fixed right-[85px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7172 4.01429L13.8729 11.8586L13.7314 12L13.8729 12.1414L21.7172 19.9857L19.9857 21.7172L12.1414 13.8729L12 13.7314L11.8586 13.8729L4.01429 21.7172L2.28284 19.9857L10.1271 12.1414L10.2686 12L10.1271 11.8586L2.28284 4.01429L4.01429 2.28284L11.8586 10.1271L12 10.2686L12.1414 10.1271L19.9857 2.28284L21.7172 4.01429Z"
            fill="#010409"
            stroke="#EDEDED"
            strokeWidth="0.4"
          />
        </svg>
      </button>
    </div>
  );
};
export default BraveAlert;
