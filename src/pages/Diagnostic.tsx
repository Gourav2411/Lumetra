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
    <div className="bg-black min-h-screen">
      <SEO 
        title="GA4 Audit & Revenue Leak Diagnostic"
        description="Get a comprehensive GA4 audit and digital strategy diagnostic. Find out exactly where your tracking is broken and how our GA4 consulting services can fix it."
        keywords="GA4 audit, GA4 diagnostic, Google Analytics 4 review, digital strategy assessment, GA4 consulting services"
        canonicalUrl="https://www.lumetraanalytics.com/diagnostic"
        schemaMarkup={schemaMarkup}
      />
      <div className="bg-[#0a0a0a] border-b-8 border-[#99CCFF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-widest text-[#99CCFF] mb-6">
            GA4 Audit & Revenue Leak Diagnostic
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-mono">
            Get a comprehensive GA4 audit and digital strategy review to find out exactly where your tracking is broken.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-[#FF9900] mb-6">What's included?</h2>
            
            <div className="space-y-8 font-mono">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#222] rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#99CCFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-2">GA4 Audit</h3>
                  <p className="text-zinc-400">Deep dive into your Google Analytics 4 setup to identify missing events, duplicate tracking, and configuration errors.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#222] rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-[#CC6666]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-2">Attribution Gap Analysis</h3>
                  <p className="text-zinc-400">We compare your ad platform data with your backend CRM/Sales data to find the exact percentage of lost attribution.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#222] rounded-full flex items-center justify-center">
                  <FileCheck2 className="w-6 h-6 text-[#CC99CC]" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-2">Actionable Roadmap</h3>
                  <p className="text-zinc-400">A prioritized list of fixes and architecture recommendations to build a robust data foundation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] p-8 rounded-[3rem] rounded-tr-none border-2 border-[#FF9900]">
            <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-[#99CCFF] mb-6 text-center">Request your diagnostic</h3>
            <EvaluationForm locationContext="Diagnostic Page" />
          </div>
        </div>
      </div>
    </div>
  );
}
