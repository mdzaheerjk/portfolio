import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Code2, 
  Brain, 
  BookOpen, 
  FileText, 
  Mail, 
  Github, 
  Compass, 
  ArrowRight, 
  X
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { blogsData } from '../data/blogs';
import { skillsData } from '../data/skills';
import { PAGES } from './Navbar';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageId: string) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectPage,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  interface SearchItem {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    icon: React.ReactNode;
    action: () => void;
  }

  const items: SearchItem[] = [
    // Page navigations
    ...PAGES.map((page) => ({
      id: `page-${page.id}`,
      title: `Navigate to ${page.name}`,
      subtitle: `Go to ${page.name} section`,
      category: 'Pages',
      icon: <Compass className="w-4 h-4 text-black" />,
      action: () => {
        onSelectPage(page.id);
        onClose();
      },
    })),
    // Projects
    ...projectsData.map((project) => ({
      id: `project-${project.id}`,
      title: project.title,
      subtitle: `${project.category.join(', ')} • ${project.subtitle}`,
      category: 'AI/ML Projects',
      icon: <Brain className="w-4 h-4 text-black" />,
      action: () => {
        onSelectPage('projects');
        onClose();
      },
    })),
    // Technical Skills
    ...skillsData.map((skillCat) => ({
      id: `skill-${skillCat.name}`,
      title: skillCat.name,
      subtitle: skillCat.skills.map((s) => s.name).join(', '),
      category: 'Skills & Tools',
      icon: <Code2 className="w-4 h-4 text-black" />,
      action: () => {
        onSelectPage('skills');
        onClose();
      },
    })),
    // Blog Publications
    ...blogsData.map((blog) => ({
      id: `blog-${blog.id}`,
      title: blog.title,
      subtitle: `${blog.category} • ${blog.readTime}`,
      category: 'Publications',
      icon: <BookOpen className="w-4 h-4 text-black" />,
      action: () => {
        onSelectPage('blogs');
        onClose();
      },
    })),
    // Quick Actions
    {
      id: 'action-resume',
      title: 'Open Verified Resume (ATS PDF)',
      subtitle: 'View, print, or download curriculum vitae',
      category: 'Quick Actions',
      icon: <FileText className="w-4 h-4 text-black" />,
      action: () => {
        onOpenResume();
        onClose();
      },
    },
    {
      id: 'action-email',
      title: 'Send Direct Email (info.zaheerjk@gmail.com)',
      subtitle: 'Open default email client to collaborate',
      category: 'Quick Actions',
      icon: <Mail className="w-4 h-4 text-black" />,
      action: () => {
        window.open('mailto:info.zaheerjk@gmail.com', '_blank');
        onClose();
      },
    },
    {
      id: 'action-github',
      title: 'Visit GitHub Profile (@zaheerjk)',
      subtitle: 'Explore 20+ public repositories and daily commits',
      category: 'Links',
      icon: <Github className="w-4 h-4 text-black" />,
      action: () => {
        window.open('https://github.com/zaheerjk', '_blank');
        onClose();
      },
    },
  ];

  const filteredItems = items.filter((item) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white border border-neutral-300 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-200 gap-3">
          <Search className="w-5 h-5 text-neutral-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, skills, articles, or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-none font-mono"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-neutral-100">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 text-xs font-mono">
              No results found matching "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-neutral-100 border border-neutral-300 text-black'
                      : 'hover:bg-neutral-50 text-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-mono text-neutral-950 truncate">
                          {item.title}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-black' : 'text-neutral-400'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-neutral-700">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-neutral-700">↵</kbd> Select</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-white border border-neutral-300 text-neutral-700">Esc</kbd> Close</span>
          </div>
          <span className="text-neutral-800 font-semibold">Zaheer JK Command Hub</span>
        </div>
      </div>
    </div>
  );
};
