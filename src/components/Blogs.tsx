import React, { useState } from 'react';
import { blogsData } from '../data/blogs';
import { BlogArticle } from '../types';
import { BlogModal } from './BlogModal';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';

export const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticleModal, setActiveArticleModal] = useState<BlogArticle | null>(null);

  const categories = ['All', 'Generative AI', 'Deep Learning', 'Machine Learning', 'MLOps'];

  const filteredArticles = blogsData.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blogs" className="py-16 bg-white text-black border-b border-neutral-200 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-300 text-neutral-800 text-xs font-mono font-semibold">
            08 // TECHNICAL WRITING & INSIGHTS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 id="blogs-heading" className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-neutral-950">
              Writing & Applied Research
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-xl">
              In-depth technical publications, empirical benchmarks, and architectural breakdowns from applied AI and ML engineering.
            </p>
          </div>
          <span className="text-xs font-mono text-neutral-800 bg-neutral-100 border border-neutral-300 px-3 py-1.5 rounded-full">
            {filteredArticles.length} Technical Articles Published
          </span>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-3 border-b border-neutral-200">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`blog-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white font-semibold shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs rounded-xl bg-white border border-neutral-200 focus:outline-none focus:border-black text-neutral-900 placeholder:text-neutral-400 font-mono transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              id={`blog-article-${article.slug}`}
              className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-2xs hover:border-black hover:bg-white hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              onClick={() => setActiveArticleModal(article)}
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-2.5 text-xs font-mono text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-neutral-200 text-neutral-800 border border-neutral-300 font-semibold text-[10px]">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-neutral-500">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-500">
                    <Calendar className="w-3 h-3 text-neutral-500" />
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight leading-snug mb-2.5 group-hover:text-black transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-black transition-colors">
                  <span className="flex items-center gap-1.5">
                    Read Article Breakdown
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-neutral-400 font-mono text-[10px]">
                    Technical Review
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read All Articles CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-6 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 text-xs font-mono font-semibold hover:border-black hover:bg-neutral-50 transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>Reset Filters & Show All Articles</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* Article Detail Modal */}
      <BlogModal
        article={activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
      />
    </section>
  );
};
