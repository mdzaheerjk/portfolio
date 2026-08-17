import React from 'react';
import { journeyData } from '../data/experience';
import { CheckCircle2, Terminal } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            05 // ENGINEERING PROGRESSION
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 id="journey-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              My Engineering Journey
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              An engineering-first timeline of continuous skill acquisition, research exploration, and hands-on system development.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-900 bg-neutral-100 border border-neutral-300 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>Active Exploration & Building</span>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-neutral-300 ml-2 sm:ml-4 space-y-8">
          {journeyData.map((item) => (
            <div
              key={item.id}
              id={`journey-node-${item.id}`}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-6 h-6 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                <div className="w-2 h-2 rounded-full bg-black" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-2xs hover:border-black hover:bg-white hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-neutral-300 bg-neutral-200 text-neutral-800 font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-neutral-300 bg-white text-neutral-800">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-semibold text-neutral-800 mb-2">
                  {item.tagline}
                </p>

                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Accomplishments Bullet Points */}
                <div className="space-y-2 mb-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-3 border-t border-neutral-200 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-neutral-500 mr-1 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-black" /> Stack:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
