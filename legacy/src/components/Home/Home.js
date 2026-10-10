import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/man-is-looking-computer-screen-with-calculator-it-scaled-removebg-preview.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {/* FIX: home-content has z-index:1 in CSS so it sits above the particle layer.
                 home-section no longer has z-index:-1 (was making the whole section
                 unclickable and pushed behind other stacking contexts). */}
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> FEDY BEN HASSOUNA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="text-center">
              <img
                src={homeLogo}
                alt="Fedy Ben Hassouna"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;