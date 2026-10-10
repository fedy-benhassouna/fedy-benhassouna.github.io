import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Fedy Ben Hassouna</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FH</h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* FIX: added list-style:none and proper aria-label for accessibility */}
          <ul className="footer-icons" aria-label="Social links">
            <li className="social-icons">
              <a
                href="https://github.com/fedy-benhassouna"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="GitHub"
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
                aria-label="Email"
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
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;