import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Layers, 
  Check, 
  Search 
} from 'lucide-react';

export interface PageItem {
  id: string;
  name: string;
  shortName?: string;
}

export const PAGES: PageItem[] = [
  { id: 'home', name: 'Overview', shortName: 'Home' },
  { id: 'about', name: 'About Me', shortName: 'About' },
  { id: 'projects', name: 'AI Projects', shortName: 'Projects' },
  { id: 'skills', name: 'Tech Stack', shortName: 'Skills' },
  { id: 'journey', name: 'Journey', shortName: 'Journey' },
  { id: 'learning', name: 'Learning Hub', shortName: 'Learning' },
  { id: 'github', name: 'GitHub & Code', shortName: 'GitHub' },
  { id: 'blogs', name: 'Publications', shortName: 'Blogs' },
  { id: 'highlights', name: 'Milestones', shortName: 'Streak' },
  { id: 'resume', name: 'CV / Resume', shortName: 'Resume' },
  { id: 'contact', name: 'Contact', shortName: 'Contact' },
];

interface NavbarProps {
  currentPage: string;
  onSelectPage: (pageId: string) => void;
  onOpenResume: () => void;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onSelectPage, 
  onOpenResume,
  onOpenCommandPalette
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onSelectPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className="h-[72px] border-b border-neutral-200 sticky top-0 bg-white/95 backdrop-blur-md text-black z-40 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo - Crisp Black & White */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:bg-neutral-800 transition-colors">
            ZJ
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-black block group-hover:text-neutral-700 transition-colors leading-none">
              Zaheer JK
            </span>
            <span className="text-[10px] font-mono text-neutral-500 block tracking-wider uppercase mt-0.5">
              AI / ML Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Tabs */}
        <nav id="desktop-nav" className="hidden xl:flex items-center gap-1 text-xs font-medium">
          {PAGES.map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                id={`nav-tab-${page.id}`}
                onClick={() => handleNavClick(page.id)}
                className={`px-3 py-1.5 rounded-md transition-all font-mono text-xs flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-black text-white font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                <span>{page.shortName || page.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Medium Screen Navigation Tabs */}
        <nav className="hidden md:flex xl:hidden items-center gap-1 text-xs font-medium">
          {PAGES.slice(0, 6).map((page) => {
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`px-2.5 py-1 rounded-md transition-all font-mono text-xs cursor-pointer ${
                  isActive
                    ? 'bg-black text-white font-semibold'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-100'
                }`}
              >
                {page.shortName || page.name}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Command Palette Launcher */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            title="Search portfolio & shortcuts (Cmd + K)"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono border border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-black hover:text-black transition-all cursor-pointer shadow-2xs"
          >
            <Search className="w-3.5 h-3.5 text-neutral-500" />
            <span className="text-neutral-600">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-white rounded border border-neutral-200 text-neutral-600 font-mono">
              ⌘K
            </kbd>
          </button>

          {/* Direct Resume Action */}
          <button
            type="button"
            id="nav-resume-button"
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-semibold bg-black hover:bg-neutral-800 text-white rounded-lg shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume PDF</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-black rounded-lg bg-neutral-50 border border-neutral-200 xl:hidden transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="xl:hidden border-b border-neutral-200 bg-white px-4 sm:px-6 pt-3 pb-6 shadow-xl text-black max-h-[85vh] overflow-y-auto"
        >
          {/* Quick Search in Mobile Menu */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-800 mb-3"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-neutral-500" />
              <span>Search portfolio & commands...</span>
            </div>
            <kbd className="px-1.5 py-0.5 text-[9px] bg-white rounded border border-neutral-200 text-neutral-500">⌘K</kbd>
          </button>

          <div className="pb-2 mb-3 border-b border-neutral-200 text-xs font-mono text-neutral-500 font-semibold">
            PORTFOLIO PAGES:
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {PAGES.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  id={`mobile-nav-${page.id}`}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3 py-2.5 text-xs rounded-lg font-mono text-left transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-black text-white font-bold shadow-xs'
                      : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-black border border-neutral-200'
                  }`}
                >
                  <span>{page.name}</span>
                  {isActive && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/zaheerjk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:info.zaheerjk@gmail.com"
                className="p-2 rounded-md bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="px-4 py-2 text-xs font-semibold bg-black text-white rounded-lg flex items-center gap-1.5 hover:bg-neutral-800"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
