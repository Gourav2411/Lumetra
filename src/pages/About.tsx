import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Lumetra Founder",
      "jobTitle": "Founder & Lead Data Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "Lumetra Analytics"
      }
    }
  });

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="About | Lumetra Analytics"
        description="I founded Lumetra Analytics because I saw too many brands scaling ad spend while flying blind."
        canonicalUrl="https://www.lumetraanalytics.com/about"
        schemaMarkup={schemaMarkup}
        keywords="GA4 expert, BigQuery architect, Looker Studio dashboards, custom SQL attribution, digital strategy"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
              <span className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs">The Architect</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-8">
              The Architect Behind the Data.
            </h1>
            
            <div className="space-y-6 text-zinc-400 font-light leading-relaxed text-lg mb-10">
              <p>
                I founded Lumetra Analytics because I saw too many brands scaling ad spend while flying blind. When you are spending upwards of $10,000 a month on acquisition, "good enough" tracking is a liability. You need absolute certainty.
              </p>
              <p>
                I specialize in building custom revenue measurement architectures using GA4, BigQuery, and Looker Studio. I don't just implement tags; I build custom SQL attribution models that reveal the true ROI of your digital strategy.
              </p>
              <p>
                Whether you are a D2C brand dealing with cross-domain discrepancies or a SaaS company navigating 6-month sales cycles, I engineer the data infrastructure you need to make profitable decisions. No black boxes. No vanity metrics. Just precise, actionable truth.
              </p>
            </div>
            
            <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors">
              Let's Talk Strategy
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 aspect-[3/4] flex items-center justify-center overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
              
              {/* Graphic Flag: A high-quality, professional, black-and-white or muted headshot of the founder looking directly at the camera. */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
