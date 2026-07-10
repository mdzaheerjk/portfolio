"use client";

import Link from "next/link";
import { currentlyLearning, favoriteTechnologies, codingProfiles } from "@/data/site";
import { testimonials, faqs } from "@/data/misc";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/page-transition";

export function HomeExtras() {
  return (
    <>
      <section className="py-24 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3 text-center">Growth</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">Currently Learning</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {currentlyLearning.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <Badge variant="outline" className="text-sm px-4 py-2 font-light">
                  {item}
                </Badge>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3 text-center">Stack</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">Technologies</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-2">
            {favoriteTechnologies.map((tech, i) => (
              <FadeIn key={tech} delay={i * 0.04}>
                <span className="px-4 py-2 rounded-md border border-border bg-background text-sm text-muted font-light hover:text-white hover:border-white/20 transition-all duration-500">
                  {tech}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3 text-center">Profiles</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">Coding Platforms</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {codingProfiles.map((profile, i) => (
              <FadeIn key={profile.name} delay={i * 0.08}>
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  <div className="bg-card border border-border rounded-lg p-5 flex items-center justify-between hover:border-white/20 transition-all duration-500">
                    <span className="font-medium text-sm text-white">{profile.name}</span>
                    <span className="text-sm text-muted">{profile.solved}</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3 text-center">Feedback</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">Testimonials</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.08}>
                <Card className="h-full bg-background">
                  <CardContent className="p-6">
                    <p className="text-sm text-muted mb-5 font-light leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                    <div>
                      <p className="font-medium text-sm text-white">{t.name}</p>
                      <p className="text-xs text-muted mt-0.5">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3 text-center">Questions</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center tracking-tight">FAQs</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <Card className="bg-card">
                  <CardContent className="p-5">
                    <h3 className="font-medium text-sm text-white mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted font-light leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact">
              <Button variant="default" size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
