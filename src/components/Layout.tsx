import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Book a Call', path: '/book-call' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">GrowthAnalytics</span>
            </Link>
            
            <nav className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-indigo-600' 
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/diagnostic" 
                className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Get Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-indigo-600 text-white rounded flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg tracking-tight">GrowthAnalytics</span>
              </Link>
              <p className="text-zinc-500 text-sm max-w-xs">
                Helping modern businesses fix tracking, improve attribution, and scale revenue with confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link to="/diagnostic" className="hover:text-indigo-600 transition-colors">Revenue Leak Diagnostic</Link></li>
                <li><Link to="/case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</Link></li>
                <li><Link to="/" className="hover:text-indigo-600 transition-colors">BigQuery Modeling</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/book-call" className="hover:text-indigo-600 transition-colors">Book a Call</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} GrowthAnalytics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
