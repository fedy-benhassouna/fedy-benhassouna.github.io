import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fedy.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              EXPLORE MY <span className="purple">SKILLS</span>
            </h1>
            <p className="home-about-body">
  I am an AI Engineer specializing in <i><b className="purple">generative AI and LLMs</b></i>, with hands-on experience using tools like Hugging Face Transformers , Gemini Models and OpenAI GPT for cutting-edge language model development. I excel in <i><b className="purple">agentic AI systems</b></i>, mastering frameworks such as CrewAI and AutoGPT for orchestrating multi-agent workflows.
  <br /><br />
  My expertise extends to <i><b className="purple">computer vision</b></i> with OpenCV and Segment Anything Models , and <i><b className="purple">natural language processing</b></i> using NLTK and SpaCy. I’m also proficient in <i><b className="purple">MLOps and cloud integration</b></i>, deploying scalable AI pipelines through Azure AI Studio.
  <br /><br />
  I command <i><b className="purple">DevOps and automation</b></i> using n8n, Docker, and GitHub Actions, and work with <i><b className="purple">data tools</b></i> like PostgreSQL, MongoDB, and Neo4j to build knowledge graphs and intelligent backends , delivering robust, production-ready solutions.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Fedy Ben Hassouna" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET’S CONNECT</h1>
            <p>
              Eager to <span className="purple">collaborate</span> on skill-driven projects.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fedy-benhassouna"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:fedy.benhassouna@insat.uar.tn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fedy-ben-hassouna-9232a7249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;