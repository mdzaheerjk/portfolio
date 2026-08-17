import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black text-white border-t border-neutral-900 py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-850">
          {/* Brand & Subtitle */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-sm bg-white text-black flex items-center justify-center font-mono text-xs font-bold">
                ZJ
              </span>
              <span className="text-base font-bold tracking-tight text-white font-mono">
                Zaheer JK
              </span>
            </div>
            <p className="text-xs text-neutral-400">
              AI/ML Engineer • Builder • Learner
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-neutral-400">
            <a
              href="https://github.com/mdzaheerjk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/mdzaheerjk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:zaheerjkxai@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © 2026 Zaheer JK. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <span>Built with curiosity & code.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
