"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/page-transition";
import { Star, GitFork, Search, ExternalLink, Users, BookOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import type { GitHubRepo } from "@/types";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

export function GitHubContent() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${siteConfig.githubUsername}`),
          fetch(`https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=30`),
        ]);
        if (userRes.ok) setUser(await userRes.json());
        if (reposRes.ok) setRepos(await reposRes.json());
      } catch {
        // Fallback to placeholder data
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredRepos = repos.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.description?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  const languages = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="container mx-auto px-4 pb-20 text-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-muted mt-4">Loading GitHub data...</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 pb-20">
      <FadeIn>
        <Card className="mb-8">
          <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
              <GithubIcon className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold">{user?.name || siteConfig.name}</h2>
              <p className="text-muted text-sm mb-3">@{user?.login || siteConfig.githubUsername}</p>
              <p className="text-sm text-muted mb-4">{user?.bio || "AI/ML Engineer | Open Source Enthusiast"}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-primary" /> {user?.public_repos || 40} repos</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4 text-primary" /> {user?.followers || 25} followers</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4 text-primary" /> {user?.following || 30} following</span>
              </div>
            </div>
            <a href={user?.html_url || siteConfig.github} target="_blank" rel="noopener noreferrer">
              <Button variant="gradient"><ExternalLink className="w-4 h-4" /> View Profile</Button>
            </a>
          </CardContent>
        </Card>
      </FadeIn>

      {Object.keys(languages).length > 0 && (
        <FadeIn>
          <h3 className="text-lg font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.entries(languages)
              .sort(([, a], [, b]) => b - a)
              .map(([lang, count]) => (
                <Badge key={lang} variant="secondary">{lang} ({count})</Badge>
              ))}
          </div>
        </FadeIn>
      )}

      <FadeIn>
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <Input
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
            aria-label="Search repositories"
          />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRepos.length > 0 ? filteredRepos.map((repo, i) => (
          <FadeIn key={repo.id} delay={i * 0.03}>
            <Card className="hover:border-primary/50 transition-colors h-full">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm">{repo.name}</h3>
                  {repo.language && <Badge variant="outline" className="text-[10px]">{repo.language}</Badge>}
                </div>
                <p className="text-xs text-muted mb-3 line-clamp-2">{repo.description || "No description"}</p>
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                </div>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3" /> View Repo
                  </Button>
                </a>
              </CardContent>
            </Card>
          </FadeIn>
        )) : (
          <p className="text-muted col-span-full text-center py-8">
            {repos.length === 0
              ? "Unable to fetch repositories. Visit the GitHub profile directly."
              : "No repositories match your search."}
          </p>
        )}
      </div>

      {repos.length === 0 && (
        <div className="text-center mt-8">
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
            <Button variant="gradient"><GithubIcon className="w-4 h-4" /> Visit GitHub Profile</Button>
          </a>
        </div>
      )}
    </section>
  );
}
