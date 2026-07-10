import type { BlogPost } from "@/types";

const blogPlaceholder = "/images/blog-placeholder.svg";

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-machine-learning",
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt: "A comprehensive guide to starting your machine learning journey, from Python basics to your first model.",
    content: `## Introduction\n\nMachine Learning is one of the most exciting fields in technology today. This guide will help you take your first steps.\n\n## Prerequisites\n\n- Basic Python programming\n- High school mathematics\n- Curiosity and persistence\n\n## Step 1: Learn Python\n\nPython is the lingua franca of ML. Start with variables, loops, functions, and then move to NumPy and Pandas.\n\n## Step 2: Understand the Math\n\nYou don't need a PhD, but understanding linear algebra, statistics, and calculus basics will help tremendously.\n\n## Step 3: Your First Model\n\nStart with scikit-learn and a simple dataset like Iris or Titanic. Train a classifier and evaluate it.\n\n## Conclusion\n\nThe key is consistent practice. Build projects, participate in Kaggle, and never stop learning.`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2024-01-15",
    readTime: 8,
    tags: ["Machine Learning", "Beginner", "Python"],
    category: "Machine Learning",
  },
  {
    slug: "understanding-transformers",
    title: "Understanding Transformers: The Architecture Behind Modern AI",
    excerpt: "Deep dive into the transformer architecture that powers GPT, BERT, and other state-of-the-art models.",
    content: `## What are Transformers?\n\nTransformers revolutionized NLP by introducing self-attention mechanisms that process entire sequences in parallel.\n\n## Self-Attention\n\nThe core innovation: each token attends to every other token, learning contextual relationships.\n\n## Key Components\n\n- Multi-head attention\n- Positional encoding\n- Feed-forward networks\n- Layer normalization\n\n## Applications\n\nTransformers power machine translation, text generation, image classification, and more.\n\n## Getting Started\n\nUse Hugging Face Transformers library to experiment with pre-trained models.`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2024-04-20",
    readTime: 12,
    tags: ["Deep Learning", "Transformers", "NLP"],
    category: "Deep Learning",
  },
  {
    slug: "building-rag-applications",
    title: "Building RAG Applications with LangChain",
    excerpt: "Step-by-step tutorial on building Retrieval-Augmented Generation applications for custom knowledge bases.",
    content: `## What is RAG?\n\nRAG combines retrieval systems with LLMs to provide accurate, grounded answers from custom documents.\n\n## Architecture\n\n1. Document loading and chunking\n2. Embedding generation\n3. Vector storage\n4. Retrieval and generation\n\n## Implementation\n\nWe'll use LangChain, ChromaDB, and OpenAI embeddings to build a complete RAG pipeline.\n\n## Best Practices\n\n- Optimal chunk size: 500-1000 tokens\n- Use metadata filtering\n- Implement re-ranking\n- Add source citations`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2024-09-10",
    readTime: 15,
    tags: ["RAG", "LangChain", "LLM", "Tutorial"],
    category: "LLMs",
  },
  {
    slug: "computer-vision-best-practices",
    title: "Computer Vision Best Practices for ML Projects",
    excerpt: "Essential tips and techniques for building robust computer vision models from data collection to deployment.",
    content: `## Data Collection\n\nQuality data is the foundation. Ensure diverse, well-labeled datasets with proper train/val/test splits.\n\n## Data Augmentation\n\nUse rotation, flipping, color jittering, and mixup to improve generalization.\n\n## Model Selection\n\nStart with transfer learning using pre-trained models like ResNet, EfficientNet, or ViT.\n\n## Evaluation\n\nUse appropriate metrics: accuracy, precision, recall, F1, and mAP for detection tasks.\n\n## Deployment\n\nOptimize with ONNX, TensorRT, or TFLite for production inference.`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2024-06-05",
    readTime: 10,
    tags: ["Computer Vision", "Best Practices", "CNN"],
    category: "Computer Vision",
  },
  {
    slug: "ml-interview-preparation",
    title: "ML Interview Preparation: Top Questions and Answers",
    excerpt: "Comprehensive guide to preparing for machine learning interviews with common questions and strategies.",
    content: `## Technical Topics\n\n- Supervised vs unsupervised learning\n- Bias-variance tradeoff\n- Overfitting prevention\n- Evaluation metrics\n- Feature engineering\n\n## Coding Questions\n\nPractice implementing algorithms from scratch: linear regression, k-means, decision trees.\n\n## System Design\n\nBe ready to design ML pipelines: data ingestion, training, serving, monitoring.\n\n## Behavioral Questions\n\nPrepare stories about projects, challenges overcome, and lessons learned.\n\n## Resources\n\nLeetCode, HackerRank, "Hands-On Machine Learning" book, and mock interviews.`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2025-02-28",
    readTime: 14,
    tags: ["Interview Prep", "Career", "ML"],
    category: "Interview Prep",
  },
  {
    slug: "agentic-ai-future",
    title: "Agentic AI: The Future of Autonomous Systems",
    excerpt: "Exploring how AI agents are changing the landscape of software development and automation.",
    content: `## What are AI Agents?\n\nAI agents are systems that perceive their environment, make decisions, and take actions to achieve goals.\n\n## Key Frameworks\n\n- LangChain Agents\n- LangGraph\n- AutoGen\n- CrewAI\n\n## Use Cases\n\n- Research assistants\n- Code generation\n- Customer support\n- Data analysis automation\n\n## Challenges\n\nReliability, cost, safety, and evaluation of agentic systems remain active research areas.`,
    coverImage: blogPlaceholder,
    author: "Zaheer JK",
    date: "2025-04-15",
    readTime: 11,
    tags: ["Agentic AI", "LLM", "Future"],
    category: "AI",
  },
];

export const blogCategories = [
  "All", "Machine Learning", "Deep Learning", "Python", "AI", "NLP",
  "Computer Vision", "LLMs", "Tutorials", "Career", "Interview Prep",
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
