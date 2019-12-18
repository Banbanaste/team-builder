import React, { useEffect, useState } from "react";
import MemberCard from "./MemberCard";

const MemberList = props => {
  return (
    <div>
      {props.team.map(mem => {
        return <MemberCard mem={mem} updateMember={props.updateMember} />;
      })}
    </div>
  );
};

export default MemberList;
