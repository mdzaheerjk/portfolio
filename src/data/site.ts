import type { SocialLink, Stat } from "@/types";

export const siteConfig = {
  name: "Zaheer JK",
  title: "Zaheer JK | AI & Machine Learning Engineer",
  description:
    "Portfolio of Zaheer JK — aspiring AI/ML Engineer specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI.",
  url: "https://zaheerjk.dev",
  author: "Zaheer JK",
  email: "zaheerjkxai@gmail.com",
  phone: "+91 98765 43210",
  location: "Gulbarga, Karnataka, India",
  github: "https://github.com/mdzaheerjk",
  linkedin: "https://linkedin.com/in/zaheerjk",
  leetcode: "https://leetcode.com/zaheerjk",
  kaggle: "https://kaggle.com/zaheerjk",
  medium: "https://medium.com/@zaheerjk",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.png",
  availability: "Open to internships and collaborations",
  githubUsername: "mdzaheerjk",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
  { href: "/github", label: "GitHub" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: siteConfig.github, icon: "github" },
  { name: "LinkedIn", url: siteConfig.linkedin, icon: "linkedin" },
  { name: "Email", url: `mailto:${siteConfig.email}`, icon: "mail" },
  { name: "LeetCode", url: siteConfig.leetcode, icon: "code" },
  { name: "Kaggle", url: siteConfig.kaggle, icon: "database" },
  { name: "Medium", url: siteConfig.medium, icon: "book-open" },
];

export const typingRoles = [
  "Machine Learning Engineer",
  "Deep Learning Enthusiast",
  "Computer Vision Developer",
  "NLP Engineer",
  "Generative AI Developer",
  "LLM Developer",
  "Agentic AI Enthusiast",
  "Prompt Engineer",
  "MLOps Learner",
];

export const heroStats: Stat[] = [
  { label: "Projects", value: 25, suffix: "+" },
  { label: "GitHub Repositories", value: 40, suffix: "+" },
  { label: "Certifications", value: 12, suffix: "+" },
  { label: "Technologies", value: 50, suffix: "+" },
  { label: "Coding Streak", value: 120, suffix: " days" },
  { label: "Years Learning", value: 3, suffix: "+" },
];

export const codingProfiles = [
  { name: "LeetCode", url: siteConfig.leetcode, solved: "350+" },
  { name: "CodeChef", url: "https://codechef.com/users/zaheerjk", solved: "200+" },
  { name: "HackerRank", url: "https://hackerrank.com/zaheerjk", solved: "150+" },
  { name: "Kaggle", url: siteConfig.kaggle, solved: "15 Notebooks" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/users/zaheerjk", solved: "50+ Answers" },
];

export const currentlyLearning = [
  "MLOps & Model Deployment",
  "Agentic AI Systems",
  "Vector Databases",
  "AWS Cloud Services",
  "Advanced RAG Pipelines",
];

export const favoriteTechnologies = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "FastAPI", "Docker", "Transformers",
];
