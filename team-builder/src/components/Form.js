import React, { useEffect, useState } from "react";
import {
  Button,
  Form as FormStrap,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";

function Form(props) {
  const thing = { name: "", email: "", role: "", id: Date.now() };
  const [teamMember, setTeamMember] = useState({
    ...thing,
    ...props.memberToEdit
  });

  console.log("membertoedit:", props.memberToEdit);

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addTeamMember(teamMember);
  };

  return (
    <FormStrap onSubmit={handleSubmit}>
      <h3>Add a New Team Member</h3>

      <Row>
        <Col xs="6" sm="4">
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={teamMember.name}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={teamMember.email}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">
          <FormGroup>
            <Label for="role">Role</Label>
            <Input
              id="role"
              type="text"
              value={teamMember.role}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Button outline color="primary">
        Submit
      </Button>
    </FormStrap>
  );
}

export default Form;
