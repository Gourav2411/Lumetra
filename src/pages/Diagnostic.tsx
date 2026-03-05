import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { Search, AlertCircle, FileCheck2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Diagnostic() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Revenue Leak Diagnostic",
    "provider": {
      "@type": "Organization",
      "name": "Lumetra"
    },
    "description": "Find out exactly where your tracking is broken and how much it's costing you with our comprehensive GA4 and attribution audit.",
    "areaServed": "Worldwide"
  });

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Revenue Leak Diagnostic"
        description="Find out exactly where your tracking is broken and how much it's costing you with our comprehensive GA4 and attribution audit."
        canonicalUrl="https://www.lumetraanalytics.com/diagnostic"
        schemaMarkup={schemaMarkup}
      />
      <div className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Revenue Leak Diagnostic
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Find out exactly where your tracking is broken and how much it's costing you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">What's included?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Search className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">GA4 Audit</h3>
                  <p className="text-zinc-600">Deep dive into your Google Analytics 4 setup to identify missing events, duplicate tracking, and configuration errors.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">Attribution Gap Analysis</h3>
                  <p className="text-zinc-600">We compare your ad platform data with your backend CRM/Sales data to find the exact percentage of lost attribution.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <FileCheck2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">Actionable Roadmap</h3>
                  <p className="text-zinc-600">A prioritized list of fixes and architecture recommendations to build a robust data foundation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">Request your diagnostic</h3>
            <EvaluationForm locationContext="Diagnostic Page" />
          </div>
        </div>
      </div>
    </div>
  );
}
