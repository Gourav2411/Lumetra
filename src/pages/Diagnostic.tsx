import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { Search, AlertCircle, FileCheck2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Diagnostic() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GA4 Audit & Revenue Leak Diagnostic",
    "provider": {
      "@type": "Organization",
      "name": "Lumetra Analytics"
    },
    "description": "Get a comprehensive GA4 audit and digital strategy diagnostic. Find out exactly where your tracking is broken and how our GA4 consulting services can fix it.",
    "areaServed": "Worldwide"
  });

  return (
    <div className="bg-[#050505] min-h-screen">
      <SEO 
        title="GA4 Audit & Revenue Leak Diagnostic"
        description="Get a comprehensive GA4 audit and digital strategy diagnostic. Find out exactly where your tracking is broken and how our GA4 consulting services can fix it."
        keywords="GA4 audit, GA4 diagnostic, Google Analytics 4 review, digital strategy assessment, GA4 consulting services"
        canonicalUrl="https://www.lumetraanalytics.com/diagnostic"
        schemaMarkup={schemaMarkup}
      />
      <div className="bg-[#0A0A0A] border-b border-white/10 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5B8FB9]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">System Analysis</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6">
            GA4 Audit & Revenue Leak Diagnostic
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Get a comprehensive GA4 audit and digital strategy review to find out exactly where your tracking is broken.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-light tracking-tight text-white mb-10 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              What's included?
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 rounded-full flex items-center justify-center group-hover:bg-[#5B8FB9]/10 transition-colors">
                  <Search className="w-5 h-5 text-[#5B8FB9]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">GA4 Audit</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">Deep dive into your Google Analytics 4 setup to identify missing events, duplicate tracking, and configuration errors.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border border-[#7A2021]/30 bg-[#7A2021]/5 rounded-full flex items-center justify-center group-hover:bg-[#7A2021]/10 transition-colors">
                  <AlertCircle className="w-5 h-5 text-[#7A2021]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">Attribution Gap Analysis</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">We compare your ad platform data with your backend CRM/Sales data to find the exact percentage of lost attribution.</p>
                </div>
              </div>
              
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                  <FileCheck2 className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-white mb-2">Actionable Roadmap</h3>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm">A prioritized list of fixes and architecture recommendations to build a robust data foundation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
            <h3 className="text-2xl font-display font-light tracking-tight text-white mb-8 text-center">Request your diagnostic</h3>
            <EvaluationForm locationContext="Diagnostic Page" />
          </div>
        </div>
      </div>
    </div>
  );
}
