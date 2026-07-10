"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences, experienceTypes } from "@/data/experience";
import { formatDate } from "@/lib/utils";

export default function ExperiencePage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? experiences
    : experiences.filter((e) => e.type === filter);

  return (
    <PageTransition>
      <PageHeader
        title="Experience"
        subtitle="Internships, freelancing, research, open source, hackathons, and more."
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-10">
            {experienceTypes.map((type) => (
              <Badge
                key={type.id}
                variant={filter === type.id ? "default" : "outline"}
                className="cursor-pointer px-4 py-1.5"
                onClick={() => setFilter(type.id)}
              >
                {type.label}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-8">
          {filtered.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.1}>
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-background" />
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-sm text-primary">{exp.organization}</p>
                      </div>
                      <div className="text-sm text-muted mt-1 sm:mt-0 sm:text-right">
                        <p>{formatDate(exp.startDate)} — {exp.endDate === "Present" ? "Present" : formatDate(exp.endDate)}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mb-3 capitalize">{exp.type}</Badge>
                    <p className="text-sm text-muted mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    {exp.achievements && (
                      <ul className="text-sm text-muted list-disc list-inside">
                        {exp.achievements.map((a) => <li key={a}>{a}</li>)}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">No experience entries for this category yet. Check back soon!</p>
        )}
      </section>
    </PageTransition>
  );
}
