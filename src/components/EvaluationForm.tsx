import React, { useState, useEffect, FormEvent } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { trackEvent } from '../utils/analytics';
import { config } from '../config';
import { CheckCircle2, Download, ArrowRight, Loader2, ChevronRight, ChevronLeft } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BUSINESS_TYPE_OPTIONS = ['D2C', 'B2B SaaS', 'Agency', 'Marketplace', 'Other'];
const REVENUE_OPTIONS = ['<1M', '1M–5M', '5M–20M', '20M–100M', '100M+'];
const AD_SPEND_OPTIONS = ['<10K', '10K–30K', '30K–75K', '75K–150K', '150K+'];
const AD_CHANNELS = ['Meta', 'Google', 'YouTube', 'LinkedIn', 'TikTok', 'Amazon'];
const SALES_CYCLE_OPTIONS = ['Instant ecommerce', '7–14 days', '30–60 days', '60–90 days', '90+ days'];
const YES_NO_SURE = ['Yes', 'No', 'Not Sure'];
const YES_NO_PARTIAL = ['Yes', 'No', 'Partially'];
const BUDGET_OPTIONS = ['<2K', '2K–5K', '5K–8K', '8K–15K', '15K+'];
const TIMELINE_OPTIONS = ['Immediately', 'Within 30 days', 'Within 90 days', 'Just exploring'];

interface EvaluationFormProps {
  className?: string;
  locationContext?: string;
}

