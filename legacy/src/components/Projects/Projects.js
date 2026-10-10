import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tn from "../../Assets/Projects/tn.png";
import emotion from "../../Assets/Projects/emotion.png";
import aifk from "../../Assets/Projects/aifk.png";
import PW from "../../Assets/Projects/PW.png";
import dn from "../../Assets/Projects/dn (2).png";
import dg from "../../Assets/Projects/dg.png";
import Pt from "../../Assets/Projects/BT.png";
import ex from "../../Assets/Projects/ex.png";
import kg from "../../Assets/Projects/kg.png";
import ayyus from "../../Assets/Projects/ayy.png" ;
import ind from "../../Assets/Projects/in.png";
import dep from "../../Assets/Projects/dep.png";
import sto from "../../Assets/Projects/sto.png";
import ins from "../../Assets/Projects/ins.png";
import gaia from "../../Assets/Projects/sto__2_-removebg-preview.png";


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
              imgPath={gaia}
              isBlog={false}
              title="GAIA Agent"
              description="This project builds an AI agent for the Hugging Face Agent Course benchmark. It fetches complex GAIA questions via API, processes them with a LangGraph state machine, and uses tools like web search, Wikipedia, Arxiv, calculator, and a Supabase vector store. The agent submits answers back to the API through a Gradio interface for scoring."
              ghLink="https://github.com/fedy-benhassouna/GAIA_Agent"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sto}
              isBlog={false}
              title=" Stockify: AI Stock Investment Platform"
              description="A next-gen AI platform for smart stock analysis, news aggregation, and investment reporting. Combines Yahoo Finance data, NLP-powered news insights, multi-agent LLM analysis, and FastAPI+React for modular, scalable, and real-time financial intelligence."
              ghLink="https://github.com/fedy-benhassouna/Stockify"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7340836291284029440/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dep}
              isBlog={false}
              title=" Depth Estimation Project"
              description=" This project performs monocular depth estimation on images using two state-of-the-art pre-trained models: ZoeDepth and DPT-Hybrid-Midas. It processes a given image, interpolates the predicted depth maps, and visualizes the results using both Matplotlib and OpenCV."
              ghLink="https://github.com/fedy-benhassouna/Depth-Estimation"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={ind}
              isBlog={false}
              title=" Invoice AI Processor"
              description=" An AI-powered app that extracts invoice data using EasyOCR. It detects fields like date, amount, invoice number, seller/client info, and tax ID. Features include CSV export, visual annotations, a React+TS frontend, and FastAPI backend."
              ghLink="https://github.com/fedy-benhassouna/Invoice_AI_Processor"
              demoLink="https://private-user-images.githubusercontent.com/151845761/463774098-7440877d-a17c-4589-8d61-5e0c2ecd3638.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI0MzIzMzUsIm5iZiI6MTc1MjQzMjAzNSwicGF0aCI6Ii8xNTE4NDU3NjEvNDYzNzc0MDk4LTc0NDA4NzdkLWExN2MtNDU4OS04ZDYxLTVlMGMyZWNkMzYzOC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxM1QxODQwMzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNDdkNjk0MzE5NzhkZTQ1ZjE0OWE5YzA3NGY3Y2FiZmZlYjI2ZjQ0MTYwMGQ1ZjVkYzVjMDc4ZDZhYWVkNDJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.AKZ7bWkbFw4DsLIbOcWT-WJhv6VSZnc9URpg5kELHAA"      
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kg}
              isBlog={false}
              title=" Knowledge Graph-Enhanced RAG System"
              description="Engineered a hybrid system that integrates a knowledge graph with Retrieval-Augmented Generation (RAG) to improve LLM reliability. Leveraged LangChain and Neo4j to enable contextual, grounded answers in generative applications such as enterprise chatbots."
              ghLink="https://github.com/fedy-benhassouna/knowledge-graph-rag-system"
              demoLink="https://private-user-images.githubusercontent.com/151845761/428441637-822f1962-e313-46f3-89ab-57ad43a80ef2.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI0MzIwMjEsIm5iZiI6MTc1MjQzMTcyMSwicGF0aCI6Ii8xNTE4NDU3NjEvNDI4NDQxNjM3LTgyMmYxOTYyLWUzMTMtNDZmMy04OWFiLTU3YWQ0M2E4MGVmMi5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxM1QxODM1MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMDg2MzJkZmNmYmQ1NzJkOTc5MDBjMmI2YWM4OTQ0ZTljMDhiNDVkY2VjZjk4MDQ2MjMxOTgzYTVmMjYyNzI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.awHuprigHa-_x-Vzi4j509XbYDZZq3KJrdzhNPQKyFc"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ins}
              isBlog={false}
              title=" INSAT GPT "
              description="InsatGPT is a conversational AI assistant tailored for the students, faculty, and administrative staff of INSAT (Institut National des Sciences Appliquées et de Technologie). Designed to streamline access to academic and institutional information, InsatGPT can answer queries related to schedules, courses, administrative procedures, events, and more—serving as a 24/7 support system that enhances communication and efficiency within the INSAT community."
              ghLink="https://github.com/fedy-benhassouna/INSAT_GPT"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ex}
              isBlog={false}
              title="Excusely: The AI-Powered Excuse Generator"
              description=" Developed a modular automation pipeline using n8n, Firebase, and OpenAI API to generate and manage user-specific excuses.Demonstrated practical deployment of AI using low-code tools, serverless functions, and prompt-driven generation."
              ghLink="https://github.com/fedy-benhassouna/Excusely-with-n8n-and-Firebase-AI-Studio"
              demoLink="https://private-user-images.githubusercontent.com/151845761/442735929-123c65da-26a0-491e-8f32-ba54f6fcc244.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTI0MzEzNjMsIm5iZiI6MTc1MjQzMTA2MywicGF0aCI6Ii8xNTE4NDU3NjEvNDQyNzM1OTI5LTEyM2M2NWRhLTI2YTAtNDkxZS04ZjMyLWJhNTRmNmZjYzI0NC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxM1QxODI0MjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OGJlZGZiNDA3NDg0NGVkODJmYmMyMmYxMmI4MDQzMWFkZTBkZjU1MDgyYzQ4MmQzMWNkMjI3OWRmMDBlYTUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7DNJjoyzlWYVLouHIspXB8PgWa1vo0fz--d5_D4Pt4E"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PW}
              isBlog={false}
              title="Pump Watch"
              description="Pump Watch is a groundbreaking solution for industrial pump station maintenance, leveraging AI and advanced technology for predictive maintenance. By monitoring motor currents and performing frequency domain analysis, it detects issues early, minimizing downtime and costs. Integrated with Pumpo, an intelligent chatbot, the system offers operators real-time insights, maintenance schedules, and diagnostic support, enhancing usability and efficiency."
              ghLink=""
              demoLink="https://drive.google.com/file/d/1g7YtpuBlO-fw2MUk7cNT_u6a55-pq7Ug/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pt}
              isBlog={false}
              title="Protest Banner Interpreter"
              description="Designed an AI-powered computer vision system that interprets text from protest banners in real-time. Leveraged Vision Transformers (ViT) and Segment Anything Model (SAM) to generate accurate masks for banners in images, enabling precise text extraction. The system integrates OCR (Optical Character Recognition) and natural language processing (NLP) techniques to analyze and understand key messages conveyed in banners."
              ghLink="https://github.com/fedy-benhassouna/Protest-Banner-Interpreter"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dg}
              isBlog={false}
              title="Wind Turbines Predictive Maintenance "
              description="This wind turbine failure prediction project is an innovative solution for enhancing renewable energy reliability, combining AI with advanced data analytics for predictive maintenance.At its core is a dynamic dashboard offering real-time monitoring of turbine performance and environmental conditions. With features like active power analysis and wind speed tracking, it provides actionable insights to optimize operations and ensure sustainability"
              ghLink="https://github.com/fedy-benhassouna/DigimyTch-Internship"
              demoLink="" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ayyus}
              isBlog={false}
              title="Ayyus Labs "
              description="Ayyus Aura is an innovative, cost-effective solution designed to enhance engagement in museums and cultural spaces. It combines interactive companion apps, AR/VR experiences, and touch-sensitive projections (AyyusHaptics) to create immersive, customizable exhibits."
              demoLink="https://drive.google.com/file/d/1RAjlkxjIJa142v03ppBg8wLl23A9xPxf/view"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aifk}
              isBlog={false}
              title="AI Blog Post Summarization with Web Scraping"
              description="AI Blog Post Summarization with Web Scraping is an innovative project that streamlines content consumption by combining web scraping and AI summarization. Using Beautiful Soup to extract blog content and Hugging Face's Transformers library for summarization, it transforms lengthy articles into concise, easy-to-read summaries."
              ghLink="https://github.com/fedy-benhassouna/AI-Blog-Post-Summarization-Project"
              demoLink="https://www.linkedin.com/posts/fedy-ben-hassouna-9232a7249_machinelearning-webscraping-nlp-activity-7224812184772485120-GG6v?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dn}
              isBlog={false}
              title="Dino Game Automation"
              description="is about controlling the dino game using eye blinks. So, i developed an innovative system using MediaPipe, PyAutoGUI, and OpenCV that tracks eye blinks to simulate the jumps of the dinosaur, making the game more accessible and engaging."
              ghLink="https://github.com/fedy-benhassouna/PPP_Dino_Game"
              demoLink="https://www.linkedin.com/posts/fedy-ben-hassouna-9232a7249_excited-to-share-our-latest-project-controlling-activity-7204246323238219776-7yXY?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tn}
              isBlog={false}
              title="Thomas was Never Alone"
              description=" Thomas was Never Alone is a 2D platformer game built using Flask , Spacy and Pygame . This project transforms the original concept into a vibrant and joyful experience for kids, featuring colorful visuals and interactive gameplay. Players control a character named Thomas, issuing commands to move left, right, jump, and change the character's color, all set against a dynamic backdrop."
              ghLink="https://github.com/fedy-benhassouna/Thomas_was_Never_Alone?tab=readme-ov-file"
              demoLink="https://www.youtube.com/watch?v=Zp_TGSApLiU" 
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
