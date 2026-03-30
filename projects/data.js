export const heroData = {
  tagline: "ML Engineer · NLP Systems Builder · Full-Stack Implementer",
  heading: "I build systems that hold up at scale.",
  subheading:
    "From 970K-embedding legal NLP pipelines to production apps serving 2000+ users, I focus on systems that stay reliable outside the lab.",
  roles: ["Large-Scale NLP", "Mixture-of-Experts", "Production ML", "Secure MERN Delivery"],
  metrics: [
    { value: "970K", label: "Embeddings Trained" },
    { value: "2K+", label: "Users Served" },
    { value: "61.4%", label: "Routing Accuracy" }
  ]
};

export const systemFlow = [
  { icon: "⬢", name: "Data", detail: "Ingest · Clean · Structure" },
  { icon: "◈", name: "Representation", detail: "LegalBERT · ChemBERTa · BPE" },
  { icon: "⊕", name: "Modeling", detail: "MoE · Transformer · Regression" },
  { icon: "⊗", name: "Optimization", detail: "AMP · SWA · EMA · MixUp" },
  { icon: "▶", name: "Deployment", detail: "FastAPI · Docker · Secure APIs" }
];

export const principles = [
  {
    number: "01",
    title: "Design for Failure Early",
    description:
      "I assume distribution shift, class imbalance, and noisy inputs upfront, then build pipelines that stay stable when real traffic arrives."
  },
  {
    number: "02",
    title: "Optimize for Reliability",
    description:
      "Accuracy matters, but consistency matters more. I optimize training and inference for behavior that is repeatable under operational constraints."
  },
  {
    number: "03",
    title: "Ship with Operational Clarity",
    description:
      "Every model decision should map to a deployable interface, measurable metrics, and a clear rollback path."
  }
];

export const skillCategories = [
  {
    category: "ML Systems",
    skills: ["PyTorch", "Transformers", "NLP", "MoE", "Transfer Learning", "Fine-Tuning", "LLM Fine-Tuning"]
  },
  {
    category: "Optimization Stack",
    skills: ["AMP", "SWA", "EMA", "MixUp", "Focal Loss", "A100 GPU Training", "Hyperparameter Tuning"]
  },
  {
    category: "Backend & Product Delivery",
    skills: ["Node.js", "Express", "React", "MongoDB", "REST APIs", "JWT", "RBAC", "FastAPI", "Docker"]
  },
  {
    category: "Platforms & Tooling",
    skills: ["Python", "Java", "JavaScript", "SQL", "Bash", "AWS EC2/S3", "GitHub Actions", "Linux", "Git"]
  }
];

export const impactMetrics = [
  { value: "970K", label: "Legal Embeddings Trained" },
  { value: "6.3GB", label: "Dataset Processed" },
  { value: "61.4%", label: "MoE Routing Accuracy" },
  { value: "2K+", label: "Users Served in Production" },
  { value: "20K+", label: "Records Managed" },
  { value: "350+", label: "DSA Problems Solved" },
  { value: "10", label: "Google Cloud Skill Badges" },
  { value: "8.03", label: "Current CGPA" }
];

export const optimizationFocus = [
  {
    title: "Robustness Over Vanity Metrics",
    detail: "Model quality is measured by how it behaves on minority classes and edge-case distributions, not just headline scores."
  },
  {
    title: "Latency-Conscious Inference",
    detail: "I build pipelines that support both batch and real-time prediction paths without breaking consistency."
  },
  {
    title: "Security by Default",
    detail: "From JWT/RBAC architecture to AES-256 secured flows, production systems are designed with trust boundaries in mind."
  }
];

export const featuredProjects = [
  {
    key: "court",
    period: "Jul 2025 — Dec 2025",
    title: "Court-MOE",
    summary:
      "A legal NLP routing system built for scale, not demos. The focus was robust multi-class behavior across diverse Indian court documents.",
    image: "/images/featured-court.svg",
    badges: ["970K Embeddings", "A100 Training", "MoE", "Production Inference"],
    problem:
      "Legal judgments carry domain-heavy language across multiple courts. Manual routing fails quickly when volume and class diversity increase.",
    architecture: [
      "LegalBERT embeddings at 970K scale",
      "Temperature-annealed MoE router",
      "Expert specialization layers",
      "Multi-class classification head",
      "Batch + CLI real-time inference"
    ],
    metrics: [
      { value: "970K", label: "Embeddings" },
      { value: "6.3GB", label: "Corpus" },
      { value: "61.4%", label: "Routing" }
    ],
    impact:
      "Training stability improved with AMP, SWA, EMA, MixUp, and Focal Loss, with better handling of underrepresented court classes."
  },
  {
    key: "polymer",
    period: "Feb 2025 — Jun 2025",
    title: "TransPolymer",
    summary:
      "A full from-scratch transformer workflow for polymer prediction, built to prove end-to-end ownership from tokenization to deployment.",
    image: "/images/featured-polymer.svg",
    badges: ["From Scratch", "Custom BPE", "ChemBERTa", "6 Regression Heads"],
    problem:
      "Polymer property estimation is usually slow and fragmented. I treated sequence understanding as an NLP problem with domain adaptation.",
    architecture: [
      "Custom BPE tokenizer",
      "Transformer MLM pretraining",
      "ChemBERTa feature fusion",
      "Six property regression heads",
      "Automated backend inference"
    ],
    metrics: [
      { value: "6", label: "Property Heads" },
      { value: "0→1", label: "Lifecycle" },
      { value: "100%", label: "Custom Pipeline" }
    ],
    impact:
      "Established a reusable pipeline for domain-specific transformer experimentation and deployment in materials-focused workflows."
  },
  {
    key: "mern",
    period: "Jul 2025 — Jan 2026",
    title: "Production MERN Systems",
    summary:
      "Two institution-facing applications where security, relational data design, and maintainability were non-negotiable.",
    image: "/images/featured-mern.svg",
    badges: ["2K+ Users", "20K+ Records", "JWT + RBAC", "AES-256"],
    problem:
      "Managing multi-generational institutional records requires robust access controls and interfaces that can handle complex relationships.",
    architecture: [
      "React admin interfaces",
      "Node/Express REST architecture",
      "JWT authentication and RBAC",
      "MongoDB at 20K+ records",
      "SSL VPS with encrypted flows"
    ],
    metrics: [
      { value: "2K+", label: "Users" },
      { value: "20K+", label: "Records" },
      { value: "AES-256", label: "Encryption" }
    ],
    impact:
      "Delivered stable systems used by real users with secure data boundaries and operationally maintainable backend design."
  }
];

