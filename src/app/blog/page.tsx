"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { blogPosts, blogCategories } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Search, Clock, User } from "lucide-react";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      <PageHeader
        title="Blog"
        subtitle="Articles on machine learning, deep learning, AI, and career development."
      />

      <section className="container mx-auto px-4 pb-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <Input
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                aria-label="Search blog posts"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:border-primary/50 transition-colors h-full">
                  <div className="relative h-44 bg-background/50">
                    <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-2 text-[10px]">{post.category}</Badge>
                    <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-muted mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} min</span>
                    </div>
                    <p className="text-xs text-muted mt-2">{formatDate(post.date)}</p>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
