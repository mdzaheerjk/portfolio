import React from 'react';
import { X, Printer, Download, Mail, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-full-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white text-black rounded-sm shadow-2xl overflow-hidden my-6 border border-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during Print) */}
        <div className="no-print flex items-center justify-between px-6 py-3 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="font-mono text-xs font-semibold text-neutral-800 uppercase tracking-wider">
              Zaheer JK — Curriculum Vitae (ATS-Formatted)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-neutral-300 text-neutral-800 text-xs font-semibold hover:border-black transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-sm text-neutral-500 hover:text-black hover:bg-neutral-200/80 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document Sheet */}
        <div className="p-6 sm:p-10 md:p-12 max-h-[85vh] overflow-y-auto bg-white font-sans text-neutral-900 space-y-6">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-black">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-black uppercase">
              Zaheer JK
            </h1>
            <p className="text-sm sm:text-base font-semibold text-neutral-700 mt-1">
              AI/ML Engineer • Machine Learning • Generative AI • Deep Learning
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-600">
              <a href="mailto:info.zaheerjk@gmail.com" className="hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> info.zaheerjk@gmail.com
              </a>
              <span>•</span>
              <a href="https://github.com/zaheerjk" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> github.com/zaheerjk
              </a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-black border-b border-neutral-300 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="text-sm font-bold text-black">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-xs text-neutral-600">
                  Specialization in Artificial Intelligence & Machine Learning (3rd Year)
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0">
                2022 – 2026
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-black border-b border-neutral-300 pb-1 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="font-semibold text-black">Languages:</strong> Python (Async, OOP, Profiling), C++, SQL, JavaScript, HTML5/CSS3
              </div>
              <div>
                <strong className="font-semibold text-black">Machine Learning:</strong> Scikit-learn, Pandas, NumPy, XGBoost, Optuna, Feature Engineering
              </div>
              <div>
                <strong className="font-semibold text-black">Deep Learning & NLP:</strong> TensorFlow, Keras, PyTorch, BiGRU, LSTM, CNNs, Transformers, Tokenization
              </div>
              <div>
                <strong className="font-semibold text-black">Generative AI:</strong> LLMs (Gemini, Llama), RAG, LangChain, LangGraph, Vector Databases (Pinecone)
              </div>
              <div>
                <strong className="font-semibold text-black">MLOps & Serving:</strong> FastAPI, Docker, MLflow, Streamlit, Git/GitHub, Linux
              </div>
              <div>
                <strong className="font-semibold text-black">Computer Vision:</strong> OpenCV, CNN feature maps, Transfer Learning, Grad-CAM Heatmaps
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-black border-b border-neutral-300 pb-1 mb-3">
              SELECTED AI & ML PROJECTS
            </h2>

            <div className="space-y-4">
              {/* SageStudio */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h3 className="text-sm font-bold text-black">
                    SageStudio — Interactive ML/DL Algorithm Visualizer
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    TypeScript, React, TensorFlow.js, Python, FastAPI
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Engineered dynamic visualization engine breaking down gradient descent trajectories and hyperplane boundaries with real-time parameter tweaking.</li>
                  <li>Implemented numerical backpropagation step inspector enabling interactive mathematical comprehension of neural weight updates.</li>
                </ul>
              </div>

              {/* Moodline */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h3 className="text-sm font-bold text-black">
                    Moodline — Emotion Classification via BiGRU & NLP
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    Python, TensorFlow, Keras, FastAPI, BiGRU
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Built a multi-class affective emotion classifier utilizing Bidirectional GRU networks achieving 92.4% validation accuracy on textual dialog datasets.</li>
                  <li>Deployed as an asynchronous REST microservice via FastAPI with sub-20ms inference latency and client-side confidence metrics.</li>
                </ul>
              </div>

              {/* AI Travel Planner */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h3 className="text-sm font-bold text-black">
                    AI Travel Itinerary Planner — Autonomous Generative Agent
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    LangChain, Gemini API, Python, React, FastAPI
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Architected a multi-constraint generative agent orchestrating prompt chains and strict Pydantic JSON validation for automated itinerary synthesis.</li>
                  <li>Integrated budget optimization algorithms and geolocation point routing.</li>
                </ul>
              </div>

              {/* Solar Panel Defect Classification */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-0.5">
                  <h3 className="text-sm font-bold text-black">
                    Solar Panel Defect Classification — Deep Computer Vision
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">
                    TensorFlow, Keras, OpenCV, Grad-CAM
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
                  <li>Trained deep convolutional neural networks to classify micro-fractures in electroluminescence solar cell imagery with 94.8% accuracy.</li>
                  <li>Integrated Grad-CAM attention heatmaps to localize physical defect anomalies and verify model explainability.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Highlights & Commitments */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-black border-b border-neutral-300 pb-1 mb-3">
              KEY HIGHLIGHTS & INITIATIVES
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-700">
              <li><strong className="text-black">#365DaysOfCoding:</strong> Committed to a continuous public coding habit, publishing daily commits and repository updates.</li>
              <li><strong className="text-black">Algorithmic Problem Solving:</strong> Solved 50+ curated LeetCode algorithmic problems across arrays, trees, dynamic programming, and graphs.</li>
              <li><strong className="text-black">Open Source & SageMap:</strong> Created SageMap, an open knowledge roadmap and literature index adopted by AI/ML students.</li>
            </ul>
          </div>
        </div>

        {/* Modal Bottom Action */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 border-t border-neutral-200 bg-neutral-50">
          <span className="text-xs font-mono text-neutral-500">
            Available for AI/ML Internships & Engineering Roles
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-sm hover:bg-neutral-800 transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Save as PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
