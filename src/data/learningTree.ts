import { LearningNode } from '../types';

export const learningTreeData: LearningNode = {
  id: 'root-ai-ml',
  title: 'AI/ML Engineering',
  category: 'Root Core',
  summary: 'The unified ecosystem of mathematical foundations, machine learning theory, deep neural representations, applied generative systems, and production engineering.',
  status: 'Mastering',
  topics: ['Statistical Learning', 'Deep Architectures', 'Generative Workflows', 'Production MLOps', 'System Reliability'],
  keyResources: ['Deep Learning (Goodfellow et al.)', 'Designing Machine Learning Systems (Chip Huyen)', 'Attention Is All You Need (Vaswani et al.)'],
  relatedProjects: ['SageStudio', 'SageMap', 'Moodline', 'AI Travel Itinerary Planner'],
  children: [
    {
      id: 'math-stats',
      title: 'Mathematics & Statistics',
      category: 'Foundations',
      summary: 'Rigorous mathematical mechanics underwriting all optimization, probability theory, and matrix transformations.',
      status: 'Solid Foundation',
      topics: ['Linear Algebra (SVD, Eigenvalues, Matrix Inverses)', 'Multivariable Calculus (Gradients, Hessians, Jacobians)', 'Probability Distributions & Bayes Theorem', 'Convex Optimization & Loss Topographies'],
      keyResources: ['Mathematics for Machine Learning (Deisenroth et al.)', 'Gilbert Strang MIT 18.06', 'Khan Academy Multivariable Calculus'],
      relatedProjects: ['SageStudio']
    },
    {
      id: 'python-systems',
      title: 'Python & Computing',
      category: 'Foundations',
      summary: 'High-performance asynchronous Python, vectorized numeric computation, and memory-conscious data structures.',
      status: 'Solid Foundation',
      topics: ['Vectorized NumPy Array Operations', 'Data Wrangling & Time-Series in Pandas', 'Asyncio Event Loops & Thread Pools', 'Object-Oriented Design & Clean Architecture'],
      keyResources: ['Fluent Python (Luciano Ramalho)', 'Python Cookbook', 'Effective Python'],
      relatedProjects: ['SageStudio', 'Telecom Churn Prediction']
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      category: 'Core AI',
      summary: 'Statistical learning algorithms, decision tree ensembles, support vector hyperplanes, and metric diagnostics.',
      status: 'Solid Foundation',
      topics: ['Linear & Logistic Regression', 'Decision Trees, Random Forests, XGBoost & LightGBM', 'Support Vector Machines & Kernel Tricks', 'K-Means, PCA & Dimensionality Reduction', 'Bayesian Optimization with Optuna'],
      keyResources: ['Hands-On Machine Learning (Aurélien Géron)', 'Pattern Recognition and Machine Learning (Bishop)', 'Scikit-learn Documentation'],
      relatedProjects: ['Telecom Churn Prediction', 'SageStudio']
    },
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      category: 'Core AI',
      summary: 'Multi-layer neural network representations, backpropagation autograd, and sequence modeling.',
      status: 'Deep Diving',
      topics: ['Multilayer Perceptrons & Activation Functions', 'Backpropagation & Gradient Descent Optimizers (Adam, SGD)', 'Regularization (Dropout, Batch Norm, Weight Decay)', 'Recurrent Networks (LSTM, GRU, BiGRU)'],
      keyResources: ['CS231n: Deep Learning for Computer Vision (Stanford)', 'Deep Learning Specialization (Andrew Ng)', 'PyTorch Documentation'],
      relatedProjects: ['Moodline', 'Solar Panel Defect Classification']
    },
    {
      id: 'nlp',
      title: 'NLP',
      category: 'Specialization',
      summary: 'Processing natural human language from tokenization and embeddings to sequence classification.',
      status: 'Deep Diving',
      topics: ['Subword Tokenization (BPE, WordPiece)', 'Dense Word Embeddings (Word2Vec, GloVe)', 'Sequence-to-Sequence Modeling', 'Bidirectional Recurrent Classifiers (BiGRU)'],
      keyResources: ['Speech and Language Processing (Jurafsky & Martin)', 'Hugging Face NLP Course', 'CS224N (Stanford)'],
      relatedProjects: ['Moodline', 'YouTube Transcript → Detailed Notes', 'ATS Resume Expert']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      category: 'Specialization',
      summary: 'Spatial visual recognition, convolutional feature maps, defect segmentation, and explainability.',
      status: 'Exploring',
      topics: ['Convolutional Kernels & Pooling Layers', 'Transfer Learning (ResNet, MobileNet, EfficientNet)', 'Grad-CAM Attention Heatmaps', 'Object Localization & YOLO Concepts'],
      keyResources: ['Computer Vision: Algorithms and Applications (Szeliski)', 'OpenCV Tutorials'],
      relatedProjects: ['Solar Panel Defect Classification', 'Gemini Health']
    },
    {
      id: 'generative-ai',
      title: 'Generative AI',
      category: 'Frontier AI',
      summary: 'Large language models, multi-stage retrieval-augmented generation (RAG), and agentic tool workflows.',
      status: 'Deep Diving',
      topics: ['Transformer Architecture (Self-Attention & Multi-Head)', 'Large Language Models (Gemini, Llama, GPT)', 'RAG (Hybrid Search, Reciprocal Rank Fusion, Cross-Encoder Reranking)', 'Agentic AI (LangGraph, ReAct Pattern, Autonomous Cycles)', 'Prompt Engineering & Structured Schema Output'],
      keyResources: ['Attention Is All You Need', 'LangChain & LangGraph Conceptual Guides', 'Retrieval-Augmented Generation for Knowledge-Intensive Tasks (Lewis et al.)'],
      relatedProjects: ['AI Travel Itinerary Planner', 'Gemini Health', 'YouTube Transcript → Detailed Notes', 'ATS Resume Expert'],
      children: [
        {
          id: 'genai-llms',
          title: 'LLMs',
          category: 'GenAI Sub-branch',
          summary: 'Foundation models, context windows, token probabilities, and structured instruction tuning.',
          status: 'Deep Diving',
          topics: ['Context Window Management', 'Few-Shot Exemplar Formatting', 'JSON Schema Output Enforcers'],
          keyResources: ['Anthropic / OpenAI / Google GenAI Best Practices'],
          relatedProjects: ['AI Travel Itinerary Planner', 'ATS Resume Expert']
        },
        {
          id: 'genai-rag',
          title: 'RAG',
          category: 'GenAI Sub-branch',
          summary: 'Scalable contextual retrieval systems combining vector indexes and sparse keyword algorithms.',
          status: 'Deep Diving',
          topics: ['Semantic Document Chunking', 'Vector Embedding Stores (Pinecone, Chroma)', 'Cross-Encoder Rerankers'],
          keyResources: ['Pinecone Learning Center', 'LlamaIndex Retrieval Guides'],
          relatedProjects: ['YouTube Transcript → Detailed Notes']
        },
        {
          id: 'genai-agents',
          title: 'Agents',
          category: 'GenAI Sub-branch',
          summary: 'Autonomous loops with external tool orchestration, cyclic state graphs, and self-reflection.',
          status: 'Deep Diving',
          topics: ['LangGraph State Machines', 'Dynamic Function Calling & Tool Binding', 'Error Recovery & Human-in-the-Loop'],
          keyResources: ['LangGraph Multi-Agent Workflows', 'ReAct: Synergizing Reasoning and Acting in Language Models'],
          relatedProjects: ['AI Travel Itinerary Planner']
        },
        {
          id: 'genai-transformers',
          title: 'Transformers',
          category: 'GenAI Sub-branch',
          summary: 'Scaled dot-product attention mechanics, positional encodings, and encoder-decoder topologies.',
          status: 'Deep Diving',
          topics: ['Scaled Dot-Product Attention Math', 'Multi-Head Projection Tensors', 'Positional Embeddings (Sinusoidal, RoPE)'],
          keyResources: ['The Illustrated Transformer (Jay Alammar)', 'Attention Is All You Need'],
          relatedProjects: ['SageStudio', 'SageMap']
        }
      ]
    },
    {
      id: 'mlops',
      title: 'MLOps',
      category: 'Systems & Delivery',
      summary: 'Bridging model training with reliable production pipelines, monitoring, and reproducible artifacts.',
      status: 'Exploring',
      topics: ['FastAPI Inference Endpoints', 'Docker Containerization & Image Layer Caching', 'Experiment Tracking & Registry with MLflow', 'Input Validation & Schema Guardrails'],
      keyResources: ['Designing Machine Learning Systems (Chip Huyen)', 'Full Stack Deep Learning'],
      relatedProjects: ['Telecom Churn Prediction', 'Moodline']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud',
      category: 'Systems & Delivery',
      summary: 'Scalable cloud infrastructure, compute instances, storage buckets, and container deployment.',
      status: 'Exploring',
      topics: ['AWS Compute & S3 Object Storage', 'Azure Fundamentals', 'Cloud Run & Container Serving', 'Serverless Functions'],
      keyResources: ['AWS / GCP Cloud Architect Guides'],
      relatedProjects: ['AI Travel Itinerary Planner']
    },
    {
      id: 'system-design',
      title: 'System Design',
      category: 'Systems & Delivery',
      summary: 'Designing fault-tolerant, low-latency, scalable software and data architectures.',
      status: 'Exploring',
      topics: ['Microservices vs Monoliths', 'Caching Strategies & Redis', 'Database Indexing & Sharding', 'Message Queues & Asynchronous Processing'],
      keyResources: ['System Design Interview (Alex Xu)', 'Designing Data-Intensive Applications (Kleppmann)'],
      relatedProjects: ['SageStudio', 'SageMap']
    }
  ]
};
