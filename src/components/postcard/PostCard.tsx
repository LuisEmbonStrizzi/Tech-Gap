"use client";
import Link from "next/link";
import React from "react";
import Chip from "./Chip";
import ViewCounter from "./ViewCounter";

type PostCardProps = {
  url: string;
  title: string;
  author: string;
  authorcontact: string;
  date: string;
  readtime: number;
  views: string;
  likes: number;
};

const PostCard: React.FC<PostCardProps> = ({
  url,
  title,
  author,
  authorcontact,
  date,
  readtime,
  views,
  likes,
}) => {
  return (
    <div className="flex w-[100%] colum flex-col p-[30px] ease-out duration-150 rounded gap-[15px] border border-Background-Light bg-Background-Default">
      <div className="text-base text-Text-Default">
        {date} | {readtime} mins |{" "}
        <div>
          <ViewCounter slug={views} blogPage={false} />
        </div>
      </div>
      <Link href={url}>
        <h2 className="text-xl font-black text-Text-Relevant hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-base font-normal text-Text-Default">
        Written by{" "}
        <a
          href={authorcontact}
          className="text-base font-normal text-CTA-Default hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </p>
      <div className="flex justify-between items-end">
        <div className="flex gap-[15px]">
          <Chip label="#UX-UI" />
          <Chip label="#Web Design" />
        </div>
        <div className="flex gap-[15px]">
          <button className="group" title="Save">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_356)">
                <path
                  d="M22 17V23.97L17 21.83L12 23.97V11H18V9H12C10.9 9 10 9.9 10 11V27L17 24L24 27V17H22ZM26 13H24V15H22V13H20V11H22V9H24V11H26V13Z"
                  fill="#2F3A4F"
                  className="group-hover:fill-Save ease-out duration-150"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_356">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="group" title="Copy URL">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.169 9H11.5956C10.718 9 10 9.69761 10 10.5502V21.4019H11.8947V10.8947H21.169V9ZM24.5097 12.7895H15.7341C14.8565 12.7895 13.7895 13.8316 13.7895 14.6842V25.5359C13.7895 26.3885 14.8565 27 15.7341 27H24.5097C25.3873 27 26.1053 26.3024 26.1053 25.4498V14.5981C26.1053 13.7455 25.3873 12.7895 24.5097 12.7895ZM24.2105 25.1053H15.7341V14.6842H24.2105V25.1053Z"
                fill="#2F3A4F"
                className="group-hover:fill-Share ease-out duration-150"
              />
            </svg>
          </button>
          <button className="flex gap-0 items-center group" title="Likes">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0766 27C17.8913 26.9991 17.709 26.9527 17.5458 26.865C17.1589 26.6401 8 21.4399 8 14.7642C7.99876 13.5941 8.35403 12.4513 9.0185 11.4882C9.68297 10.5251 10.6251 9.78724 11.7194 9.37297C12.8137 8.95869 14.0083 8.88765 15.144 9.16928C16.2797 9.45092 17.3026 10.0719 18.0766 10.9495C18.8505 10.0719 19.8735 9.45092 21.0092 9.16928C22.1449 8.88765 23.3394 8.95869 24.4337 9.37297C25.5281 9.78724 26.4702 10.5251 27.1347 11.4882C27.7991 12.4513 28.1544 13.5941 28.1531 14.7642C28.1531 21.4399 18.9943 26.6401 18.6074 26.865C18.4441 26.9527 18.2619 26.9991 18.0766 27ZM13.758 11.1654C12.8036 11.1654 11.8882 11.5445 11.2133 12.2194C10.5384 12.8943 10.1593 13.8097 10.1593 14.7642C10.1593 19.3706 16.2232 23.5092 18.0766 24.6608C19.9299 23.5092 25.9939 19.3706 25.9939 14.7642C25.9931 13.933 25.7045 13.1277 25.1773 12.4851C24.6501 11.8425 23.9168 11.4022 23.1018 11.239C22.2868 11.0758 21.4404 11.1998 20.7064 11.5898C19.9724 11.9798 19.3961 12.6119 19.0752 13.3786C18.9939 13.5766 18.8555 13.746 18.6777 13.8652C18.4999 13.9844 18.2906 14.048 18.0766 14.048C17.8625 14.048 17.6533 13.9844 17.4754 13.8652C17.2976 13.746 17.1593 13.5766 17.0779 13.3786C16.8056 12.7227 16.3448 12.1623 15.7538 11.7683C15.1628 11.3743 14.4683 11.1645 13.758 11.1654Z"
                fill="#2F3A4F"
                className="group-hover:fill-Love ease-out duration-150"
              />
            </svg>
            <span className="text-Extras font-semibold group-hover:text-Love group-hover:font-medium ease-out duration-150">
              {likes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
