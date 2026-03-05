import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Home() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.lumetraanalytics.com/#organization",
        "name": "Lumetra Analytics",
        "url": "https://www.lumetraanalytics.com",
        "logo": "https://www.lumetraanalytics.com/logo.png",
        "description": "Premium GA4 consulting, BigQuery architecture, and digital strategy services for companies spending $30K+ per month on ads."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.lumetraanalytics.com/#service",
        "name": "GA4 Consulting & Digital Strategy",
        "provider": {
          "@id": "https://www.lumetraanalytics.com/#organization"
        },
        "description": "Expert GA4 consulting, BigQuery implementation, and data-driven digital strategy services."
      }
    ]
  });

  return (
    <div className="flex flex-col">
      <SEO 
        title="Best GA4 Consulting & BigQuery Services"
        description="Top-rated GA4 consulting, BigQuery architecture, and digital strategy services. We build premium revenue measurement systems for companies spending $30K+/mo on ads."
        keywords="GA4 consulting, Digital Strategy, BigQuery Consulting, Best GA4 services, Google Analytics 4 expert, data analytics consulting"
        canonicalUrl="https://www.lumetraanalytics.com/"
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-black text-white overflow-hidden border-b-8 border-[#FF9900]">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/space/1920/1080?blur=4')] opacity-30 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-2 w-16 bg-[#CC6666] rounded-full"></div>
                <span className="font-mono text-[#CC6666] tracking-widest uppercase text-sm">System Online</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold tracking-widest uppercase text-[#FF9900] leading-[1.1] mb-6">
                Premium GA4 & BigQuery Consulting
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-lg font-mono">
                Expert digital strategy and revenue measurement architecture for companies spending $30K+ per month on ads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-3 bg-[#99CCFF] text-black font-display font-bold uppercase tracking-widest rounded-full hover:bg-[#FFCC66] transition-colors">
                  Get Revenue Diagnostic
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#FF9900] border-2 border-[#FF9900] font-display font-bold uppercase tracking-widest rounded-full hover:bg-[#FF9900] hover:text-black transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Decorative element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9900] to-[#CC6666] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative h-full w-full bg-[#111] border-2 border-[#FF9900] rounded-[3rem] rounded-tr-none p-8 shadow-2xl flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-8 bg-[#FF9900] rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-32 bg-[#CC6666] rounded-tr-full"></div>
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="w-12 h-12 bg-[#FF9900] rounded-full flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-[#99CCFF] font-mono font-bold text-xl">+124% ROAS</span>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div className="h-4 bg-[#333] rounded-full w-full overflow-hidden">
                      <div className="h-full bg-[#FF9900] w-3/4"></div>
                    </div>
                    <div className="h-4 bg-[#333] rounded-full w-full overflow-hidden">
                      <div className="h-full bg-[#99CCFF] w-1/2"></div>
                    </div>
                    <div className="h-4 bg-[#333] rounded-full w-full overflow-hidden">
                      <div className="h-full bg-[#CC6666] w-5/6"></div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t-2 border-[#333] relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#CC99CC] flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="font-display font-bold uppercase tracking-widest text-[#CC99CC]">Data Verified</p>
                        <p className="text-xs text-zinc-500 font-mono uppercase">Attribution model active</p>
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
      <section className="py-24 bg-[#0a0a0a] border-b-8 border-[#CC99CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-widest uppercase text-[#99CCFF] mb-4">
              Trusted by data-driven teams for GA4 & Digital Strategy
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-mono">
              We've helped companies across industries fix their GA4 setup, build custom BigQuery models, and unlock true marketing ROI through expert digital strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#111] rounded-[2rem] rounded-tl-none p-8 border-l-8 border-[#FF9900]">
              <div className="text-[#FF9900] font-mono font-bold text-sm uppercase tracking-widest mb-4">E-Commerce</div>
              <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-4">100% Data Alignment</h3>
              <p className="text-zinc-400 mb-6 font-mono text-sm">Fixed broken cross-domain tracking and missing purchase events, restoring executive confidence in ROAS reporting.</p>
              <blockquote className="text-sm font-mono text-[#99CCFF] italic border-l-2 border-[#99CCFF] pl-4">
                "The team gave us access to the raw BigQuery data so we never have to worry about thresholding again."
              </blockquote>
            </div>
            
            <div className="bg-[#111] rounded-[2rem] rounded-tl-none p-8 border-l-8 border-[#99CCFF]">
              <div className="text-[#99CCFF] font-mono font-bold text-sm uppercase tracking-widest mb-4">B2B SaaS</div>
              <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-4">+40% Organic Value</h3>
              <p className="text-zinc-400 mb-6 font-mono text-sm">Built a custom SQL attribution model in BigQuery that perfectly matched their 6-month sales cycle.</p>
              <blockquote className="text-sm font-mono text-[#CC99CC] italic border-l-2 border-[#CC99CC] pl-4">
                "We finally know which channels actually drive pipeline, not just what GA4's black box tells us."
              </blockquote>
            </div>
            
            <div className="bg-[#111] rounded-[2rem] rounded-tl-none p-8 border-l-8 border-[#CC6666]">
              <div className="text-[#CC6666] font-mono font-bold text-sm uppercase tracking-widest mb-4">Agency</div>
              <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-4">10 Hrs Saved/Week</h3>
              <p className="text-zinc-400 mb-6 font-mono text-sm">Aggregated GA4, Google Ads, and CRM data into a unified Looker Studio dashboard for real-time insights.</p>
              <blockquote className="text-sm font-mono text-[#FFCC66] italic border-l-2 border-[#FFCC66] pl-4">
                "Blending our ad spend with GA4 behavior and CRM data has completely changed how we allocate budget."
              </blockquote>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#99CCFF] border-2 border-[#99CCFF] font-display font-bold uppercase tracking-widest rounded-full hover:bg-[#99CCFF] hover:text-black transition-colors">
              Read full case studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form Section */}
      <section className="py-24 bg-black border-b-8 border-[#99CCFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold uppercase tracking-widest text-[#FFCC66] mb-6">
                Is your tracking costing you money?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 font-mono">
                Most companies are losing 20-30% of their ad spend due to broken tracking and poor attribution. Get a custom action plan to fix your data foundation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Identify revenue leaks in your funnel',
                  'Map out a robust GA4 & BigQuery architecture',
                  'Get clear next steps for implementation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#CC6666] flex items-center justify-center mt-0.5 mr-3">
                      <Zap className="w-3.5 h-3.5 text-black" />
                    </div>
                    <span className="text-zinc-300 font-mono">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FF9900]/10 rounded-[3rem] blur-xl"></div>
              <div className="relative z-10 bg-[#111] p-8 rounded-[3rem] rounded-tr-none border-2 border-[#FF9900]">
                <EvaluationForm locationContext="Home Mid-Page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold uppercase tracking-widest text-[#CC99CC] mb-6">
            Ready to scale with confidence?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-mono">
            Stop making decisions based on broken data. Let's build an analytics foundation that actually drives growth.
          </p>
          <div className="flex justify-center">
            <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF9900] text-black font-display font-bold uppercase tracking-widest rounded-full hover:bg-[#FFCC66] transition-colors text-lg">
              Get Revenue Diagnostic
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
