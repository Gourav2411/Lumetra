import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import { ArrowLeft, BookOpen } from 'lucide-react';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 py-24">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">Article Not Found</h1>
        <p className="text-zinc-600 mb-8">The article you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/blog')}
          className="inline-flex items-center px-6 py-3 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="font-medium text-zinc-900 bg-zinc-100 px-2.5 py-0.5 rounded-full">{post.keyword}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
            <span>5 min read</span>
          </div>
          
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-6 border-y border-zinc-100 mb-12">
            <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-lg">
              L
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Lumetra Team</p>
              <p className="text-sm text-zinc-500">Revenue Intelligence Experts</p>
            </div>
          </div>
        </div>

        <div className="prose prose-zinc md:prose-lg max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-zinc-600 prose-p:leading-relaxed
          prose-a:text-zinc-900 prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-zinc-600
          prose-blockquote:border-l-4 prose-blockquote:border-zinc-900 prose-blockquote:bg-zinc-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-zinc-900
          prose-li:marker:text-zinc-400 prose-li:text-zinc-600
          prose-strong:text-zinc-900 prose-strong:font-semibold
          prose-img:rounded-2xl prose-img:shadow-md">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <div className="bg-zinc-50 rounded-2xl p-8 text-center border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Ready to upgrade your analytics?</h3>
            <p className="text-zinc-600 mb-6 max-w-lg mx-auto">
              Lumetra provides premium revenue measurement architecture for companies spending $30K+ per month on ads.
            </p>
            <Link 
              to="/diagnostic"
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors"
            >
              Request an Evaluation
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
