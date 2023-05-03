import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onlineDoctorAppointment from "../../Assets/Projects/doctor.png";
import easyConsult from "../../Assets/Projects/easyConsult.png";
import invoice from "../../Assets/Projects/invoice.png";
import chatify from "../../Assets/Projects/chatify.png";
import evm from "../../Assets/Projects/evm.png";
import djangoPoll from "../../Assets/Projects/djangoPoll.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/peterpaker48/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineDoctorAppointment}
              isBlog={false}
              title="Online-Doctor-Appointment"
              description="Patients can select a desired doctor appointment date through the online platform. This project is developed using the MERN stack technology, and I have implemented various functionalities to make it a professional website."
              ghLink="https://github.com/peterpaker48/Online-Doctor-Appointment"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyConsult}
              isBlog={false}
              title="Easy-Consulting-react"
              description="This is fullstack softawre agency project. This project is developed by MERN Stack. MUI, Express, MongoDb, Firebase . . ."
              ghLink="https://github.com/peterpaker48/Easy-Consulting-react"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Generator"
              description="An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf."
              ghLink="https://github.com/peterpaker48/invoice-generator"
              demoLink="https://invoice-generator-react.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evm}
              isBlog={false}
              title="EVM From Scratch"
              description="Welcome to EVM From Scratch! It's a 100% practical course that will help you better understand the inner workings of the Ethereum Virtual Machine. During this course, we'll implement EVM in your favorite programming language."
              ghLink="https://github.com/peterpaker48/evm-from-scratchr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoPoll}
              isBlog={false}
              title="Django-Poll-App"
              description="Django poll app is a full featured polling app. You have to register in this app to show the polls and to vote. If you already voted you can not vote again. Only the owner of a poll can add poll , edit poll, update poll, delete poll , add choice, update choice, delete choice and end a poll. "
              ghLink="https://github.com/peterpaker48/python-polllApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
