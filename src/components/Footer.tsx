import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Terminal, 
  Github, 
  Linkedin, 
  Twitter, 
  ShieldCheck,
  Cpu,
  Mail,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { NexGridLogo } from './NexGridLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05080e] border-t border-slate-900 text-slate-400 overflow-hidden pt-16 pb-12">
      {/* Animated subtle grid background */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>

      {/* Subtle corner glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="NexGrid Digital Systems Home">
              <NexGridLogo variant="horizontal" size="md" />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              NexGrid Digital Systems is a specialized technology partner engineering complete digital systems, custom business software, high-performance web experiences, and operational platforms for serious organizations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>SYS STATUS: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Web Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Business Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Management Systems
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Tools */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-4">
              Solutions & Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition-colors">
                  Operations Dashboards
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition-colors">
                  Custom Sales CRM
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition-colors">
                  Inventory & Dispatch
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-cyan-400 transition-colors">
                  Booking & Schedules
                </Link>
              </li>
              <li>
                <Link to="/configurator" className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors flex items-center gap-1">
                  <span>System Configurator</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-950 border border-cyan-800 text-cyan-400">Tool</span>
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-cyan-400 transition-colors">
                  Case Studies & Specs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About NexGrid
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-cyan-400 transition-colors">
                  Why Us & Advantages
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-cyan-400 transition-colors">
                  Development Process
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-cyan-400 transition-colors">
                  Architecture Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors text-cyan-400 font-medium">
                  Start a Project Inquiry
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <Link to="/portal/signin" className="hover:text-cyan-300 transition-colors text-cyan-400 flex items-center gap-1.5 font-mono">
                  <span>Portal Sign In</span>
                  <span className="text-[9px] px-1 py-0.2 bg-cyan-950 border border-cyan-800 rounded">Auth</span>
                </Link>
              </li>
              <li>
                <Link to="/portal/signup" className="hover:text-cyan-300 transition-colors text-slate-300 flex items-center gap-1.5 font-mono">
                  <span>Register Client Org</span>
                  <span className="text-[9px] px-1 py-0.2 bg-slate-800 rounded">New</span>
                </Link>
              </li>
              <li>
                <Link to="/portal/customer" className="hover:text-cyan-300 transition-colors text-slate-400 flex items-center gap-1.5 font-mono">
                  <span>Customer Portal</span>
                  <span className="text-[9px] px-1 py-0.2 bg-cyan-950 border border-cyan-800 rounded">Client</span>
                </Link>
              </li>
              <li>
                <Link to="/portal/staff" className="hover:text-blue-300 transition-colors text-slate-400 flex items-center gap-1.5 font-mono">
                  <span>Staff Console</span>
                  <span className="text-[9px] px-1 py-0.2 bg-blue-950 border border-blue-800 rounded">Staff</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Socials, Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} NexGrid Digital Systems.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
