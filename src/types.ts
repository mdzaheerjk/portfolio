export type ProjectCategory = 
  | 'All'
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Generative AI'
  | 'NLP'
  | 'Computer Vision'
  | 'MLOps'
  | 'Full Stack AI';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  description: string;
  problemSolved: string;
  architectureDetails: string[];
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  highlight: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Practitioner';
    highlight?: string;
  }[];
}

export interface JourneyMilestone {
  id: string;
  title: string;
  period: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: 'Engineering' | 'Learning' | 'Open Source' | 'Milestone';
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'AI' | 'Machine Learning' | 'Deep Learning' | 'Generative AI' | 'Python' | 'MLOps' | 'System Design' | 'DSA';
  readTime: string;
  date: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
    }[];
    takeaways: string[];
  };
}

export interface LearningNode {
  id: string;
  title: string;
  category: string;
  summary: string;
  status: 'Mastering' | 'Deep Diving' | 'Exploring' | 'Solid Foundation';
  topics: string[];
  keyResources: string[];
  relatedProjects: string[];
  children?: LearningNode[];
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  updatedAt: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}
