// ---------------------------------------------------------------------------
// Version française. Même structure que profile.js ; les logos, liens, images
// et la liste des compétences sont partagés avec la version anglaise.
// ---------------------------------------------------------------------------

import { site as siteEn, skills as skillsEn, workedWith } from "./profile";

export { workedWith };

export const site = {
  ...siteEn,
  role: "Ingénieur IA",
  location: "Aix-en-Provence, France · originaire de Tunis, Tunisie",
  cv: "/Fedy_Ben_Hassouna_CV_FR.pdf",
  status: "Ouvert aux postes d'Ingénieur IA · 2026",
};

export const hero = {
  eyebrow: "// Ingénieur IA · LLMs · Agents · RAG",
  headline: "Je construis des systèmes LLM qui passent en production et font bouger les chiffres.",
  typed: [
    "Des pipelines RAG qui restent fiables.",
    "Des systèmes multi-agents qui finissent le travail.",
    "Des modèles ML qui tournent sur du vrai matériel.",
    "Des backends FastAPI qui tiennent la charge.",
  ],
  sub:
    "Ingénieur IA, 10 expériences entre laboratoires de recherche, startups et industrie en Tunisie, au Qatar, en France et aux États-Unis. Je mène les idées LLM et ML du notebook à la production : retrieval, agents, évaluation, déploiement.",
  stats: [
    { value: "70%", label: "d'arrêts de pompes en moins" },
    { value: "80%", label: "de reporting manuel en moins" },
    { value: "96%", label: "d'alignement LLM-juge" },
    { value: "3×", label: "premières places en hackathon" },
  ],
};

export const about = {
  title: "Des systèmes sérieux, pas des démos.",
  paragraphs: [
    "Je suis Fedy, ingénieur IA formé à l'INSAT à Tunis, aujourd'hui founding engineer chez Orymate en France. J'ai travaillé avec des équipes en Tunisie, au Qatar, en France et aux États-Unis, et passé les trois dernières années dans la boucle complète : données, modèle, agent, API, déploiement.",
    "Mon travail se situe là où les LLM rencontrent de vraies contraintes. Un retrieval qui doit être juste, des agents qui doivent aller au bout, des modèles qui doivent tourner sur un Raspberry Pi ou dans un budget Azure.",
    "Je mesure ce que je construis. Chaque projet ici a un chiffre associé, parce qu'une fonctionnalité IA que personne ne peut évaluer est un risque, pas un produit.",
  ],
};

export const skills = skillsEn.map((g) => ({
  ...g,
  group:
    {
      "LLMs & GenAI": "LLMs & IA générative",
      "ML / DL": "ML / DL",
      "MLOps & Deployment": "MLOps & déploiement",
      "Data & Storage": "Données & stockage",
      "Languages & Tools": "Langages & outils",
    }[g.group] || g.group,
}));

