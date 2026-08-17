/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PAGES } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { GitHubSection } from './components/GitHubSection';
import { LearningHub } from './components/LearningHub';
import { Blogs } from './components/Blogs';
import { ResumeSection } from './components/ResumeSection';
import { ResumePage } from './components/ResumePage';
import { Highlights } from './components/Highlights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PageNavigationControls } from './components/PageNavigationControls';
import { CommandPalette } from './components/CommandPalette';
import { FloatingDock } from './components/FloatingDock';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const handleSelectPage = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Global keyboard shortcut for Command Palette (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Render individual dedicated pages
  const renderCurrentPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-0">
            <Hero
              onOpenResume={() => setIsResumeModalOpen(true)}
              onNavigateToPage={handleSelectPage}
            />
            <Stats />
            <About />
            <Projects />
            <Highlights />
            <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
          </div>
        );

      case 'about':
        return (
          <div className="space-y-0">
            <About />
            <Stats />
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-0">
            <Projects />
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-0">
            <Skills />
          </div>
        );

      case 'journey':
        return (
          <div className="space-y-0">
            <Journey />
          </div>
        );

      case 'learning':
        return (
          <div className="space-y-0">
            <LearningHub />
          </div>
        );

      case 'github':
        return (
          <div className="space-y-0">
            <GitHubSection />
          </div>
        );

      case 'blogs':
        return (
          <div className="space-y-0">
            <Blogs />
          </div>
        );

      case 'highlights':
        return (
          <div className="space-y-0">
            <Highlights />
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-0">
            <ResumePage onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-0">
            <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
          </div>
        );

      default:
        return (
          <Hero
            onOpenResume={() => setIsResumeModalOpen(true)}
            onNavigateToPage={handleSelectPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col justify-between relative">
      {/* Sticky Top Navigation with Active Page Tabs */}
      <Navbar
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Dedicated Page Area */}
      <main id="main-content" className="flex-1 bg-white">
        <div>
          {renderCurrentPageContent()}
          <PageNavigationControls
            currentPage={currentPage}
            onSelectPage={handleSelectPage}
          />
        </div>
      </main>

      {/* Global Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Floating Action Dock (Search, Top, Resume, Contact) */}
      <FloatingDock
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onSelectPage={handleSelectPage}
      />

      {/* Global Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectPage={handleSelectPage}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Global Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
