import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fedy Ben Hassouna </span> from <span className="purple">Tunisia.</span>
            <br />
            <br />
            I am currently employed as <span className="purple"> AI R&D Engineering Intern </span> at Qatar Computing Research Institute.
            <br />
            <br />
            I am a <span className="purple"> Final Year Engineering Student in Software And Artificial Intelligence at INSAT  </span> :  National Institute of Applied Sciences and Technology, Tunis . 
            <br />
            <br />
            I am an active member in <span className="purple">IEEE INSAT Student Branch</span> and <span className="purple">IEEE Robotics and Automation Society</span>.
            <br />
            <br />
            I was technical manager for many events like 
            <span className="purple">
              <a href="https://nrw.ieee.tn/" target="_blank" rel="noopener noreferrer" style={{ color: "#f09d70" }}>
                National Robotics Weekend
              </a>
            </span> 
            and 
            <span className="purple">
              <a href="https://dataoverflow.tn/" target="_blank" rel="noopener noreferrer" style={{ color: "#f09d70" }}>
                DataOverflow
              </a>
            </span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
