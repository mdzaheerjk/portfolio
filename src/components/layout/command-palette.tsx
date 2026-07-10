"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/site";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

interface CommandItem {
  label: string;
  href: string;
  group: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const items: CommandItem[] = [
    ...navLinks.map((l) => ({ label: l.label, href: l.href, group: "Pages" })),
    ...projects.slice(0, 8).map((p) => ({ label: p.title, href: `/projects/${p.slug}`, group: "Projects" })),
    ...blogPosts.map((b) => ({ label: b.title, href: `/blog/${b.slug}`, group: "Blog" })),
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigate = useCallback((href: string) => {
    router.push(href);
    setOpen(false);
    setQuery("");
  }, [router]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="w-full max-w-lg glass rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search className="w-4 h-4 text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, projects, blog..."
                className="flex-1 h-12 bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
                autoFocus
                aria-label="Search command palette"
              />
              <kbd className="text-[10px] text-muted bg-card px-1.5 py-0.5 rounded">ESC</kbd>
            </div>
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="text-sm text-muted text-center py-4">No results found</p>
              ) : (
                filtered.slice(0, 10).map((item) => (
                  <button
                    key={item.href + item.label}
                    onClick={() => navigate(item.href)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm hover:bg-primary/10 transition-colors text-left"
                  >
                    <div>
                      <span>{item.label}</span>
                      <span className="text-xs text-muted ml-2">{item.group}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-muted" />
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
