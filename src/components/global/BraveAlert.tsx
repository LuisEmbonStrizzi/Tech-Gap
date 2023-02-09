import React from "react";

type BraveAlertProps = {};

const BraveAlert: React.FC<BraveAlertProps> = () => {
  return (
    <div
      className="bg-Text-Relevant border text-center px-4 py-3"
      role="alert"
    >
      <p className="text-base font-medium">If you like this website, consider giving us a Brave Reward</p>
    </div>
  );
};
export default BraveAlert;
