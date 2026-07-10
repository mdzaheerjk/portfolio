"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { skillCategories } from "@/data/skills";
import { Search } from "lucide-react";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  );
}

function CircularChart({ name, level }: { name: string; level: number }) {
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="90" height="90" className="-rotate-90">
        <circle cx="45" cy="45" r="36" fill="none" stroke="currentColor" strokeWidth="4" className="text-border" />
        <motion.circle
          cx="45" cy="45" r="36" fill="none"
          stroke="currentColor" strokeWidth="4" strokeLinecap="round"
          className="text-primary"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="text-lg font-bold -mt-12 relative z-10">{level}%</span>
      <span className="text-xs text-muted mt-8 text-center">{name}</span>
    </div>
  );
}

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return skillCategories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        skills: cat.skills.filter((s) =>
          s.name.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((cat) => cat.skills.length > 0);
  }, [search, activeCategory]);

  const topSkills = skillCategories
    .flatMap((c) => c.skills)
    .sort((a, b) => b.level - a.level)
    .slice(0, 6);

  return (
    <PageTransition>
      <PageHeader
        title="Skills"
        subtitle="Technical skills across programming, machine learning, deep learning, NLP, and more."
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <Input
                placeholder="Search skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search skills"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={activeCategory === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setActiveCategory("all")}
              >
                All
              </Badge>
              {skillCategories.map((cat) => (
                <Badge
                  key={cat.id}
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.title}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="text-xl font-semibold mb-6">Top Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-16">
            {topSkills.map((skill) => (
              <CircularChart key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((category, i) => (
            <FadeIn key={category.id} delay={i * 0.05}>
              <Card className="hover:border-primary/50 transition-colors h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
