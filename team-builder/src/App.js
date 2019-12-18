import React, { useState, useEffect } from "react";

import Form from "./components/Form";
import MemberList from "./components/MemberList";

import { Button, Container, Row, Col } from "reactstrap";

function App(props) {
  const [team, setTeam] = useState([
    {
      name: "Roberto",
      email: "banban296@gmail.com",
      role: "Hat Wearer",
      id: Date.now()
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState();

  useEffect(() => {
    if (memberToEdit) {
      console.log("teamBefore:", team);
      const selected = team.filter(member => {
        return member.id !== memberToEdit.id;
      });
      console.log("teamAfter:", selected);
      setTeam(selected);
    }
  }, [memberToEdit]);

  const updateMember = info => {
    setMemberToEdit(info);
  };

  const addTeamMember = teamMember => {
    setTeam([...team, teamMember]);
  };

  return (
    <div>
      <Container>
        <MemberList team={team} updateMember={updateMember} />
        <Form addTeamMember={addTeamMember} memberToEdit={memberToEdit} />
      </Container>
    </div>
  );
}

export default App;
