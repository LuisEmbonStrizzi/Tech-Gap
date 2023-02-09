import React from "react";

type CloseIconProps = {};

const CloseIcon: React.FC<CloseIconProps> = () => {
  return (
    <button type="button" className="p-[14px]">
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.177 19.9232L18.0002 19.7465L17.8234 19.9232L10.4734 27.2732C10.2499 27.4968 9.96566 27.6125 9.6002 27.6125C9.23473 27.6125 8.95051 27.4968 8.72697 27.2732C8.50344 27.0497 8.3877 26.7655 8.3877 26.4C8.3877 26.0345 8.50344 25.7503 8.72697 25.5268L16.077 18.1768L16.2537 18L16.077 17.8232L8.72697 10.4732C8.50344 10.2497 8.3877 9.96548 8.3877 9.60001C8.3877 9.23454 8.50344 8.95032 8.72697 8.72679C8.95051 8.50325 9.23473 8.38751 9.6002 8.38751C9.96566 8.38751 10.2499 8.50325 10.4734 8.72679L17.8234 16.0768L18.0002 16.2536L18.177 16.0768L25.527 8.72679C25.7505 8.50325 26.0347 8.38751 26.4002 8.38751C26.7657 8.38751 27.0499 8.50325 27.2734 8.72679C27.497 8.95032 27.6127 9.23454 27.6127 9.60001C27.6127 9.96548 27.497 10.2497 27.2734 10.4732L19.9234 17.8232L19.7466 18L19.9234 18.1768L27.2734 25.5268C27.497 25.7503 27.6127 26.0345 27.6127 26.4C27.6127 26.7655 27.497 27.0497 27.2734 27.2732C27.0499 27.4968 26.7657 27.6125 26.4002 27.6125C26.0347 27.6125 25.7505 27.4968 25.527 27.2732L18.177 19.9232Z"
          fill="#121924"
          stroke="#121924"
          strokeWidth="0.5"
        />
      </svg>
    </button>
  );
};
export default CloseIcon;
