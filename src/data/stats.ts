import { StatItem } from '../types';

export const statsData: StatItem[] = [
  {
    id: 'projects',
    value: 20,
    suffix: '+',
    label: 'AI/ML Projects Built',
    description: 'Ranging from ML classifiers and CV models to agentic Generative AI systems.',
    iconName: 'Cpu'
  },
  {
    id: 'technologies',
    value: 10,
    suffix: '+',
    label: 'Technologies & Frameworks',
    description: 'PyTorch, TensorFlow, LangChain, FastAPI, Docker, Scikit-learn, and React.',
    iconName: 'Layers'
  },
  {
    id: 'coding-challenge',
    value: 365,
    suffix: ' Days',
    label: 'Coding Challenge (#365DaysOfCoding)',
    description: 'Documented daily engineering habit, consistent commits, and public learning.',
    iconName: 'Calendar'
  },
  {
    id: 'leetcode',
    value: 50,
    suffix: '+',
    label: 'DSA & LeetCode Solved',
    description: 'Data structures, algorithmic patterns, dynamic programming, and graphs.',
    iconName: 'Code2'
  }
];
