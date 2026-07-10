"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { navLinks, siteConfig, socialLinks } from "@/data/site";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="w-4 h-4" />,
  linkedin: <LinkedinIcon className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-black no-print">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-sm font-semibold tracking-tight uppercase mb-4 text-white">{siteConfig.name}</h3>
            <p className="text-sm text-muted mb-2 font-light leading-relaxed">
              AI & Machine Learning Engineer
            </p>
            <p className="text-sm text-muted mb-5 font-light">{siteConfig.location}</p>
            <div className="flex gap-1">
              {socialLinks.slice(0, 4).map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <Button variant="ghost" size="icon" className="text-muted hover:text-white">
                    {iconMap[link.icon] || link.name[0]}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">More</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-white font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/achievements" className="text-sm text-muted hover:text-white font-light">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted hover:text-white font-light">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-4">Newsletter</h4>
            <p className="text-sm text-muted mb-4 font-light">Updates on projects and writing.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-9 px-3 rounded-md border border-border bg-card text-sm text-white placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-white"
                aria-label="Email for newsletter"
              />
              <Button size="sm" type="submit" variant="secondary">Join</Button>
            </form>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-light">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-white font-light"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
