import React from "react";
import CtaButton from "../global/CtaButton";

type TeamMemberProps = {
  name: string;
  role: string;
  url: string;
};

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, url }) => {
  return (
    <div className="w-full flex py-[30px] px-[30px] gap-[30px] sm:gap-0 flex-col sm:flex-row items-center sm:justify-between border-b border-Background-Light lg:border-x ">
      <h2 className="text-lg text-Text-Relevant font-normal text-center">
        {name} | {role}
      </h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CtaButton label="Connect on Linkedin" icon={<></>} btnType="button"/>
      </a>
    </div>
  );
};
export default TeamMember;
