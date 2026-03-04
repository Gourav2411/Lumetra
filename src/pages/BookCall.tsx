import React from 'react';
import { EvaluationForm } from '../components/EvaluationForm';
import { Calendar, Clock, Video } from 'lucide-react';
import { SEO } from '../components/SEO';

export function BookCall() {
  return (
    <div className="bg-zinc-50 min-h-screen py-20">
      <SEO 
        title="Book a Call"
        description="Schedule a free 30-minute consultation to discuss your tracking challenges and how we can help you fix your GA4 setup."
        canonicalUrl="https://lumetraanalytics.com/book-call"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-6">
            Let's talk about your data.
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Schedule a free 30-minute consultation to discuss your tracking challenges and how we can help.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="bg-zinc-900 text-white p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8">Discovery Call</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-zinc-400" />
                  <span>30 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <Video className="w-5 h-5 text-zinc-400" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-zinc-400" />
                  <span>Choose your time</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-zinc-800">
                <p className="text-sm text-zinc-400">
                  "They fixed our GA4 setup in a week and built a BigQuery dashboard that our execs actually use."
                </p>
                <p className="text-sm font-medium mt-4">— Sarah J., CMO at TechFlow</p>
              </div>
            </div>
            <div className="col-span-2 p-8 md:p-12">
              <h3 className="text-xl font-semibold text-zinc-900 mb-6">Tell us about your business</h3>
              <EvaluationForm locationContext="Book Call Page" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