export const projectLibrary = [
  {
    key: "court",
    title: "Court-MOE",
    description: "MoE legal NLP routing system trained on 970K embeddings for high-volume multi-class judgment classification.",
    filters: ["ml", "nlp"],
    tags: ["MoE", "LegalBERT", "A100", "Routing"],
    subtitle: "Architect & ML Engineer · Jul 2025 – Dec 2025",
    body:
      "Built a legal-domain MoE pipeline with 970K embeddings and temperature-annealed routing. Focused on class robustness, routing stability, and deployable inference.",
    stack: ["PyTorch", "LegalBERT", "MoE", "AMP", "SWA", "EMA", "Focal Loss"]
  },
  {
    key: "polymer",
    title: "TransPolymer",
    description: "Transformer + custom BPE stack for polymer property prediction with six specialized regression heads.",
    filters: ["ml", "nlp"],
    tags: ["Transformer", "ChemBERTa", "BPE", "Regression"],
    subtitle: "ML Engineer · Feb 2025 – Jun 2025",
    body:
      "Designed an end-to-end molecular sequence modeling pipeline: tokenizer design, model training, evaluation, and backend-serving for automated predictions.",
    stack: ["PyTorch", "Transformers", "ChemBERTa", "FastAPI", "Python"]
  },
  {
    key: "mern",
    title: "MERN Production Apps",
    description: "Two secure full-stack platforms with role-based access and multi-generational relational data flows.",
    filters: ["mern"],
    tags: ["MERN", "JWT", "RBAC", "AES-256"],
    subtitle: "Full Stack Developer · Jul 2025 – Jan 2026",
    body:
      "Delivered production-ready applications for institution-scale workflows, with secure backend architecture and maintainable admin experience.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "RBAC", "Docker"]
  },
  {
    key: "cognifyz",
    title: "Classification Pipeline",
    description: "Supervised ML models tuned for robust validation behavior using cross-validation and feature engineering.",
    filters: ["ml", "data"],
    tags: ["Scikit-learn", "ROC-AUC", "F1", "Cross-Validation"],
    subtitle: "Machine Learning Intern · Sep – Oct 2025",
    body:
      "Improved classification reliability through better preprocessing discipline, tuning strategy, and metric-aware model selection.",
    stack: ["Python", "Scikit-learn", "Feature Engineering", "Evaluation"]
  },
  {
    key: "embed",
    title: "Embedding Augmentation",
    description: "Metadata-aware embedding strategy to improve robustness on minority legal classes.",
    filters: ["data", "nlp"],
    tags: ["Embeddings", "Metadata", "NLP", "PyTorch"],
    subtitle: "Research Component · 2025",
    body:
      "Built representation enrichment methods for underrepresented legal categories to reduce performance collapse on long-tail classes.",
    stack: ["PyTorch", "LegalBERT", "Embedding Engineering"]
  },
  {
    key: "inference",
    title: "Real-time Inference Service",
    description: "Containerized FastAPI service supporting batch and real-time prediction paths.",
    filters: ["ml"],
    tags: ["FastAPI", "Docker", "MLOps", "REST"],
    subtitle: "MLOps · 2025",
    body:
      "Deployed inference services with reproducible container setup and predictable API behavior for model consumption.",
    stack: ["FastAPI", "Docker", "Python", "REST API"]
  }
];

export const experienceItems = [
  {
    company: "Keshav Memorial Group of Institutions",
    role: "Full Stack Developer (Client Projects)",
    period: "Jul 2025 – Jan 2026"
  },
  {
    company: "Cognifyz Technologies",
    role: "Machine Learning Intern",
    period: "Sep 2025 – Oct 2025"
  },
  {
    company: "Keshav Memorial College of Engineering",
    role: "B.Tech · Computer Science & Data Science",
    period: "2023 – 2027"
  }
];

export const experienceScale = [
  { value: "2K+", label: "Active Production Users" },
  { value: "20K+", label: "Structured Records Managed" },
  { value: "8.03/10", label: "CGPA" }
];

export const experienceBullets = [
  "Engineered two production MERN applications with secure role-based backend architecture.",
  "Designed REST APIs with JWT authentication and RBAC for safe multi-role access.",
  "Modeled and managed 20K+ records across complex multi-generational data relationships.",
  "Implemented SSL-secured VPS deployment with AES-256 encrypted data flow handling.",
  "Built and tuned supervised ML models using ROC-AUC, F1, and precision-recall metrics.",
  "Standardized preprocessing to reduce instability and improve validation consistency."
];
