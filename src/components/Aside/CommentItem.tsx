import React from "react";

type CommentItemProps = {};

const CommentItem: React.FC<CommentItemProps> = () => {
  return (
    <button type="button" className="p-[20px] ">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 22C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21V18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H15.9L12.2 21.71C12 21.9 11.75 22 11.5 22H11ZM12 16V19.08L15.08 16H20V6H6V16H12ZM2 14H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H18V2H2V14Z"
          fill="#EDEDED"
        />
      </svg>
    </button>
  );
};
export default CommentItem;
