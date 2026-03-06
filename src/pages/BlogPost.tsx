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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-display font-light text-white mb-4">Article Not Found</h1>
          <p className="text-zinc-400 font-light mb-8">The article you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center px-6 py-3 bg-transparent border border-[#5B8FB9]/30 text-[#5B8FB9] font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#5B8FB9]/10 hover:border-[#5B8FB9]/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
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
        "url": "https://www.lumetraanalytics.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.lumetraanalytics.com/blog/${post.slug}`
    },
    "keywords": post.keyword
  });

  return (
    <article className="bg-[#050505] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://www.lumetraanalytics.com/blog/${post.slug}`}
        schemaMarkup={schemaMarkup}
        keywords={`${post.keyword}, GA4 consulting, Digital Strategy, BigQuery Consulting`}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#5B8FB9] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-[#D4AF37]" />
              <span className="text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full">{post.keyword}</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>5 min read</span>
          </div>
          
          <h1 className="text-4xl font-display font-light text-white tracking-tight sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-white/10 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 flex items-center justify-center text-[#5B8FB9] font-display font-light text-xl">
                L
              </div>
              <div>
                <p className="font-display font-medium text-white">Lumetra Team</p>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Revenue Intelligence Experts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 mr-2">Share:</span>
              
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>

              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 bg-transparent text-zinc-400 hover:bg-[#0077b5]/20 hover:text-[#0077b5] hover:border-[#0077b5]/50 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://www.lumetraanalytics.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 bg-transparent text-zinc-400 hover:bg-[#1877f2]/20 hover:text-[#1877f2] hover:border-[#1877f2]/50 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-invert md:prose-lg max-w-none 
          prose-headings:font-display prose-headings:font-light prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-zinc-300 prose-p:font-light prose-p:leading-relaxed prose-p:mb-8
          prose-a:text-[#5B8FB9] prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-white transition-colors
          prose-blockquote:border-l-2 prose-blockquote:border-[#D4AF37] prose-blockquote:bg-[#D4AF37]/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-light prose-blockquote:text-zinc-300
          prose-li:marker:text-[#5B8FB9] prose-li:text-zinc-300 prose-li:font-light prose-li:leading-relaxed prose-li:mb-2
          prose-strong:text-white prose-strong:font-medium
          prose-img:rounded-2xl prose-img:border prose-img:border-white/10">
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
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="bg-[#0A0A0A] rounded-3xl p-8 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
            <h3 className="text-2xl font-display font-light text-white mb-4">Ready to upgrade your analytics?</h3>
            <p className="text-zinc-400 font-light mb-8 max-w-lg mx-auto">
              Lumetra provides premium GA4 consulting, BigQuery architecture, and digital strategy services for companies spending $30K+ per month on ads.
            </p>
            <Link 
              to="/diagnostic"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black font-mono text-xs uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#050505]"
            >
              Request an Evaluation
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
