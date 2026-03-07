import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { Calendar, Clock, Video } from 'lucide-react';
import { SEO } from '../components/SEO';

export function BookCall() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Book a Consultation | GA4 & Digital Strategy Experts",
    "description": "Schedule a free consultation with our GA4 and BigQuery experts.",
    "url": "https://www.lumetraanalytics.com/book-call"
  });

  return (
    <div className="bg-[#050505] min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Book a Consultation | GA4 & Digital Strategy Experts"
        description="Schedule a free consultation with our GA4 and BigQuery experts. Discuss your digital strategy, tracking challenges, and how our consulting services can help."
        keywords="book GA4 consultation, hire GA4 expert, digital strategy consultation"
        canonicalUrl="https://www.lumetraanalytics.com/book-call"
        schemaMarkup={schemaMarkup}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Schedule Link</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6">
            Book a GA4 & Digital Strategy Consultation
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Schedule a free 30-minute consultation to discuss your tracking challenges and how our GA4 consulting services can help.
          </p>
        </div>

        <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
          <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-[#050505] border-r border-white/10 text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#5B8FB9] to-[#7A2021]"></div>
              <h2 className="text-2xl font-display font-light mb-10">Discovery Call</h2>
              <div className="space-y-8 font-mono text-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#5B8FB9]" />
                  </div>
                  <span className="text-zinc-300 uppercase tracking-widest">30 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 flex items-center justify-center">
                    <Video className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-zinc-300 uppercase tracking-widest">Google Meet</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#7A2021]/30 bg-[#7A2021]/5 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#7A2021]" />
                  </div>
                  <span className="text-zinc-300 uppercase tracking-widest">Choose your time</span>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm font-light text-zinc-400 italic leading-relaxed">
                  "They fixed our GA4 setup in a week and built a BigQuery dashboard that our execs actually use."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-display text-sm">
                    S
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Sarah J.</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">CMO at TechFlow</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 p-8 md:p-12">
              <h3 className="text-xl font-display font-light text-white mb-8">Tell us about your business</h3>
              <EvaluationForm locationContext="Book Call Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
