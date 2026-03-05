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
    <div className="bg-black min-h-screen py-20">
      <SEO 
        title="Contact Our GA4 & BigQuery Consultants"
        description="Contact Lumetra Analytics for expert GA4 consulting, BigQuery architecture, and data-driven digital strategy services."
        keywords="contact GA4 consultant, hire BigQuery expert, digital strategy agency contact"
        canonicalUrl="https://www.lumetraanalytics.com/contact"
        schemaMarkup={schemaMarkup}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold uppercase tracking-widest text-[#FF9900] mb-6">
            Contact Our GA4 & Digital Strategy Experts
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-mono">
            Ready to fix your tracking or build a custom BigQuery model? Reach out to our GA4 consulting team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase tracking-widest text-[#99CCFF] mb-6">Contact Information</h2>
              <div className="space-y-6 font-mono">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FF9900]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest">Email</h3>
                    <p className="text-zinc-400">hello@lumetra.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#CC6666]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest">Phone</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#CC99CC]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-widest">Office</h3>
                    <p className="text-zinc-400">123 Analytics Way<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-[#111] p-8 rounded-[3rem] rounded-tr-none border-2 border-[#FF9900]">
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-[#99CCFF] mb-6">Send us a message</h3>
              <EvaluationForm locationContext="Contact Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
