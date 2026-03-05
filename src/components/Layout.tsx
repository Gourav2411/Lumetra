import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Activity } from 'lucide-react';

export function Layout() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Diagnostic', path: '/diagnostic' },
    { name: 'Blog', path: '/blog' },
    { name: 'Book a Call', path: '/book-call' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-zinc-300 flex flex-col">
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b-4 border-[#FF9900]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF9900] text-black rounded-l-full rounded-r-none flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-widest text-[#FF9900] uppercase">Lumetra</span>
            </Link>
            
            <nav className="hidden md:flex gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-display uppercase tracking-widest transition-colors ${
                    location.pathname === link.path 
                      ? 'text-[#99CCFF]' 
                      : 'text-[#FF9900] hover:text-[#FFCC66]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <Link 
                to="/diagnostic" 
                className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-[#CC99CC] text-black text-sm font-display uppercase tracking-widest rounded-full hover:bg-[#FFCC66] transition-colors"
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

      <footer className="bg-[#111] border-t-8 border-[#CC6666] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[#CC6666] text-black rounded-l-full rounded-r-none flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-xl tracking-widest text-[#CC6666] uppercase">Lumetra</span>
              </Link>
              <p className="text-zinc-400 text-sm max-w-xs font-mono">
                Premium GA4 consulting, BigQuery architecture, and digital strategy services for high-growth brands.
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-[#99CCFF] uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#FF9900] font-mono">
                <li><Link to="/diagnostic" className="hover:text-[#FFCC66] transition-colors">GA4 Audit & Diagnostic</Link></li>
                <li><Link to="/case-studies" className="hover:text-[#FFCC66] transition-colors">GA4 Case Studies</Link></li>
                <li><Link to="/" className="hover:text-[#FFCC66] transition-colors">BigQuery Consulting</Link></li>
                <li><Link to="/" className="hover:text-[#FFCC66] transition-colors">Digital Strategy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold text-[#99CCFF] uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#FF9900] font-mono">
                <li><Link to="/contact" className="hover:text-[#FFCC66] transition-colors">Contact Us</Link></li>
                <li><Link to="/book-call" className="hover:text-[#FFCC66] transition-colors">Book a Call</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-[#FFCC66] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500 font-mono">
              © {new Date().getFullYear()} Lumetra Analytics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
