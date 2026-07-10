import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { getBlogBySlug, blogPosts } from "@/data/blog";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <PageTransition>
      <article className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </FadeIn>

          <FadeIn>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
            </div>
            <Badge variant="secondary" className="mb-3">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-6">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              <span>{formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} min read</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn>
            <div className="prose prose-invert prose-sm max-w-none mb-12">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex gap-2 mb-12">
              <Button variant="outline" size="sm"><Share2 className="w-4 h-4" /> Share</Button>
            </div>
          </FadeIn>

          {related.length > 0 && (
            <FadeIn>
              <h2 className="text-xl font-semibold mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`}>
                    <div className="glass rounded-xl p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-medium text-sm mb-1 line-clamp-2">{r.title}</h3>
                      <p className="text-xs text-muted">{formatDate(r.date)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </article>
    </PageTransition>
  );
}
