import React from "react";
import CommentItem from "./CommentItem";
import QuestionMark from "./QuestionMark";
import CloseIcon from "./CloseIcon";
type AsideProps = {};

const Aside: React.FC<AsideProps> = () => {
  return (
    <div className="flex fixed left-0 top-[80px] flex-col justify-between h-[calc(100vh_-_80px)] border-r divide-y divide-Background-Light border-Background-Light">
      <div className="flex flex-col divide-y divide-Background-Light border-b border-Background-Light">
        <CommentItem />
        <QuestionMark />
      </div>
      <CloseIcon />
    </div>
  );
};
export default Aside;
