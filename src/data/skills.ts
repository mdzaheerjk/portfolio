import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    name: 'Programming & Languages',
    description: 'Foundational programming languages and computational problem-solving toolsets.',
    skills: [
      { name: 'Python', level: 'Advanced', highlight: 'Data structures, OOP, async, typing, profiling' },
      { name: 'C++', level: 'Core', highlight: 'Data Structures & Algorithms, memory concepts' },
      { name: 'SQL', level: 'Advanced', highlight: 'Complex joins, window functions, query planning' },
      { name: 'HTML5', level: 'Core', highlight: 'Semantic structure, accessibility, web standards' },
      { name: 'CSS3', level: 'Core', highlight: 'Tailwind CSS, responsive grid & flexbox layouts' },
      { name: 'JavaScript / TypeScript', level: 'Core', highlight: 'Modern ES6+, DOM manipulation, API integration' }
    ]
  },
  {
    name: 'Machine Learning',
    description: 'Statistical modeling, algorithmic training, feature engineering, and evaluation.',
    skills: [
      { name: 'Scikit-learn', level: 'Advanced', highlight: 'Pipelines, estimators, cross-validation, metrics' },
      { name: 'Pandas', level: 'Advanced', highlight: 'Vectorized data wrangling, time-series, indexing' },
      { name: 'NumPy', level: 'Advanced', highlight: 'N-dimensional arrays, linear algebra, broadcasting' },
      { name: 'XGBoost', level: 'Advanced', highlight: 'Gradient boosting, tree regularization, feature importance' },
      { name: 'Optuna', level: 'Practitioner', highlight: 'Bayesian hyperparameter optimization, pruning' },
      { name: 'Feature Engineering', level: 'Advanced', highlight: 'Encoding, scaling, PCA, collinearity handling' }
    ]
  },
  {
    name: 'Deep Learning',
    description: 'Neural network architectures, backpropagation, and multi-layer gradient flows.',
    skills: [
      { name: 'TensorFlow', level: 'Advanced', highlight: 'Graph execution, custom layers, tf.data pipelines' },
      { name: 'Keras', level: 'Advanced', highlight: 'Sequential & Functional APIs, callbacks, model saving' },
      { name: 'PyTorch', level: 'Practitioner', highlight: 'Tensors, autograd, custom Dataset/DataLoader modules' },
      { name: 'CNN (Convolutional Networks)', level: 'Advanced', highlight: 'Feature maps, pooling, transfer learning, Grad-CAM' },
      { name: 'RNN / LSTM / BiGRU', level: 'Advanced', highlight: 'Sequential dependencies, vanishing gradient mitigation' },
      { name: 'Transformers', level: 'Practitioner', highlight: 'Self-attention mechanisms, multi-head layers, enc-dec' }
    ]
  },
  {
    name: 'Generative AI & LLMs',
    description: 'Prompt engineering, orchestration frameworks, retrieval pipelines, and agentic workflows.',
    skills: [
      { name: 'LLMs & Foundation Models', level: 'Advanced', highlight: 'Gemini, GPT series, Llama, prompt engineering' },
      { name: 'RAG (Retrieval-Augmented Gen)', level: 'Advanced', highlight: 'Chunking strategies, hybrid search, context reranking' },
      { name: 'LangChain', level: 'Advanced', highlight: 'Chains, memory buffers, document loaders, output parsers' },
      { name: 'LangGraph', level: 'Practitioner', highlight: 'Stateful multi-actor agent workflows and cycles' },
      { name: 'AI Agents', level: 'Practitioner', highlight: 'Tool calling, plan-and-solve loops, autonomous execution' },
      { name: 'Prompt Engineering', level: 'Advanced', highlight: 'Few-shot prompting, Chain-of-Thought, ReAct pattern' }
    ]
  },
  {
    name: 'Databases & Vector Search',
    description: 'Relational, document, graph, and embedding vector search storage engines.',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', highlight: 'Relational design, indexing, pgvector extension' },
      { name: 'MongoDB', level: 'Core', highlight: 'Document aggregation pipelines, BSON schemas' },
      { name: 'Neo4j', level: 'Practitioner', highlight: 'Graph property models, Cypher query language' },
      { name: 'Pinecone / ChromaDB', level: 'Advanced', highlight: 'Vector indexing, cosine similarity, metadata filtering' }
    ]
  },
  {
    name: 'Deployment & MLOps',
    description: 'Production containerization, API development, serving, and model tracking.',
    skills: [
      { name: 'FastAPI', level: 'Advanced', highlight: 'Asynchronous endpoints, Pydantic schemas, OpenAPI docs' },
      { name: 'Docker', level: 'Practitioner', highlight: 'Multi-stage container builds, microservices, volume binding' },
      { name: 'MLflow', level: 'Practitioner', highlight: 'Experiment tracking, model registry, artifact logging' },
      { name: 'AWS / Cloud Services', level: 'Practitioner', highlight: 'S3, EC2 instances, Lambda serverless triggers' },
      { name: 'Azure', level: 'Core', highlight: 'Cloud compute fundamentals and storage buckets' },
      { name: 'Streamlit', level: 'Advanced', highlight: 'Rapid interactive prototyping, session state management' }
    ]
  },
  {
    name: 'Computer Vision',
    description: 'Visual perception, image processing, segmentation, and defect localization.',
    skills: [
      { name: 'OpenCV', level: 'Advanced', highlight: 'Filtering, edge detection, color space transforms, contours' },
      { name: 'YOLO', level: 'Practitioner', highlight: 'Real-time bounding box detection, anchor boxes, NMS' },
      { name: 'Image Classification', level: 'Advanced', highlight: 'Multi-class/multi-label transfer learning pipelines' },
      { name: 'Object Detection', level: 'Practitioner', highlight: 'Spatial localization, IoU evaluation, mAP benchmarks' }
    ]
  }
];