export const projects = [
  {
    featured: true,
    title: "Pump Watch",
    tagline: "Maintenance prédictive pour stations de pompage industrielles",
    problem:
      "Les stations de pompage tombaient en panne sans prévenir. Les opérateurs avaient des logs capteurs mais aucun moyen de les lire à temps.",
    built:
      "Prévision de séries temporelles LSTM sur données multi-capteurs, détection d'anomalies par autoencodeur sur spectrogrammes log-mel, et un agent RAG-LLM qui transforme les détections en recommandations de maintenance. Évalué par LLM-juge.",
    stack: ["PyTorch", "LSTM", "Autoencodeurs", "RAG", "LangChain", "FastAPI"],
    result: { value: "−70%", label: "d'arrêts de pompes" },
    extra: ["Recommandations 72% plus précises", "98% de réponses sourcées", "1re place · Hack for Good 3"],
    links: [{ label: "Démo", href: "https://drive.google.com/file/d/1g7YtpuBlO-fw2MUk7cNT_u6a55-pq7Ug/view?usp=sharing" }],
  },
  {
    featured: true,
    title: "Agent d'analytique retail",
    tagline: "BI en langage naturel pour un grand distributeur tunisien",
    problem:
      "Les analystes passaient leurs journées à écrire du SQL et à refaire les mêmes rapports sur les ventes, les promotions et le stock.",
    built:
      "Un agent LLM qui traduit les questions en requêtes validées, les exécute et renvoie graphiques et synthèse. 7 modules livrés : impact promo, rotation des stocks, analyse de panier, prévisions, détection d'invendus.",
    stack: ["Agents LLM", "Function calling", "SQL", "Python", "Streamlit"],
    result: { value: "−80%", label: "de SQL et reporting manuels" },
    extra: ["7 modules en production", "20+ analystes et managers au quotidien"],
    links: [],
  },
  {
    featured: true,
    title: "Agent de diagnostic augmenté",
    tagline: "Aide au raisonnement clinique au Qatar Computing Research Institute",
    problem:
      "Les chercheurs vérifiaient à la main si les diagnostics médicaux correspondaient à ce que les patients rapportaient réellement.",
    built:
      "Un graphe de connaissances reliant déclarations, diagnostics et symptômes, plus un agent qui valide un diagnostic contre le texte patient, propose des différentiels et évalue la sévérité. Intégré à un système multi-agents de recherche.",
    stack: ["Graphes de connaissances", "Multi-agents", "LLMs", "Python"],
    result: { value: "+85%", label: "de cohérence diagnostique" },
    extra: ["−40% de vérification manuelle"],
    links: [],
  },
  {
    title: "Agent GAIA",
    problem: "Benchmark du cours Agents de Hugging Face : des questions multi-étapes qui exigent des outils, pas de la mémoire.",
    built:
      "Machine à états LangGraph avec recherche web, Wikipédia, arXiv, calculatrice et un vector store Supabase. Interface Gradio pour soumettre les réponses à la notation.",
    stack: ["LangGraph", "Supabase", "Gradio", "Outils"],
    result: { value: "GAIA", label: "agent de benchmark" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/GAIA_Agent" }],
  },
  {
    title: "RAG à graphe de connaissances",
    problem: "Le RAG vectoriel seul hallucine sur les questions multi-sauts.",
    built:
      "Retrieval hybride sur un graphe Neo4j et un vector store, orchestré avec LangChain, pour des réponses ancrées dans les chatbots d'entreprise.",
    stack: ["Neo4j", "LangChain", "Cypher", "Recherche vectorielle"],
    result: { value: "Hybride", label: "retrieval graphe + vecteurs" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/knowledge-graph-rag-system" }],
  },
  {
    title: "INSAT GPT",
    problem: "Étudiants et personnel n'avaient aucun point d'entrée unique pour les horaires, les cours et les procédures.",
    built:
      "Un assistant fine-tuné et adossé à un RAG sur la connaissance propre à l'INSAT, disponible 24h/24.",
    stack: ["Fine-tuning", "RAG", "LLMs"],
    result: { value: "1 / 1 400+", label: "sélectionné · MENA ML Winter School" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/INSAT_GPT" }],
  },
  {
    title: "Stockify",
    problem: "Les investisseurs particuliers jonglent entre cours, actualités et rapports sur une dizaine d'onglets.",
    built:
      "Analyse LLM multi-agents sur les données Yahoo Finance et les actualités traitées en NLP, servie par FastAPI avec un front React.",
    stack: ["Multi-agents", "FastAPI", "React", "NLP"],
    result: { value: "Temps réel", label: "intelligence financière" },
    links: [
      { label: "GitHub", href: "https://github.com/fedy-benhassouna/Stockify" },
      { label: "Démo", href: "https://www.linkedin.com/feed/update/urn:li:activity:7340836291284029440/" },
    ],
  },
  {
    title: "Assistant assurance · BH Assurance",
    problem: "Un seul chatbot devait répondre de façon fiable aux questions produits et aux questions sur les comptes clients.",
    built:
      "Routeur de requêtes envoyant les questions produits vers un pipeline RAG Qdrant et les questions clients vers un graphe Neo4j. Monitoring Prometheus, Docker, déployé sur une VM Google Cloud.",
    stack: ["Qdrant", "Neo4j", "FastAPI", "Docker", "Prometheus", "GCP"],
    result: { value: "3e", label: "Hackathon IA BH Assurance" },
    links: [],
  },
  {
    title: "Invoice AI Processor",
    problem: "La saisie manuelle des factures est lente et source d'erreurs.",
    built:
      "Extraction EasyOCR des dates, montants, identifiants et parties avec annotations visuelles et export CSV. Front React + TypeScript, backend FastAPI.",
    stack: ["EasyOCR", "FastAPI", "React", "TypeScript"],
    result: { value: "Bout en bout", label: "OCR → données structurées" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/Invoice_AI_Processor" }],
  },
  {
    title: "Interprète de banderoles",
    problem: "Des chercheurs avaient besoin du texte des banderoles dans des images de foule, en temps réel.",
    built:
      "Masques Segment Anything et Vision Transformers pour isoler les banderoles ; OCR et NLP pour extraire et résumer le message.",
    stack: ["SAM", "ViT", "OCR", "NLP"],
    result: { value: "Expo 2024", label: "Ready Tensor CV Projects" },
    links: [{ label: "GitHub", href: "https://github.com/fedy-benhassouna/Protest-Banner-Interpreter" }],
  },
  {
    title: "Détection de chênes-lièges",
    problem: "L'inventaire forestier à partir d'images aériennes se faisait à la main.",
    built:
      "Détecteur DeepForest entraîné sur des images haute résolution annotées sur mesure, avec un pipeline d'estimation de biomasse à partir de la surface de canopée et d'équations allométriques.",
    stack: ["DeepForest", "PyTorch", "Vision par ordinateur"],
    result: { value: "91,5%", label: "F1 · 84,3% de précision" },
    links: [],
  },
  {
    title: "Robot autonome ramasseur de déchets",
    problem: "Les espaces publics ont besoin d'un nettoyage automatisé à bas coût.",
    built:
      "Robot ESP32 avec détection YOLO de bouteilles et papiers, évitement d'obstacles par ultrasons et navigation à moteurs DC.",
    stack: ["YOLO", "ESP32", "OpenCV", "Embarqué"],
    result: { value: "90%", label: "de détection · −95% de collisions" },
    links: [],
  },
];

export const experience = [
  {
    role: "AI Founding Engineer",
    company: "Orymate",
    location: "France",
    country: "fr",
    start: "Oct. 2026",
    end: "Aujourd'hui",
    type: "Équipe fondatrice",
    logo: "/logos/orymate.png",
    url: "https://orymate.ai",
    bullets: [
      "Orchestrateur multi-agents : routage d'intention via Mistral en mode JSON, seuils de confiance, follow-ups session-aware et fallback par règles si le LLM est indisponible, vers 4 agents spécialisés.",
      "RAG multi-collection sur Qdrant (12 marketplaces + SOPs) : routage automatique vers la bonne collection, clarification si la marketplace est ambiguë, réponses en streaming.",
      "Pipelines LLM : mapping SKU vers templates Amazon/Cdiscount/Mirakl/ManoMano (confiance par champ, retry/backoff, jobs asynchrones) ; détection d'anomalies KPI (agent décisionnel LLM + moteur de règles) ; agent support en boucle tool-calling à sortie JSON stricte avec validation humaine.",
    ],
  },
  {
    role: "Ingénieur logiciel IA · Stagiaire",
    company: "Marketplace Distribution",
    location: "Aix-en-Provence, France",
    country: "fr",
    start: "Mars 2026",
    end: "Sept. 2026",
    type: "Stage · Sur site",
    logo: "/logos/marketplace-distribution.webp",
    url: "https://marketplacedistribution.com/",
    bullets: [
      "Agent de monitoring quotidien Amazon Seller Central (Python, Selenium 4, CrewAI, Mistral, cron GitHub Actions) scrappant 8 dimensions KPI par compte sur 9 comptes et 6 marchés européens : ODR/LSR/VTR/AHR vs seuils de politique Amazon, delta de revenus, logistique FBM, SLA messagerie, top-5 Buy Box, écarts d'entrées FBA, vélocité de rupture à 90 jours.",
      "Chiffres financiers tenus hors du LLM : la sortie du Decision Agent est capturée telle quelle et assemblée de façon déterministe ; base de connaissances des politiques Amazon pour le prompting chain-of-thought, relais OTP via l'API ClickUp pour la 2FA, fallback déterministe en cas d'échec de vérification. Charge humaine quotidienne réduite de 252 à 5 minutes-personne (−98%) sur 198 exécutions en production, 98,3% de succès pipeline.",
      "Outil IA de mapping catalogue (Python, Mistral) qui projette automatiquement les données produit PIM dans les templates d'import Mirakl, Cdiscount, Amazon et autres : 200+ champs cibles et 6 000+ valeurs de vocabulaire contrôlé par template, mapping scoré en confiance avec revue humaine au seuil de 94%. Un lot de 150 produits passe de ~20 h manuelles à ~15 min.",
      "Architecture multi-marketplace à plugins à ~0,01 $ par produit : récupération API parallèle 8 voies, retries à backoff exponentiel, suivi des coûts par SKU, journal d'audit des prompts et descriptions françaises générées par IA sur tous les comptes clients.",
    ],
  },
  {
    role: "Ingénieur logiciel IA",
    company: "Oryzon Partners",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Nov. 2025",
    end: "Mars 2026",
    type: "Freelance",
    logo: "/logos/oryzon-partners.webp",
    url: "https://oryzonpartners.io/",
    bullets: [
      "Service RAG agentique avec endpoints en streaming, authentification, recherche vectorielle, embeddings et cache, donnant un accès sémantique à de grands volumes de documentation métier et opérationnelle.",
      "Dashboard d'administration pour l'ingestion de documents, la synchronisation du vector store et la gestion des utilisateurs.",
      "Pipelines de scraping eBay.fr pilotés par EAN avec priorisation des boutiques, extraction d'attributs assistée par ML, mises à jour incrémentales et ETL orchestré.",
    ],
  },
  {
    role: "Stagiaire R&D en ingénierie IA",
    company: "Qatar Computing Research Institute",
    location: "Doha, Qatar",
    country: "qa",
    start: "Juil. 2025",
    end: "Sept. 2025",
    type: "Stage",
    logo: "/logos/qcri.webp",
    url: "https://www.linkedin.com/company/qatar-computing-research-institute/",
    bullets: [
      "Agent de diagnostic augmenté qui valide les diagnostics médicaux contre les déclarations des patients, propose des différentiels et évalue la sévérité : +85% de cohérence diagnostique.",
      "Graphe de connaissances Déclarations–Diagnostic–Symptômes pour ancrer l'agent, intégré à un système multi-agents : −40% de vérification manuelle pour les chercheurs.",
    ],
  },
  {
    role: "Mentor IA",
    company: "TAIS NextGen · Tunisian AI Society",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Juin 2025",
    end: "Août 2025",
    type: "Mentorat",
    logo: "/logos/tais.webp",
    url: "https://tunisian-ai-society.org/",
    bullets: [
      "Pilotage de bout en bout d'une plateforme IA de maintenance prédictive ayant réduit de 70% les arrêts de pompes industrielles, avec prévision LSTM et détection d'anomalies par autoencodeur.",
      "Architecture d'un agent RAG-LLM produisant des recommandations 72% plus précises et 58% plus actionnables ; évaluation LLM-juge à 96% d'alignement et 98% de réponses sourcées.",
    ],
  },
  {
    role: "Ingénieur agents IA · Étudiant salarié",
    company: "WiseVision AI Technologies",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Janv. 2025",
    end: "Juin 2025",
    type: "Temps partiel",
    logo: "/logos/wisevision.webp",
    url: "https://www.linkedin.com/company/wisevisiontechnologies/",
    bullets: [
      "Agent d'analytique permettant aux analystes d'interroger les KPI ventes, promotions et stocks en langage naturel : −80% d'effort SQL et de reporting manuel.",
      "7 modules d'analytique livrés, utilisés chaque jour par 20+ analystes et managers.",
    ],
  },
  {
    role: "Vision embarquée · Étudiant salarié",
    company: "Junior Robotics",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Oct. 2024",
    end: "Mars 2025",
    type: "Freelance",
    logo: "/logos/junior-robotics.webp",
    url: "https://www.linkedin.com/company/junior-robotics/",
    bullets: [
      "Robot autonome ramasseur de déchets sur ESP32 avec détection YOLO à 90% de précision sur les déchets courants.",
      "Navigation temps réel et évitement d'obstacles, réduisant les collisions de 95% en environnement dynamique.",
      "Animation d'ateliers pratiques pour apprendre aux étudiants à construire et programmer des robots autonomes.",
    ],
  },
  {
    role: "Stagiaire ingénieur MLOps",
    company: "Seekmake",
    location: "États-Unis · À distance",
    country: "us",
    start: "Sept. 2024",
    end: "Oct. 2024",
    type: "Stage",
    logo: "/logos/seekmake.webp",
    url: "https://www.linkedin.com/company/seekmake/",
    bullets: [
      "Déploiement et optimisation des prompts de LLM sur Azure AI Studio dans le cadre de facturation existant, sans configuration de paiement externe.",
      "Comparatif GPT-4o vs Mixtral sur coût et qualité pour choisir le modèle de production.",
    ],
  },
  {
    role: "Stagiaire R&D vision par ordinateur",
    company: "MUST University",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Juin 2024",
    end: "Août 2024",
    type: "Stage",
    logo: "/logos/must-university.webp",
    url: "https://www.linkedin.com/company/must-universitytn/",
    bullets: [
      "Modèle DeepForest pour détecter les chênes-lièges sur images aériennes : 84,31% de précision, 91,49% de F1 en validation.",
      "Pipeline d'estimation de biomasse à partir de la surface de canopée détectée et d'équations allométriques, pour l'inventaire forestier.",
      "Annotation d'images haute résolution avec VGG Image Annotator et conversion au format DeepForest.",
    ],
  },
  {
    role: "Stagiaire ingénieur machine learning",
    company: "Digimytch",
    location: "Tunis, Tunisie",
    country: "tn",
    start: "Juil. 2024",
    end: "Août 2024",
    type: "Stage",
    logo: "/logos/digimytch.webp",
    url: "https://www.linkedin.com/company/digimytch/",
    bullets: [
      "Modèle de détection de défauts sur données capteurs d'éoliennes pour repérer les signes précoces de panne et permettre la maintenance prédictive.",
      "Dashboard de monitoring avec analyse de puissance active et de vitesse du vent.",
    ],
  },
];

export const education = {
  degree: {
    school: "INSAT · Institut National des Sciences Appliquées et de Technologie",
    program: "Diplôme d'ingénieur · Logiciel & Intelligence Artificielle",
    location: "Tunis, Tunisie",
    country: "tn",
    period: "Promotion 2026",
  },
  awards: [
    {
      place: "1er",
      event: "Hack for Good 3",
      what: "Pump Watch · maintenance prédictive IA pour stations de pompage",
      detail: "Monitoring temps réel et analyse fréquentielle des courants moteurs, plus Pumpo, un chatbot de diagnostic et de planification. Représentant Enactus INSAT.",
      image: "/awards/pumpwatch.webp",
    },
    {
      place: "1er",
      event: "TN 2056 ICC · Challenge TSYP12",
      what: "Ayyus Labs · expériences muséales immersives",
      detail: "Hackathon de six mois. Applications compagnon, AR/VR et projections tactiles pour les lieux culturels. Représentant l'INSAT.",
      image: "/awards/ayyus.webp",
    },
    {
      place: "1er",
      event: "HACK-E · Cité des Sciences de Tunis",
      what: "DHAWWINI · solaire mobile + turbine pilotée par IA",
      detail: "Énergie pour les zones urbaines non électrifiées, combinant un panneau solaire mobile et une turbine contrôlée par IA.",
      image: "/awards/dhawwini.webp",
    },
    {
      place: "2e",
      event: "Ideathon Orbit 1.0",
      what: "EcoAI-Train · optimisation énergétique de l'entraînement de modèles",
      detail: "Dashboard qui suit et réduit le gaspillage énergétique de l'entraînement IA via l'ordonnancement, la priorisation du renouvelable et la réutilisation de la chaleur.",
      image: "/awards/orbit.webp",
    },
    {
      place: "3e",
      event: "Hackathon IA BH Assurance",
      what: "Assistant assurance · RAG Qdrant + routage Neo4j",
      detail: "Chatbot React + FastAPI avec routage de requêtes, monitoring Prometheus, Docker, déployé sur Google Cloud.",
      image: "/awards/bh.webp",
    },
    {
      place: "Sélection",
      event: "MENA ML Winter School · Doha",
      what: "INSAT GPT retenu parmi 1 400+ candidatures",
      detail: "Présenté comme l'une des initiatives IA les plus prometteuses de la région.",
      image: "/awards/mena.webp",
    },
    {
      place: "Sélection",
      event: "MoroccoAI Summer School 2025 · Rabat",
      what: "1 des 50 retenus parmi 1 300+ candidats",
      detail: "Ateliers sur l'IA générative et les modèles de fondation multimodaux avec une cohorte internationale.",
      image: "/awards/moroccoai.webp",
    },
    {
      place: "Expo",
      event: "Ready Tensor CV Projects Expo 2024",
      what: "Interprète de banderoles",
      detail: "Interprétation en temps réel du texte des banderoles pour la recherche sociale et politique.",
      image: "/awards/readytensor.webp",
    },
  ],
  community: [
    "IEEE INSAT Student Branch · IEEE Robotics & Automation Society",
    "Responsable technique · National Robotics Weekend, DataOverflow",
  ],
};

export const contact = {
  title: "Construisons quelque chose qui marche.",
  text:
    "Je cherche un poste d'Ingénieur IA où les systèmes LLM rencontrent les contraintes de la production. Si c'est votre équipe, ma boîte mail est ouverte.",
};

export const nav = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const ui = {
  langName: "Français",
  switchTo: "Switch to English",
  switchCode: "EN",
  skip: "Aller au contenu",
  nav: { github: "GitHub", toLight: "Passer en mode clair", toDark: "Passer en mode sombre", menu: "Ouvrir la navigation", home: "accueil" },
  hero: { viewProjects: "Voir les projets", downloadCv: "Télécharger le CV", contact: "Contact", keyResults: "Résultats clés", countries: "Pays d'expérience" },
  about: { eyebrow: "01 — À propos", portrait: "Portrait de", workedWith: "Ils m'ont fait confiance", map: "Où j'ai travaillé et étudié" },
  skills: { eyebrow: "02 — Compétences", title: "La stack avec laquelle je livre.", sub: "Regroupée par usage. Tout ce qui est ici a servi dans un projet de cette page." },
  projects: {
    eyebrow: "03 — Projets",
    title: "Construits pour être mesurés.",
    sub: "Chacun indique le problème, ce que j'ai construit, et le chiffre qui a bougé.",
    featured: "À LA UNE",
    problem: "Problème",
    built: "Ce que j'ai construit",
    moreResults: "Résultats complémentaires",
    stack: "Stack technique",
    more: "Plus sur GitHub",
  },
  experience: { eyebrow: "04 — Expérience", title: (n) => `${n} expériences. Quatre pays. Laboratoires, startups, industrie.`, sub: "Du plus récent au plus ancien." },
  education: { eyebrow: "05 — Formation & distinctions", title: "Formé à l'INSAT. Éprouvé en compétition.", education: "Formation", community: "Communauté", awards: "Distinctions et sélections", openPhoto: "Ouvrir la photo", close: "Fermer" },
  contact: { eyebrow: "06 — Contact", email: "M'écrire", linkedin: "LinkedIn", github: "GitHub", cv: "CV" },
  footer: { countries: "Tunisie · Qatar · France · États-Unis" },
};
