"use client";

import { Download, Printer } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { education } from "@/data/about";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";

export default function ResumePage() {
  const topSkills = skillCategories
    .flatMap((c) => c.skills)
    .sort((a, b) => b.level - a.level)
    .slice(0, 12);

  return (
    <PageTransition>
      <PageHeader
        title="Resume"
        subtitle="Interactive resume — download PDF or print."
      />

      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <FadeIn>
          <div className="flex gap-3 mb-8 no-print">
            <a href={siteConfig.resumeUrl} download>
              <Button variant="gradient"><Download className="w-4 h-4" /> Download PDF</Button>
            </a>
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="w-4 h-4" /> Print Resume
            </Button>
          </div>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gradient">{siteConfig.name}</h2>
              <p className="text-primary font-medium mb-2">AI & Machine Learning Engineer</p>
              <p className="text-sm text-muted">
                {siteConfig.email} · {siteConfig.phone} · {siteConfig.location}
              </p>
              <p className="text-sm text-muted mt-1">
                {siteConfig.github} · {siteConfig.linkedin}
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Summary</h3>
              <p className="text-sm text-muted leading-relaxed">
                Aspiring AI/ML Engineer with expertise in machine learning, deep learning, NLP, computer vision,
                and generative AI. Experienced in building end-to-end ML pipelines, deploying models, and contributing
                to open-source projects. Passionate about solving real-world problems with data-driven solutions.
              </p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((s) => (
                  <Badge key={s.name} variant="outline">{s.name}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences.slice(0, 4).map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{exp.title}</p>
                        <p className="text-sm text-primary">{exp.organization}</p>
                      </div>
                      <p className="text-xs text-muted">{exp.startDate} — {exp.endDate}</p>
                    </div>
                    <p className="text-sm text-muted mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-sm text-primary">{edu.institution}</p>
                      </div>
                      <p className="text-xs text-muted">{edu.startDate} — {edu.endDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Projects</h3>
              <div className="space-y-3">
                {projects.slice(0, 6).map((p) => (
                  <div key={p.slug}>
                    <p className="font-medium text-sm">{p.title}</p>
                    <p className="text-xs text-muted">{p.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-4">Certifications</h3>
              <div className="space-y-2">
                {certifications.slice(0, 6).map((c) => (
                  <div key={c.id} className="flex justify-between text-sm">
                    <span>{c.title}</span>
                    <span className="text-muted">{c.issuer}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </PageTransition>
  );
}
