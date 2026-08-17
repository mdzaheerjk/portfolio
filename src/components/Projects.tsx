import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ArrowRight, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const categories: ProjectCategory[] = [
    'All',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'NLP',
    'Computer Vision',
    'MLOps',
    'Full Stack AI'
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category.includes(selectedCategory);
  });

  const displayedProjects = showAllProjects || selectedCategory !== 'All'
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            03 // ENGINEERING PORTFOLIO
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Selected AI & ML Projects
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              Concrete implementations converting research concepts, neural architectures, and optimization algorithms into functional, deployable tools.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-800 self-start md:self-auto px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300">
            Showing {displayedProjects.length} of {projectsData.length} Projects
          </span>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10 pb-3 border-b border-neutral-200 overflow-x-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                id={`project-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-black text-white font-bold shadow-xs'
                    : 'bg-neutral-100 border border-neutral-200 text-neutral-700 hover:border-black hover:text-black'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Clean Monochrome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-neutral-50 p-6 border border-neutral-200 hover:border-black hover:bg-white transition-all rounded-2xl flex flex-col justify-between shadow-2xs hover:shadow-md group"
            >
              <div>
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800 border border-neutral-300">
                    {project.category[0]}
                  </span>
                  {project.metrics && project.metrics[0] && (
                    <span className="text-[10px] font-mono text-neutral-900 font-semibold px-2 py-0.5 rounded-md bg-neutral-200/80 border border-neutral-300">
                      {project.metrics[0].value} {project.metrics[0].label}
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight mt-1 mb-1 group-hover:text-black transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-neutral-600 mb-3 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs text-neutral-700 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Problem Solved Callout */}
                <div className="p-3 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-700 mb-4">
                  <span className="font-bold text-black block mb-0.5 text-[11px] uppercase tracking-wider font-mono">
                    Problem Solved:
                  </span>
                  <span className="line-clamp-2">{project.problemSolved}</span>
                </div>
              </div>

              {/* Bottom Area: Tech Stack & Action Links */}
              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-neutral-200 text-neutral-600">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Bar */}
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-neutral-600 cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-neutral-200 text-neutral-800 hover:bg-black hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-neutral-200 text-neutral-800 hover:bg-black hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Toggle */}
        {selectedCategory === 'All' && projectsData.length > 6 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              id="toggle-all-projects-btn"
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-6 py-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-black text-xs font-mono font-semibold hover:border-black hover:bg-white transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{showAllProjects ? 'Show Featured Only' : 'View All Projects (' + projectsData.length + ')'}</span>
              <ArrowRight className={`w-3.5 h-3.5 text-black transition-transform ${showAllProjects ? '-rotate-90' : 'rotate-0'}`} />
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
