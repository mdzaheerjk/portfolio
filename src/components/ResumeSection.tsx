import React from 'react';
import { FileText, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6 bg-neutral-50 border border-neutral-200 p-8 sm:p-12 rounded-3xl shadow-2xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-xs font-mono text-neutral-800 font-semibold">
            <FileText className="w-3.5 h-3.5 text-black" />
            <span>Official Curriculum Vitae</span>
          </div>

          <h2
            id="resume-heading"
            className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950"
          >
            Want the complete engineering picture?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
            Review my verified curriculum vitae covering mathematical foundations, model architectures, production deployments, academic benchmarks, and LeetCode problem solving.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              id="resume-cta-view"
              onClick={onOpenResume}
              className="px-6 py-3 rounded-xl bg-black text-white font-semibold text-xs hover:bg-neutral-800 transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Launch ATS Document Viewer</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-neutral-500 border-t border-neutral-200">
            <span className="flex items-center gap-1.5 text-neutral-900 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-black" />
              Verified Artifacts & Codebases
            </span>
            <span>•</span>
            <span className="text-neutral-800 font-medium">Updated for 2026 AI Opportunities</span>
            <span>•</span>
            <span className="text-neutral-800 font-medium">ATS Print & PDF Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};
