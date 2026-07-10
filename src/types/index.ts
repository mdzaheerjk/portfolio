export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  type: "internship" | "freelance" | "research" | "opensource" | "hackathon" | "volunteer" | "teaching" | "mentoring";
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  dataset: string;
  modelUsed: string;
  accuracy?: string;
  techStack: string[];
  challenges: string[];
  futureImprovements: string[];
  liveDemo?: string;
  github?: string;
  documentation?: string;
  features: string[];
  performance?: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
  tags: string[];
  category: string;
  featured: boolean;
  popular: boolean;
  image: string;
  screenshots: string[];
  metrics?: { label: string; value: string }[];
  architecture?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skillsLearned: string[];
  verificationUrl: string;
  category: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  type: "hackathon" | "competition" | "award" | "badge" | "scholarship" | "recognition" | "opensource";
  date: string;
  description: string;
  organization?: string;
  rank?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "project" | "certificate" | "event" | "college" | "workshop" | "hackathon";
  image: string;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}
