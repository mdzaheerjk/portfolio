"use client";

import Link from "next/link";
import { Mail, Code, Database, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { socialLinks } from "@/data/site";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon className="w-5 h-5" />,
  linkedin: <LinkedinIcon className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  "book-open": <BookOpen className="w-5 h-5" />,
};

interface SocialIconsProps {
  size?: "sm" | "md" | "lg";
}

export function SocialIcons({ size = "md" }: SocialIconsProps) {
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
            <span className={sizes[size]}>{iconMap[link.icon]}</span>
          </Button>
        </a>
      ))}
    </div>
  );
}

export function SocialLinksList() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 transition-colors text-sm"
        >
          {iconMap[link.icon]}
          {link.name}
        </a>
      ))}
    </div>
  );
}
