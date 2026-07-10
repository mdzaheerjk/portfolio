"use client";

import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { achievements, roadmap } from "@/data/misc";
import { formatDate } from "@/lib/utils";
import { Trophy, Medal, Award, Star } from "lucide-react";

const typeIcons: Record<string, React.ReactNode> = {
  hackathon: <Trophy className="w-5 h-5 text-primary" />,
  competition: <Medal className="w-5 h-5 text-primary" />,
  award: <Award className="w-5 h-5 text-primary" />,
  badge: <Star className="w-5 h-5 text-muted" />,
  scholarship: <Award className="w-5 h-5 text-primary" />,
  recognition: <Trophy className="w-5 h-5 text-primary" />,
  opensource: <Star className="w-5 h-5 text-muted" />,
};

export default function AchievementsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Achievements"
        subtitle="Hackathons, competitions, awards, badges, and recognition."
      />

      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.id} delay={i * 0.05}>
              <Card className="hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    {typeIcons[ach.type]}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{ach.title}</h3>
                        {ach.rank && <Badge variant="accent">{ach.rank}</Badge>}
                      </div>
                      {ach.organization && (
                        <p className="text-sm text-primary mb-1">{ach.organization}</p>
                      )}
                      <p className="text-xs text-muted mb-2">{formatDate(ach.date)}</p>
                      <p className="text-sm text-muted">{ach.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="text-2xl font-semibold text-primary mb-8 text-center tracking-tight">Roadmap 2026</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roadmap.map((quarter, i) => (
            <FadeIn key={quarter.quarter} delay={i * 0.1}>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-primary mb-3">{quarter.quarter}</h3>
                  <ul className="text-sm text-muted space-y-2">
                    {quarter.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-muted mt-1">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
