import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Terminal, 
  Cpu, 
  Layers, 
  Brain, 
  Code2, 
  Compass, 
  BookOpen, 
  Award,
  Zap,
  Flame,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateToPage?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigateToPage }) => {
  const navigate = (page: string) => {
    if (onNavigateToPage) {
      onNavigateToPage(page);
    }
  };

  return (
    <section
      id="home"
      className="relative bg-white text-black px-6 lg:px-12 py-16 md:py-24 overflow-hidden border-b border-neutral-200"
    >
      {/* Background Subtle Minimalist Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Status Badge & Open to Roles */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-900 text-xs font-mono shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-semibold tracking-wide uppercase text-[11px]">OPEN TO AI/ML ROLES & INTERNSHIPS</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-black" />
            <span>3rd Year CSE (AI & ML)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono">
            <Flame className="w-3.5 h-3.5 text-black" />
            <span>#365DaysOfCoding Verified</span>
          </div>
        </div>

        {/* Massive Name Display */}
        <div className="mb-6">
          <div className="text-xs sm:text-sm font-mono tracking-widest text-neutral-500 uppercase font-semibold mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-black" />
            <span>AI & Machine Learning Engineer</span>
          </div>

          <h1
            id="hero-main-name"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight font-display text-neutral-950 leading-[0.95]"
          >
            ZAHEER JK
          </h1>
        </div>

        {/* Subtitle & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-8 space-y-6">
            <p
              id="hero-subtext"
              className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal max-w-2xl"
            >
              Architecting <span className="text-black font-semibold">Deep Learning neural networks</span>, <span className="text-black font-semibold">Generative AI agent workflows</span>, <span className="text-black font-semibold">NLP & Computer Vision</span> pipelines, and production-grade asynchronous <span className="text-black font-semibold">FastAPI microservices</span>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                id="hero-cta-projects"
                onClick={() => navigate('projects')}
                className="px-6 py-3 bg-black hover:bg-neutral-800 text-white font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm active:scale-98 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-white" />
                <span>Explore AI Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="px-6 py-3 bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-black text-black font-semibold rounded-lg transition-all flex items-center gap-2 text-sm shadow-2xs active:scale-98 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-neutral-800" />
                <span>View & Download CV</span>
              </button>

              <button
                type="button"
                id="hero-cta-contact"
                onClick={() => navigate('contact')}
                className="px-5 py-3 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-800 font-medium rounded-lg transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-mono text-neutral-600 border-t border-neutral-200">
              <span className="text-neutral-900 font-semibold uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href="https://github.com/mdzaheerjk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-800 hover:text-black transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/mdzaheerjk</span>
              </a>

              <a
                href="https://linkedin.com/in/mdzaheerjk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-800 hover:text-black transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/mdzaheerjk</span>
              </a>

              <a
                href="mailto:zaheerjkxai@gmail.com"
                className="flex items-center gap-1.5 text-neutral-800 hover:text-black transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>zaheerjkxai@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Clean Monochrome Metric Cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
            <div 
              onClick={() => navigate('projects')}
              className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-black group-hover:scale-105 transition-transform">20+</span>
                <Brain className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-xs font-semibold text-neutral-900">AI / ML Projects</div>
              <div className="text-[10px] font-mono text-neutral-500 mt-0.5">DL, NLP & GenAI</div>
            </div>

            <div 
              onClick={() => navigate('skills')}
              className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-black group-hover:scale-105 transition-transform">10+</span>
                <Zap className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-xs font-semibold text-neutral-900">Core Frameworks</div>
              <div className="text-[10px] font-mono text-neutral-500 mt-0.5">PyTorch, FastAPI...</div>
            </div>

            <div 
              onClick={() => navigate('highlights')}
              className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-black group-hover:scale-105 transition-transform">365</span>
                <Flame className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-xs font-semibold text-neutral-900">Daily Coding</div>
              <div className="text-[10px] font-mono text-neutral-500 mt-0.5">Continuous Streak</div>
            </div>

            <div 
              onClick={() => navigate('github')}
              className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-black hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-black group-hover:scale-105 transition-transform">50+</span>
                <Code2 className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="text-xs font-semibold text-neutral-900">DSA & Algorithms</div>
              <div className="text-[10px] font-mono text-neutral-500 mt-0.5">LeetCode Solved</div>
            </div>
          </div>
        </div>

        {/* Engineering Pillars Quick Launchpad */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider font-semibold">
              Explore Portfolio Sections:
            </span>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              Click any category to navigate directly
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            <button
              type="button"
              onClick={() => navigate('about')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Compass className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">About Me</div>
              <div className="text-[10px] text-neutral-500">Bio & Mindset</div>
            </button>

            <button
              type="button"
              onClick={() => navigate('projects')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">Projects</div>
              <div className="text-[10px] text-neutral-500">Models & Code</div>
            </button>

            <button
              type="button"
              onClick={() => navigate('skills')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">Tech Arsenal</div>
              <div className="text-[10px] text-neutral-500">Stack & Tools</div>
            </button>

            <button
              type="button"
              onClick={() => navigate('journey')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">Journey</div>
              <div className="text-[10px] text-neutral-500">Timeline & Exp</div>
            </button>

            <button
              type="button"
              onClick={() => navigate('learning')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">Learning Hub</div>
              <div className="text-[10px] text-neutral-500">Roadmaps & Notes</div>
            </button>

            <button
              type="button"
              onClick={() => navigate('blogs')}
              className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 hover:border-black hover:bg-white transition-all text-left group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-md bg-neutral-200 text-black flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs font-semibold text-black">Publications</div>
              <div className="text-[10px] text-neutral-500">Technical Blogs</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
