import React from "react";
import { TEAM_LINKS } from "../utils/constants";
import TeamMembers from "./TeamMembers";

const TeamInfo = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl text-primary uppercase text-center">
        Meet the team
      </h1>
      <div className="grid grid-cols-3  justify-self-auto grid-column-end: 10;">
        {TEAM_LINKS.map((link, idx) => (
          <TeamMembers
            memberImage={link.Image}
            memberName={link.Name}
            memberDesg={link.Desg}
            memberInterests={link.Interests}
            memberGithub={link.Github}
            memberLinkedIn={link.LinkedIn}
            memberInstagram={link.Instagram}
          />
        ))}
      </div>
    </div>
  );
};
export default TeamInfo;
