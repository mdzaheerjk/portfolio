import React, { useState } from 'react';
import { skillsData } from '../data/skills';
import { Code, Brain, Cpu, Sparkles, Database, Server, Eye, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | 'all'>('all');

  const getCategoryIcon = (name: string) => {
    if (name.includes('Programming')) return <Code className="w-4 h-4 text-black" />;
    if (name.includes('Machine Learning')) return <Brain className="w-4 h-4 text-black" />;
    if (name.includes('Deep Learning')) return <Cpu className="w-4 h-4 text-black" />;
    if (name.includes('Generative')) return <Sparkles className="w-4 h-4 text-black" />;
    if (name.includes('Databases')) return <Database className="w-4 h-4 text-black" />;
    if (name.includes('Deployment') || name.includes('MLOps')) return <Server className="w-4 h-4 text-black" />;
    if (name.includes('Vision')) return <Eye className="w-4 h-4 text-black" />;
    return <Code className="w-4 h-4 text-black" />;
  };

  const displayedCategories = activeCategoryIndex === 'all'
    ? skillsData
    : [skillsData[activeCategoryIndex]];

  return (
    <section id="skills" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            04 // COMPETENCY MATRIX
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Technical Arsenal & Specializations
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Categorized toolsets and engineering competencies developed across machine learning research, applied deep learning, and backend deployment.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-neutral-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-black font-semibold">
              <span className="w-2 h-2 rounded-full bg-black" /> Advanced (Core)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-neutral-400" /> Practitioner
            </span>
          </div>
        </div>

        {/* Category Quick Filter */}
        <div className="flex flex-wrap gap-2 mb-10 pb-3 border-b border-neutral-200 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveCategoryIndex('all')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
              activeCategoryIndex === 'all'
                ? 'bg-black text-white font-bold shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:border-black hover:text-black border border-neutral-200'
            }`}
          >
            All Categories ({skillsData.length})
          </button>
          {skillsData.map((cat, idx) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveCategoryIndex(idx)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono rounded-full transition-all cursor-pointer ${
                activeCategoryIndex === idx
                  ? 'bg-black text-white font-bold shadow-xs'
                  : 'bg-neutral-100 text-neutral-700 hover:border-black hover:text-black border border-neutral-200'
              }`}
            >
              {getCategoryIcon(cat.name)}
              <span>{cat.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              id={`skill-category-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-neutral-950 font-bold text-sm uppercase tracking-wider font-mono">
                    {getCategoryIcon(category.name)}
                    <h3>{category.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 px-2 py-0.5 rounded-full bg-neutral-200">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-4 leading-normal">
                  {category.description}
                </p>

                {/* Individual Skill Badges */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-2.5 rounded-xl bg-white hover:border-black border border-neutral-200 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-neutral-900 text-xs font-mono group-hover:text-black transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                            skill.level === 'Advanced'
                              ? 'bg-black text-white border-black font-semibold'
                              : 'bg-neutral-100 text-neutral-800 border-neutral-300'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-[11px] text-neutral-600 leading-tight">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span className="text-neutral-800 font-medium">Production Validated</span>
                <Check className="w-3.5 h-3.5 text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
