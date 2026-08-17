import React from 'react';
import { 
  FileText, 
  Printer, 
  Mail, 
  Github, 
  Linkedin, 
  Award, 
  GraduationCap,
  Briefcase,
  Cpu
} from 'lucide-react';

interface ResumePageProps {
  onOpenResumeModal: () => void;
}

export const ResumePage: React.FC<ResumePageProps> = ({ onOpenResumeModal }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-white text-black px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono mb-2 font-semibold">
              <FileText className="w-3.5 h-3.5 text-black" />
              <span>ATS-OPTIMIZED RESUME</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Official Curriculum Vitae
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              Zaheer JK • 3rd Year CSE (AI & ML) • Updated for 2026 Opportunities
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 hover:border-black text-neutral-900 text-xs font-mono flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-black" />
              <span>Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Open Document Viewer</span>
            </button>
          </div>
        </div>

        {/* ATS Resume Sheet Layout */}
        <div className="bg-white text-neutral-900 rounded-2xl shadow-xs p-6 sm:p-10 md:p-12 border border-neutral-300">
          {/* Resume Header */}
          <div className="text-center pb-8 border-b-2 border-black">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-display text-black uppercase">
              ZAHEER JK
            </h2>
            <div className="text-base sm:text-lg font-semibold text-neutral-800 mt-2">
              AI / Machine Learning Engineer • Generative AI & Deep Learning Specialist
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-600">
              <a href="mailto:zaheerjkxai@gmail.com" className="hover:text-black hover:underline flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-black" /> zaheerjkxai@gmail.com
              </a>
              <span>•</span>
              <a href="https://github.com/mdzaheerjk" target="_blank" rel="noreferrer" className="hover:text-black hover:underline flex items-center gap-1.5 font-medium">
                <Github className="w-3.5 h-3.5 text-black" /> github.com/mdzaheerjk
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/mdzaheerjk" target="_blank" rel="noreferrer" className="hover:text-black hover:underline flex items-center gap-1.5 font-medium">
                <Linkedin className="w-3.5 h-3.5 text-black" /> linkedin.com/in/mdzaheerjk
              </a>
            </div>
          </div>

          {/* Core Summary */}
          <div className="py-6 border-b border-neutral-200">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-2 flex items-center gap-1.5">
              <span>PROFESSIONAL SUMMARY</span>
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Aspiring AI/ML Engineer and 3rd-year Computer Science student with strong mathematical foundations in machine learning algorithms, deep learning neural networks, and generative AI agents. Experienced in training custom BiGRU and CNN architectures, deploying sub-20ms FastAPI microservices, and writing reproducible Python pipelines with PyTorch and Scikit-learn.
            </p>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-neutral-200">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-black" />
              <span>EDUCATION</span>
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h4 className="text-sm font-bold text-neutral-950">
                  Bachelor of Technology in Computer Science & Engineering
                </h4>
                <p className="text-xs text-neutral-600 font-medium mt-0.5">
                  Specialization: Artificial Intelligence & Machine Learning (3rd Year)
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0 font-medium">
                2022 – 2026 (Expected)
              </span>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="py-6 border-b border-neutral-200">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>TECHNICAL ARSENAL</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-neutral-950 block mb-1">Languages:</span>
                <span className="text-neutral-700">Python (Async, OOP, Numerical Vectorization), C++, SQL, JavaScript/TypeScript, HTML5/CSS3</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-neutral-950 block mb-1">Deep Learning & NLP:</span>
                <span className="text-neutral-700">TensorFlow, PyTorch, Keras, BiGRU, LSTM, CNNs, Transformers, Tokenizers, Hugging Face</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-neutral-950 block mb-1">Machine Learning:</span>
                <span className="text-neutral-700">Scikit-learn, Pandas, NumPy, XGBoost, Optuna Hyperparameter Tuning, Feature Scaling</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <span className="font-bold text-neutral-950 block mb-1">Generative AI & MLOps:</span>
                <span className="text-neutral-700">LangChain, LangGraph, Gemini API, RAG, Vector Stores, FastAPI, Docker, Git/GitHub</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="py-6 border-b border-neutral-200">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-4 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-black" />
              <span>SELECTED AI & ML PROJECTS</span>
            </h3>

            <div className="space-y-4">
              <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-neutral-950">
                    SageStudio — Interactive ML/DL Algorithm Visualizer
                  </h4>
                  <span className="text-xs font-mono text-neutral-600 font-semibold">
                    TypeScript • React • TensorFlow.js • FastAPI
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Built interactive simulation canvas illustrating gradient descent trajectories, decision boundaries, and loss functions.</li>
                  <li>Implemented real-time mathematical backprop step inspector facilitating dynamic neural network comprehension.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-neutral-950">
                    Moodline — Emotion Classification via BiGRU
                  </h4>
                  <span className="text-xs font-mono text-neutral-600 font-semibold">
                    Python • TensorFlow • Keras • BiGRU • FastAPI
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Trained a multi-class affective text emotion classifier with Bidirectional GRU layers achieving 92.4% validation accuracy.</li>
                  <li>Deployed as an async REST endpoint with sub-20ms inference latency and client-side confidence metrics.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-neutral-950">
                    AI Travel Itinerary Planner — Autonomous Agent Workflow
                  </h4>
                  <span className="text-xs font-mono text-neutral-600 font-semibold">
                    LangChain • Gemini API • Pydantic • FastAPI
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Engineered multi-constraint agent workflow utilizing prompt chaining, budget optimization, and structured schema verification.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-lg border border-neutral-200 bg-neutral-50/70">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-sm font-bold text-neutral-950">
                    Solar Panel Defect Classification — Deep Computer Vision
                  </h4>
                  <span className="text-xs font-mono text-neutral-600 font-semibold">
                    CNN • OpenCV • Grad-CAM • TensorFlow
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Engineered deep CNN classifier for electroluminescence solar panel images yielding 94.8% accuracy with Grad-CAM defect localization.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Milestones & Habits */}
          <div className="pt-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-black mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>KEY HIGHLIGHTS & ACHIEVEMENTS</span>
            </h3>
            <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-neutral-700">
              <li><strong className="text-neutral-950">#365DaysOfCoding Streak:</strong> Consistent daily open source coding, model experiments, and technical publications.</li>
              <li><strong className="text-neutral-950">LeetCode Problem Solver:</strong> 50+ solved algorithm challenges focusing on Graph algorithms, Dynamic Programming, Trees, and Two Pointers.</li>
              <li><strong className="text-neutral-950">SageMap Open Initiative:</strong> Authored open roadmap guides and AI research literature indices helping fellow engineering students.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
