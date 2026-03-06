import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blog', path: '/blog' },
    { name: 'Book a Call', path: '/book-call' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-300 flex flex-col">
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors">
                <Activity className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-display font-medium text-xl tracking-wide text-white">Lumetra</span>
            </Link>
            
            <nav className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                    location.pathname === link.path 
                      ? 'text-[#D4AF37]' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/diagnostic" 
                className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/50 text-xs font-mono uppercase tracking-widest rounded-full hover:bg-[#D4AF37] hover:text-black transition-all"
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

      <footer className="bg-[#050505] border-t border-white/10 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Activity className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="font-display font-medium text-xl tracking-wide text-white">Lumetra</span>
              </Link>
              <p className="text-zinc-400 text-sm max-w-sm font-light leading-relaxed">
                Premium GA4 consulting, BigQuery architecture, and digital strategy services for high-growth brands.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-medium text-white uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-zinc-400 font-light">
                <li><Link to="/diagnostic" className="hover:text-[#D4AF37] transition-colors">GA4 Audit & Diagnostic</Link></li>
                <li><Link to="/case-studies" className="hover:text-[#D4AF37] transition-colors">GA4 Case Studies</Link></li>
                <li><Link to="/tools" className="hover:text-[#D4AF37] transition-colors">Analytics Tools</Link></li>
                <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Digital Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-medium text-white uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-400 font-light">
                <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
                <li><Link to="/book-call" className="hover:text-[#D4AF37] transition-colors">Book a Call</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
              © {new Date().getFullYear()} Lumetra Analytics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
