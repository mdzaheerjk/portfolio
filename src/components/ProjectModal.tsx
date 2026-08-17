import React from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Layers, Terminal, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden my-8 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="font-mono text-xs text-neutral-800 uppercase tracking-wider font-semibold">
              Project Architecture & Technical Specs
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Title & Categories */}
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-300"
                >
                  {cat}
                </span>
              ))}
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-black text-white font-semibold">
                {project.highlight}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-950 tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <span className="block text-xl sm:text-2xl font-bold font-display text-black">
                    {m.value}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              System Overview
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Solved */}
          <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
            <h4 className="text-xs font-mono text-black font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-black" />
              Core Problem Solved
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Architectural Details & Innovations */}
          <div>
            <h4 className="text-xs font-mono text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5 text-black" />
              Key Architectural Features
            </h4>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div>
            <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-black" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-800 font-mono text-xs font-medium border border-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-neutral-600 hover:text-black transition-colors cursor-pointer"
          >
            Close Window
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-xs font-mono font-semibold hover:border-black transition-colors shadow-2xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black text-white text-xs font-mono font-semibold hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
