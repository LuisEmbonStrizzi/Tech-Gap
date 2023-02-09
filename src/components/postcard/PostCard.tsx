import Link from "next/link";
import React from "react";
import Chip from "./Chip";

type PostCardProps = {
  url: string;
  title: string;
  author: string;
  authorcontact: string;
  category: string;
  date: string;
  readtime: number;
  views: number;
};

const PostCard: React.FC<PostCardProps> = ({
  url,
  title,
  author,
  authorcontact,
  category,
  date,
  readtime,
  views
}) => {
  return (
    <div className="flex w-[600px] colum flex-col p-[30px] ease-out duration-150 rounded gap-[15px] border border-Background-Light bg-Background-Default">
      <p className="text-base text-Text-Default">{category} | {date} | {readtime} mins | {views} views</p>
      <a href={url}><h2 className="text-xl font-black text-Text-Relevant hover:underline">{title}</h2></a>
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
      <div className="flex gap-[15px]">
        <Chip label="#UX-UI" />
        <Chip label="#Web Design"/>
      </div>
    </div>
  );
};
export default PostCard;
