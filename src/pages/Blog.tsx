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
        "url": `https://lumetraanalytics.com/blog/${post.slug}`,
        "name": post.title,
        "description": post.excerpt,
        "keywords": post.keyword
      }
    }))
  });

  const pageKeywords = currentPosts.map(post => post.keyword).join(', ');
  const canonicalUrl = validPage === 1 
    ? "https://lumetraanalytics.com/blog" 
    : `https://lumetraanalytics.com/blog?page=${validPage}`;

  return (
    <div className="bg-zinc-50 min-h-screen py-24">
      <SEO 
        title={validPage > 1 ? `Revenue Intelligence Insights - Page ${validPage}` : "Revenue Intelligence Insights"}
        description="Expert guides and strategies on GA4 migration, BigQuery architecture, and data-driven revenue growth."
        canonicalUrl={canonicalUrl}
        schemaMarkup={schemaMarkup}
        keywords={pageKeywords}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight sm:text-5xl mb-4">
            Revenue Intelligence Insights
          </h1>
          <p className="text-lg text-zinc-600">
            Expert guides and strategies on GA4 migration, BigQuery architecture, and data-driven revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
                  <span className="bg-zinc-100 px-2.5 py-1 rounded-md">{post.keyword}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-zinc-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-zinc-600 mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors mt-auto group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                  validPage === index + 1
                    ? 'bg-zinc-900 text-white'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50'
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
