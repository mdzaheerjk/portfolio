import { JourneyMilestone } from '../types';

export const journeyData: JourneyMilestone[] = [
  {
    id: 'generative-ai-agents',
    title: 'Generative AI & Agentic Systems',
    period: '2024 – Present',
    tagline: 'Orchestrating Foundation Models, Multi-Agent Loops & RAG Architectures',
    description: 'Deep diving into the frontier of applied Generative AI. Building autonomous agentic systems with LangGraph, scalable semantic search retrieval (RAG) pipelines with vector stores, and structured multimodal workflows.',
    highlights: [
      'Engineered RAG pipelines with hybrid keyword-vector retrieval and reranking for technical documentation',
      'Developed multi-agent decision systems incorporating structured tool invocation and feedback loops',
      'Built multimodal vision assistants integrating Gemini API for spatial and visual reasoning',
      'Explored self-hosted local model inferences and prompt optimization patterns'
    ],
    technologies: ['LangChain', 'LangGraph', 'Gemini Pro / Flash', 'Pinecone', 'FastAPI', 'Python'],
    category: 'Engineering'
  },
  {
    id: 'deep-learning-nlp-cv',
    title: 'Deep Learning, NLP & Computer Vision',
    period: '2023 – 2024',
    tagline: 'Mathematical Modeling of Neural Networks from Fundamental Principles',
    description: 'Transitioned from statistical machine learning to deep hierarchical representations. Built and trained Convolutional Neural Networks, Recurrent Architectures (LSTM, BiGRU), and explored Transformer self-attention mechanisms.',
    highlights: [
      'Implemented BiGRU sequence classifiers for fine-grained multi-emotion textual recognition (Moodline)',
      'Trained custom CNN models with Grad-CAM explainability for solar cell defect detection',
      'Implemented tokenization pipelines, custom word embeddings, and attention visualization matrices',
      'Evaluated hyperparameter dynamics (optimizers, learning rate schedulers, dropout regularization)'
    ],
    technologies: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Scikit-learn', 'NumPy'],
    category: 'Engineering'
  },
  {
    id: 'applied-machine-learning',
    title: 'Applied Machine Learning & Statistical Modeling',
    period: '2023',
    tagline: 'End-to-End Predictive Pipelines, Feature Engineering & Hyperparameter Tuning',
    description: 'Constructed end-to-end tabular machine learning systems, conducting exploratory data analysis, hypothesis testing, feature transformation, and metric-driven validation across regression and classification tasks.',
    highlights: [
      'Developed churn prediction pipelines leveraging XGBoost and automated Optuna Bayesian optimization',
      'Mastered feature engineering techniques: target encoding, polynomial features, variance inflation factor',
      'Conducted rigorous cross-validation and bias-variance tradeoff diagnostics',
      'Created SageStudio visualizer to dissect hyperplane geometries and decision surface topologies'
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'Optuna', 'Pandas', 'NumPy', 'Matplotlib'],
    category: 'Engineering'
  },
  {
    id: 'software-engineering-apis',
    title: 'Software Engineering & Production Systems',
    period: '2022 – 2023',
    tagline: 'Building Performant APIs, Modular Codebases & Deployment Frameworks',
    description: 'Bridging the gap between isolated Jupyter notebooks and production software. Focused on clean asynchronous API architectures, Pydantic schemas, containerization with Docker, and responsive user interfaces.',
    highlights: [
      'Built asynchronous REST APIs with FastAPI serving ML model inferences with sub-20ms latency',
      'Containerized full-stack AI workflows into reproducible Docker environments',
      'Engineered interactive frontend dashboards for real-time model interaction and parameter control',
      'Practiced modular software design, type hinting, unit testing, and continuous code linting'
    ],
    technologies: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    category: 'Engineering'
  },
  {
    id: '365-days-coding',
    title: '#365DaysOfCoding & Open Source',
    period: 'Continuous',
    tagline: 'Documented Daily Engineering Commitment & Collaborative Knowledge Sharing',
    description: 'A disciplined commitment to daily public problem solving, algorithmic challenges, repository maintenance, and sharing structured learning resources (SageMap) with the developer community.',
    highlights: [
      'Maintained consistent daily coding and repository commits across GitHub',
      'Solved 50+ curated LeetCode algorithmic problems across arrays, graphs, trees, and dynamic programming',
      'Authored comprehensive open-source study guides: Transformers, Scikit-learn, and SDE sheets',
      'Actively documenting engineering insights, paper reviews, and implementation retrospectives'
    ],
    technologies: ['C++', 'Python', 'Git/GitHub', 'Algorithms & DS', 'Technical Writing'],
    category: 'Milestone'
  }
];
