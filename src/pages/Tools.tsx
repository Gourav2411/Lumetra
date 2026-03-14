import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Wrench, Cpu, Database } from 'lucide-react';

export function Tools() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Analytics Tools | Lumetra",
    "description": "Advanced tools for GA4 implementation and digital strategy.",
    "url": "https://www.lumetraanalytics.com/tools"
  });

  return (
    <div className="bg-[#050505] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Analytics Tools | Lumetra"
        description="Advanced tools for GA4 implementation and digital strategy."
        canonicalUrl="https://www.lumetraanalytics.com/tools"
        schemaMarkup={schemaMarkup}
        keywords="analytics tools, GA4 implementation tools, digital strategy AI, BigQuery query builder, data validator"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Engineering</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl font-display font-light text-white tracking-tight sm:text-5xl mb-6">
            Analytics Tools
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Advanced utilities for digital strategy, GA4 implementation, and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/tools/digital-strategy" className="bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 hover:border-[#D4AF37]/50 transition-colors group relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#5B8FB9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-display font-medium text-white mb-3">Digital Strategy AI</h2>
            <p className="text-zinc-400 font-light text-sm leading-relaxed flex-1">
              Generate expert GA4 implementation plans and analyze your data using top AI models (Gemini, GPT, Claude).
            </p>
          </Link>
          
          <div className="bg-[#050505] rounded-3xl border border-white/5 p-8 opacity-50 flex flex-col">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-zinc-500">
              <Database className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-display font-medium text-zinc-500 mb-3">Data Validator (Coming Soon)</h2>
            <p className="text-zinc-600 font-light text-sm leading-relaxed flex-1">
              Automated validation for GA4 data layer implementations.
            </p>
          </div>

          <div className="bg-[#050505] rounded-3xl border border-white/5 p-8 opacity-50 flex flex-col">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 text-zinc-500">
              <Wrench className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-display font-medium text-zinc-500 mb-3">Query Builder (Coming Soon)</h2>
            <p className="text-zinc-600 font-light text-sm leading-relaxed flex-1">
              Visual BigQuery SQL generator for GA4 export data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
