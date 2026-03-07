import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Database, Zap, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Services() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Analytics Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Lumetra Analytics"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Analytics Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revenue Audit"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "1500",
            "maxPrice": "2500",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Measurement Build"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "4000",
            "maxPrice": "8000",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Analytics Retainer"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "5000",
            "maxPrice": "6500",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  });

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Services | Premium GA4 & BigQuery Consulting"
        description="We design, build, and manage custom data infrastructure for high-growth brands. Choose the engagement model that fits your current operational maturity."
        canonicalUrl="https://www.lumetraanalytics.com/services"
        schemaMarkup={schemaMarkup}
        keywords="GA4 consulting services, BigQuery architecture, Looker Studio dashboards, custom SQL attribution, analytics retainer"
      />
      
      {/* Hero Section */}
      <div className="bg-[#0A0A0A] border-b border-white/10 text-white py-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <span className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs">Capabilities</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-display font-light tracking-tight text-white mb-6">
            Engineered for Absolute Clarity.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            We design, build, and manage custom data infrastructure for high-growth brands. Choose the engagement model that fits your current operational maturity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 space-y-32">
        
        {/* Tier 1: Revenue Audit */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 flex items-center justify-center">
                <Search className="w-5 h-5 text-[#5B8FB9]" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-[#5B8FB9] block">Tier 1</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">$1,500 – $2,500 (One-Time)</span>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
              Revenue Audit
            </h2>
            <p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
              A surgical diagnostic of your current data infrastructure. We identify exactly where your tracking is failing, why your attribution is skewed, and how much ad spend is being wasted due to poor measurement.
            </p>
            <div className="mb-10">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">Scope of Work</h3>
              <ul className="space-y-4">
                {['Comprehensive GA4 health check', 'Identification of tracking gaps and duplicate events', 'Cross-domain and consent mode analysis', '1 actionable, prioritized implementation report'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#5B8FB9] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#5B8FB9] border border-[#5B8FB9]/50 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#5B8FB9]/10 transition-colors">
              Book an Audit
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#5B8FB9]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#5B8FB9]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              <Search className="w-32 h-32 text-[#5B8FB9]/40 relative z-10" />
            </div>
          </div>
        </div>

        {/* Tier 2: Measurement Build */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-[#D4AF37]"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-32 bg-[#D4AF37]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              <Database className="w-32 h-32 text-[#D4AF37]/40 relative z-10" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center">
                <Database className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-[#D4AF37] block">Tier 2</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">$4,000 – $8,000 (Project)</span>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
              Measurement Build
            </h2>
            <p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
              We tear down your broken setup and engineer a pristine, custom data pipeline. This is a complete overhaul of your analytics architecture, designed to give you a single, unshakeable source of truth.
            </p>
            <div className="mb-10">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">Scope of Work</h3>
              <ul className="space-y-4">
                {['Full GA4 configuration and event mapping', 'BigQuery data warehousing setup', 'Custom Looker Studio executive dashboard build', 'Custom SQL attribution modeling tailored to your sales cycle', '30-day implementation and QA sprint'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-[#D4AF37] border border-[#D4AF37]/50 font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#D4AF37]/10 transition-colors">
              Start Your Build
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Tier 3: Analytics Retainer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#7A2021]/30 bg-[#7A2021]/5 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#7A2021]" />
              </div>
              <div>
                <span className="font-mono text-xs tracking-widest uppercase text-[#7A2021] block">Primary Engagement</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">$5,000 – $6,500 / month (6-Month Minimum)</span>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-light tracking-tight text-white mb-6">
              Analytics Retainer
            </h2>
            <p className="text-lg text-zinc-400 mb-8 font-light leading-relaxed">
              Data infrastructure degrades. APIs change. Campaigns evolve. A static dashboard isn't enough when you are scaling ad spend. Our Analytics Retainer provides you with a dedicated, senior-level data engineering team to actively manage your measurement architecture. We don't just maintain your dashboards; we continuously refine your SQL attribution models, uncover new revenue opportunities, and provide the strategic oversight required to dominate your market.
            </p>
            <div className="mb-10">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-4">Scope of Work</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#7A2021] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Ongoing Measurement Oversight</strong>
                    <span className="text-zinc-400 font-light text-sm">Proactive monitoring of your GA4 and BigQuery pipelines to ensure 100% data integrity.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#7A2021] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Dashboard Evolution</strong>
                    <span className="text-zinc-400 font-light text-sm">Continuous updates to your Looker Studio dashboards as your KPIs and campaigns shift.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#7A2021] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Advanced SQL Modeling</strong>
                    <span className="text-zinc-400 font-light text-sm">Ongoing refinement of your custom attribution models to match changes in user behavior.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#7A2021] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Monthly Strategy Calls</strong>
                    <span className="text-zinc-400 font-light text-sm">Deep-dive sessions to translate raw data into actionable media buying strategies.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#7A2021] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-white font-medium block mb-1">Direct Slack Access</strong>
                    <span className="text-zinc-400 font-light text-sm">Priority access to our senior engineers for rapid troubleshooting and ad-hoc queries.</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/book-call" className="inline-flex items-center justify-center px-8 py-4 bg-[#7A2021] text-white font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#5a1618] transition-colors">
              Apply for a Retainer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7A2021]/20 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#7A2021]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#7A2021]"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
              <Zap className="w-32 h-32 text-[#7A2021]/40 relative z-10" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
