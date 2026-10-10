import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/ai";
// FIX: removed unused homeMain import used only for an inline background style
//      that conflicted with the .experience-page CSS background definition.
import Particle from "./Particle";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "AI Software Engineer Intern",
      company: "Marketplace Distribution, Aix-en-Provence, France",
      duration: "Mar 2026 – Present",
      type: "Internship · On-site",
      imgSrc: `${process.env.PUBLIC_URL}/mp.jfif`,
      website: "https://marketplacedistribution.com/",
      description: [],
    },
    {
      title: "AI Software Engineer",
      company: "Oryzon Partners, Tunis, Tunisia",
      duration: "Nov 2025 – Mar 2026",
      type: "Freelance",
      imgSrc: `${process.env.PUBLIC_URL}/oryzon_partners_logo.jfif`,
      website: "https://oryzonpartners.io/",
      description: [
        "Developed RAG agentic services and a dashboard: implemented backend authentication, streaming RAG endpoints, LLM integration, vector search and embeddings, caching, and async streaming; built an admin dashboard for document ingestion, vector store sync, and user management to improve data quality, reduce latency, and enable semantic access to large volumes of business and operational documentation.",
        "Built automated EAN-driven eBay.fr scraping pipelines with shop-priority selection, ML-assisted attribute extraction, robust ETL and data cleansing, incremental real-time updates, and workflow orchestration to improve data quality, throughput, and scalability.",
      ],
    },
    {
      title: "Artificial Intelligence Mentor",
      company: "TAIS NextGen – Tunisian AI Society",
      duration: "Jun 2025 – Aug 2025",
      type: "Mentorship",
      imgSrc: `${process.env.PUBLIC_URL}/tais_nextgen_tunisian_ai_society_logo.jfif`,
      website: "https://tunisian-ai-society.org/",
      description: [
        "Led end-to-end development of an AI-driven predictive maintenance platform that cut industrial pump downtime by 70%; engineered LSTM time-series forecasting on multi-sensor data and autoencoder anomaly detection via log-mel spectrograms.",
        "Architected a RAG-LLM agent that delivered 72% more specific maintenance recommendations and 58% higher actionability; evaluated with LLM-as-Judge, achieving 96% alignment and 98% source-grounded responses.",
      ],
    },
    {
      title: "AI R&D Engineering Intern",
      company: "Qatar Computing Research Institute, Doha, Qatar",
      duration: "July 2025 – September 2025",
      type: "Internship",
      imgSrc: `${process.env.PUBLIC_URL}/qt.jfif`,
      website:
        "https://www.linkedin.com/company/qatar-computing-research-institute/posts/?feedView=all",
      description: [
        "Built an augmented diagnosis agent that validates doctor diagnoses against patient statements, suggests other conditions and symptoms, and calculates severity levels, improving diagnostic consistency by 85%.",
        "Designed and implemented a custom knowledge graph (Statements-Diagnosis-Symptoms) to ground the agent's reasoning and integrated it into a multi-agent system, reducing researchers' manual verification workload by 40%.",
      ],
    },
    {
      title: "Working Student: AI Agent Engineer",
      company: "WiseVision AI Technologies, Tunis, Tunisia",
      duration: "January 2025 – June 2025",
      type: "Part-time",
      imgSrc: `${process.env.PUBLIC_URL}/wv.jfif`,
      website:
        "https://www.linkedin.com/company/wisevisiontechnologies/posts/?feedView=all",
      description: [
        "Built an AI-powered analytics agent for a retail company, enabling data and business analysts to query KPIs (sales, promotions, inventory) in natural language; reduced manual SQL/reporting effort by 80%.",
        "Delivered 7 interactive analytics modules (promotion impact, stock turnover, basket analysis, forecasting, unsold stock detection) used daily by 20+ analysts and managers, accelerating decision-making.",
      ],
    },
    {
      title: "Embedded Computer Vision Working Student",
      company: "Junior Robotics, Tunis, Tunisia",
      duration: "October 2024 – March 2025",
      type: "Freelance",
      imgSrc: `${process.env.PUBLIC_URL}/jnr.jfif`,
      website:
        "https://www.linkedin.com/company/junior-robotics/posts/?feedView=all",
      description: [
        "Developed an autonomous garbage collection robot using ESP32 microcontroller, integrating YOLO-based object detection via a laptop webcam to identify and collect trash items like bottles and papers, achieving 90% detection accuracy on common trash types.",
        "Implemented real-time navigation and obstacle avoidance using ultrasonic sensors and DC motors, reducing collision incidents by 95% in dynamic environments.",
      ],
    },
    {
      title: "MLOps Engineer",
      company: "Seekmake, Tunis, Tunisia",
      duration: "September 2024 – October 2024",
      type: "Internship",
      imgSrc: `${process.env.PUBLIC_URL}/sk.jfif`,
      website:
        "https://www.linkedin.com/company/seekmake/posts/?feedView=all",
      description: [
        "Enhanced prompt during deployment and integrated AI models on Azure AI Studio, aligning them with the current billing framework and avoiding external payment setups.",
        "Compared GPT-4o and Mixtral to manage the billing framework within Azure, ensuring operational efficiency and cost-effectiveness.",
      ],
    },
    {
      title: "Computer Vision R&D Intern",
      company: "MUST University, Tunis, Tunisia",
      duration: "June 2024 – August 2024",
      type: "Internship",
      imgSrc: `${process.env.PUBLIC_URL}/ms.jfif`,
      website:
        "https://www.linkedin.com/company/must-universitytn/posts/?feedView=all",
      description: [
        "Developed a deep learning system using DeepForest to detect cork oak trees in aerial imagery, achieving 84.31% accuracy and 91.49% F1 score on validation data.",
        "Created a custom pipeline for biomass estimation based on detected canopy areas and allometric equations, supporting forest inventory and management.",
        "Annotated high-resolution images using VGG Image Annotator and converted them to DeepForest-compatible formats, enhancing model training efficiency.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Digimytch, Tunis, Tunisia",
      duration: "July 2024 – August 2024",
      type: "Internship",
      imgSrc: `${process.env.PUBLIC_URL}/dg.jfif`,
      website:
        "https://www.linkedin.com/company/digimytch/posts/?feedView=all",
      description: [
        "Developed a machine learning model to detect defects in wind turbines by analysing sensor data and performing data preprocessing.",
        "Objective: identify early signs of failure to enable predictive maintenance, reduce downtime, lower maintenance costs, and extend turbine lifespan.",
      ],
    },
  ];

  const handleLogoClick = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    // FIX: removed inline style that set a background image here — 
    //      this conflicted with .experience-page CSS background.
    //      The CSS class handles the background correctly.
    <Container fluid className="experience-page">
      <Particle />
      <Container>
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
              {/* FIX: moved padding to Card.Body, removed from .experience-card
                        so padding doesn't double up with card internal spacing */}
              <Card className="experience-card-view h-100">
                <Card.Body className="p-4">
                  <div className="experience-header">
                    <div className="logo-container">
                      {exp.imgSrc && (
                        <img
                          src={exp.imgSrc}
                          alt={`${exp.company} logo`}
                          className="company-logo"
                          onClick={() => handleLogoClick(exp.website)}
                          // FIX: added keyboard accessibility for clickable logos
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleLogoClick(exp.website)
                          }
                          role="button"
                          tabIndex={0}
                        />
                      )}
                    </div>
                    <div className="title-container">
                      <h3>{exp.title}</h3>
                      <h5>{exp.company}</h5>
                      <span className="type">{exp.type}</span>
                      <p>{exp.duration}</p>
                    </div>
                  </div>
                  {exp.description?.length > 0 && (
                    <div className="job-details">
                      <ul>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Experience;