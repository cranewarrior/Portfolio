import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiQualtrics,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiScrum,
} from "react-icons/di";
import {
  MdHighQuality,
} from "react-icons/md";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skill-icons tech-icons">
      Agile
      </Col>
      <Col xs={4} md={2} className="skill-icons  tech-icons">
      Quality Analysis
      </Col>
      <Col xs={4} md={2} className="skill-icons tech-icons">
      Design Pattern
      </Col>
      <Col xs={4} md={2} className="skill-icons tech-icons">
      TDD
      </Col>
    </Row>
  );
}

export default Toolstack;
