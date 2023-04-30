import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiPhp,
  SiApache,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skill-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <SiApache />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <SiTypescript />
      </Col>
    </Row>
  );
}

export default Techstack;
