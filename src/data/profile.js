// ---------------------------------------------------------------------------
// Single source of truth for every word on the site.
// Edit this file to update the portfolio; components only render what's here.
// ---------------------------------------------------------------------------

export const site = {
  name: "Fedy Ben Hassouna",
  shortName: "FBH",
  role: "AI Engineer",
  url: "https://fedy-benhassouna.github.io",
  location: "Aix-en-Provence, France · from Tunis, Tunisia",
  email: "benhassouna.fedy@gmail.com",
  github: "https://github.com/fedy-benhassouna",
  linkedin: "https://www.linkedin.com/in/fedy-ben-hassouna-9232a7249/",
  cv: "/Fedy_Ben_Hassouna_CV_EN.pdf",
  status: "Open to AI Engineer roles · 2026",
};

export const hero = {
  eyebrow: "// AI Engineer · LLMs · Agents · RAG",
  headline: "I build LLM systems that ship and move real numbers.",
  typed: [
    "RAG pipelines that stay grounded.",
    "Multi-agent systems that get work done.",
    "ML models that run on real hardware.",
    "FastAPI backends that scale.",
  ],
  sub:
    "AI Engineer with 10 roles across research labs, startups, and industry in Tunisia, Qatar, France, and the US. I take LLM and ML ideas from notebook to production: retrieval, agents, evaluation, deployment.",
  stats: [
    { value: "70%", label: "less pump downtime" },
    { value: "80%", label: "less manual reporting" },
    { value: "96%", label: "LLM-judge alignment" },
    { value: "3×", label: "hackathon first places" },
  ],
};

export const about = {
  title: "Serious about systems, not demos.",
  paragraphs: [
    "I'm Fedy, an AI engineer trained at INSAT in Tunis, now a founding engineer at Orymate in France. I've worked with teams in Tunisia, Qatar, France, and the US, and spent the last three years inside the full loop: data, model, agent, API, deployment.",
    "My work sits where LLMs meet real constraints. Retrieval that has to be correct, agents that have to finish the job, and models that have to run on a Raspberry Pi or an Azure budget.",
    "I measure what I build. Every project here has a number attached because an AI feature nobody can evaluate is a liability, not a product.",
  ],
};

