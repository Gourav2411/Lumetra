import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Contact() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lumetra Analytics",
      "email": "hello@lumetra.com",
      "telephone": "+1-555-123-4567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Analytics Way",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94105",
        "addressCountry": "US"
      }
    }
  });

  return (
    <div className="bg-[#050505] min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Contact Our GA4 & BigQuery Consultants"
        description="Contact Lumetra Analytics for expert GA4 consulting, BigQuery architecture, and data-driven digital strategy services."
        keywords="contact GA4 consultant, hire BigQuery expert, digital strategy agency contact"
        canonicalUrl="https://www.lumetraanalytics.com/contact"
        schemaMarkup={schemaMarkup}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
            <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Communications</span>
            <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-6">
            Contact Our GA4 & Digital Strategy Experts
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to fix your tracking or build a custom BigQuery model? Reach out to our GA4 consulting team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-display font-light tracking-tight text-white mb-8 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-[#5B8FB9]/30 bg-[#5B8FB9]/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#5B8FB9]/10 transition-colors">
                    <Mail className="w-5 h-5 text-[#5B8FB9]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-[#5B8FB9] uppercase tracking-widest mb-1">Email</h3>
                    <p className="text-zinc-300 font-light">hello@lumetra.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-[#7A2021]/30 bg-[#7A2021]/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#7A2021]/10 transition-colors">
                    <Phone className="w-5 h-5 text-[#7A2021]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-[#7A2021] uppercase tracking-widest mb-1">Phone</h3>
                    <p className="text-zinc-300 font-light">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest mb-1">Office</h3>
                    <p className="text-zinc-300 font-light leading-relaxed">123 Analytics Way<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#D4AF37]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#5B8FB9]"></div>
              <h3 className="text-2xl font-display font-light tracking-tight text-white mb-8">Send us a message</h3>
              <EvaluationForm locationContext="Contact Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
