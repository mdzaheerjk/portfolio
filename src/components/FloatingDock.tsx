import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowUp, 
  FileText, 
  Mail
} from 'lucide-react';

interface FloatingDockProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
  onSelectPage: (pageId: string) => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  onOpenCommandPalette,
  onOpenResume,
  onSelectPage
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white text-neutral-800 hover:text-black border border-neutral-300 shadow-md backdrop-blur-xs hover:scale-105 transition-all cursor-pointer"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Action Pill */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white border border-neutral-300 shadow-lg backdrop-blur-xs">
        {/* Command search trigger */}
        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-xs font-mono text-neutral-800 transition-all cursor-pointer"
          title="Open Command Palette (Cmd + K)"
        >
          <Search className="w-3.5 h-3.5 text-black" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden sm:inline-block px-1 py-0.5 text-[9px] bg-white rounded border border-neutral-300 text-neutral-600">
            ⌘K
          </kbd>
        </button>

        {/* Resume quick trigger */}
        <button
          type="button"
          onClick={onOpenResume}
          className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-black transition-colors cursor-pointer"
          title="Curriculum Vitae"
        >
          <FileText className="w-4 h-4 text-black" />
        </button>

        {/* Direct Contact trigger */}
        <button
          type="button"
          onClick={() => onSelectPage('contact')}
          className="p-2 rounded-full hover:bg-neutral-100 text-neutral-700 hover:text-black transition-colors cursor-pointer"
          title="Direct Contact"
        >
          <Mail className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
};
