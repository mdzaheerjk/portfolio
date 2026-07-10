"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects, projectCategories } from "@/data/projects";
import { Search, Grid, List, Star, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<"recent" | "popular" | "featured">("recent");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let result = [...projects];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (category !== "All") {
      result = result.filter((p) => p.category === category || p.tags.includes(category));
    }

    if (sort === "popular") result.sort((a, b) => Number(b.popular) - Number(a.popular));
    else if (sort === "featured") result.sort((a, b) => Number(b.featured) - Number(a.featured));
    else result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return result;
  }, [search, category, sort]);

  return (
    <PageTransition>
      <PageHeader
        title="Projects"
        subtitle={`${projects.length} AI/ML projects spanning machine learning, deep learning, NLP, computer vision, and generative AI.`}
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <Input
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search projects"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="h-10 px-3 rounded-lg border border-border bg-background/50 text-sm text-white"
                aria-label="Sort projects"
              >
                <option value="recent">Recent</option>
                <option value="popular">Popular</option>
                <option value="featured">Featured</option>
              </select>
              <Button variant={view === "grid" ? "default" : "outline"} size="icon" onClick={() => setView("grid")} aria-label="Grid view">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant={view === "list" ? "default" : "outline"} size="icon" onClick={() => setView("list")} aria-label="List view">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <Badge
                key={cat}
                variant={category === cat ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </FadeIn>

        <div className={view === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filtered.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.03}>
              <Card className={`overflow-hidden hover:border-primary/50 transition-colors h-full ${view === "list" ? "flex flex-row" : ""}`}>
                <div className={`relative bg-background/50 ${view === "list" ? "w-48 min-h-[120px] shrink-0" : "h-44"}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  {project.featured && (
                    <Star className="absolute top-2 right-2 w-4 h-4 text-muted fill-muted" />
                  )}
                </div>
                <CardContent className={`p-5 flex-1 ${view === "list" ? "flex flex-col justify-center" : ""}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{project.title}</h3>
                    <Badge variant={project.status === "completed" ? "accent" : "secondary"} className="text-[10px]">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">{tag}</Badge>
                    ))}
                  </div>
                  {project.accuracy && (
                    <p className="text-xs text-primary mb-3">Accuracy: {project.accuracy}</p>
                  )}
                  <div className="flex gap-2">
                    <Link href={`/projects/${project.slug}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline"><GithubIcon className="w-3 h-3" /></Button>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline"><ExternalLink className="w-3 h-3" /></Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-12">No projects match your filters.</p>
        )}
      </section>
    </PageTransition>
  );
}
