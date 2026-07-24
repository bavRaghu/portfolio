export const siteConfig = {
  name: "Bavya Raghu",
  title: "Software Engineer",
  school: "GNITS, Hyderabad",
  email: "bavya.raghu11@gmail.com",
  resume:
    "https://drive.google.com/file/d/1ecOxQxmKtA2QbPKAZ6u1gfnxYxwTu7TO/view?usp=sharing",
  github: "https://github.com/bavRaghu/",
  linkedin: "https://www.linkedin.com/in/bavya-raghu/",
  leetcode: "https://leetcode.com/u/6iqnNxsi8A/",
};

export const heroContent = {
  headline: "I build backends, APIs, and tools that automate repetitive work.",
  subheadline:
    "Final-year IT student at GNITS, Hyderabad — building backends, AI tools, and the kind of software that handles complexity so people don't have to.",
  tagline: "Backend · Full Stack · AI Systems",
};

export const aboutContent = {
  paragraphs: [
    "I'm a final-year Information Technology student who enjoys turning ideas into products people can actually use. Over the past few years, I've worked with Java, Python, React, Spring Boot, Flask, Docker, and a growing collection of AI tools to build applications focused on automation and productivity. When I'm not in class, you'll usually find me working on side projects, learning something new, or volunteering to take the lead.",
  ],
};

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2" as const,
    skills: ["Python", "Java", "SQL", "JavaScript", "C"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server" as const,
    skills: [
      "Spring Boot",
      "Flask",
      "REST APIs",
      "JWT",
      "RBAC",
      "OAuth",
      "System Design",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout" as const,
    skills: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    icon: "Database" as const,
    skills: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
  },
  {
    id: "ai",
    title: "AI & Tools",
    icon: "Brain" as const,
    skills: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "OpenAI API",
      "Gemini API",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "Cloud" as const,
    skills: [
      "Microsoft Azure",
      "Docker",
      "CI/CD",
      "Cloud Native Applications",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database" as const,
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "Wrench" as const,
    skills: [
      "Git",
      "GitHub Actions",
      "Postman",
      "Jupyter",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  challenges: string[];
  outcome: string;
  github?: string;
  liveDemo?: string;
  status?: "concept";
}

export const projects: Project[] = [
  {
    id: "smartcsp",
    title: "SmartCSP",
    subtitle: "CSP Generator, Tester, and Optimizer",
    problem:
      "SmartCSP solves brittle, manual CSP creation by automatically analyzing live website resource behavior and generating optimized policies. It validates policies against real browser activity, highlights breaking resources, and creates recommendations that reduce false positives. It was built to make web security easier to maintain and to remove the guesswork from CSP authoring.",
    solution:
      "Developed SmartCSP, an automated CSP generation and validation platform that analyzes live website resource behavior, generates optimized Content Security Policies, validates them against real browser activity, and provides actionable security recommendations.",
    architecture: [
      "Flask backend orchestrating CSP generation",
      "Selenium browser automation for website analysis",
      "CSP parsing and optimization engine",
      "Dockerized execution environment",
      "Azure deployment for scalable testing",
      "Automated report generation pipeline",
    ],
    techStack: [
      "Python",
      "Flask",
      "Selenium",
      "Docker",
      "Microsoft Azure",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    challenges: [
      "Accurately capturing dynamic website resource requests",
      "Automating browser behavior using Selenium",
      "Designing algorithms that generated restrictive yet functional CSP headers",
      "Building a repeatable Docker-based testing pipeline",
    ],
    outcome:
      "Reduced manual effort involved in CSP creation while demonstrating knowledge of web security, browser automation, cloud deployment, and scalable backend workflows.",
    github: "https://github.com/hibahtaj/smart-csp",
    liveDemo: "https://smartcsp-dev.azurewebsites.net/",
  },
  {
    id: "resumenate",
    title: "Resumenate",
    subtitle: "AI-Powered Resume Optimization",
    problem:
      "Resumenate solves repetitive resume tailoring by analyzing resumes against job descriptions and generating ATS-friendly rewrites. It combines job matching, keyword extraction, and LLM-driven content improvements to keep formatting intact. It was built to help candidates save time and submit resumes that better align with each opportunity.",
    solution:
      "Built Resumenate, an AI-powered resume optimization platform that analyzes resumes against job descriptions, identifies missing keywords, improves ATS compatibility, and generates tailored resumes using Large Language Models.",
    architecture: [
      "Flask backend exposing REST APIs",
      "Resume parsing pipeline",
      "Job description analysis module",
      "LLM inference layer",
      "Keyword extraction using KeyBERT",
      "spaCy NLP preprocessing",
      "PDF generation pipeline",
      "Cloud-hosted architecture",
    ],
    techStack: [
      "Python",
      "Flask",
      "OpenAI API",
      "Gemini API",
      "KeyBERT",
      "spaCy",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    challenges: [
      "Combining traditional NLP with LLM-based improvements",
      "Maintaining resume formatting after modifications",
      "Designing reliable prompt workflows for resume rewriting",
      "Building robust PDF generation while preserving layout",
    ],
    outcome:
      "Created an end-to-end AI application that combines NLP, prompt engineering, REST APIs, and document generation to automate resume optimization for job seekers.",
    github: "https://github.com/bavRaghu/resumenate",
    liveDemo: "https://render.com/resumenate",
  },
  {
    id: "gatekeeper",
    title: "Gatekeeper",
    subtitle: "Auth-as-a-Service Platform",
    problem:
      "Gatekeeper solves repetitive authentication and authorization work by centralizing login, RBAC, session management, and API key control into one service. It handles Google OAuth, JWT refresh tokens, and protected REST APIs through a modular Spring Boot backend. It was built to make secure auth infrastructure reusable and easier to integrate across applications.",
    solution:
      "Built Gatekeeper, a secure Authentication-as-a-Service platform that centralizes user authentication and authorization. The platform provides Google OAuth login, JWT-based authentication, refresh token management, Role-Based Access Control (RBAC), project management, API key management, and protected REST APIs through a modular backend architecture.",
    architecture: [
      "Modular Spring Boot backend following layered architecture",
      "PostgreSQL for persistent storage",
      "JWT-based authentication with refresh token flow",
      "Google OAuth integration",
      "RBAC middleware protecting endpoints",
      "Next.js frontend communicating through REST APIs",
      "Secure API key generation and project management",
      "Stateless authentication for scalability",
    ],
    techStack: [
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "Spring Security",
      "JWT",
      "Google OAuth",
      "REST APIs",
      "Next.js",
      "Tailwind CSS",
    ],
    challenges: [
      "Designing a secure authentication flow that balanced usability with security",
      "Implementing refresh token rotation and secure session management",
      "Building flexible RBAC middleware capable of protecting different API endpoints",
      "Debugging authentication, CORS, and distributed frontend-backend communication",
    ],
    outcome:
      "Successfully developed a scalable authentication platform demonstrating secure backend engineering, API design, authentication workflows, and modular software architecture.",
    github: "https://github.com/bavRaghu/gatekeeper-auth",
  },
  {
    id: "churn",
    title: "Customer Churn Predictor",
    subtitle: "ML Classification & Analytics Dashboard",
    problem:
      "Customer Churn Predictor solves the challenge of spotting at-risk customers before they leave by training predictive models on behavioral data. It preprocesses customer data, compares multiple classification models, and exposes predictions through a Streamlit dashboard. It was built to help teams make retention decisions faster and with more confidence.",
    solution:
      "Developed a machine learning application that predicts customer churn by preprocessing customer data, training multiple classification models, comparing performance, and presenting predictions through an interactive Streamlit dashboard.",
    architecture: [
      "Data preprocessing pipeline",
      "Feature engineering",
      "Model training and evaluation",
      "Random Forest and Logistic Regression comparison",
      "Prediction API",
      "Streamlit frontend for visualization",
      "Interactive analytics dashboard",
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "Streamlit",
    ],
    challenges: [
      "Handling missing and categorical data",
      "Selecting meaningful features for prediction",
      "Comparing multiple models objectively",
      "Making predictions understandable through visualization",
    ],
    outcome:
      "Achieved approximately 74% prediction accuracy with an ROC-AUC score of ~0.83, demonstrating practical machine learning, model evaluation, and data visualization skills.",
    github: "https://github.com/bavRaghu/customer-churn-predictor",
    liveDemo: "https://customers-churn-predictor.streamlit.app/",
  },
  {
    id: "ai-docs",
    title: "AI Documentation Platform",
    subtitle: "Multi-Agent Codebase Documentation (In progress)",
    problem:
      "AI Documentation Platform solves outdated developer docs by planning a multi-agent system that analyzes code, extracts architecture, and generates structured documentation. It uses agents for repository understanding, diagram creation, and review so documentation can keep pace with evolving code. It was built as a concept to demonstrate how automation can make technical documentation more reliable and easier to maintain.",
    solution:
      "Designed the concept for an AI-powered documentation platform that automatically analyzes an entire codebase and generates structured, developer-friendly documentation. Instead of relying on a single LLM prompt, the platform uses multiple specialized AI agents that collaborate to understand repository structure, extract architectural insights, generate diagrams, write documentation, and review the final output.",
    architecture: [
      "Repository Analysis Agent — scans structure, dependencies, APIs, and code relationships",
      "Planning Agent — creates documentation strategy and hierarchy",
      "Documentation Agent — generates technical docs for components, APIs, and workflows",
      "Diagram Generation Agent — produces architecture diagrams, flowcharts, and dependency graphs",
      "Formatting Agent — organizes output with navigation, Markdown, and cross-references",
      "Review & QA Agent — verifies completeness and detects inconsistencies",
      "Shared orchestration layer connecting all agents",
    ],
    techStack: [
      "Python",
      "LangChain",
      "LangGraph",
      "LLM APIs (OpenAI / Gemini)",
      "RAG",
      "Knowledge Graphs",
      "FastAPI",
      "Vector Database",
      "Next.js",
      "React",
    ],
    challenges: [
      "Understanding large repositories with complex dependency graphs",
      "Maintaining context across multiple AI agents while avoiding duplicated outputs",
      "Generating accurate architecture diagrams directly from source code",
      "Ensuring generated documentation remains consistent and maintainable",
      "Designing an orchestration workflow that allows agents to collaborate efficiently",
    ],
    outcome:
      "Currently in the architecture and planning phase. Demonstrates an interest in agentic AI, developer productivity, and automated documentation systems.",
  },
];

export const learningTopics = [
  { name: "LangChain", status: "exploring" },
  { name: "LangGraph", status: "exploring" },
  { name: "Agentic AI", status: "active" },
  { name: "AI Workflows", status: "active" },
  { name: "Multi-agent systems", status: "exploring" },
  { name: "Modern backend architecture", status: "active" },
  { name: "APIs", status: "active" },
  { name: "Automation", status: "active" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = [
  "hero",
  "about",
  "skills",
  "projects",
  "contact",
] as const;