// Icon keys map to react-icons/si exports in components/Skills.jsx.
export const skills = [
  {
    group: "LLMs & GenAI",
    items: [
      { name: "LangChain", icon: "SiLangchain" },
      { name: "LangGraph", icon: "SiLanggraph" },
      { name: "CrewAI" },
      { name: "Agno" },
      { name: "Hugging Face", icon: "SiHuggingface" },
      { name: "OpenAI API" },
      { name: "Gemini", icon: "SiGooglegemini" },
      { name: "LLaMA", icon: "SiMeta" },
      { name: "RAG" },
      { name: "Knowledge Graphs" },
      { name: "Function calling" },
      { name: "LLM-as-Judge eval" },
      { name: "Vision-Language Models" },
      { name: "Whisper ASR" },
    ],
  },
  {
    group: "ML / DL",
    items: [
      { name: "PyTorch", icon: "SiPytorch" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "Keras", icon: "SiKeras" },
      { name: "scikit-learn", icon: "SiScikitlearn" },
      { name: "XGBoost" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "YOLO" },
      { name: "Segment Anything" },
      { name: "LSTM / Autoencoders" },
      { name: "spaCy", icon: "SiSpacy" },
      { name: "NLTK" },
    ],
  },
  {
    group: "MLOps & Deployment",
    items: [
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Flask", icon: "SiFlask" },
      { name: "Docker", icon: "SiDocker" },
      { name: "GitHub Actions", icon: "SiGithubactions" },
      { name: "Azure AI Studio" },
      { name: "Google Cloud", icon: "SiGooglecloud" },
      { name: "Prometheus", icon: "SiPrometheus" },
      { name: "n8n", icon: "SiN8N" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Streamlit", icon: "SiStreamlit" },
      { name: "Gradio", icon: "SiGradio" },
    ],
  },
  {
    group: "Data & Storage",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Neo4j" },
      { name: "Qdrant", icon: "SiQdrant" },
      { name: "ChromaDB" },
      { name: "FAISS" },
      { name: "Milvus", icon: "SiMilvus" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
    ],
  },
  {
    group: "Languages & Tools",
    items: [
      { name: "Python", icon: "SiPython" },
      { name: "SQL" },
      { name: "C / C++", icon: "SiCplusplus" },
      { name: "Bash", icon: "SiGnubash" },
      { name: "PowerShell" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "React", icon: "SiReact" },
      { name: "Git", icon: "SiGit" },
      { name: "Linux", icon: "SiLinux" },
      { name: "Jupyter", icon: "SiJupyter" },
    ],
  },
];

// featured: true → large card at the top of the Projects section (max 3).
export const projects = [
  {
    featured: true,
    title: "Pump Watch",
    tagline: "Predictive maintenance for industrial pump stations",
    problem:
      "Pump stations failed without warning. Operators had sensor logs but no way to read them in time.",
    built:
      "LSTM time-series forecasting on multi-sensor data, autoencoder anomaly detection on log-mel spectrograms, and a RAG-LLM agent that turns detections into maintenance recommendations. Evaluated with LLM-as-Judge.",
    stack: ["PyTorch", "LSTM", "Autoencoders", "RAG", "LangChain", "FastAPI"],
    result: { value: "−70%", label: "pump downtime" },
    extra: ["72% more specific recommendations", "98% source-grounded answers", "1st place · Hack for Good 3"],
    links: [{ label: "Demo", href: "https://drive.google.com/file/d/1g7YtpuBlO-fw2MUk7cNT_u6a55-pq7Ug/view?usp=sharing" }],
  },
  {
    featured: true,
    title: "Retail Analytics Agent",
    tagline: "Natural-language BI for a major Tunisian retailer",
    problem:
      "Analysts spent most of their day writing SQL and rebuilding the same reports on sales, promotions, and stock.",
    built:
      "An LLM agent that translates questions into validated queries, runs them, and returns charts and narrative. Shipped 7 analytics modules: promotion impact, stock turnover, basket analysis, forecasting, unsold-stock detection.",
    stack: ["LLM agents", "Function calling", "SQL", "Python", "Streamlit"],
    result: { value: "−80%", label: "manual SQL & reporting" },
    extra: ["7 modules in production", "20+ daily analysts and managers"],
    links: [],
  },
  {
    featured: true,
    title: "Augmented Diagnosis Agent",
    tagline: "Clinical reasoning support at Qatar Computing Research Institute",
    problem:
      "Researchers were manually checking whether doctor diagnoses matched what patients actually reported.",
    built:
      "A knowledge graph linking statements, diagnoses, and symptoms, plus an agent that validates a diagnosis against patient text, proposes differentials, and scores severity. Integrated into a multi-agent research system.",
    stack: ["Knowledge graphs", "Multi-agent", "LLMs", "Python"],
    result: { value: "+85%", label: "diagnostic consistency" },
    extra: ["−40% manual verification workload"],
    links: [],
  },
  {
    title: "GAIA Agent",
    problem: "Hugging Face Agents Course benchmark: multi-step questions that need tools, not recall.",
    built:
      "LangGraph state machine with web search, Wikipedia, arXiv, calculator, and a Supabase vector store. Gradio front end submits answers for scoring.",
    stack: ["LangGraph", "Supabase", "Gradio", "Tool use"],
    result: { value: "GAIA", label: "benchmark agent" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/GAIA_Agent" }],
  },
  {
    title: "Knowledge Graph RAG",
    problem: "Plain vector RAG hallucinates on multi-hop questions.",
    built:
      "Hybrid retrieval over a Neo4j graph and a vector store, orchestrated with LangChain, for grounded answers in enterprise chatbots.",
    stack: ["Neo4j", "LangChain", "Cypher", "Vector search"],
    result: { value: "Hybrid", label: "graph + vector retrieval" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/knowledge-graph-rag-system" }],
  },
  {
    title: "INSAT GPT",
    problem: "Students and staff had no single place to ask about schedules, courses, and procedures.",
    built:
      "A fine-tuned, RAG-backed assistant on INSAT-specific knowledge, available around the clock.",
    stack: ["Fine-tuning", "RAG", "LLMs"],
    result: { value: "1 / 1,400+", label: "selected · MENA ML Winter School" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/INSAT_GPT" }],
  },
  {
    title: "Stockify",
    problem: "Retail investors juggle prices, news, and reports across a dozen tabs.",
    built:
      "Multi-agent LLM analysis over Yahoo Finance data and NLP news insights, served by FastAPI with a React front end.",
    stack: ["Multi-agent", "FastAPI", "React", "NLP"],
    result: { value: "Real-time", label: "financial intelligence" },
    links: [
      { label: "GitHub", href: "https://github.com/fedy-benhassouna/Stockify" },
      { label: "Demo", href: "https://www.linkedin.com/feed/update/urn:li:activity:7340836291284029440/" },
    ],
  },
  {
    title: "Insurance Assistant · BH Assurance",
    problem: "One chatbot had to answer both product questions and client-account questions reliably.",
    built:
      "Query router sending product questions to a Qdrant RAG pipeline and client questions to a Neo4j graph. Prometheus monitoring, Docker, deployed on a Google Cloud VM.",
    stack: ["Qdrant", "Neo4j", "FastAPI", "Docker", "Prometheus", "GCP"],
    result: { value: "3rd", label: "BH Assurance AI Hackathon" },
    links: [],
  },
  {
    title: "Invoice AI Processor",
    problem: "Manual invoice entry is slow and error-prone.",
    built:
      "EasyOCR extraction of dates, amounts, IDs, and parties with visual annotations and CSV export. React + TypeScript front end, FastAPI back end.",
    stack: ["EasyOCR", "FastAPI", "React", "TypeScript"],
    result: { value: "End-to-end", label: "OCR → structured data" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/Invoice_AI_Processor" }],
  },
  {
    title: "Protest Banner Interpreter",
    problem: "Researchers needed banner text from crowd footage, in real time.",
    built:
      "Segment Anything masks and Vision Transformers isolate banners; OCR and NLP extract and summarize the message.",
    stack: ["SAM", "ViT", "OCR", "NLP"],
    result: { value: "Expo 2024", label: "Ready Tensor CV Projects" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/Protest-Banner-Interpreter" }],
  },
  {
    title: "Cork Oak Detection",
    problem: "Forest inventory from aerial imagery was done by hand.",
    built:
      "DeepForest detector trained on custom-annotated high-resolution imagery, with a biomass estimation pipeline from canopy area and allometric equations.",
    stack: ["DeepForest", "PyTorch", "Computer vision"],
    result: { value: "91.5%", label: "F1 · 84.3% accuracy" },
    links: [],
  },
  {
    title: "Autonomous Trash-Collecting Robot",
    problem: "Public spaces need low-cost automated cleanup.",
    built:
      "ESP32 robot with YOLO detection of bottles and paper, ultrasonic obstacle avoidance, and DC-motor navigation.",
    stack: ["YOLO", "ESP32", "OpenCV", "Embedded"],
    result: { value: "90%", label: "detection · −95% collisions" },
    links: [],
  },
];

// Logos shown in the "Worked with" block. dark: true puts the logo on a dark tile (for white logos).
export const workedWith = [
  { name: "Qatar Computing Research Institute", logo: "/worked/qcri.png", url: "https://www.hbku.edu.qa/en/qcri" },
  { name: "Magasin Général", logo: "/worked/mg.png", url: "https://www.mg.tn/" },
  { name: "BH Assurance", logo: "/worked/bh-assurance.png", url: "https://www.bhassurance.com.tn/" },
  { name: "CARTE Assurances", logo: "/worked/carte-assurances.png", url: "https://www.carte.com.tn/" },
  { name: "MoroccoAI", logo: "/worked/moroccoai.png", url: "https://morocco.ai/" },
  { name: "Ready Tensor", logo: "/worked/ready-tensor.svg", url: "https://www.readytensor.ai/", dark: true },
];

export const experience = [
  {
    role: "AI Founding Engineer",
    company: "Orymate",
    location: "France",
    country: "fr",
    start: "Oct 2026",
    end: "Present",
    type: "Founding team",
    logo: "/logos/orymate.png",
    url: "https://orymate.ai",
    bullets: [
      "Built a multi-agent orchestrator routing user intent to 4 specialised agents: Mistral in JSON mode, confidence thresholds, session-aware follow-ups, and a rule-based fallback when the LLM is unavailable.",
      "Shipped multi-collection RAG on Qdrant over 12 marketplaces plus SOPs: automatic routing to the right collection, clarification when the marketplace is ambiguous, streamed answers.",
      "Delivered LLM pipelines for SKU-to-template mapping (Amazon, Cdiscount, Mirakl, ManoMano) with per-field confidence, retry/backoff and async jobs; KPI anomaly detection combining an LLM decision agent with a rules engine; and a tool-calling support agent with strict JSON output and human validation.",
    ],
  },
  {
    role: "AI Software Engineer Intern",
    company: "Marketplace Distribution",
    location: "Aix-en-Provence, France",
    country: "fr",
    start: "Mar 2026",
    end: "Sep 2026",
    type: "Internship · On-site",
    logo: "/logos/marketplace-distribution.webp",
    url: "https://marketplacedistribution.com/",
    bullets: [
      "Built an Amazon Seller Central daily monitoring agent (Python, Selenium 4, CrewAI, Mistral, GitHub Actions cron) scraping 8 KPI dimensions per account across 9 accounts and 6 EU markets: ODR/LSR/VTR/AHR vs policy thresholds, revenue delta, FBM logistics, messaging SLA, Buy Box top-5, FBA inbound mismatch, 90-day stockout velocity.",
      "Kept financial figures out of the LLM: the Decision Agent's output is captured verbatim and assembled deterministically, with a policy knowledge base driving chain-of-thought prompting, OTP relay through the ClickUp API for Amazon 2FA, and a deterministic fallback on header-check failure. Cut daily human load from 252 to 5 person-minutes (98%) over 198 production runs at 98.3% pipeline success.",
      "Built an AI catalogue-mapping tool (Python, Mistral) that auto-maps PIM product data into import templates for Mirakl, Cdiscount, Amazon and more: 200+ target fields and 6,000+ controlled-vocabulary values per template, confidence-scored mapping with human review at a 94% threshold. A 150-product batch went from ~20 h manual to ~15 min.",
      "Designed a plugin-based multi-marketplace architecture at ~$0.01 per product: 8-way parallel API fetching, exponential-backoff retries, per-SKU cost tracking, prompt audit logging, and AI-generated French descriptions across all client accounts.",
    ],
  },
  {
    role: "AI Software Engineer",
    company: "Oryzon Partners",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Nov 2025",
    end: "Mar 2026",
    type: "Freelance",
    logo: "/logos/oryzon-partners.webp",
    url: "https://oryzonpartners.io/",
    bullets: [
      "Shipped an agentic RAG service with streaming endpoints, auth, vector search, embeddings, and caching, giving semantic access to large volumes of business and operational documentation.",
      "Built the admin dashboard for document ingestion, vector-store sync, and user management.",
      "Automated EAN-driven eBay.fr scraping with shop-priority selection, ML-assisted attribute extraction, incremental updates, and orchestrated ETL.",
    ],
  },
  {
    role: "AI R&D Engineering Intern",
    company: "Qatar Computing Research Institute",
    location: "Doha, Qatar",
    country: "qa",
    start: "Jul 2025",
    end: "Sep 2025",
    type: "Internship",
    logo: "/logos/qcri.webp",
    url: "https://www.linkedin.com/company/qatar-computing-research-institute/",
    bullets: [
      "Built an augmented diagnosis agent that validates doctor diagnoses against patient statements, proposes differentials, and scores severity, raising diagnostic consistency by 85%.",
      "Designed a Statements–Diagnosis–Symptoms knowledge graph to ground the agent and integrated it into a multi-agent system, cutting researchers' manual verification by 40%.",
    ],
  },
  {
    role: "AI Mentor",
    company: "TAIS NextGen · Tunisian AI Society",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Jun 2025",
    end: "Aug 2025",
    type: "Mentorship",
    logo: "/logos/tais.webp",
    url: "https://tunisian-ai-society.org/",
    bullets: [
      "Led end-to-end delivery of an AI predictive-maintenance platform that cut industrial pump downtime by 70%, using LSTM forecasting and autoencoder anomaly detection.",
      "Architected a RAG-LLM agent delivering 72% more specific and 58% more actionable recommendations; LLM-as-Judge evaluation at 96% alignment and 98% source-grounded.",
    ],
  },
  {
    role: "AI Agent Engineer · Working Student",
    company: "WiseVision AI Technologies",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Jan 2025",
    end: "Jun 2025",
    type: "Part-time",
    logo: "/logos/wisevision.webp",
    url: "https://www.linkedin.com/company/wisevisiontechnologies/",
    bullets: [
      "Built an analytics agent letting analysts query sales, promotion, and inventory KPIs in natural language, cutting manual SQL and reporting effort by 80%.",
      "Delivered 7 analytics modules used daily by 20+ analysts and managers.",
    ],
  },
  {
    role: "Embedded Computer Vision · Working Student",
    company: "Junior Robotics",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Oct 2024",
    end: "Mar 2025",
    type: "Freelance",
    logo: "/logos/junior-robotics.webp",
    url: "https://www.linkedin.com/company/junior-robotics/",
    bullets: [
      "Built an autonomous trash-collecting robot on ESP32 with YOLO detection at 90% accuracy on common waste types.",
      "Implemented real-time navigation and obstacle avoidance, reducing collisions by 95% in dynamic environments.",
      "Ran hands-on workshops teaching students to build and program autonomous robots.",
    ],
  },
  {
    role: "MLOps Engineer Intern",
    company: "Seekmake",
    location: "United States · Remote",
    country: "us",
    start: "Sep 2024",
    end: "Oct 2024",
    type: "Internship",
    logo: "/logos/seekmake.webp",
    url: "https://www.linkedin.com/company/seekmake/",
    bullets: [
      "Deployed and prompt-tuned LLMs on Azure AI Studio within the existing billing framework, avoiding external payment setups.",
      "Benchmarked GPT-4o against Mixtral on cost and quality to pick the production model.",
    ],
  },
  {
    role: "Computer Vision R&D Intern",
    company: "MUST University",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Jun 2024",
    end: "Aug 2024",
    type: "Internship",
    logo: "/logos/must-university.webp",
    url: "https://www.linkedin.com/company/must-universitytn/",
    bullets: [
      "Trained a DeepForest model to detect cork oak trees in aerial imagery: 84.31% accuracy, 91.49% F1 on validation.",
      "Built a biomass estimation pipeline from detected canopy area and allometric equations for forest inventory.",
      "Annotated high-resolution imagery in VGG Image Annotator and converted it to DeepForest format.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Digimytch",
    location: "Tunis, Tunisia",
    country: "tn",
    start: "Jul 2024",
    end: "Aug 2024",
    type: "Internship",
    logo: "/logos/digimytch.webp",
    url: "https://www.linkedin.com/company/digimytch/",
    bullets: [
      "Built a defect-detection model on wind-turbine sensor data to flag early failure signs for predictive maintenance.",
      "Delivered a monitoring dashboard with active-power and wind-speed analysis.",
    ],
  },
];

export const education = {
  degree: {
    school: "INSAT · National Institute of Applied Sciences and Technology",
    program: "Engineering Degree · Software & Artificial Intelligence",
    location: "Tunis, Tunisia",
    country: "tn",
    period: "Class of 2026",
  },
  // image: path under public/awards. Click opens a lightbox.
  awards: [
    {
      place: "1st",
      event: "Hack for Good 3",
      what: "Pump Watch · AI predictive maintenance for pump stations",
      detail: "Real-time monitoring and frequency-domain analysis of motor currents, plus Pumpo, a chatbot for diagnostics and scheduling. Represented Enactus INSAT.",
      image: "/awards/pumpwatch.webp",
    },
    {
      place: "1st",
      event: "TN 2056 ICC · TSYP12 Challenge",
      what: "Ayyus Labs · immersive museum experiences",
      detail: "Six-month hackathon. Companion apps, AR/VR, and touch-sensitive projections for cultural spaces. Represented INSAT.",
      image: "/awards/ayyus.webp",
    },
    {
      place: "1st",
      event: "HACK-E · Tunis Sciences City",
      what: "DHAWWINI · mobile solar + AI-controlled turbine",
      detail: "Energy for unelectrified urban areas, combining a mobile solar panel with an AI-controlled turbine.",
      image: "/awards/dhawwini.webp",
    },
    {
      place: "2nd",
      event: "Orbit 1.0 Ideathon",
      what: "EcoAI-Train · energy optimisation for model training",
      detail: "Dashboard that tracks and reduces energy waste in AI training through scheduling, renewable prioritisation, and heat reuse.",
      image: "/awards/orbit.webp",
    },
    {
      place: "3rd",
      event: "BH Assurance AI Hackathon",
      what: "Insurance assistant · Qdrant RAG + Neo4j routing",
      detail: "React + FastAPI chatbot with query routing, Prometheus monitoring, Docker, deployed on Google Cloud.",
      image: "/awards/bh.webp",
    },
    {
      place: "Selected",
      event: "MENA ML Winter School · Doha",
      what: "INSAT GPT chosen from 1,400+ submissions",
      detail: "Featured as one of the most promising AI initiatives from the region.",
      image: "/awards/mena.webp",
    },
    {
      place: "Selected",
      event: "MoroccoAI Summer School 2025 · Rabat",
      what: "1 of 50 from 1,300+ applicants",
      detail: "Workshops on generative AI and multimodal foundation models with a global cohort.",
      image: "/awards/moroccoai.webp",
    },
    {
      place: "Expo",
      event: "Ready Tensor CV Projects Expo 2024",
      what: "Protest Banner Interpreter",
      detail: "Real-time banner text interpretation for social and political research.",
      image: "/awards/readytensor.webp",
    },
  ],
  community: [
    "IEEE INSAT Student Branch · IEEE Robotics & Automation Society",
    "Technical manager · National Robotics Weekend, DataOverflow",
  ],
};

export const contact = {
  title: "Let's build something that works.",
  text:
    "I'm looking for an AI Engineer role where LLM systems meet production constraints. If that's your team, my inbox is open.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// Interface strings (section labels, buttons). Content above is the data.
export const ui = {
  langName: "English",
  switchTo: "Passer en français",
  switchCode: "FR",
  skip: "Skip to content",
  nav: { github: "GitHub", toLight: "Switch to light mode", toDark: "Switch to dark mode", menu: "Toggle navigation", home: "home" },
  hero: { viewProjects: "View projects", downloadCv: "Download CV", contact: "Contact", keyResults: "Key results", countries: "Countries worked in" },
  about: { eyebrow: "01 — About", portrait: "Portrait of", workedWith: "Worked with & trusted by", map: "Where I've worked and trained" },
  skills: { eyebrow: "02 — Skills", title: "The stack I ship with.", sub: "Grouped by what it's for. Everything here has been used in a project on this page." },
  projects: {
    eyebrow: "03 — Projects",
    title: "Built to be measured.",
    sub: "Each one states the problem, what I built, and the number it moved.",
    featured: "FEATURED",
    problem: "Problem",
    built: "What I built",
    moreResults: "Additional results",
    stack: "Tech stack",
    more: "More on GitHub",
  },
  experience: { eyebrow: "04 — Experience", title: (n) => `${n} roles. Four countries. Research labs, startups, industry.`, sub: "Most recent first." },
  education: { eyebrow: "05 — Education & recognition", title: "Trained at INSAT. Tested in competition.", education: "Education", community: "Community", awards: "Awards and selections", openPhoto: "Open photo", close: "Close" },
  contact: { eyebrow: "06 — Contact", email: "Email me", linkedin: "LinkedIn", github: "GitHub", cv: "CV" },
  footer: { countries: "Tunisia · Qatar · France · USA" },
};
