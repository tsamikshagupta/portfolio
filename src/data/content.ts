export type Project = {
  title: string;
  period: string;
  role: string;
  image: string;
  problem: string;
  approach: string;
  tech: string[];
  outcome: string;
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const heroContent = {
  eyebrow: "ML ENGINEER · SYSTEMS BUILDER",
  name: "Samiksha\nGupta",
  headline: "Systems that hold up. Interfaces that ship.",
  summary:
    "I design ML pipelines and full-stack platforms that work under real constraints — not just in notebooks. Clarity over cleverness. Outcomes over experiments.",
  ctaPrimary: "See the Work",
  ctaSecondary: "Get in Touch"
};

export const heroStats = [
  { value: "970K", label: "Embeddings" },
  { value: "2K+", label: "Users Served" },
  { value: "20K+", label: "Records" }
];

export const marqueeItems = [
  "React",
  "TypeScript",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Transformers",
  "Node.js",
  "FastAPI",
  "MongoDB",
  "Docker",
  "AWS",
  "GitHub Actions",
  "Scikit-learn",
  "NLP"
];

export const aboutContent = {
  title: "Profile",
  intro:
    "I'm a Computer Science undergraduate who builds machine learning systems and ships production software. Not one or the other — both.",
  mindset:
    "What sets my work apart is end-to-end ownership. I move from data strategy and model training to secure deployment and polished interfaces without losing clarity at any stage.",
  points: [
    "System-level thinking before model selection",
    "Comfortable bridging research workflows and production constraints",
    "Biased toward reliability, measurability, and directness"
  ]
};

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C", "SQL", "kotlin", "javascript"]
  },
  {
    title: "AI / ML",
    items: ["Machine Learning", "Deep Learning", 'LLM', "NLP", 'RAG', "Transformers", 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'Transfer Learning', 'Hyperparameter Tuning']
  },
  {
    title: "Deep Learning Optimization",
    items: ["AMP", "SWA", "EMA", "MixUp", "Focal Loss", "Custom Embedding Pipelines", "Production-Scale Model Training (NVIDIA DGX)"]
  },
  {
    title: "Backend and Full stack",
    items: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "JWT Authentication", "RBAC"]
  },
  {
    title: "MLOps & Cloud",
    items: ["Flask", "Docker", "CI/CD (GitHub Actions)", "AWS (EC2, S3)", "Linux"]
  },
  {
    title: "Tools & others",
    items: ["Git", "Postman", "Kaggle", "System Design", "Data Structures and Algorithms"]
  },
  {
    title: "Core Computer Science Fundamentals",
    items: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "System Design", "Databases"]
  }
];

