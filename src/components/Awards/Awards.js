import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Awards.css";
import ModalImage from "react-modal-image";

const achievements = [
  {
    title: "Chosen from 1,400+ Submissions for MENA ML Winter School - DOHA , Qatar",
    images: [
      require("../../Assets/Awards/mena.jpg"),
    ],
    description: (
      <>
        <ul>
          <li>InsatGPT was selected among 1,400 participants to be featured at the MENA Machine Learning Winter School (MENA ML Winter School) DOHA , recognizing it as one of the most promising AI-driven initiatives from the region.InsatGPT is a conversational AI assistant tailored for the students, faculty, and administrative staff of INSAT (Institut National des Sciences Appliquées et de Technologie)</li>
          <li> Designed to streamline access to academic and institutional information, InsatGPT can answer queries related to schedules, courses, administrative procedures, events, and more—serving as a 24/7 support system that enhances communication and efficiency within the INSAT community.</li>
          <li>Built on advanced large language models (LLMs), the system leverages fine-tuning and retrieval-augmented generation (RAG) techniques to ensure that responses are accurate, contextually relevant, and aligned with INSAT-specific knowledge.</li>
        </ul>
      </>
    )
  },
  {
    title: "Selected for MoroccoAI Summer School 2025 – Rabat, Morocco",
    images: [require("../../Assets/Awards/inpt.jfif"),],
    description: (
      <>
        <ul>
          <li>Chosen as 1 of 50 participants from 1,300+ applicants for MoroccoAI Summer School 2025 in Rabat.</li>
          <li>Attended advanced workshops and lectures on Generative AI and multimodal foundation models.</li>
          <li>Collaborated with a global cohort and leading AI researchers to discuss the future of AI.</li>
        </ul>
      </>
    )
  },{
    title: "1st Place at Hack for Good 3 – Pump Watch: AI-Powered Predictive Maintenance",
    images: [
      require("../../Assets/Awards/pumpwatch.jpg"),
    ],
    description: (
      <>
        <ul>
          <li>Developed an AI-driven predictive maintenance solution for industrial pump stations, utilizing real-time monitoring and frequency domain analysis of motor currents.</li>
          <li>Integrated "Pumpo," an intelligent chatbot providing instant maintenance insights, diagnostic assistance, and scheduling support.</li>
          <li>Represented Enactus INSAT and secured 1st place at the Hack for Good 3 Hackathon organized by Junior Entreprise INSAT.</li>
        </ul>
      </>
    )
  },
  {
    title: "1st Place in the TN 2056 ICC TSYP12 Challenge – AyyusLabs",
    images: [
      require("../../Assets/Awards/ayyus.jpg"),

      
    ],
    description: (
      <>
        <ul>
          <li>Developed an innovative solution as part of a 6-month hackathon, securing 1st place in the TN 2056 ICC TSYP12 Challenge.</li>
          <li>Represented the National Institute of Applied Science and Technology (INSAT), showcasing innovation and excellence in AI-driven solutions.</li>
        </ul>
      </>
    )
  },
  {
    title: "1st place at the HACK-E Hackathon with DHAWWINI – Tunis Sciences City",
    images: [
      require("../../Assets/Awards/dhawili.png"),
    ],
    description: (
      <>
        <ul>
          <li>DHAWWINI: An innovative energy solution combining a mobile solar panel and an AI-controlled turbine to meet the energy needs of unelectrified urban areas, offering a sustainable and efficient approach.</li>
        </ul>
      </>
    )
  },
  {
    title: "2nd place at the Orbit 1.0 Ideathon",
    images: [
      require("../../Assets/Awards/IMG_7318.jpg"),

    ],
    description: (
      <>
        <ul>
<li> EcoAI-Train is an energy optimization platform designed to tackle the hidden environmental cost of AI model training. While models like GPT-4 or DALL·E can emit carbon equivalent to thousands of cars annually, up to 70% of their energy is wasted due to inefficient hardware usage and scheduling. </li>
<li>Our solution empowers AI teams to track, analyze, and reduce energy waste in real-time through a dynamic dashboard that optimizes resource allocation, prioritizes renewable energy sources, and repurposes excess heat. By aligning AI development with sustainability, EcoAI-Train ensures that performance doesn’t come at the planet’s expense,turning energy waste into actionable insights for greener innovation. </li>
        
        </ul>
      </>
    )
  },
  {
    title: "3rd place at the BH Assurance AI Hackathon",
    images: [  require("../../Assets/Awards/monos.png"),],
    description: (
      <>
        <ul>
          <li>Developed a chatbot solution for BH Assurance, with a React + Vite frontend and a FastAPI backend optimized for parallel processing.</li>
          <li>Implemented advanced query routing: RAG pipeline with Qdrant for product queries, and a knowledge graph with Neo4j for client queries.</li>
          <li>Integrated Prometheus for monitoring, containerized all services with Docker, and deployed the system on Google Cloud VM for live demonstration.</li>
        </ul>
      </>
    )
  },
  {
    title: "Accepted into the Ready Tensor, Inc. Computer Vision Projects Expo 2024 | Real-Time Protest Banner Analysis Using AI",
    images: [
      require("../../Assets/Awards/rd.jpg"),
    ],
    description: (
      <>
        <ul>
          <li>Developed an AI-driven system that interprets text from protest banners in real-time, providing valuable insights for social and political research.</li>
        </ul>
      </>
    )
  },
];

function Awards() {
  return (
    <Container fluid className="awards-section">
      <h1 className="awards-heading">Achievements & Awards</h1>
      {achievements.map((ach, idx) => (
        <Row key={idx} className={`awards-row ${idx % 2 === 0 ? '' : 'reverse-row'}`} style={{ alignItems: 'center', marginBottom: '40px' }}>
          <Col md={5} className="awards-img-col">
            <div className="awards-img-gallery">
              {ach.images.map((img, i) => (
                <ModalImage
                  key={i}
                  small={img}
                  large={img}
                  alt={ach.title + ' ' + (i+1)}
                  className="awards-img"
                  hideDownload={true}
                  hideZoom={true}
                />
              ))}
            </div>
          </Col>
          <Col md={7} className="awards-desc-col">
            <Card className="awards-card">
              <Card.Body>
                <h3 className="awards-title">{ach.title}</h3>
                <div className="awards-description">{ach.description}</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Awards; 