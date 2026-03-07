import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Loader2, Send, AlertCircle, Key, Database, Cpu, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROVIDERS = ['Gemini', 'OpenAI', 'Anthropic'];

const MODELS = {
  'Gemini': [
    'gemini-3.1-pro-preview', 
    'gemini-3.1-flash-preview', 
    'gemini-3-pro-preview', 
    'gemini-3-flash-preview', 
    'gemini-2.5-pro', 
    'gemini-2.5-flash'
  ],
  'OpenAI': [
    'gpt-5.2',
    'gpt-5.2-turbo',
    'gpt-5',
    'gpt-4o', 
    'o3-preview', 
    'o3-mini'
  ],
  'Anthropic': [
    'claude-4.6-sonnet',
    'claude-4.5-opus',
    'claude-4-haiku',
    'claude-3-7-sonnet-20250219'
  ]
};

export function DigitalStrategyTool() {
  const [provider, setProvider] = useState('Gemini');
  const [model, setModel] = useState(MODELS['Gemini'][0]);
  const [apiKey, setApiKey] = useState('');
  const [ga4Key, setGa4Key] = useState('');
  const [inputData, setInputData] = useState('');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newProvider = e.target.value;
    setProvider(newProvider);
    setModel(MODELS[newProvider as keyof typeof MODELS][0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      setError('Please provide an API key for the selected provider.');
      return;
    }
    if (!query && !inputData) {
      setError('Please provide some data or a query to analyze.');
      return;
    }

    setError('');
    setIsLoading(true);
    setResponse('');

    const systemPrompt = `You are a world-class Google Analytics 4 (GA4) implementation expert and digital strategy consultant. 
Your goal is to provide the best solutions for GA4 implementation, architecture, and analysis of GA4 data.
If the user provides a GA4 Key/Property ID, acknowledge it and frame your advice around their specific property context if applicable.
Analyze the provided data and answer the user's query with actionable, technical, and strategic advice.`;

    const userPrompt = `
${ga4Key ? `GA4 Property ID / Key: ${ga4Key}\n` : ''}
${inputData ? `Data to analyze:\n${inputData}\n\n` : ''}
Query: ${query}
`;

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider,
          model,
          systemPrompt,
          userPrompt,
          apiKey
        })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate strategy.');
      }

      setResponse(data.text || 'No response generated.');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while generating the strategy.');
    } finally {
      setIsLoading(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Digital Strategy AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Generate expert GA4 implementation plans and analyze your data using top AI models including Gemini, OpenAI, and Anthropic.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "GA4 implementation strategy generation",
      "Data analysis using advanced AI models",
      "Support for Gemini, OpenAI, and Anthropic models",
      "Custom API key integration"
    ]
  };

  const getProviderInfo = () => {
    switch (provider) {
      case 'Gemini': return { url: 'https://aistudio.google.com/app/apikey', text: 'Google AI Studio' };
      case 'OpenAI': return { url: 'https://platform.openai.com/api-keys', text: 'OpenAI Dashboard' };
      case 'Anthropic': return { url: 'https://console.anthropic.com/settings/keys', text: 'Anthropic Console' };
      default: return { url: '#', text: '' };
    }
  };

  const providerInfo = getProviderInfo();

  return (
    <div className="bg-[#050505] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
      <SEO 
        title="Digital Strategy AI Tool | Lumetra"
        description="Generate expert GA4 implementation plans and analyze your data using top AI models."
        canonicalUrl="https://www.lumetraanalytics.com/tools/digital-strategy"
        schemaMarkup={JSON.stringify(schema)}
        keywords="digital strategy AI, GA4 implementation plan, AI analytics tool, BigQuery AI, Lumetra tools"
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8">
          <Link to="/tools" className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <span className="font-mono text-[#D4AF37] tracking-widest uppercase text-xs">AI Interface</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-display font-light tracking-tight text-white mb-12">
          Digital Strategy AI
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#D4AF37]"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#5B8FB9]"></div>
              
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#5B8FB9]" />
                Model Config
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2">AI Provider</label>
                  <select
                    value={provider}
                    onChange={handleProviderChange}
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm"
                  >
                    {PROVIDERS.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2">Model</label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm"
                  >
                    {MODELS[provider as keyof typeof MODELS].map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2 flex items-center gap-2">
                    <Key className="w-3 h-3" />
                    {provider} API Key
                  </label>
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder={`Enter your ${provider} API Key`}
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm"
                  />
                  <div className="mt-3 p-3 bg-white/5 border border-white/10 rounded-lg">
                    <p className="text-[10px] text-zinc-400 font-mono leading-relaxed">
                      Don't have a key? Get one from the <a href={providerInfo.url} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">{providerInfo.text}</a>.
                    </p>
                    <p className="text-[10px] text-zinc-500 font-mono leading-relaxed mt-1">
                      Your key is sent securely to our backend to process this request and is <strong>never stored</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 p-6 relative overflow-hidden">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white mb-6 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#7A2021]" />
                Context
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2">GA4 Property ID / Key</label>
                  <input
                    type="text"
                    value={ga4Key}
                    onChange={(e) => setGa4Key(e.target.value)}
                    placeholder="e.g. 123456789"
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Interaction Panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 p-6 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-[1px] h-32 bg-[#D4AF37]"></div>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2">Data to Analyze (Optional)</label>
                  <textarea
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    placeholder="Paste CSV data, JSON, or metrics here..."
                    rows={4}
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm resize-none"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#5B8FB9] mb-2">Strategy Query</label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. How should I structure my GA4 events for a B2B SaaS funnel?"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#050505] text-white border border-white/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-colors font-mono text-sm resize-none flex-1"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-[#7A2021]/10 border border-[#7A2021]/30 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#7A2021] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#7A2021] font-mono">{error}</p>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#D4AF37] text-black font-mono text-sm uppercase tracking-widest rounded-full hover:bg-[#C5A059] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Generate Strategy
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Response Area */}
        {response && (
          <div className="mt-8 bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-[#5B8FB9]"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-32 bg-[#D4AF37]"></div>
            
            <h3 className="text-sm font-mono uppercase tracking-widest text-[#5B8FB9] mb-6 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              AI Strategy Output
            </h3>
            
            <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:font-light prose-headings:text-white prose-p:text-zinc-300 prose-p:font-light prose-p:leading-relaxed prose-a:text-[#5B8FB9] prose-strong:text-white prose-code:text-[#D4AF37] prose-code:bg-[#D4AF37]/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#050505] prose-pre:border prose-pre:border-white/10">
              <div className="markdown-body">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
