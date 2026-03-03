import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-zinc max-w-none text-zinc-600 space-y-6">
          <p>
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          <p>
            This is a placeholder privacy policy page. In a real application, this page would contain detailed information about how we collect, use, and protect your personal data in compliance with regulations like GDPR and CCPA.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a form, request a diagnostic, or communicate with us.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 mt-8 mb-4">3. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at hello@lumetra.com.
          </p>
        </div>
      </div>
    </div>
  );
}
