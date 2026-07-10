import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { getProjectBySlug, projects } from "@/data/projects";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{project.title}</h1>
                <p className="text-muted mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </FadeIn>

              {[
                { title: "Problem Statement", content: project.problemStatement },
                { title: "Solution", content: project.solution },
              ].map((section, i) => (
                <FadeIn key={section.title} delay={i * 0.1}>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-muted leading-relaxed">{section.content}</p>
                  </div>
                </FadeIn>
              ))}

              <FadeIn>
                <h2 className="text-xl font-semibold mb-4">Architecture & Workflow</h2>
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <div className="font-mono text-sm text-muted space-y-2">
                      <p>Data Input → Preprocessing → Feature Engineering → Model Training → Evaluation → Deployment</p>
                      <p className="text-primary">Model: {project.modelUsed}</p>
                      <p>Dataset: {project.dataset}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn>
                <h2 className="text-xl font-semibold mb-4">Challenges</h2>
                <ul className="list-disc list-inside text-muted mb-8 space-y-1">
                  {project.challenges.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </FadeIn>

              <FadeIn>
                <h2 className="text-xl font-semibold mb-4">Future Improvements</h2>
                <ul className="list-disc list-inside text-muted mb-8 space-y-1">
                  {project.futureImprovements.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </FadeIn>

              {project.screenshots.length > 0 && (
                <FadeIn>
                  <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.screenshots.map((ss, i) => (
                      <div key={i} className="relative h-40 rounded-lg overflow-hidden">
                        <Image src={ss} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </FadeIn>
              )}

              <FadeIn>
                <h2 className="text-xl font-semibold mb-4">Code Snippet</h2>
                <Card>
                  <CardContent className="p-4">
                    <pre className="text-sm text-muted overflow-x-auto">
{`# ${project.title} - Model Training
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model.fit(X_train, y_train)
score = model.score(X_test, y_test)
print(f"Accuracy: {score:.4f}")`}
                    </pre>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <div>
              <FadeIn delay={0.2}>
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <p className="text-xs text-muted">Status</p>
                      <Badge variant="accent" className="mt-1 capitalize">{project.status}</Badge>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Date</p>
                      <p className="text-sm">{formatDate(project.date)}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Category</p>
                      <p className="text-sm">{project.category}</p>
                    </div>
                    {project.accuracy && (
                      <div>
                        <p className="text-xs text-muted">Accuracy</p>
                        <p className="text-sm text-primary font-semibold">{project.accuracy}</p>
                      </div>
                    )}
                    {project.performance && (
                      <div>
                        <p className="text-xs text-muted">Performance</p>
                        <p className="text-sm">{project.performance}</p>
                      </div>
                    )}

                    {project.metrics && (
                      <div>
                        <p className="text-xs text-muted mb-2">Metrics</p>
                        <div className="grid grid-cols-2 gap-2">
                          {project.metrics.map((m) => (
                            <div key={m.label} className="glass rounded-lg p-2 text-center">
                              <p className="text-lg font-bold text-primary">{m.value}</p>
                              <p className="text-[10px] text-muted">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-xs text-muted mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((t) => (
                          <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted mb-2">Features</p>
                      <ul className="text-sm text-muted list-disc list-inside">
                        {project.features.map((f) => <li key={f}>{f}</li>)}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full" variant="outline"><GithubIcon className="w-4 h-4" /> GitHub</Button>
                        </a>
                      )}
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full" variant="gradient"><ExternalLink className="w-4 h-4" /> Live Demo</Button>
                        </a>
                      )}
                      {project.documentation && (
                        <a href={project.documentation} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full" variant="ghost"><FileText className="w-4 h-4" /> Documentation</Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
