"use client";

import { FadeIn } from "@/components/ui/page-transition";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-14 overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden="true" />
      <div className="container mx-auto px-4 relative">
        <FadeIn>
          <p className="text-muted text-xs uppercase tracking-[0.2em] mb-4 font-medium">Section</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">{title}</h1>
          {subtitle && <p className="text-base text-muted max-w-2xl font-light leading-relaxed">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
