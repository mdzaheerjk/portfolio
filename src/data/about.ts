import type { Education, TimelineEvent } from "@/types";

export const biography = {
  intro: `I'm Zaheer JK, an aspiring AI & Machine Learning Engineer based in India with a deep passion for building intelligent systems that solve real-world problems. My journey into AI began with curiosity about how machines can learn from data, and has evolved into a focused pursuit of expertise across the full ML lifecycle — from data preprocessing to model deployment.`,
  whoIAm: `A dedicated learner and builder who thrives at the intersection of mathematics, programming, and creative problem-solving. I enjoy turning complex datasets into actionable insights and deploying models that make a tangible impact.`,
  whyAI: `Artificial Intelligence represents the most transformative technology of our era. I'm drawn to AI because it combines rigorous science with limitless creative potential — enabling us to build systems that see, understand, language, and reason in ways that augment human capability.`,
  journey: `Starting with Python and basic ML algorithms in college, I progressively deepened my expertise through online courses, Kaggle competitions, personal projects, and open-source contributions. Each project taught me something new about model selection, feature engineering, and the art of balancing accuracy with interpretability.`,
  futureGoals: `My goal is to become a full-stack AI engineer capable of designing, training, and deploying production-grade ML systems. I aim to specialize in Generative AI and Agentic systems while contributing to open-source AI tools and mentoring aspiring ML practitioners.`,
  mission: `To democratize AI by building accessible, ethical, and impactful machine learning solutions that empower individuals and organizations to make data-driven decisions.`,
  vision: `A world where AI augments human creativity and decision-making responsibly — where intelligent systems are transparent, fair, and available to everyone, not just large corporations.`,
  interests: [
    "Generative AI & LLMs",
    "Computer Vision",
    "Natural Language Processing",
    "Agentic AI Systems",
    "MLOps & Cloud Deployment",
    "Open Source Contribution",
    "Technical Writing",
    "Kaggle Competitions",
  ],
  personalStory: `Growing up fascinated by technology, I spent countless hours exploring how software could automate everyday tasks. When I discovered machine learning during my undergraduate studies, everything clicked — the perfect blend of logic, statistics, and innovation. Since then, every project, hackathon, and late-night coding session has reinforced my commitment to this field.`,
};

export const education: Education[] = [
  {
    id: "hs",
    degree: "Higher Secondary Education (Science)",
    institution: "State Board School",
    location: "India",
    startDate: "2018",
    endDate: "2020",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.",
    achievements: ["Distinction in Mathematics", "Science Exhibition Winner"],
  },
  {
    id: "college",
    degree: "Bachelor's in Computer Science",
    institution: "Engineering College",
    location: "India",
    startDate: "2020",
    endDate: "2024",
    description: "Studied core computer science fundamentals including data structures, algorithms, databases, and software engineering.",
    achievements: ["Dean's List", "Programming Club Lead"],
  },
  {
    id: "aiml",
    degree: "Specialization in AI & Machine Learning",
    institution: "Online Programs & Self-Study",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: "Pursuing advanced AI/ML coursework through Coursera, DeepLearning.AI, and hands-on project work.",
    achievements: ["12+ Certifications", "25+ ML Projects"],
  },
];

export const timeline: TimelineEvent[] = [
  { id: "1", year: "2020", title: "Started CS Degree", description: "Began formal computer science education with introduction to programming." },
  { id: "2", year: "2021", title: "First ML Project", description: "Built first machine learning model — a house price prediction system using scikit-learn." },
  { id: "3", year: "2022", title: "Deep Learning Journey", description: "Started learning neural networks, completed Andrew Ng's Deep Learning Specialization." },
  { id: "4", year: "2023", title: "Computer Vision & NLP", description: "Expanded into CNN-based image classification and NLP with transformers." },
  { id: "5", year: "2024", title: "Generative AI Focus", description: "Dived into LLMs, RAG pipelines, and agentic AI frameworks like LangChain." },
  { id: "6", year: "2025", title: "MLOps & Deployment", description: "Learning production ML — Docker, FastAPI, cloud deployment, and model monitoring." },
  { id: "7", year: "2026", title: "Building Portfolio", description: "Consolidating skills into production-ready projects and seeking AI/ML opportunities." },
];
