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
      "name": "Lumetra",
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
    <div className="bg-white min-h-screen py-20">
      <SEO 
        title="Contact Us"
        description="Have a question about our services or want to discuss a custom project? Reach out to our team."
        canonicalUrl="https://www.lumetraanalytics.com/contact"
        schemaMarkup={schemaMarkup}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Have a question about our services or want to discuss a custom project? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900">Email</h3>
                    <p className="text-zinc-600">hello@lumetra.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900">Phone</h3>
                    <p className="text-zinc-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-zinc-900">Office</h3>
                    <p className="text-zinc-600">123 Analytics Way<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h3>
              <EvaluationForm locationContext="Contact Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
