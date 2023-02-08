import React from "react";

type DividerProps = {};

const Divider: React.FC<DividerProps> = () => {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-Background-Variations"></div>
      <span className="flex-shrink mx-4 text-Background-Variations">OR</span>
      <div className="flex-grow border-t border-Background-Variations"></div>
    </div>
  );
};
export default Divider;
