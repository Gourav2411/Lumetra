import React from 'react';
import { SEO } from '../components/SEO';

export function PrivacyPolicy() {
  const schemaMarkup = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Lumetra Analytics",
    "description": "Learn how Lumetra collects, uses, and protects your personal data.",
    "url": "https://www.lumetraanalytics.com/privacy-policy"
  });

  return (
    <div className="bg-[#050505] min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Privacy Policy"
        description="Learn how Lumetra collects, uses, and protects your personal data."
        canonicalUrl="https://www.lumetraanalytics.com/privacy-policy"
        schemaMarkup={schemaMarkup}
        keywords="privacy policy, data protection, GDPR, CCPA, Lumetra Analytics privacy"
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#5B8FB9]"></div>
          <span className="font-mono text-[#5B8FB9] tracking-widest uppercase text-xs">Security Protocol</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-12">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none text-zinc-300 space-y-8 font-light leading-relaxed">
          <p className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <div className="p-6 bg-[#0A0A0A] border border-white/10 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#D4AF37]"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#5B8FB9]"></div>
            <p className="text-sm">
              This is a placeholder privacy policy page. In a real application, this page would contain detailed information about how we collect, use, and protect your personal data in compliance with regulations like GDPR and CCPA.
            </p>
          </div>
          <h2 className="text-2xl font-display font-light text-white mt-12 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8FB9]"></span>
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a form, request a diagnostic, or communicate with us.
          </p>
          <h2 className="text-2xl font-display font-light text-white mt-12 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.
          </p>
          <h2 className="text-2xl font-display font-light text-white mt-12 mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A2021]"></span>
            3. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@lumetra.com" className="text-[#5B8FB9] hover:text-white transition-colors underline underline-offset-4">hello@lumetra.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
