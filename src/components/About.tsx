import React from 'react';
import { Compass, Code, BrainCircuit, Terminal, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const exploringTopics = [
    {
      name: 'LLMs & Multi-Agent Loops',
      desc: 'Autonomous orchestrations, tool-calling pipelines, and stateful graph nodes.',
      tag: 'GenAI'
    },
    {
      name: 'Agentic AI Workflows',
      desc: 'Self-correcting query planners, dynamic memory retrieval, and human-in-the-loop validation.',
      tag: 'Agents'
    },
    {
      name: 'Advanced RAG Systems',
      desc: 'Hybrid dense-sparse indexing, semantic chunk boundaries, and cross-encoder rerankers.',
      tag: 'Retrieval'
    },
    {
      name: 'AI Engineering & Serving',
      desc: 'Low-latency async microservices, token streaming, and resilient inference endpoints.',
      tag: 'Production'
    },
    {
      name: 'MLOps & Reproducibility',
      desc: 'Containerized model pipelines, schema guardrails, and experiment parameter registries.',
      tag: 'Ops'
    },
    {
      name: 'Scalable System Design',
      desc: 'Distributed caching, high-throughput message buffers, and clean modular APIs.',
      tag: 'Systems'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            01 // PROFILE & PHILOSOPHY
          </span>
        </div>

        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950 mb-8">
          Engineering Mindset & Background
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Biography */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg text-neutral-900 font-medium leading-relaxed">
              I am a <strong className="text-black font-bold">3rd-year Computer Science student specializing in AI & Machine Learning</strong> with rigorous Python foundations and hands-on experience building machine learning, deep learning, generative AI, NLP, computer vision, and deployment pipelines.
            </p>

            <p>
              My engineering approach is grounded in first principles: writing clean, vectorized mathematical implementations (NumPy, PyTorch), exploring transformer mechanics, fine-tuning deep neural architectures, and packaging models into robust FastAPI backends and Docker containers.
            </p>

            {/* Emphasized Philosophy Quote with Clean Monochrome Style */}
            <div className="my-6 p-5 rounded-xl bg-neutral-50 border-l-4 border-black border-y border-r border-neutral-200 shadow-xs">
              <blockquote className="text-base sm:text-lg font-medium text-black italic">
                “I enjoy turning concepts from research papers and mathematical algorithms into working systems, reproducible models, and responsive products.”
              </blockquote>
              <p className="mt-2 text-[11px] font-mono text-neutral-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Zaheer JK — Core Engineering Philosophy</span>
              </p>
            </div>

            <p>
              Whether building an interactive algorithm simulator like <strong className="text-black font-semibold">SageStudio</strong>, a bidirectional GRU emotion classifier like <strong className="text-black font-semibold">Moodline</strong>, or orchestrating multi-step LLM workflows with LangChain, I strive to write clear, reproducible, and production-minded code.
            </p>

            {/* Quick Core Strengths Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-black transition-colors">
                <div className="flex items-center gap-2 text-black font-semibold text-xs uppercase tracking-wider mb-1.5 font-mono">
                  <BrainCircuit className="w-4 h-4 text-black" />
                  <span>Research to Code</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Translating mathematical formulations, loss equations, and paper architectures into functional Python/PyTorch modules.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-black transition-colors">
                <div className="flex items-center gap-2 text-black font-semibold text-xs uppercase tracking-wider mb-1.5 font-mono">
                  <Terminal className="w-4 h-4 text-black" />
                  <span>Full-Stack AI Mindset</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Bridging machine learning models with asynchronous APIs, typed schemas, and responsive interactive web interfaces.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Exploring */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-black" />
                <h3 className="font-bold text-neutral-900 text-sm uppercase tracking-wider font-mono">
                  Currently Exploring
                </h3>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800">
                Active Research
              </span>
            </div>

            <div className="space-y-2.5">
              {exploringTopics.map((topic, index) => (
                <div
                  key={topic.name}
                  id={`exploring-item-${index}`}
                  className="p-3 rounded-xl bg-white border border-neutral-200 hover:border-black transition-all shadow-2xs group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900 text-xs group-hover:text-black transition-colors">{topic.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {topic.tag}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-normal">{topic.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600 font-mono">
              <span className="text-neutral-800 font-medium">Goal: End-to-End AI Product Architect</span>
              <Code className="w-3.5 h-3.5 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
