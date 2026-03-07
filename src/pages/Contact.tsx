import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { SEO } from '../components/SEO';

export function Contact() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lumetra Analytics"
    }
  });

  return (
    <div className="bg-[#050505] min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Contact Our GA4 & BigQuery Consultants"
        description="Contact Lumetra Analytics for expert GA4 consulting, BigQuery architecture, and data-driven digital strategy services."
        keywords="contact GA4 consultant, hire BigQuery expert, digital strategy agency contact"
        canonicalUrl="https://www.lumetraanalytics.com/contact"
        schemaMarkup={schemaMarkup}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Communications</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6">
            Contact Our GA4 & Digital Strategy Experts
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to fix your tracking or build a custom BigQuery model? Reach out to our GA4 consulting team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
            <h3 className="text-2xl font-display font-light tracking-tight text-white mb-8">Send us a message</h3>
            <EvaluationForm locationContext="Contact Page" />
          </div>
        </div>
      </div>
    </div>
  );
}
