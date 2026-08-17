import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'sagestudio',
    title: 'SageStudio',
    subtitle: 'Interactive Visual Platform for ML & Deep Learning Algorithms',
    category: ['Machine Learning', 'Deep Learning', 'Full Stack AI'],
    description: 'An interactive pedagogical and experimental suite built to visualize complex Machine Learning and Deep Learning algorithms in real time with step-by-step mathematical breakdowns.',
    problemSolved: 'Transforms abstract mathematical concepts (gradient descent trajectories, decision boundaries, neural activations, backpropagation) into dynamic, visual, interactive simulations.',
    architectureDetails: [
      'Interactive canvas rendering for 2D/3D hyperplanes and loss surface topography',
      'Real-time hyperparameter adjustment (learning rate, momentum, weight decay)',
      'Step-by-step gradient calculation inspector with numerical verification',
      'Extensible modular architecture allowing addition of novel optimization routines'
    ],
    techStack: ['Python', 'TypeScript', 'React', 'NumPy', 'TensorFlow.js', 'FastAPI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mdzaheerjk/SageStudio',
    demoUrl: 'https://sagestudio-preview.app',
    featured: true,
    highlight: 'Algorithm Visualizer',
    metrics: [
      { label: 'Algorithms Covered', value: '15+' },
      { label: 'Render Latency', value: '<16ms' },
      { label: 'Interactive Demos', value: '20+' }
    ]
  },
  {
    id: 'sagemap',
    title: 'SageMap',
    subtitle: 'Structured Knowledge & Resource Architecture for AI/ML Students',
    category: ['Machine Learning', 'Deep Learning', 'Generative AI'],
    description: 'A curated, structured roadmapping platform and resource index tailored for aspiring AI/ML engineers, categorizing foundational papers, repositories, benchmarks, and project blueprints.',
    problemSolved: 'Solves the fragmentation and overwhelm in AI education by providing a non-linear yet structured path from linear algebra to agentic LLM architectures.',
    architectureDetails: [
      'Hierarchical graph traversal of AI/ML engineering domains',
      'Interactive milestone checklist with progress persistence',
      'Direct cross-linking to arXiv papers, GitHub repos, and video lectures',
      'Filterable by mathematical rigor, prerequisite dependencies, and hands-on tracks'
    ],
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Markdown Engine'],
    githubUrl: 'https://github.com/mdzaheerjk/SageMap',
    demoUrl: 'https://sagemap-preview.app',
    featured: true,
    highlight: 'Learning Knowledge Graph',
    metrics: [
      { label: 'Curated Resources', value: '200+' },
      { label: 'Tracks Covered', value: '8' },
      { label: 'Paper Breakdowns', value: '35+' }
    ]
  },
  {
    id: 'moodline',
    title: 'Moodline',
    subtitle: 'Fine-Grained Emotion Classification System via BiGRU & NLP',
    category: ['NLP', 'Deep Learning', 'Full Stack AI'],
    description: 'An end-to-end NLP emotion recognition engine powered by Bidirectional Gated Recurrent Units (BiGRU) and FastAPI backend, predicting multi-label affective states from unstructured user text.',
    problemSolved: 'Captures subtle contextual and bidirectional semantic cues in natural language often missed by traditional unidirectional Recurrent Networks or bag-of-words classifiers.',
    architectureDetails: [
      'Bidirectional GRU architecture with custom embedding layer and dropout regularization',
      'Text preprocessing pipeline (tokenization, lemmatization, custom stopword tuning)',
      'High-throughput asynchronous FastAPI microservice with Pydantic schema validation',
      'Responsive lightweight client with instant latency feedback and confidence graphs'
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'FastAPI', 'NumPy', 'HTML5/CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/mdzaheerjk/Moodline-Emotion-Detection',
    demoUrl: 'https://moodline-app.demo',
    featured: true,
    highlight: 'Deep Learning NLP Pipeline',
    metrics: [
      { label: 'Classification Accuracy', value: '92.4%' },
      { label: 'Inference Time', value: '~18ms' },
      { label: 'Emotion Classes', value: '6 States' }
    ]
  },
  {
    id: 'ai-travel-planner',
    title: 'AI Travel Itinerary Planner',
    subtitle: 'Autonomous Multi-Constraint Travel Engine with Generative AI',
    category: ['Generative AI', 'Full Stack AI'],
    description: 'A generative AI travel assistant synthesizing budget constraints, real-time weather forecasts, transport logistics, and cultural preferences into day-by-day actionable itineraries.',
    problemSolved: 'Eliminates hours of manual itinerary drafting by orchestrating prompt chains and structured JSON outputs with rigorous constraint validation.',
    architectureDetails: [
      'Multi-step prompt pipeline with iterative refinement and structured JSON output schema',
      'Integration with external map APIs and geolocation markers',
      'Budget optimization agent distributing spending across lodging, dining, and transit',
      'Exportable day-by-day timeline with schedule conflict detection'
    ],
    techStack: ['Python', 'LangChain', 'Google Gemini API', 'FastAPI', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mdzaheerjk/AI-Travel-Itinerary-Planner',
    demoUrl: 'https://travel-ai-planner.demo',
    featured: true,
    highlight: 'Generative AI & Agentic Flow',
    metrics: [
      { label: 'Generation Speed', value: '<3.2s' },
      { label: 'Constraint Adherence', value: '98%' },
      { label: 'Output Schema', value: 'Strict JSON' }
    ]
  },
  {
    id: 'gemini-health',
    title: 'Gemini Health',
    subtitle: 'Multimodal Vision-Powered Nutrition & Meal Assessment Assistant',
    category: ['Generative AI', 'Computer Vision', 'Full Stack AI'],
    description: 'A multimodal visual AI application that processes food and meal imagery to analyze caloric density, macronutrient distributions, ingredient composition, and dietary risk factors.',
    problemSolved: 'Automates cumbersome manual food logging by leveraging state-of-the-art multimodal vision models for instant spatial meal recognition and nutritional breakdown.',
    architectureDetails: [
      'Multimodal image ingestion pipeline with real-time compression and client-side validation',
      'Structured few-shot prompt templates enforcing macronutrient breakdown schema',
      'Caloric approximation engine cross-referencing visual plate proportions',
      'Dietary restriction filter detecting allergens and sodium/sugar threshold alerts'
    ],
    techStack: ['Python', 'Google Gemini Pro Vision', 'Streamlit', 'PIL / Pillow', 'FastAPI'],
    githubUrl: 'https://github.com/mdzaheerjk/Gemini-Health-Vision',
    demoUrl: 'https://gemini-health.demo',
    featured: true,
    highlight: 'Multimodal AI Vision',
    metrics: [
      { label: 'Macro Estimation', value: '4 Pillars' },
      { label: 'Processing Speed', value: '1.4s' },
      { label: 'Image Types', value: 'JPEG/PNG/HEIC' }
    ]
  },
  {
    id: 'youtube-transcript-notes',
    title: 'YouTube Transcript → Detailed Notes',
    subtitle: 'Automated Technical Lecture Digest & Key Concept Synthesizer',
    category: ['Generative AI', 'NLP'],
    description: 'An AI engine that extracts transcripts from technical video lectures, filters filler speech, and generates structured, hierarchical study notes with timestamps, key definitions, and code summaries.',
    problemSolved: 'Converts lengthy technical lectures and coding workshops into high-density reference markdown documents ready for revision.',
    architectureDetails: [
      'Automated transcript retrieval with fallback subtitle extraction',
      'Recursive text chunking algorithm handling long transcripts beyond token window limits',
      'Hierarchical map-reduce summarization preserving technical precision and formulas',
      'One-click Markdown and PDF export with interactive timestamp chapter links'
    ],
    techStack: ['Python', 'LangChain', 'YouTube Transcript API', 'Streamlit', 'Gemini API'],
    githubUrl: 'https://github.com/mdzaheerjk/YouTube-Transcript-To-Notes',
    demoUrl: 'https://yt-notes-ai.demo',
    featured: true,
    highlight: 'Map-Reduce LLM Pipeline',
    metrics: [
      { label: 'Max Video Length', value: '4+ Hours' },
      { label: 'Compression Ratio', value: '85%' },
      { label: 'Extraction Time', value: '<2s' }
    ]
  },
  {
    id: 'ats-resume-expert',
    title: 'ATS Resume Expert',
    subtitle: 'AI-Powered Resume Analysis & Job Description Alignment Engine',
    category: ['Generative AI', 'NLP'],
    description: 'An intelligent Applicant Tracking System (ATS) evaluator that parses PDF resumes, computes semantic alignment against target job descriptions, identifies skill gaps, and suggests high-impact revisions.',
    problemSolved: 'Helps engineers optimize resume verbiage, quantify achievements, and match industry keyword distributions to overcome automated screening filters.',
    architectureDetails: [
      'PDF text & layout extraction with OCR fallback for non-searchable documents',
      'Semantic keyword matching and TF-IDF / embedding similarity scoring',
      'Action-verb strength analysis and quantitative achievement highlighting',
      'Gap analysis module comparing candidate tech stack with JD prerequisites'
    ],
    techStack: ['Python', 'PyPDF2', 'Streamlit', 'Google GenAI', 'Scikit-learn'],
    githubUrl: 'https://github.com/mdzaheerjk/ATS-Resume-Expert-AI',
    demoUrl: 'https://ats-expert.demo',
    featured: false,
    highlight: 'Semantic Evaluation & Parsing',
    metrics: [
      { label: 'Match Score Engine', value: '0-100%' },
      { label: 'Processing Time', value: '<1.8s' },
      { label: 'Keyword Gap Analysis', value: 'Instant' }
    ]
  },
  {
    id: 'solar-panel-defect-classification',
    title: 'Solar Panel Defect Classification',
    subtitle: 'Deep Convolutional Neural Network for Electroluminescence Imagery',
    category: ['Computer Vision', 'Deep Learning'],
    description: 'A deep learning computer vision classification pipeline designed to identify micro-cracks, finger failures, and degradation anomalies in photovoltaic cells from electroluminescence images.',
    problemSolved: 'Automates labor-intensive industrial quality control inspections for solar panel manufacturing, significantly reducing manual inspection defect escape rates.',
    architectureDetails: [
      'Custom CNN architecture with transfer learning baseline benchmarks (ResNet50, MobileNetV2)',
      'Extensive data augmentation pipeline (rotation, contrast jitter, elastic deformation)',
      'Grad-CAM explainability heatmaps visualizing model attention over panel micro-fractures',
      'Confusion matrix evaluation with rigorous Precision-Recall optimization for low false negatives'
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Matplotlib', 'Scikit-learn'],
    githubUrl: 'https://github.com/mdzaheerjk/Solar-Panel-Defect-Classification',
    featured: false,
    highlight: 'CNN & Explainable AI (Grad-CAM)',
    metrics: [
      { label: 'Validation Accuracy', value: '94.8%' },
      { label: 'Defect Classes', value: '4 Anomalies' },
      { label: 'False Negative Rate', value: '<2.1%' }
    ]
  },
  {
    id: 'telecom-churn-prediction',
    title: 'Telecom Churn Prediction',
    subtitle: 'End-to-End Predictive Machine Learning Pipeline & Deployment',
    category: ['Machine Learning', 'MLOps'],
    description: 'A robust machine learning classification system analyzing customer tenure, contract types, billing patterns, and support tickets to forecast customer churn risk with automated probability scores.',
    problemSolved: 'Identifies high-risk customer segments prior to cancellation, empowering proactive retention strategies and minimizing enterprise revenue loss.',
    architectureDetails: [
      'Comprehensive EDA and outlier detection with missing-value imputation strategies',
      'Feature engineering including one-hot encoding, standard scaling, and synthetic ratio features',
      'Hyperparameter tuning using Optuna across Random Forest, XGBoost, and LightGBM models',
      'Production FastAPI deployment with automated batch and single-record prediction endpoints'
    ],
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna', 'Pandas', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/mdzaheerjk/Telecom-Churn-Prediction-ML',
    demoUrl: 'https://churn-predictor.demo',
    featured: false,
    highlight: 'XGBoost & Optuna Optimization',
    metrics: [
      { label: 'ROC-AUC Score', value: '0.884' },
      { label: 'Precision on Churn', value: '86.2%' },
      { label: 'API Latency', value: '8ms' }
    ]
  }
];
