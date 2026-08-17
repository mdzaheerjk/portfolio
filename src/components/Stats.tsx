import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../data/stats';
import { Code2, Cpu, Calendar, Layers } from 'lucide-react';

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    leetcode: 0,
    projects: 0,
    'coding-challenge': 0,
    technologies: 0
  });

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1400; // ms
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts: { [key: string]: number } = {};
      statsData.forEach((stat) => {
        nextCounts[stat.id] = Math.min(
          stat.value,
          Math.floor(stat.value * easeProgress)
        );
      });

      setCounts(nextCounts);

      if (frame >= totalFrames) {
        clearInterval(timer);
        // Ensure final values match exact target
        const finalCounts: { [key: string]: number } = {};
        statsData.forEach((stat) => {
          finalCounts[stat.id] = stat.value;
        });
        setCounts(finalCounts);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return (
          <div className="p-2 rounded-lg bg-neutral-200 text-black">
            <Code2 className="w-4 h-4" />
          </div>
        );
      case 'Cpu':
        return (
          <div className="p-2 rounded-lg bg-neutral-200 text-black">
            <Cpu className="w-4 h-4" />
          </div>
        );
      case 'Calendar':
        return (
          <div className="p-2 rounded-lg bg-neutral-200 text-black">
            <Calendar className="w-4 h-4" />
          </div>
        );
      case 'Layers':
      default:
        return (
          <div className="p-2 rounded-lg bg-neutral-200 text-black">
            <Layers className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <section
      ref={sectionRef}
      id="engineering-stats"
      className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-neutral-200 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
                02 // VERIFIED ENGINEERING METRICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Engineering by the Numbers
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-600 max-w-sm">
            Continuous daily practice, rigorous algorithmic problem solving, and production-tested models.
          </p>
        </div>

        {/* Clean Numerical Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, idx) => {
            return (
              <div
                key={stat.id}
                id={`stat-box-${stat.id}`}
                className="p-6 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col justify-between transition-all hover:border-black hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                    <span className="text-neutral-500 uppercase">Metric 0{idx + 1}</span>
                    {getIcon(stat.iconName)}
                  </div>

                  {/* Main Large Metric Display */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-black font-display text-neutral-950 tracking-tight">
                      {counts[stat.id] || 0}
                    </span>
                    <span className="text-2xl font-bold text-neutral-500">
                      {stat.suffix}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-neutral-900 mb-1">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mt-4 border-t border-neutral-200 pt-3">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
