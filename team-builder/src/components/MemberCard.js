import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "reactstrap";

const MemberCard = props => {
  return (
    <Col xs="3" id={props.mem.id}>
      <h5>
        {props.mem.name} <Badge color="secondary">{props.mem.role}</Badge>
      </h5>
      <p>{props.mem.email}</p>
      <Button
        size="sm"
        block
        onClick={() => {
          props.updateMember(props.mem);
        }}
      >
        edit
      </Button>
    </Col>
  );
};

export default MemberCard;
