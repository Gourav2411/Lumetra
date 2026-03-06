import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowRight, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get('page');
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const validPage = !isNaN(currentPage) && currentPage > 0 ? currentPage : 1;
  
  const postsPerPage = 12;

  const indexOfLastPost = validPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber === 1) {
      setSearchParams({});
    } else {
      setSearchParams({ page: pageNumber.toString() });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": currentPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "url": `https://www.lumetraanalytics.com/blog/${post.slug}`,
        "name": post.title,
        "description": post.excerpt,
        "keywords": post.keyword
      }
    }))
  });

  const pageKeywords = currentPosts.map(post => post.keyword).join(', ');
  const canonicalUrl = validPage === 1 
    ? "https://www.lumetraanalytics.com/blog" 
    : `https://www.lumetraanalytics.com/blog?page=${validPage}`;

  return (
    <div className="bg-[#050505] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title={validPage > 1 ? `GA4 Consulting & Digital Strategy Blog - Page ${validPage}` : "GA4 Consulting & Digital Strategy Blog"}
        description="Expert guides, insights, and strategies on GA4 consulting, BigQuery architecture, digital strategy, and data-driven revenue growth."
        canonicalUrl={canonicalUrl}
        schemaMarkup={schemaMarkup}
        keywords={`GA4 blog, BigQuery tutorials, digital strategy insights, GA4 consulting tips, ${pageKeywords}`}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Knowledge Base</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl font-display font-light text-white tracking-tight sm:text-5xl mb-6">
            GA4 & Digital Strategy Insights
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Expert guides and strategies on GA4 consulting, BigQuery architecture, and data-driven digital strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article key={post.id} className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden hover:border-[#5B8FB9]/50 transition-colors flex flex-col relative group">
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#5B8FB9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] mb-6">
                  <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full">{post.keyword}</span>
                </div>
                <h2 className="text-2xl font-display font-light text-white mb-4 line-clamp-2 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-[#5B8FB9] transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-zinc-400 mb-8 line-clamp-3 flex-1 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#5B8FB9] hover:text-white transition-colors mt-auto group/link"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono transition-all ${
                  validPage === index + 1
                    ? 'bg-[#5B8FB9] text-black font-bold'
                    : 'bg-transparent text-zinc-400 border border-white/10 hover:border-[#5B8FB9]/50 hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
