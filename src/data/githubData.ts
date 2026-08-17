import { GitHubRepo } from '../types';

export const githubProfile = {
  username: 'mdzaheerjk',
  name: 'Zaheer JK',
  bio: 'AI/ML Engineer • Building intelligent systems, models, algorithms, and production AI products.',
  profileUrl: 'https://github.com/mdzaheerjk',
  totalRepos: 24,
  publicGists: 12,
  followers: 48,
  following: 36,
  totalContributionsLastYear: 840,
  longestStreakDays: 142,
  currentStreakDays: 45,
  topLanguages: [
    { name: 'Python', percentage: 68, color: '#3572A5' },
    { name: 'TypeScript / JS', percentage: 18, color: '#3178C6' },
    { name: 'C++', percentage: 9, color: '#f34b7d' },
    { name: 'Other (HTML/SQL)', percentage: 5, color: '#555555' }
  ]
};

export const featuredRepos: GitHubRepo[] = [
  {
    name: 'NLP-with-Transformers',
    description: 'Practical implementations, notebooks, and fine-tuning experiments dissecting BERT, GPT-2, and Hugging Face Transformer pipelines for downstream classification and text generation.',
    language: 'Python',
    stars: 18,
    forks: 6,
    url: 'https://github.com/mdzaheerjk/NLP-with-Transformers',
    topics: ['transformers', 'nlp', 'pytorch', 'huggingface', 'bert'],
    updatedAt: 'Updated 3 days ago'
  },
  {
    name: 'Hands-On-ML-with-Scikit-Learn-and-PyTorch',
    description: 'A comprehensive, modular code repository implementing core machine learning models from mathematical scratch (NumPy) alongside production Scikit-Learn and PyTorch patterns.',
    language: 'Python',
    stars: 26,
    forks: 9,
    url: 'https://github.com/mdzaheerjk/Hands-On-ML-with-Scikit-Learn-and-PyTorch',
    topics: ['machine-learning', 'scikit-learn', 'pytorch', 'deep-learning', 'algorithms'],
    updatedAt: 'Updated 1 week ago'
  },
  {
    name: 'SageStudio',
    description: 'Interactive visual platform and algorithm sandbox designed for real-time visualization of gradient descent, decision trees, hyperplanes, and neural backpropagation dynamics.',
    language: 'TypeScript',
    stars: 34,
    forks: 11,
    url: 'https://github.com/mdzaheerjk/SageStudio',
    topics: ['ml-visualizer', 'deep-learning', 'algorithms', 'react', 'tensorflow-js'],
    updatedAt: 'Updated 2 days ago'
  },
  {
    name: 'SageMap',
    description: 'Structured roadmapping repository and curriculum mapping resource containing curated academic papers, open-source repos, benchmarks, and project blueprints for AI/ML engineers.',
    language: 'TypeScript',
    stars: 42,
    forks: 14,
    url: 'https://github.com/mdzaheerjk/SageMap',
    topics: ['ai-roadmap', 'learning-resources', 'research-papers', 'curriculum'],
    updatedAt: 'Updated 5 days ago'
  },
  {
    name: 'Striver-SDE-Sheet-Solutions',
    description: 'Clean, optimal solutions in C++ and Python covering the full Striver SDE sheet: Arrays, Strings, Trees, Dynamic Programming, Graphs, and Greedy Algorithms with time/space complexity analysis.',
    language: 'C++',
    stars: 22,
    forks: 8,
    url: 'https://github.com/mdzaheerjk/Striver-SDE-Sheet-Solutions',
    topics: ['dsa', 'leetcode', 'algorithms', 'data-structures', 'cpp'],
    updatedAt: 'Updated 2 weeks ago'
  },
  {
    name: 'Moodline-Emotion-Detection',
    description: 'End-to-end emotion detection system using Bidirectional Gated Recurrent Units (BiGRU) and FastAPI with real-time text affective state inference.',
    language: 'Python',
    stars: 19,
    forks: 5,
    url: 'https://github.com/mdzaheerjk/Moodline-Emotion-Detection',
    topics: ['bigru', 'emotion-detection', 'fastapi', 'nlp', 'keras'],
    updatedAt: 'Updated 3 weeks ago'
  }
];
