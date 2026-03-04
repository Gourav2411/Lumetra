import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data/blogs';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

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

  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "Lumetra Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lumetra",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lumetraanalytics.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lumetraanalytics.com/blog/${post.slug}`
    },
    "keywords": post.keyword
  });

  return (
    <article className="bg-white min-h-screen py-24">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://lumetraanalytics.com/blog/${post.slug}`}
        schemaMarkup={schemaMarkup}
        keywords={post.keyword}
      />
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

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-zinc-100 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-lg">
                L
              </div>
              <div>
                <p className="font-semibold text-zinc-900">Lumetra Team</p>
                <p className="text-sm text-zinc-500">Revenue Intelligence Experts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-zinc-500 mr-2">Share:</span>
              
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-colors"
                aria-label="Share on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>

              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-[#0077b5] hover:text-white transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-100 text-zinc-600 hover:bg-[#1877f2] hover:text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-zinc md:prose-lg max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-900
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-zinc-600 prose-p:leading-loose prose-p:mb-8
          prose-a:text-zinc-900 prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-zinc-600
          prose-blockquote:border-l-4 prose-blockquote:border-zinc-900 prose-blockquote:bg-zinc-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-zinc-900
          prose-li:marker:text-zinc-400 prose-li:text-zinc-600 prose-li:leading-loose prose-li:mb-2
          prose-strong:text-zinc-900 prose-strong:font-semibold
          prose-img:rounded-2xl prose-img:shadow-md">
          <ReactMarkdown
            components={{
              a: ({ node, href, children, ...props }: any) => {
                const isInternal = href?.startsWith('/') || href?.includes('lumetraanalytics.com');
                
                if (isInternal && href) {
                  const path = href.startsWith('http') 
                    ? new URL(href).pathname 
                    : href;
                    
                  return (
                    <Link to={path} {...props}>
                      {children}
                    </Link>
                  );
                }
                
                return (
                  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                    {children}
                  </a>
                );
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
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
