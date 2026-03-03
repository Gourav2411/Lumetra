import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowRight, BookOpen } from 'lucide-react';

export function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-zinc-50 min-h-screen py-24">
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
                <div className="flex items-center text-sm text-zinc-500 mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>{post.keyword}</span>
                </div>
                <h2 className="text-xl font-bold text-zinc-900 mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-zinc-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-zinc-600 mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors mt-auto"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1" />
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
                  currentPage === index + 1
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
