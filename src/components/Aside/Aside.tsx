import React from "react";
import CloseIcon from "./CloseIcon";
import CommentItem from "./CommentItem";
import QuestionMark from "./QuestionMark";

type AsideProps = {};

const Aside: React.FC<AsideProps> = () => {
  return (
    <div className="flex fixed left-0 top-[80px] flex-col justify-between h-[calc(100vh_-_80px)] bg-Background-Default border-r divide-y divide-Background-Light border-Background-Light">
      <div className="flex flex-col divide-y divide-Background-Light border-b border-Background-Light">
        <CommentItem />
        <QuestionMark />
      </div>
      <CloseIcon />
    </div>
  );
};
export default Aside;
