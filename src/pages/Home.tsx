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
      <section className="relative py-20 lg:py-32 bg-[#050505] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/space/1920/1080?blur=4')] opacity-20 mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                <span className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs">System Online</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-light tracking-tight text-white leading-[1.1] mb-6">
                Premium GA4 & BigQuery Consulting
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                Expert digital strategy and revenue measurement architecture for companies spending $30K+ per month on ads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors">
                  Get Revenue Diagnostic
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border border-white/20 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Decorative element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#5B8FB9] rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="relative h-full w-full bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-[#D4AF37]"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-32 bg-[#5B8FB9]"></div>
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="w-10 h-10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center bg-[#D4AF37]/5">
                      <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5B8FB9] font-mono text-sm tracking-widest">+124% ROAS</span>
                  </div>
                  <div className="space-y-6 relative z-10">
                    <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                      <div className="h-full bg-[#D4AF37] w-3/4"></div>
                    </div>
                    <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                      <div className="h-full bg-[#5B8FB9] w-1/2"></div>
                    </div>
                    <div className="h-[2px] bg-white/5 w-full overflow-hidden">
                      <div className="h-full bg-[#7A2021] w-5/6"></div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-[#5B8FB9]" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-[#5B8FB9]">Data Verified</p>
                        <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Attribution model active</p>
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
      <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-4">
              Trusted by data-driven teams for GA4 & Digital Strategy
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We've helped companies across industries fix their GA4 setup, build custom BigQuery models, and unlock true marketing ROI through expert digital strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
              <div className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
                E-Commerce
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">100% Data Alignment</h3>
              <p className="text-zinc-400 mb-6 font-light text-sm leading-relaxed">Fixed broken cross-domain tracking and missing purchase events, restoring executive confidence in ROAS reporting.</p>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 group-hover:border-[#D4AF37]/50 transition-colors">
                "The team gave us access to the raw BigQuery data so we never have to worry about thresholding again."
              </blockquote>
            </div>
            
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#5B8FB9]/30 transition-colors group">
              <div className="text-[#5B8FB9] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#5B8FB9]"></div>
                B2B SaaS
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">+40% Organic Value</h3>
              <p className="text-zinc-400 mb-6 font-light text-sm leading-relaxed">Built a custom SQL attribution model in BigQuery that perfectly matched their 6-month sales cycle.</p>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 group-hover:border-[#5B8FB9]/50 transition-colors">
                "We finally know which channels actually drive pipeline, not just what GA4's black box tells us."
              </blockquote>
            </div>
            
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#7A2021]/30 transition-colors group">
              <div className="text-[#7A2021] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#7A2021]"></div>
                Agency
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">10 Hrs Saved/Week</h3>
              <p className="text-zinc-400 mb-6 font-light text-sm leading-relaxed">Aggregated GA4, Google Ads, and CRM data into a unified Looker Studio dashboard for real-time insights.</p>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 group-hover:border-[#7A2021]/50 transition-colors">
                "Blending our ad spend with GA4 behavior and CRM data has completely changed how we allocate budget."
              </blockquote>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/case-studies" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border border-white/20 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-white/5 transition-colors">
              Read full case studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mid-page Lead Form Section */}
      <section className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#7A2021]"></div>
                <span className="font-mono text-[#7A2021] tracking-widest uppercase text-xs">Alert Status</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
                Is your tracking costing you money?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
                Most companies are losing 20-30% of their ad spend due to broken tracking and poor attribution. Get a custom action plan to fix your data foundation.
              </p>
              <ul className="space-y-6 mb-8">
                {[
                  'Identify revenue leaks in your funnel',
                  'Map out a robust GA4 & BigQuery architecture',
                  'Get clear next steps for implementation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#7A2021]/30 bg-[#7A2021]/5 flex items-center justify-center mt-0.5 mr-4 group-hover:bg-[#7A2021]/10 transition-colors">
                      <Zap className="w-3 h-3 text-[#7A2021]" />
                    </div>
                    <span className="text-zinc-300 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#7A2021]/5 rounded-3xl blur-2xl"></div>
              <div className="relative z-10 bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
                <EvaluationForm locationContext="Home Mid-Page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#5B8FB9]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Engage</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
            Ready to scale with confidence?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop making decisions based on broken data. Let's build an analytics foundation that actually drives growth.
          </p>
          <div className="flex justify-center">
            <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#050505]">
              Get Revenue Diagnostic
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