export function EvaluationForm({ className, locationContext = 'General' }: EvaluationFormProps) {
  const location = useLocation();
  const [mountedAt, setMountedAt] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [qualificationTier, setQualificationTier] = useState<string>('');
  
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    company: '',
    website: '',
    businessType: '',
    revenueRange: '',
    // Step 2
    adSpend: '',
    adChannels: [] as string[],
    salesCycle: '',
    // Step 3
    exportBigQuery: '',
    offlineConversions: '',
    crmIntegrated: '',
    measurementChallenge: '',
    // Step 4
    budget: '',
    timeline: '',
    // Anti-spam
    honeypot: '',
  });

  useEffect(() => {
    setMountedAt(Date.now());
    const savedData = localStorage.getItem('lumetra_evaluation_progress');
    const savedStep = localStorage.getItem('lumetra_evaluation_step');
    
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Failed to parse saved form data');
      }
    }
    
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (!isNaN(step) && step >= 1 && step <= 4) {
        setCurrentStep(step);
      }
    }
  }, []);

  useEffect(() => {
    // Don't save honeypot
    const { honeypot, ...toSave } = formData;
    localStorage.setItem('lumetra_evaluation_progress', JSON.stringify(toSave));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem('lumetra_evaluation_step', currentStep.toString());
  }, [currentStep]);

  const handleChannelToggle = (channel: string) => {
    setFormData(prev => {
      if (prev.adChannels.includes(channel)) {
        return { ...prev, adChannels: prev.adChannels.filter(c => c !== channel) };
      }
      return { ...prev, adChannels: [...prev.adChannels, channel] };
    });
  };

  const calculateScore = () => {
    let score = 0;
    
    // Ad spend 30K+ = +20
    if (['30K–75K', '75K–150K', '150K+'].includes(formData.adSpend)) score += 20;
    
    // Budget 5K+ = +30
    if (['5K–8K', '8K–15K', '15K+'].includes(formData.budget)) score += 30;
    
    // BigQuery usage = +10
    if (formData.exportBigQuery === 'Yes') score += 10;
    
    // 30–90 day sales cycle = +10
    if (['30–60 days', '60–90 days'].includes(formData.salesCycle)) score += 10;
    
    // Revenue 5M+ = +20
    if (['5M–20M', '20M–100M', '100M+'].includes(formData.revenueRange)) score += 20;
    
    return score;
  };

  const getQualificationTier = (score: number) => {
    if (score >= 70) return 'Priority Candidate';
    if (score >= 40) return 'Potential Fit';
    return 'Not Ideal Fit';
  };

  const checkRateLimit = () => {
    const submissionsStr = localStorage.getItem('lumetra_submissions');
    if (!submissionsStr) return true;
    
    try {
      const submissions: number[] = JSON.parse(submissionsStr);
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      const recentSubmissions = submissions.filter(time => time > oneHourAgo);
      return recentSubmissions.length < 3;
    } catch {
      return true;
    }
  };

  const recordSubmission = () => {
    const submissionsStr = localStorage.getItem('lumetra_submissions');
    let submissions: number[] = [];
    if (submissionsStr) {
      try {
        submissions = JSON.parse(submissionsStr);
      } catch {}
    }
    submissions.push(Date.now());
    localStorage.setItem('lumetra_submissions', JSON.stringify(submissions));
    localStorage.removeItem('lumetra_evaluation_progress');
    localStorage.removeItem('lumetra_evaluation_step');
  };

  const validateUrl = (url: string) => {
    if (!url) return false;
    // Allow http/https or just domain.tld
    const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return pattern.test(url);
  };

  const isWebsiteInvalid = formData.website.length > 0 && !validateUrl(formData.website);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = 'Please enter a valid work email address';
          isValid = false;
        }
      }
      if (!formData.company.trim()) {
        newErrors.company = 'Company name is required';
        isValid = false;
      }
      if (!formData.website.trim()) {
        newErrors.website = 'Website URL is required';
        isValid = false;
      } else if (isWebsiteInvalid) {
        newErrors.website = 'Please enter a valid website URL (e.g., lumetra.com)';
        isValid = false;
      }
      if (!formData.businessType) {
        newErrors.businessType = 'Please select a business type';
        isValid = false;
      }
      if (!formData.revenueRange) {
        newErrors.revenueRange = 'Please select a revenue range';
        isValid = false;
      }
    }
    
    if (step === 2) {
      if (!formData.adSpend) {
        newErrors.adSpend = 'Please select your monthly ad spend';
        isValid = false;
      }
      if (formData.adChannels.length === 0) {
        newErrors.adChannels = 'Please select at least one ad channel';
        isValid = false;
      }
      if (!formData.salesCycle) {
        newErrors.salesCycle = 'Please select your average sales cycle';
        isValid = false;
      }
    }
    
    if (step === 3) {
      if (!formData.exportBigQuery) {
        newErrors.exportBigQuery = 'Please indicate if you use BigQuery';
        isValid = false;
      }
      if (!formData.offlineConversions) {
        newErrors.offlineConversions = 'Please indicate if you use offline conversions';
        isValid = false;
      }
      if (!formData.crmIntegrated) {
        newErrors.crmIntegrated = 'Please indicate if your CRM is integrated';
        isValid = false;
      }
    }
    
    if (step === 4) {
      if (!formData.budget) {
        newErrors.budget = 'Please select a budget range';
        isValid = false;
      }
      if (!formData.timeline) {
        newErrors.timeline = 'Please select a timeline';
        isValid = false;
      }
    }

    setErrors(newErrors);
    
    if (!isValid) {
      // Show the first error message in the toast
      const firstErrorKey = Object.keys(newErrors)[0];
      const firstErrorMessage = newErrors[firstErrorKey];
      toast.error(firstErrorMessage || 'Please fix the errors before continuing');
      
      // If the error is not in the current viewport, scroll to it? 
      // The form is not that long, but good UX.
      // We already scroll to top on step change, but here we stay on step.
    }
    
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: document.getElementById('evaluation-form')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
    window.scrollTo({ top: document.getElementById('evaluation-form')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;

    if (formData.honeypot) return;

    if (Date.now() - mountedAt < 2000) {
      toast.error('Please take a moment to review your information.');
      return;
    }

    if (!checkRateLimit()) {
      toast.error('Too many recent submissions. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    
    const score = calculateScore();
    const tier = getQualificationTier(score);
    setQualificationTier(tier);

    const payload = {
      timestamp: new Date().toISOString(),
      score,
      qualificationTier: tier,
      ...formData,
      adChannels: formData.adChannels.join(', '),
      sourcePage: location.pathname,
      fullUrl: window.location.href,
      userAgent: navigator.userAgent,
    };

    try {
      let success = false;
      
      if (config.USE_BACKEND_API) {
        const res = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) success = true;
      } else if (config.GOOGLE_SHEETS_WEBAPP_URL) {
        await fetch(config.GOOGLE_SHEETS_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        });
        success = true;
      } else {
        console.log('No backend configured. Logging payload:', payload);
        await new Promise(resolve => setTimeout(resolve, 1000));
        success = true;
      }

      if (success) {
        setIsSuccess(true);
        recordSubmission();
        toast.success('Evaluation submitted successfully!');
        
        trackEvent('evaluation_form_submit', {
          page: location.pathname,
          qualification_tier: tier,
          budget_range_selected: formData.budget,
          score: score
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={cn("bg-white p-6 sm:p-8 lg:p-12 rounded-2xl shadow-sm border border-zinc-200 text-center", className)}>
        <div className="mx-auto w-16 h-16 bg-zinc-900 text-white rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        {qualificationTier === 'Priority Candidate' && (
          <>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Thank you.</h3>
            <p className="text-lg text-zinc-600 mb-8 max-w-lg mx-auto">
              Based on your responses, your business appears aligned with Lumetra's revenue architecture framework. We will review your submission and reach out within 48 hours.
            </p>
          </>
        )}
        
        {qualificationTier === 'Potential Fit' && (
          <>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Thank you.</h3>
            <p className="text-lg text-zinc-600 mb-8 max-w-lg mx-auto">
              We will review your submission and determine whether a strategy call makes sense.
            </p>
          </>
        )}
        
        {qualificationTier === 'Not Ideal Fit' && (
          <>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Thank you for applying.</h3>
            <p className="text-lg text-zinc-600 mb-8 max-w-lg mx-auto">
              At this stage, Lumetra focuses on companies operating at higher revenue or ad spend thresholds. We will send you helpful resources.
            </p>
          </>
        )}
        
        <div className="space-y-4 flex flex-col items-center pt-8 border-t border-zinc-100 w-full">
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
          <a 
            href={config.LEAD_MAGNET_URL}
            download
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 font-medium rounded-xl hover:bg-zinc-50 transition-colors text-center"
          >
            <Download className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>Download Free GA4 Audit Checklist</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="evaluation-form" className={cn("bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden", className)}>
      <div className="bg-zinc-900 px-6 py-8 sm:px-8 sm:py-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">Request a Revenue Intelligence Evaluation</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          We offer a complimentary measurement audit. If we believe Lumetra can create meaningful impact, we will invite you to a strategy call.
        </p>
        <p className="text-sm text-zinc-500 mt-4 font-medium tracking-wide uppercase">
          We work with a limited number of clients each quarter.
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-12">
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-zinc-500 mb-3">
            <span>Step {currentStep} of 4</span>
            <span>{currentStep === 1 ? 'Company Profile' : currentStep === 2 ? 'Ad & Revenue Scale' : currentStep === 3 ? 'Measurement Maturity' : 'Investment Readiness'}</span>
          </div>
          <div className="w-full bg-zinc-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-zinc-900 h-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8 text-center">
          <p className="text-sm text-zinc-500 italic">
            Lumetra designs revenue-grade measurement systems. We evaluate each engagement carefully to ensure measurable impact.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="hidden" aria-hidden="true">
            <input type="text" tabIndex={-1} value={formData.honeypot} onChange={e => setFormData({...formData, honeypot: e.target.value})} />
          </div>

          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Full Name</label>
                  <input
                    type="text"
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.fullName ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.fullName}
                    onChange={e => {
                      setFormData({...formData, fullName: e.target.value});
                      if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                    }}
                  />
                  {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Work Email</label>
                  <input
                    type="email"
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.email}
                    onChange={e => {
                      setFormData({...formData, email: e.target.value});
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Company Name</label>
                  <input
                    type="text"
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.company ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.company}
                    onChange={e => {
                      setFormData({...formData, company: e.target.value});
                      if (errors.company) setErrors(prev => ({ ...prev, company: '' }));
                    }}
                  />
                  {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Website URL</label>
                  <input
                    type="url"
                    placeholder="https://"
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.website || isWebsiteInvalid ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.website}
                    onChange={e => {
                      setFormData({...formData, website: e.target.value});
                      if (errors.website) setErrors(prev => ({ ...prev, website: '' }));
                    }}
                  />
                  {(errors.website || isWebsiteInvalid) && (
                    <p className="text-sm text-red-600 mt-1">{errors.website || 'Please enter a valid website URL'}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Business Type</label>
                  <select
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.businessType ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.businessType}
                    onChange={e => {
                      setFormData({...formData, businessType: e.target.value});
                      if (errors.businessType) setErrors(prev => ({ ...prev, businessType: '' }));
                    }}
                  >
                    <option value="" disabled>Select type</option>
                    {BUSINESS_TYPE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.businessType && <p className="text-sm text-red-600 mt-1">{errors.businessType}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Annual Revenue Range</label>
                  <select
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.revenueRange ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.revenueRange}
                    onChange={e => {
                      setFormData({...formData, revenueRange: e.target.value});
                      if (errors.revenueRange) setErrors(prev => ({ ...prev, revenueRange: '' }));
                    }}
                  >
                    <option value="" disabled>Select range</option>
                    {REVENUE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.revenueRange && <p className="text-sm text-red-600 mt-1">{errors.revenueRange}</p>}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Monthly Ad Spend</label>
                  <select
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.adSpend ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.adSpend}
                    onChange={e => {
                      setFormData({...formData, adSpend: e.target.value});
                      if (errors.adSpend) setErrors(prev => ({ ...prev, adSpend: '' }));
                    }}
                  >
                    <option value="" disabled>Select spend</option>
                    {AD_SPEND_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.adSpend && <p className="text-sm text-red-600 mt-1">{errors.adSpend}</p>}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-zinc-900">Average Sales Cycle</label>
                  <select
                    className={cn(
                      "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                      errors.salesCycle ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                    )}
                    value={formData.salesCycle}
                    onChange={e => {
                      setFormData({...formData, salesCycle: e.target.value});
                      if (errors.salesCycle) setErrors(prev => ({ ...prev, salesCycle: '' }));
                    }}
                  >
                    <option value="" disabled>Select cycle</option>
                    {SALES_CYCLE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  {errors.salesCycle && <p className="text-sm text-red-600 mt-1">{errors.salesCycle}</p>}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">Primary Ad Channels</label>
                <div className="flex flex-wrap gap-3">
                  {AD_CHANNELS.map(channel => {
                    const isSelected = formData.adChannels.includes(channel);
                    return (
                      <button
                        key={channel}
                        type="button"
                        onClick={() => {
                          handleChannelToggle(channel);
                          if (errors.adChannels) setErrors(prev => ({ ...prev, adChannels: '' }));
                        }}
                        className={cn(
                          "px-4 py-2 text-sm font-medium rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
                          isSelected 
                            ? "bg-zinc-900 border-zinc-900 text-white" 
                            : errors.adChannels
                              ? "bg-white border-red-300 text-zinc-600 hover:border-red-400"
                              : "bg-white border-zinc-200 text-zinc-600 hover:border-zinc-400"
                        )}
                      >
                        {channel}
                      </button>
                    );
                  })}
                </div>
                {errors.adChannels && <p className="text-sm text-red-600 mt-1">{errors.adChannels}</p>}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">Do you export GA4 data to BigQuery?</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {YES_NO_SURE.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, exportBigQuery: opt});
                        if (errors.exportBigQuery) setErrors(prev => ({ ...prev, exportBigQuery: '' }));
                      }}
                      className={cn(
                        "flex-1 py-3 text-sm font-medium rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
                        formData.exportBigQuery === opt 
                          ? "bg-zinc-900 border-zinc-900 text-white" 
                          : errors.exportBigQuery
                            ? "bg-red-50 border-red-300 text-red-700 hover:border-red-400"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.exportBigQuery && <p className="text-sm text-red-600 mt-1">{errors.exportBigQuery}</p>}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">Do you use offline conversion imports?</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {YES_NO_SURE.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, offlineConversions: opt});
                        if (errors.offlineConversions) setErrors(prev => ({ ...prev, offlineConversions: '' }));
                      }}
                      className={cn(
                        "flex-1 py-3 text-sm font-medium rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
                        formData.offlineConversions === opt 
                          ? "bg-zinc-900 border-zinc-900 text-white" 
                          : errors.offlineConversions
                            ? "bg-red-50 border-red-300 text-red-700 hover:border-red-400"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.offlineConversions && <p className="text-sm text-red-600 mt-1">{errors.offlineConversions}</p>}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">Is your CRM integrated with revenue reporting?</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {YES_NO_PARTIAL.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, crmIntegrated: opt});
                        if (errors.crmIntegrated) setErrors(prev => ({ ...prev, crmIntegrated: '' }));
                      }}
                      className={cn(
                        "flex-1 py-3 text-sm font-medium rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
                        formData.crmIntegrated === opt 
                          ? "bg-zinc-900 border-zinc-900 text-white" 
                          : errors.crmIntegrated
                            ? "bg-red-50 border-red-300 text-red-700 hover:border-red-400"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.crmIntegrated && <p className="text-sm text-red-600 mt-1">{errors.crmIntegrated}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-900">Biggest measurement challenge</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors resize-none"
                  value={formData.measurementChallenge}
                  onChange={e => setFormData({...formData, measurementChallenge: e.target.value})}
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-900">Monthly Budget Willing to Allocate for Revenue Intelligence</label>
                <select
                  className={cn(
                    "w-full px-4 py-3 bg-zinc-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900 transition-colors",
                    errors.budget ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-zinc-200"
                  )}
                  value={formData.budget}
                  onChange={e => {
                    setFormData({...formData, budget: e.target.value});
                    if (errors.budget) setErrors(prev => ({ ...prev, budget: '' }));
                  }}
                >
                  <option value="" disabled>Select budget</option>
                  {BUDGET_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget}</p>}
                <p className="text-xs text-zinc-500 mt-2">Lumetra engagements typically start at 5K per month.</p>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-zinc-900">Timeline to start</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TIMELINE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setFormData({...formData, timeline: opt});
                        if (errors.timeline) setErrors(prev => ({ ...prev, timeline: '' }));
                      }}
                      className={cn(
                        "py-3 px-4 text-sm font-medium rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2",
                        formData.timeline === opt 
                          ? "bg-zinc-900 border-zinc-900 text-white" 
                          : errors.timeline
                            ? "bg-red-50 border-red-300 text-red-700 hover:border-red-400"
                            : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.timeline && <p className="text-sm text-red-600 mt-1">{errors.timeline}</p>}
              </div>
            </div>
          )}

          <div className="pt-8 border-t border-zinc-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 rounded-lg"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
            ) : (
              <div className="hidden sm:block"></div> // Spacer
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Evaluation'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
