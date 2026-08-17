import React from 'react';
import { PAGES } from './Navbar';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

interface PageNavigationControlsProps {
  currentPage: string;
  onSelectPage: (pageId: string) => void;
}

export const PageNavigationControls: React.FC<PageNavigationControlsProps> = ({
  currentPage,
  onSelectPage,
}) => {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="py-10 px-6 lg:px-12 bg-white border-t border-neutral-200 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Page Button */}
          <div className="w-full sm:w-auto">
            {prevPage ? (
              <button
                type="button"
                onClick={() => onSelectPage(prevPage.id)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 hover:border-black text-neutral-800 hover:text-black transition-all flex items-center justify-center sm:justify-start gap-2 text-xs font-mono group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-black group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] text-neutral-500">Previous Section</span>
                  <span className="font-semibold">{prevPage.name}</span>
                </div>
              </button>
            ) : (
              <div className="hidden sm:block text-xs font-mono text-neutral-400">
                // Beginning of Portfolio
              </div>
            )}
          </div>

          {/* Quick Page Indicator / Dots */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {PAGES.map((page) => {
              const isActive = page.id === currentPage;
              return (
                <button
                  key={page.id}
                  onClick={() => onSelectPage(page.id)}
                  title={`Go to ${page.name}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    isActive
                      ? 'w-7 h-2.5 bg-black shadow-2xs'
                      : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-500'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Page Button */}
          <div className="w-full sm:w-auto">
            {nextPage ? (
              <button
                type="button"
                onClick={() => onSelectPage(nextPage.id)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white transition-all flex items-center justify-center sm:justify-end gap-2 text-xs font-mono shadow-xs group cursor-pointer"
              >
                <div className="text-right">
                  <span className="block text-[10px] text-neutral-400">Next Section</span>
                  <span className="font-semibold">{nextPage.name}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelectPage('home')}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-neutral-100 border border-neutral-300 hover:border-black text-black hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-xs font-mono cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
