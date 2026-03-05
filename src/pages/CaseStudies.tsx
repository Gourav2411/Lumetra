import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EvaluationForm } from '../components/EvaluationForm';
import { SEO } from '../components/SEO';
import { 
  Database, 
  LineChart, 
  LayoutDashboard, 
  ShieldAlert, 
  ShieldCheck, 
  Smartphone 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CASE_STUDIES = [
  {
    id: 'ecommerce-discrepancies',
    industry: 'E-Commerce',
    navTitle: 'E-Commerce Data Fix',
    title: 'Resolving GA4 & CRM Data Discrepancies',
    icon: Database,
    colorTheme: 'indigo',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    challenge: "After migrating from Universal Analytics to GA4, a major e-commerce brand noticed a massive drop in reported conversions compared to their backend CRM. Stakeholders were losing trust in the data, and marketing teams couldn't accurately calculate ROAS.",
    implementation: [
      "Conducted a deep-dive data audit using GA4 DebugView and BigQuery raw data exports.",
      "Fixed cross-domain tracking: Users moving between the main site and a third-party checkout were triggering new sessions, losing the original traffic_source attribution.",
      "Fixed missing events: The purchase event was firing inconsistently due to a race condition in the data layer on the order confirmation page.",
      "Set up automated BigQuery SQL checks to monitor daily session_start to purchase ratios."
    ],
    result: "Achieved near 100% data alignment between GA4 and the backend CRM, restoring executive confidence in ROAS reporting and enabling accurate year-over-year analysis.",
    stats: [
      { value: '100%', label: 'Data Alignment' },
      { value: '0', label: 'Sampled Reports' }
    ],
    quote: "We were flying blind after the UA deprecation. The team not only fixed our tracking but gave us access to the raw BigQuery data so we never have to worry about thresholding again.",
    author: "Michael T.",
    role: "VP of E-Commerce"
  },
  {
    id: 'b2b-attribution',
    industry: 'B2B SaaS',
    navTitle: 'B2B Custom Attribution',
    title: 'Custom SQL Attribution Modeling',
    icon: LineChart,
    colorTheme: 'emerald',
    image: 'https://picsum.photos/seed/analytics/800/600',
    challenge: "A B2B SaaS company found GA4's default data-driven attribution confusing and incompatible with their 6-month sales cycle. They needed to know the true value of their top-of-funnel content, but GA4's standard reports were heavily skewed toward last-click interactions.",
    implementation: [
      "Bypassed the GA4 UI entirely and built a custom attribution engine in BigQuery.",
      "Used SQL window functions to isolate the absolute first touchpoint for every user.",
      "Joined GA4 session data with CRM lead status to track users from initial session_start all the way to a closed-won deal months later.",
      "Created a custom U-shaped attribution model that assigned 40% credit to the first touch, 40% to the lead-creation touch, and 20% to middle touches."
    ],
    result: "Revealed that Organic Search and specific blog content were driving 40% more top-of-funnel leads than previously credited, leading to a highly profitable reallocation of the marketing budget toward SEO.",
    stats: [
      { value: '+40%', label: 'Organic Value Uncovered' },
      { value: '100%', label: 'Custom Logic' }
    ],
    quote: "GA4's default attribution was a black box. Now, we have a custom SQL model that perfectly matches our long B2B sales cycle. We finally know which channels actually drive pipeline.",
    author: "Sarah J.",
    role: "CMO, TechFlow"
  },
  {
    id: 'agency-dashboards',
    industry: 'Agency / Multi-Brand',
    navTitle: 'Automated Dashboards',
    title: 'Automated Executive Dashboards',
    icon: LayoutDashboard,
    colorTheme: 'amber',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    challenge: "The executive team at a large agency found the native GA4 interface confusing and couldn't get a unified view of marketing performance across multiple platforms. Account managers were spending 10+ hours a week manually pulling data into spreadsheets.",
    implementation: [
      "Built a centralized data warehouse architecture by piping GA4 data into BigQuery using the native daily export.",
      "Wrote scheduled SQL queries to aggregate raw event data into lightweight daily_summary tables.",
      "Blended this aggregated GA4 data with Google Ads and Facebook Ads spend data to calculate real-time ROAS.",
      "Connected the optimized BigQuery tables to Looker Studio, avoiding the API quota limits and sampling issues common with direct GA4-to-Looker connections."
    ],
    result: "A fast, automated daily dashboard that eliminated manual reporting and provided executives with real-time, actionable insights across the entire marketing funnel.",
    stats: [
      { value: '10 hrs', label: 'Saved per week' },
      { value: '1', label: 'Unified Source of Truth' }
    ],
    quote: "We finally have a dashboard that tells the whole story. Blending our ad spend with GA4 behavior and CRM data in Looker Studio has completely changed how we allocate budget.",
    author: "David R.",
    role: "Director of Growth"
  },
  {
    id: 'publisher-thresholding',
    industry: 'Publisher / Media',
    navTitle: 'Overcoming Thresholding',
    title: 'Overcoming GA4 Data Thresholding',
    icon: ShieldAlert,
    colorTheme: 'rose',
    image: 'https://picsum.photos/seed/media/800/600',
    challenge: "A large media publisher enabled Google Signals to get demographic data, but immediately noticed that GA4 started applying 'data thresholding' to their reports. Granular data for niche articles and specific user segments was being hidden from the UI to protect user privacy.",
    implementation: [
      "Shifted all core reporting from the GA4 UI to BigQuery, where data is unsampled and un-thresholded.",
      "Wrote optimized SQL queries using partition pruning and approximation functions to handle millions of daily events efficiently.",
      "Recreated Universal Analytics' familiar metrics like Bounce Rate by calculating the time difference between the first and last event in each session.",
      "Extracted nested parameters using UNNEST to build custom content grouping reports that the GA4 UI was hiding."
    ],
    result: "Restored full access to granular, unsampled data. The editorial team could once again analyze the performance of niche content without privacy thresholding interference, while keeping BigQuery querying costs under $50/month.",
    stats: [
      { value: '100%', label: 'Data Visibility' },
      { value: '<$50', label: 'Monthly Query Cost' }
    ],
    quote: "Data thresholding was making our GA4 reports useless. Moving our analysis to BigQuery allowed us to see every single interaction without privacy filters hiding our low-volume content.",
    author: "Elena M.",
    role: "Head of Analytics"
  },
  {
    id: 'healthcare-consent',
    industry: 'Healthcare / Lead Gen',
    navTitle: 'Consent Mode & Privacy',
    title: 'Recovering Lost Data with Consent Mode',
    icon: ShieldCheck,
    colorTheme: 'cyan',
    image: 'https://picsum.photos/seed/medical/800/600',
    challenge: "Strict privacy regulations (GDPR/HIPAA) and new cookie consent banners caused a 40% drop in tracked conversions. The marketing team couldn't evaluate campaign performance because users who declined cookies were completely invisible in standard reports.",
    implementation: [
      "Implemented Google Consent Mode v2 via Google Tag Manager to respect user choices dynamically.",
      "Configured GA4 to collect cookieless, anonymous pings for users who declined tracking, ensuring no PII or identifiers were stored.",
      "Used BigQuery to join these anonymous pings with backend CRM data based on timestamp and campaign parameters.",
      "Leveraged GA4's behavioral modeling to fill the gaps in standard reports while using BigQuery for absolute truth."
    ],
    result: "Recovered visibility into 35% of 'lost' conversions through modeling and backend joining, allowing the team to optimize campaigns while maintaining strict 100% privacy compliance.",
    stats: [
      { value: '35%', label: 'Conversions Recovered' },
      { value: '100%', label: 'Privacy Compliant' }
    ],
    quote: "We thought privacy compliance meant sacrificing our analytics. The team showed us how to respect user choices while still getting the data we need to run our business.",
    author: "Dr. Sarah K.",
    role: "CMO, HealthPlus"
  },
  {
    id: 'fintech-cross-platform',
    industry: 'Fintech App',
    navTitle: 'Cross-Platform Journeys',
    title: 'Unifying Web & App User Journeys',
    icon: Smartphone,
    colorTheme: 'blue',
    image: 'https://picsum.photos/seed/finance/800/600',
    challenge: "Users researched financial products on the web but completed onboarding in the iOS/Android app. Universal Analytics treated these as separate users, breaking the acquisition funnel and making web content look unprofitable.",
    implementation: [
      "Set up a unified GA4 property combining Web and Firebase App data streams.",
      "Implemented a robust user_id strategy, passing a hashed identifier upon login across both platforms.",
      "Configured GA4's Reporting Identity to 'Blended' to stitch sessions using User-ID and Google Signals.",
      "Built Path Explorations in GA4 and custom BigQuery funnels to visualize the exact drop-off points between the web research phase and app install phase."
    ],
    result: "Identified that 60% of app conversions actually originated from web-based educational content. This completely shifted the acquisition strategy and increased overall ROAS by 25%.",
    stats: [
      { value: '60%', label: 'Cross-Device Match Rate' },
      { value: '+25%', label: 'Overall ROAS' }
    ],
    quote: "For the first time, we can actually see how our blog content drives app installs. Stitching the web and app data together was an absolute game changer for our growth strategy.",
    author: "James L.",
    role: "Head of Growth"
  }
];

const THEME_CLASSES: Record<string, { text: string, bg: string, border: string, icon: string }> = {
  indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'text-indigo-600' },
  emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-600' },
  amber: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-600' },
  rose: { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200', icon: 'text-rose-600' },
  cyan: { text: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200', icon: 'text-cyan-600' },
  blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
};

export function CaseStudies() {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the intersecting entry that takes up the most space or just the first one
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-20% 0px -60% 0px' 
      }
    );

    CASE_STUDIES.forEach((study) => {
      const el = document.getElementById(study.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Client Success Stories"
        description="See how we've helped companies fix their tracking, build custom attribution models, and unlock growth with GA4 and BigQuery."
        canonicalUrl="https://lumetranalytics.com/case-studies"
      />
      <div className="bg-zinc-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            See how we've helped companies fix their tracking, build custom attribution models, and unlock growth with GA4 and BigQuery.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Mobile Navigation (Horizontal Scroll) */}
          <div className="lg:hidden sticky top-16 z-40 bg-white/90 backdrop-blur-md py-4 -mx-4 px-4 border-b border-zinc-200 overflow-x-auto hide-scrollbar">
            <div className="flex gap-2">
              {CASE_STUDIES.map(study => (
                <button
                  key={study.id}
                  onClick={() => scrollTo(study.id)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors border",
                    activeId === study.id
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  )}
                >
                  {study.navTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4 px-4">
                Jump to Case Study
              </h3>
              <nav className="flex flex-col border-l border-zinc-200">
                {CASE_STUDIES.map(study => (
                  <button
                    key={study.id}
                    onClick={() => scrollTo(study.id)}
                    className={cn(
                      "text-left px-4 py-3 text-sm font-medium transition-colors border-l-2 -ml-px",
                      activeId === study.id
                        ? "border-indigo-600 text-indigo-600 bg-indigo-50/50"
                        : "border-transparent text-zinc-500 hover:text-zinc-900 hover:border-zinc-300"
                    )}
                  >
                    {study.navTitle}
                  </button>
                ))}
              </nav>
              
              <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <h4 className="font-semibold text-zinc-900 mb-2">Need similar results?</h4>
                <p className="text-sm text-zinc-600 mb-4">Let's audit your setup and find your revenue leaks.</p>
                <Link 
                  to="/diagnostic"
                  className="block w-full text-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get Diagnostic
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-32">
            {CASE_STUDIES.map((study, index) => {
              const Icon = study.icon;
              const theme = THEME_CLASSES[study.colorTheme];
              const isEven = index % 2 === 0;
              
              return (
                <div id={study.id} key={study.id} className="scroll-mt-32">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                    
                    {/* Text Content */}
                    <div className={cn("order-2", isEven ? "xl:order-1" : "xl:order-2")}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", theme.bg)}>
                          <Icon className={cn("w-6 h-6", theme.icon)} />
                        </div>
                        <span className={cn("font-bold tracking-wide uppercase text-sm", theme.icon)}>
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900 mb-6">
                        {study.title}
                      </h2>
                      
                      <div className="space-y-6 text-zinc-600 mb-8">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 mb-2">The Challenge</h3>
                          <p>{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 mb-2">Technical Implementation</h3>
                          <ul className="list-disc pl-5 space-y-2">
                            {study.implementation.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 mb-2">The Result</h3>
                          <p>{study.result}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 border-t border-zinc-100 pt-8">
                        {study.stats.map((stat, i) => (
                          <div key={i}>
                            <p className="text-4xl font-bold text-zinc-900 mb-1">{stat.value}</p>
                            <p className="text-sm font-medium text-zinc-500 uppercase tracking-wide">{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote Block */}
                    <div className={cn(
                      "order-1 rounded-3xl p-8 lg:p-12 border border-zinc-200 sticky top-32 relative overflow-hidden",
                      theme.bg,
                      isEven ? "xl:order-2" : "xl:order-1"
                    )}>
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 z-0 opacity-15 mix-blend-multiply pointer-events-none"
                        style={{ 
                          backgroundImage: `url(${study.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />

                      <blockquote className="relative z-10 text-xl lg:text-2xl font-medium text-zinc-900 italic mb-8 leading-relaxed">
                        "{study.quote}"
                      </blockquote>
                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-500 font-bold text-xl shadow-sm">
                          {study.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900 text-lg">{study.author}</p>
                          <p className="text-zinc-600">{study.role}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-50 py-24 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Ready to be our next success story?
          </h2>
          <p className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto">
            Get a custom action plan to fix your tracking, build accurate attribution models, and scale with confidence.
          </p>
          <div className="max-w-2xl mx-auto text-left">
            <EvaluationForm locationContext="Case Studies Footer" />
          </div>
        </div>
      </div>
    </div>
  );
}
