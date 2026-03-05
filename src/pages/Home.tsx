import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Home() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lumetra",
    "url": "https://www.lumetraanalytics.com",
    "logo": "https://www.lumetraanalytics.com/logo.png",
    "description": "Premium revenue measurement architecture for companies spending $30K+ per month on ads."
  });

  return (
    <div className="flex flex-col">
      <SEO 
        title="GA4 & BigQuery Revenue Intelligence"
        description="Premium revenue measurement architecture for companies spending $30K+ per month on ads. Fix your GA4 setup and build custom BigQuery models."
        canonicalUrl="https://www.lumetraanalytics.com/"
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/analytics/1920/1080?blur=10')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                GA4 & BigQuery Revenue Intelligence
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-lg">
                Premium revenue measurement architecture for companies spending $30K+ per month on ads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diagnostic" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors">
                  Get Revenue Diagnostic
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/book-call" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white border border-white/20 font-medium rounded-xl hover:bg-white/20 transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Decorative element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative h-full w-full bg-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-emerald-400 font-medium">+124% ROAS</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded-full w-1/2"></div>
                    <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-medium">Data Verified</p>
                        <p className="text-sm text-zinc-400">Attribution model active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              Trusted by data-driven teams
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We've helped companies across industries fix their GA4 setup, build custom BigQuery models, and unlock true marketing ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
              <div className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-4">E-Commerce</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">100% Data Alignment</h3>
              <p className="text-zinc-600 mb-6">Fixed broken cross-domain tracking and missing purchase events, restoring executive confidence in ROAS reporting.</p>
              <blockquote className="text-sm font-medium text-zinc-900 italic border-l-2 border-indigo-200 pl-4">
                "The team gave us access to the raw BigQuery data so we never have to worry about thresholding again."
              </blockquote>
            </div>
            
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
              <div className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-4">B2B SaaS</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">+40% Organic Value</h3>
              <p className="text-zinc-600 mb-6">Built a custom SQL attribution model in BigQuery that perfectly matched their 6-month sales cycle.</p>
              <blockquote className="text-sm font-medium text-zinc-900 italic border-l-2 border-emerald-200 pl-4">
                "We finally know which channels actually drive pipeline, not just what GA4's black box tells us."
              </blockquote>
            </div>
            
            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-4">Agency</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">10 Hrs Saved/Week</h3>
              <p className="text-zinc-600 mb-6">Aggregated GA4, Google Ads, and CRM data into a unified Looker Studio dashboard for real-time insights.</p>
              <blockquote className="text-sm font-medium text-zinc-900 italic border-l-2 border-amber-200 pl-4">
                "Blending our ad spend with GA4 behavior and CRM data has completely changed how we allocate budget."
              </blockquote>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/case-studies" className="inline-flex items-center justify-center px-6 py-3 bg-white text-zinc-900 border border-zinc-200 font-medium rounded-xl hover:bg-zinc-50 transition-colors">
              Read full case studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form Section */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
                Is your tracking costing you money?
              </h2>
              <p className="text-lg text-zinc-600 mb-8">
                Most companies are losing 20-30% of their ad spend due to broken tracking and poor attribution. Get a custom action plan to fix your data foundation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Identify revenue leaks in your funnel',
                  'Map out a robust GA4 & BigQuery architecture',
                  'Get clear next steps for implementation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 mr-3">
                      <Zap className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/5 rounded-3xl blur-xl"></div>
              <EvaluationForm locationContext="Home Mid-Page" className="relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Ready to scale with confidence?
          </h2>
          <p className="text-lg text-zinc-600 mb-10 max-w-2xl mx-auto">
            Stop making decisions based on broken data. Let's build an analytics foundation that actually drives growth.
          </p>
          <div className="flex justify-center">
            <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors text-lg">
              Get Revenue Diagnostic
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