export const projects: Project[] = [
  {
    title: "Court-MOE",
    period: "Jul – Dec 2025",
    role: "Architect & ML Engineer",
    image: "/images/project-court.png",
    problem:
      "Legal judgments across Indian courts carry domain-specific language with high class diversity. Manual routing collapses at scale.",
    approach:
      "Built a Mixture-of-Experts pipeline on 970K LegalBERT embeddings with temperature-annealed routing and training stability techniques — AMP, SWA, EMA, MixUp, Focal Loss.",
    tech: ["PyTorch", "LegalBERT", "MoE", "AMP", "SWA", "Production-Scale Model Training (NVIDIA DGX)"],
    outcome:
      "61.4% multi-class routing accuracy on a 6.3GB corpus. Deployable batch and CLI inference. Stable training across minority court classes."
  },
  {
    title: "TransPolymer",
    period: "Feb – Jun 2025",
    role: "ML Engineer",
    image: "/images/project-polymer.png",
    problem:
      "Polymer property prediction was fragmented — tokenization, modeling, and serving lived in separate silos.",
    approach:
      "Designed the full pipeline from scratch: custom BPE tokenizer, transformer MLM pretraining, ChemBERTa fusion, and six regression heads with automated backend serving.",
    tech: ["Transformers", "Custom BPE", "ChemBERTa", "FastAPI", "Python"],
    outcome:
      "Complete ML lifecycle — data prep to production inference — for automated polymer property prediction."
  },
  {
    title: "Production MERN Platforms",
    period: "Jul 2025 – Jan 2026",
    role: "Full Stack Developer",
    image: "/images/project-mern.png",
    problem:
      "Two institutions needed secure platforms for managing complex relational data across roles and generations.",
    approach:
      "Engineered and deployed MERN applications with JWT + RBAC security, structured data modeling, admin dashboards, and AES-256 encrypted flows.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "RBAC", "AES-256"],
    outcome:
      "2,000+ active users. 20,000+ records. Secure encrypted deployment on VPS."
  },
  {
    title: "Inventory Management System",
    period: "",
    role: "Developer",
    image: "",
    problem:
      "Developed a web-based inventory management system for efficient tracking and management of resources in a college environment.",
    approach:
      "Built backend using Python and SQLite. Designed frontend using HTML, CSS, and JavaScript. Integrated dynamic UI interactions.",
    tech: ["Python", "SQLite", "HTML", "CSS", "JavaScript"],
    outcome:
      "Enabled real-time inventory updates and user-friendly interface."
  }
];

export const experienceItems = [
  {
    title: "Full Stack Developer",
    org: "Keshav Memorial Group of Institutions",
    period: "Jul 2025 – Jan 2026",
    impact:
      "Owned architecture, deployment, and usability decisions for production-facing client applications."
  },
  {
    title: "Machine Learning Intern",
    org: "Cognifyz Technologies",
    period: "Sep – Oct 2025",
    impact:
      "Improved model validation through disciplined preprocessing, tuning strategy, and metric-driven evaluation."
  },
  {
    title: "Event Management Head",
    org: "KMCE Event Committee",
    period: "Leadership Role",
    impact:
      "Led cross-functional teams for large campus events. End-to-end planning, delegation, and operational execution."
  }
];

export const achievements = [
  {
    label: "Engineering Depth",
    title: "350+ DSA problems solved",
    detail: "Consistent practice across LeetCode, HackerRank, and CodeChef for algorithmic rigor."
  },
  {
    label: "Team Leadership",
    title: "Event management execution",
    detail: "Coordinated people, timelines, and quality for large student-facing events."
  },
  {
    label: "National Competition",
    title: "Smart India Hackathon 2024",
    detail: "Shipped under real constraints in a national-level innovation environment."
  },
  {
    label: "Cloud Proficiency",
    title: "10 Google Cloud skill badges",
    detail: "Generative AI and LLM-focused training with practical cloud workflows."
  }
];

export const approachPrinciples = [
  {
    title: "Constraints first",
    body: "I define data quality, compute limits, and failure modes before choosing models."
  },
  {
    title: "Depth with maintainability",
    body: "Solutions should be technically strong and still understandable, testable, and supportable."
  },
  {
    title: "Production metrics",
    body: "I measure what matters after deployment — not just benchmark performance."
  }
];

export const philosophyContent = {
  title: "Philosophy",
  statement:
    "Good engineering is quiet. It is clear thinking, reliable execution, and deliberate trade-offs — made with context, not ego.",
  vision:
    "I want to build intelligent systems that are technically ambitious and operationally sound — especially where reliability has real human impact."
};

export const closingCta = {
  title: "Let's connect and build something impactful.",
  copy:
    "I am open to internships, collaborations, and AI-driven projects.\nLocation: Hyderabad, India"
};

export const contactLinks = [
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=samikshaterala9@gmail.com" },
  { label: "Resume", href: "/samiksha_terala_resume.pdf" },
  { label: "GitHub", href: "https://github.com/tsamikshagupta" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tsamikshagupta/" },
  { label: "Behance", href: "https://www.behance.net/samikshagupta13" }
];
