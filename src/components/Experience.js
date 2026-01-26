import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
import homeMain from "../Assets/home-main.svg";
import Particle from "./Particle";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "AI R&D Engineering Intern",
      company: "Qatar Computing Research Institute , Doha, Qatar",
      duration: "July 2025 - September 2025",
      type: "Internship",
      imgSrc: "./qt.jfif",
      website: "https://www.linkedin.com/company/qatar-computing-research-institute/posts/?feedView=all", // Added website URL
      description: [
        "Built an augmented diagnosis agent that validates doctor diagnoses against patient statements, suggests other conditions and symptoms, and calculates severity levels, improving diagnostic consistency by 85%.",
        "Designed and implemented a custom knowledge graph (Statements-Diagnosis-Symptoms) to ground the agent's reasoning and integrated it into a multi-agent system, reducing researchers' manual verification workload by 40%.",
      ]
    },    {
      title: "Working Student : AI Agent Engineer",
      company: "WiseVision AI Technologies , Tunis, Tunisia",
      duration: "January 2025 - June 2025",
      type: "Part-time",
      imgSrc: "./wv.jfif",
      website: "https://www.linkedin.com/company/wisevisiontechnologies/posts/?feedView=all", // Added website URL
      description: [
        "Built an AI-powered analytics agent for retail company, enabling data and business analysts to query KPIs (sales, promotions, inventory) in natural language; reduced manual SQL/reporting effort by 80%.",
        "Delivered 7 interactive analytics modules (promotion impact, stock turnover, basket analysis, forecasting, unsold stock detection) used daily by 20+ analysts and managers, accelerating decision-making."
      ]
    },
    {
      title: "Embedded Computer Vision Working Student",
      company: "Junior Robotics , Tunis, Tunisia",
      duration: "October 2024 - March 2025",
      type: "Freelance",
      imgSrc: "./jnr.jfif",
      website: "https://www.linkedin.com/company/junior-robotics/posts/?feedView=all", // Added website URL
      description: [
        "Developed an autonomous garbage collection robot using ESP32 microcontroller, integrating YOLO-based object detection via a laptop webcam to identify and collect trash items like bottles and papers, achieving 90% detection accuracy on common trash types.",
        "Implemented real-time navigation and obstacle avoidance using ultrasonic sensors and DC motors, reducing collision incidents by 95% in dynamic environments."
      ]
    },
    {
      title: "MLOps Engineer",
      company: "Seekmake , Tunis, Tunisia ",
      duration: "September 2024 - October 2024",
      type: "Internship",
      imgSrc: "./sk.jfif",
      website: "https://www.linkedin.com/company/seekmake/posts/?feedView=all", // Added website URL
      description: [
        "Cloud Integration: Enhanced the prompt during deployment and integrated AI models on Azure AI Studio, aligning them with the current billing framework and avoiding external payment setups.",
        "Billing and Resource Management: Have compared two models, GPT-4o and Mixtral, to manage the billing framework within Azure, ensuring operational efficiency and cost-effectiveness."
      ]
    },
    {
      title: "Computer Vision R&D Intern",
      company: "MUST University , Tunis, Tunisia ",
      duration: "June 2024 - August 2024",
      type: "Internship",
      imgSrc: "./ms.jfif",
      website: "https://www.linkedin.com/company/must-universitytn/posts/?feedView=all", // Added website URL
    description: [
        "Developed a deep learning system using DeepForest to detect cork oak trees in aerial imagery, achieving 84.31% accuracy and 91.49% F1 score on validation data.",
        "Created a custom pipeline for biomass estimation based on detected canopy areas and allometric equations, supporting forest inventory and management.",
        "Annotated high-resolution images using VGG Image Annotator and converted them to DeepForest-compatible formats, enhancing model training efficiency."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Digimytch , Tunis, Tunisia",
      duration: "July 2024 - August 2024",
      type: "Internship",
      imgSrc: "./dg.jfif",
      website: "https://www.linkedin.com/company/digimytch/posts/?feedView=all",
      description: [
        "Developed a machine learning model to detect defects in wind turbines by analyzing sensor data and performing data preprocessing. The objective of this project is:",
        " To identify early signs of failure, enabling predictive maintenance.",
        " To reduce downtime, lower maintenance costs.",
        " To extend turbine lifespan, ensuring optimal performance."
      ]
    }
  ];

  const handleLogoClick = (url) => {
    window.open(url, "_blank"); // Opens website in new tab
  };

  return (
    <Container className="experience-page">
      <Particle />
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${homeMain})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: 0.1,
          zIndex: -1
        }}
      />
      <Row>
        <Col>
          <h1 className="text-center">
            <AiOutlineUser style={{ marginBottom: "5px" }} /> Experience
          </h1>
          <hr />
        </Col>
      </Row>
      <Row>
        {experiences.map((exp, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="experience-card experience-card-view">
              <Card.Body>
                <div className="experience-header">
                  <div className="logo-container">
                    <img
                      src={exp.imgSrc}
                      alt={`${exp.company} logo`}
                      className="company-logo"
                      onClick={() => handleLogoClick(exp.website)}
                    />
                  </div>
                  <div className="title-container">
                    <h3>{exp.title}</h3>
                    <h5>{exp.company}</h5>
                    <div className="type">{exp.type}</div> {/* Type on its own line before duration */}
                    <p>{exp.duration}</p>
                  </div>
                </div>
                <div className="job-details">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;