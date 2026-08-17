import React from 'react';
import { BlogArticle } from '../types';
import { X, Clock, Calendar, CheckCircle, Copy, Check } from 'lucide-react';

interface BlogModalProps {
  article: BlogArticle | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ article, onClose }) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = React.useState<number | null>(null);

  if (!article) return null;

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  return (
    <div
      id="blog-reader-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-neutral-300 rounded-2xl shadow-2xl overflow-hidden my-8 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-neutral-200 text-neutral-800 border border-neutral-300">
              {article.category}
            </span>
            <span className="text-neutral-400">/</span>
            <span className="font-mono text-xs text-neutral-600">
              Technical Research Publication
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Article Header */}
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-neutral-600" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-neutral-600" />
                {article.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-neutral-950 tracking-tight leading-tight mb-4">
              {article.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed pb-6 border-b border-neutral-200">
              {article.description}
            </p>
          </div>

          {/* Introductory Abstract */}
          <div className="p-5 rounded-xl bg-neutral-50 border-l-4 border-black border-y border-r border-neutral-200">
            <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider mb-1.5">
              Abstract & Motivation
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {article.content.intro}
            </p>
          </div>

          {/* Core Technical Sections */}
          <div className="space-y-6">
            {article.content.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-950 tracking-tight">
                  {section.heading}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {section.body}
                </p>

                {section.codeSnippet && (
                  <div className="my-4 rounded-xl bg-neutral-950 text-neutral-100 overflow-hidden border border-neutral-800 shadow-sm">
                    <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800 text-xs font-mono text-neutral-300">
                      <span>{section.codeSnippet.language}</span>
                      <button
                        type="button"
                        onClick={() => handleCopyCode(section.codeSnippet!.code, sIdx)}
                        className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedCodeIndex === sIdx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" />
                            <span className="text-white">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy snippet</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto text-neutral-200 leading-relaxed bg-neutral-950">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Engineering Takeaways */}
          <div className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-black space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-900 font-bold flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-black" />
              Key Takeaways & Production Guidelines
            </h4>
            <div className="space-y-2">
              {article.content.takeaways.map((takeaway, tIdx) => (
                <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <span className="text-black font-mono font-bold">0{tIdx + 1}.</span>
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-neutral-200 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2.5 py-1 rounded bg-neutral-100 text-neutral-800 border border-neutral-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50">
          <div className="text-xs font-mono text-neutral-500">
            Authored by Zaheer JK
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-semibold bg-black text-white rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer shadow-xs"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
