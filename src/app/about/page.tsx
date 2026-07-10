import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { biography, education, timeline } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Zaheer JK — AI/ML Engineer, education, journey, and career goals.",
};

export default function AboutPage() {
  const cards = [
    { title: "Who I Am", content: biography.whoIAm },
    { title: "Why AI", content: biography.whyAI },
    { title: "My Journey", content: biography.journey },
    { title: "Future Goals", content: biography.futureGoals },
  ];

  return (
    <PageTransition>
      <PageHeader title="About Me" subtitle={biography.intro} />

      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gradient mb-3">{card.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{card.content}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gradient mb-3">Mission</h3>
                <p className="text-sm text-muted leading-relaxed">{biography.mission}</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gradient mb-3">Vision</h3>
                <p className="text-sm text-muted leading-relaxed">{biography.vision}</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn>
          <h2 className="text-2xl font-bold mb-6">Personal Story</h2>
          <p className="text-muted leading-relaxed mb-8 max-w-3xl">{biography.personalStory}</p>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2 mb-16">
            {biography.interests.map((interest) => (
              <span key={interest} className="glass px-4 py-2 rounded-full text-sm">{interest}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Education</h2>
        </FadeIn>
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1}>
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-primary">{edu.startDate} — {edu.endDate}</span>
                  </div>
                  <p className="text-sm text-muted mb-2">{edu.institution} · {edu.location}</p>
                  <p className="text-sm text-muted mb-3">{edu.description}</p>
                  {edu.achievements && (
                    <ul className="text-sm text-muted list-disc list-inside">
                      {edu.achievements.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Timeline</h2>
        </FadeIn>
        <div className="relative border-l-2 border-primary/30 ml-4 space-y-8 mb-16">
          {timeline.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.05}>
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                <span className="text-sm text-primary font-medium">{event.year}</span>
                <h3 className="font-semibold mt-1">{event.title}</h3>
                <p className="text-sm text-muted mt-1">{event.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <a href={siteConfig.resumeUrl} download>
            <Button variant="gradient" size="lg">
              <Download className="w-4 h-4" /> Download Resume
            </Button>
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
