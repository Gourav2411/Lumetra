import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { ArrowRight, BarChart3, ShieldCheck, Zap, Database, LineChart, LayoutDashboard } from 'lucide-react';
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
        "description": "Premium GA4 consulting, BigQuery architecture, and digital strategy services for companies spending $10K+ per month on ads."
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
        title="Lumetra - Premium GA4 & BigQuery Consulting for High-Growth Brands"
        description="Transform raw data into scalable revenue. We engineer custom analytics, attribution systems, and Fractional CMO services for high-growth brands spending $10K+/month on ads."
        keywords="GA4 consulting, Digital Strategy, BigQuery Consulting, Best GA4 services, Google Analytics 4 expert, data analytics consulting, revenue intelligence"
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
                Scale to Millions in Months with Elite Analytics & Executive Leadership.
              </h1>
              <p className="text-lg text-zinc-400 mb-8 max-w-lg font-light leading-relaxed">
                We combine enterprise-grade data engineering with Fractional CMO strategy. For brands spending $10K+/month on ads, we eliminate wasted spend by fixing your tracking, then deploy executive leadership to turn that absolute data certainty into aggressive, multi-million dollar growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors">
                  Request a Revenue Diagnostic
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border border-white/20 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Graphic Flag: A clean, dark-mode visualization showing raw, chaotic data streams converging into a single, clear, upward-trending revenue chart. */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#5B8FB9] rounded-full blur-3xl opacity-10 animate-pulse"></div>
                <div className="relative h-full w-full bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-1 bg-[#D4AF37]"></div>
                  <div className="absolute bottom-0 left-0 w-1 h-32 bg-[#5B8FB9]"></div>
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div className="w-10 h-10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center bg-[#D4AF37]/5">
                      <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <span className="text-[#5B8FB9] font-mono text-sm tracking-widest">REVENUE CERTAINTY</span>
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

      {/* Trust Bar */}
      <section className="py-12 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-8">
            Trusted by data-driven growth teams at [Company Name], [Company Name], and [Company Name].
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            {/* Placeholder Logos */}
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
            <div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#7A2021]"></div>
                <span className="font-mono text-[#7A2021] tracking-widest uppercase text-xs">Alert Status</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
                Is your growth stalling due to broken data and lack of leadership?
              </h2>
              <p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
                Most companies lose 20–30% of their ad spend to broken tracking, while missing out on millions due to disjointed marketing strategies. When you scale past $10,000 a month in ad spend, you need more than just dashboards—you need absolute data certainty paired with executive Fractional CMO leadership to aggressively capture market share.
              </p>
              <div className="mt-8">
                <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#7A2021] border border-[#7A2021]/50 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#7A2021]/10 transition-colors">
                  Stop the Revenue Leaks
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
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

      {/* Services Overview */}
      <section className="py-24 bg-[#050505] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-4">
              The Infrastructure & Leadership to Scale to Millions.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just fix your tracking; we engineer a single source of truth and provide the executive strategy to dominate your market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group flex flex-col">
              <h3 className="text-xl font-display font-medium text-white mb-4">Revenue Audit</h3>
              <p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed flex-grow">
                Identify the exact data gaps and attribution errors skewing your ROAS.
              </p>
              <Link to="/services" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">
                Explore Audit <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 hover:border-[#5B8FB9]/30 transition-colors group flex flex-col">
              <h3 className="text-xl font-display font-medium text-white mb-4">Measurement Build</h3>
              <p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed flex-grow">
                Deploy a custom GA4, BigQuery, and Looker Studio architecture tailored to your sales cycle.
              </p>
              <Link to="/services" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#5B8FB9] group-hover:text-white transition-colors">
                Explore Build <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors group flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#D4AF37]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#5B8FB9]"></div>
              <div className="text-[#D4AF37] font-mono text-[10px] uppercase tracking-widest mb-4">Core Engagement</div>
              <h3 className="text-xl font-display font-medium text-white mb-4">Analytics Retainer</h3>
              <p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed flex-grow">
                Ongoing data engineering, custom SQL attribution, and strategic oversight to ensure your dashboards evolve with your campaigns.
              </p>
              <Link to="/services" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#D4AF37] group-hover:text-white transition-colors">
                View Retainer Details <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 hover:border-[#8B5CF6]/30 transition-colors group flex flex-col">
              <div className="text-[#8B5CF6] font-mono text-[10px] uppercase tracking-widest mb-4">Executive Advisory</div>
              <h3 className="text-xl font-display font-medium text-white mb-4">Fractional CMO</h3>
              <p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed flex-grow">
                Executive-level marketing leadership to align your data infrastructure with high-level growth strategies and team execution.
              </p>
              <Link to="/services" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-[#8B5CF6] group-hover:text-white transition-colors">
                Explore Advisory <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview Section */}
      <section className="py-24 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-4">
              Proven Revenue Intelligence.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors group flex flex-col">
              <div className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Database className="w-4 h-4" />
                E-Commerce
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">100% Data Alignment</h3>
              <div className="mb-6 space-y-4">
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Challenge:</strong> A major D2C brand lost visibility into ROAS due to broken cross-domain tracking and missing purchase events.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Solution:</strong> We bypassed GA4's UI, utilizing raw BigQuery exports to restore absolute data integrity.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Result:</strong> 100% alignment between GA4 and backend CRM data. Executive confidence restored.</p>
              </div>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 mb-8 flex-grow">
                "The team gave us access to the raw BigQuery data so we never have to worry about thresholding again."<br/><span className="text-xs font-mono uppercase tracking-widest mt-2 block">— VP of E-Commerce</span>
              </blockquote>
              <Link to="/case-studies" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                Read the Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#5B8FB9]/30 transition-colors group flex flex-col">
              <div className="text-[#5B8FB9] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <LineChart className="w-4 h-4" />
                B2B SaaS
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">+40% Organic Pipeline Uncovered</h3>
              <div className="mb-6 space-y-4">
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Challenge:</strong> GA4's default attribution was failing to measure a complex 6-month B2B sales cycle.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Solution:</strong> We built a custom SQL attribution model in BigQuery to track users from their first touchpoint to a closed-won deal.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Result:</strong> Revealed that organic channels drove 40% more pipeline than previously credited.</p>
              </div>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 mb-8 flex-grow">
                "We finally know which channels actually drive pipeline, not just what GA4's black box tells us."<br/><span className="text-xs font-mono uppercase tracking-widest mt-2 block">— CMO</span>
              </blockquote>
              <Link to="/case-studies" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                Read the Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 hover:border-[#7A2021]/30 transition-colors group flex flex-col">
              <div className="text-[#7A2021] font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Agency
              </div>
              <h3 className="text-xl font-display font-medium text-white mb-4">10 Hours Saved Weekly</h3>
              <div className="mb-6 space-y-4">
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Challenge:</strong> Account managers were wasting days manually pulling data into spreadsheets to calculate client ROAS.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Solution:</strong> We aggregated GA4, Google Ads, and CRM data into a unified, automated Looker Studio dashboard.</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed"><strong className="text-white font-medium">The Result:</strong> Real-time insights across the entire funnel, saving 10 hours per week in manual reporting.</p>
              </div>
              <blockquote className="text-sm font-light text-zinc-500 italic border-l border-white/10 pl-4 mb-8 flex-grow">
                "Blending our ad spend with GA4 behavior and CRM data has completely changed how we allocate budget."<br/><span className="text-xs font-mono uppercase tracking-widest mt-2 block">— Director of Growth</span>
              </blockquote>
              <Link to="/case-studies" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                Read the Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#5B8FB9]/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Engage</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
            Ready to add millions to your bottom line?
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop making six-figure decisions based on broken data and disjointed strategy. Let's build an analytics foundation and deploy the executive leadership that actually drives exponential growth.
          </p>
          <div className="flex justify-center">
            <Link to="/diagnostic" className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#050505]">
              Request a Revenue Diagnostic
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
