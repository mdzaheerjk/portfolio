"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { getFeaturedProjects } from "@/data/projects";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/page-transition";
import { GithubIcon } from "@/components/icons/brand-icons";
import Image from "next/image";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-24 border-t border-border bg-background" id="featured-projects">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-muted text-xs uppercase tracking-[0.2em] mb-3">Selected Work</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Featured Projects</h2>
            </div>
            <Link href="/projects">
              <Button variant="ghost" className="text-muted hover:text-primary">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.5, ease: smoothEase }}
                className="bg-card border border-border rounded-lg overflow-hidden card-hover h-full"
              >
                <div className="relative h-48 bg-background overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-medium tracking-tight">{project.title}</h3>
                    {project.featured && <Star className="w-3.5 h-3.5 text-muted fill-muted" />}
                  </div>
                  <p className="text-sm text-muted mb-4 line-clamp-2 font-light leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/projects/${project.slug}`}>
                      <Button size="sm" variant="outline">Details</Button>
                    </Link>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost"><GithubIcon className="w-3 h-3" /></Button>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost"><ExternalLink className="w-3 h-3" /></Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
