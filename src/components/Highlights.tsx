import React from 'react';
import { Award, Flame, Code2, BookOpen, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlightItems = [
    {
      title: '#365DaysOfCoding Streak',
      category: 'Consistency',
      icon: <Flame className="w-5 h-5 text-black" />,
      description: 'Continuous daily habit of algorithmic practice, paper reading, and codebase building documented publicly across GitHub.'
    },
    {
      title: '20+ AI/ML Projects Built',
      category: 'Applied AI',
      icon: <Cpu className="w-5 h-5 text-black" />,
      description: 'End-to-end architectures covering Machine Learning classifiers, Deep Learning BiGRU networks, and Generative AI agent loops.'
    },
    {
      title: 'Open Source Curations (SageMap & SageStudio)',
      category: 'Open Source',
      icon: <BookOpen className="w-5 h-5 text-black" />,
      description: 'Built interactive educational sandboxes and knowledge roadmaps assisting developer peers in mastering AI/ML foundations.'
    },
    {
      title: '50+ Algorithmic Problems Solved',
      category: 'Algorithms',
      icon: <Code2 className="w-5 h-5 text-black" />,
      description: 'Practiced patterns across arrays, two-pointers, trees, graphs, and dynamic programming with optimal time and space complexity.'
    },
    {
      title: 'Production Serving & Containerization',
      category: 'MLOps',
      icon: <Terminal className="w-5 h-5 text-black" />,
      description: 'Transitioned notebook models into high-throughput asynchronous FastAPI microservices and reproducible Docker containers.'
    },
    {
      title: 'Explainable AI & Grad-CAM',
      category: 'Computer Vision',
      icon: <Award className="w-5 h-5 text-black" />,
      description: 'Implemented convolutional attention maps (Grad-CAM) to verify neural model decision boundaries for industrial defect classification.'
    }
  ];

  return (
    <section id="highlights" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            09 // VERIFIED MILESTONES
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="highlights-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Engineering Highlights & Benchmarks
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Key milestones, public learning initiatives, and technical benchmarks achieved throughout my engineering journey.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-800 bg-neutral-100 border border-neutral-300 px-3 py-1.5 rounded-full">
            6 Core Engineering Milestones
          </span>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightItems.map((item, idx) => (
            <div
              key={item.title}
              id={`highlight-card-${idx}`}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-2xs hover:border-black hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-neutral-300 bg-neutral-200 text-neutral-800 font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-neutral-200 flex items-center gap-2 text-[11px] font-mono text-neutral-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-black" />
                <span>Verified Engineering Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
