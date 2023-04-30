import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Peter Paker </span>
            from <span className="purple"> Calgary, Alberta, Canada.</span>
            
            <br />
            <br />
            Apart from coding, I majored in <span className="purple"> Software Engineering</span>!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Agile Methodology
            </li>
            <li className="about-activity">
              <ImPointRight /> Software Quality Analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Software Design Pattern
            </li>
            <li className="about-activity">
              <ImPointRight /> Test Driven Development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Peter Paker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
