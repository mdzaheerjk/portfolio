import type { Achievement, GalleryItem, FAQ, Testimonial } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "AI Hackathon Winner",
    type: "hackathon",
    date: "2024-03",
    description: "Won first place in a 48-hour AI hackathon for building a real-time sentiment analysis dashboard.",
    organization: "TechFest 2024",
    rank: "1st Place",
  },
  {
    id: "ach-2",
    title: "Kaggle Notebook Expert",
    type: "badge",
    date: "2024-06",
    description: "Earned Kaggle Notebook Expert badge with 15+ published notebooks and 500+ upvotes.",
    organization: "Kaggle",
  },
  {
    id: "ach-3",
    title: "Dean's List",
    type: "award",
    date: "2023-05",
    description: "Recognized on the Dean's List for academic excellence in Computer Science.",
    organization: "Engineering College",
  },
  {
    id: "ach-4",
    title: "Open Source Contributor Badge",
    type: "opensource",
    date: "2024-01",
    description: "Contributed 50+ meaningful commits to open-source ML projects on GitHub.",
    organization: "GitHub",
  },
  {
    id: "ach-5",
    title: "ML Competition Top 10%",
    type: "competition",
    date: "2024-08",
    description: "Ranked in top 10% of 2,000+ participants in a Kaggle tabular data competition.",
    organization: "Kaggle",
    rank: "Top 10%",
  },
  {
    id: "ach-6",
    title: "Tech Scholarship",
    type: "scholarship",
    date: "2023-01",
    description: "Awarded merit-based scholarship for excellence in programming and AI coursework.",
    organization: "Tech Foundation",
  },
  {
    id: "ach-7",
    title: "LeetCode Knight",
    type: "badge",
    date: "2024-11",
    description: "Achieved Knight rank on LeetCode with 350+ problems solved across all difficulty levels.",
    organization: "LeetCode",
  },
  {
    id: "ach-8",
    title: "Best ML Project Award",
    type: "award",
    date: "2024-12",
    description: "Received best project award for solar panel defect detection system at college tech symposium.",
    organization: "College Tech Symposium",
    rank: "Best Project",
  },
];

export const galleryItems: GalleryItem[] = [
  { id: "g-1", title: "Churn Prediction Dashboard", category: "project", image: "/images/project-placeholder.svg", description: "Streamlit dashboard for customer churn prediction" },
  { id: "g-2", title: "ML Specialization Certificate", category: "certificate", image: "/images/cert-placeholder.svg", description: "DeepLearning.AI Machine Learning Specialization" },
  { id: "g-3", title: "AI Hackathon 2024", category: "hackathon", image: "/images/event-placeholder.svg", description: "Winning team at AI Hackathon 2024" },
  { id: "g-4", title: "College Tech Fest", category: "college", image: "/images/event-placeholder.svg", description: "Presenting ML project at college tech fest" },
  { id: "g-5", title: "Solar Defect Detection", category: "project", image: "/images/project-placeholder.svg", description: "CNN model detecting solar panel defects" },
  { id: "g-6", title: "Python Workshop", category: "workshop", image: "/images/event-placeholder.svg", description: "Conducting Python workshop for juniors" },
  { id: "g-7", title: "TensorFlow Certificate", category: "certificate", image: "/images/cert-placeholder.svg", description: "Google TensorFlow Developer Certificate" },
  { id: "g-8", title: "Agentic AI Chatbot", category: "project", image: "/images/project-placeholder.svg", description: "RAG-powered agentic chatbot interface" },
  { id: "g-9", title: "Kaggle Meetup", category: "event", image: "/images/event-placeholder.svg", description: "Local Kaggle community meetup" },
];

export const faqs: FAQ[] = [
  { question: "What services do you offer?", answer: "I specialize in building ML models, data pipelines, NLP systems, computer vision applications, and Generative AI solutions. I also offer freelance development and consulting for AI projects." },
  { question: "Are you available for internships?", answer: "Yes! I'm actively seeking AI/ML internship opportunities. I'm open to remote and on-site positions across India and internationally." },
  { question: "What is your tech stack?", answer: "Python is my primary language. I work with TensorFlow, PyTorch, Scikit-Learn, LangChain, FastAPI, Streamlit, and various cloud platforms for deployment." },
  { question: "How can I contact you?", answer: "You can reach me via the contact form on this website, email at zaheerjkxai@gmail.com, or connect on LinkedIn and GitHub." },
  { question: "Do you contribute to open source?", answer: "Absolutely! I've made 50+ contributions to various open-source ML projects and maintain several personal repositories on GitHub." },
  { question: "Can you help with my ML project?", answer: "I'd be happy to discuss collaboration opportunities. Feel free to reach out with details about your project and requirements." },
];

export const testimonials: Testimonial[] = [
  { id: "t-1", name: "Dr. Rajesh Kumar", role: "Professor, CS Department", content: "Zaheer demonstrates exceptional aptitude for machine learning. His project work consistently exceeds expectations.", avatar: "/images/avatar-placeholder.svg" },
  { id: "t-2", name: "Priya Sharma", role: "Team Lead, Tech Startup", content: "During his internship, Zaheer delivered high-quality ML solutions and showed great initiative in learning new technologies.", avatar: "/images/avatar-placeholder.svg" },
  { id: "t-3", name: "Amit Patel", role: "Hackathon Teammate", content: "Working with Zaheer on hackathon projects was amazing. His ML expertise and problem-solving skills are top-notch.", avatar: "/images/avatar-placeholder.svg" },
];

export const roadmap = [
  { quarter: "Q1 2026", items: ["Master MLOps pipelines", "AWS Solutions Architect prep", "Contribute to LangChain"] },
  { quarter: "Q2 2026", items: ["Build production RAG system", "Kaggle Grandmaster track", "Technical blog series"] },
  { quarter: "Q3 2026", items: ["Multi-agent system project", "Open-source ML tool", "Conference presentation"] },
  { quarter: "Q4 2026", items: ["Full-time AI/ML role", "Mentorship program", "Research publication"] },
];
