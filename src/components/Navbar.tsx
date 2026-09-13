import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Terminal, 
  Layers, 
  Code2, 
  Cpu, 
  Sparkles,
  Lock 
} from 'lucide-react';
import { NexGridLogo } from './NexGridLogo';
import { usePortalAuth } from '../context/PortalAuthContext';

export const Navbar: React.FC = () => {
  const { currentUser } = usePortalAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/work', label: 'Work' },
    { to: '/configurator', label: 'Configurator' },
    { to: '/why-us', label: 'Why Us & Process' },
    { to: '/portals', label: 'Portals' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40' 
          : 'bg-[#080b11]/60 backdrop-blur-sm border-b border-slate-800/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
            aria-label="NexGrid Digital Systems Home"
          >
            <NexGridLogo variant="horizontal" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/90 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-800/40 font-semibold shadow-sm' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              to={currentUser ? (currentUser.role === 'customer' ? '/portal/customer' : '/portal/staff') : '/portal/signin'}
              className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-colors ${
                currentUser
                  ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-slate-700/80 text-cyan-300 hover:text-cyan-200'
              }`}
              title={currentUser ? `Go to ${currentUser.role === 'customer' ? 'Customer Portal' : 'Staff Console'} (${currentUser.name})` : 'Sign In to Customer & Staff Portals'}
            >
              {currentUser ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="truncate max-w-[85px]">{currentUser.name.split(' ')[0]}</span>
                  <span className="text-[10px] text-cyan-400">
                    ({currentUser.title?.toLowerCase().includes('owner') ? 'Owner' : currentUser.role === 'customer' ? 'Client' : 'Staff'})
                  </span>
                </>
              ) : (
                <>
                  <Lock className="w-3 h-3 text-cyan-400" />
                  <span>Portal Sign In</span>
                </>
              )}
            </Link>

            <Link
              id="nav-start-project-btn"
              to="/contact"
              className="relative group overflow-hidden rounded-lg p-px font-medium focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[7px] bg-[#080b11] text-white text-xs font-semibold group-hover:bg-transparent transition-colors duration-200">
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#0d131f] border border-slate-800 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-800">
            <div className="flex items-center justify-between py-2 text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SYSTEM: ONLINE
              </span>
              <span>EST. 2024</span>
            </div>

            {navLinks.map((link) => {
              const isActive = link.to === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-800/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              id="mobile-start-project-btn"
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <a
              href="mailto:hello@nexgrid.tech"
              className="text-center text-xs text-slate-400 hover:text-cyan-400 transition-colors py-1 font-mono"
            >
              hello@nexgrid.tech
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
