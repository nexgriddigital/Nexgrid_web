import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  ExternalLink,
  Sliders,
  ChevronRight,
  TrendingUp,
  Activity
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { CtaSection } from '../components/CtaSection';
import { SERVICES, CASE_STUDIES } from '../data/agencyData';
import { useInquiry } from '../context/InquiryContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setInquiryPrefill } = useInquiry();

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleExploreServices = () => {
    navigate('/services');
  };

  const handleInquireService = (title: string) => {
    setInquiryPrefill({
      projectType: title.includes('E-Commerce') ? 'E-commerce' : 
                   title.includes('Web Dev') ? 'Website' : 
                   title.includes('App') ? 'Web Application' : 'Business System',
      description: `Inquiry from Home Page regarding ${title}. We need to build a custom solution for our business.`
    });
    navigate('/contact');
  };

  return (
    <div className="pt-20">
      {/* 1. Hero Section with Interactive Topology */}
      <Hero 
        onStartProject={handleStartProject}
        onExploreServices={handleExploreServices}
      />

      {/* 2. Operational Metrics & Trust Ribbon */}
      <section className="py-8 bg-[#090e18] border-y border-slate-800/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            <div className="px-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 block">
                100%
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1 block">
                Custom Architecture
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Zero drag-and-drop templates</p>
            </div>

            <div className="pt-4 sm:pt-0 px-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 block">
                100 / 100
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1 block">
                Core Web Vitals Target
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Sub-second global edge loading</p>
            </div>

            <div className="pt-4 sm:pt-0 px-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-400 block">
                Full IP
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1 block">
                Complete Code Ownership
              </span>
              <p className="text-[11px] text-slate-500 mt-1">Direct GitHub repository delivery</p>
            </div>

            <div className="pt-4 sm:pt-0 px-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-indigo-400 block">
                Senior Only
              </span>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider mt-1 block">
                Direct Architect Access
              </span>
              <p className="text-[11px] text-slate-500 mt-1">No junior account managers</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Overview */}
      <section className="py-24 bg-[#080b11] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>CORE AGENCY DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Software Built for How You Actually Work.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
                From high-conversion corporate flagships to mission-critical business operating engines, 
                we design and develop software engineered to scale with your team.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-mono font-medium transition-all group"
            >
              <span>View All 6 Disciplines & Stacks</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/40">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      SYS_MODULE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                  >
                    <span>Inspect Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => handleInquireService(service.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium cursor-pointer transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solutions Spotlight & Department Navigator */}
      <section className="py-24 bg-[#090d16] border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#0a0f1d] border border-slate-700/80 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ONE AGENCY. MULTIPLE DIGITAL SOLUTIONS.</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Turn Complex Operational Messes Into High-Velocity Software.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Growing companies hit the "spreadsheet ceiling"—where customer orders, staff schedules, logistics, and data are scattered across disjointed tools. 
                  NexGrid consolidates your business logic into a unified, secure web operating system.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-mono text-slate-300">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-cyan-400 block font-bold mb-0.5">OPERATIONS</span>
                    Dispatch & fleet consoles
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-emerald-400 block font-bold mb-0.5">SALES & CRM</span>
                    Custom quote CPQ & leads
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-indigo-400 block font-bold mb-0.5">INVENTORY</span>
                    Multi-warehouse sync
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/solutions"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs flex items-center gap-2 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <span>Explore All Department Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/configurator"
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700 flex items-center gap-2 transition-all"
                  >
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Launch Interactive Configurator</span>
                  </Link>
                </div>
              </div>

              {/* Simulated Cockpit Preview Teaser */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#070b12] border border-slate-800 p-5 shadow-inner font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      DISPATCH_OPS_NODE
                    </span>
                    <span className="text-emerald-400">ONLINE • 140 UNITS</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 my-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">ROUTE BOTTLENECKS</span>
                      <span className="text-base font-bold text-emerald-400">-74% Saved</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">DISPATCH LAG</span>
                      <span className="text-base font-bold text-cyan-400">&lt; 15 Seconds</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-[11px] text-slate-300 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Data Pipeline:</span>
                      <span className="text-white">PostgreSQL + Redis Edge</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Access Control:</span>
                      <span className="text-emerald-400">RBAC with MFA</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                    <Link
                      to="/solutions"
                      className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Interact with live solution simulators</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Selected Case Studies Preview */}
      <section className="py-24 bg-[#080b11] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>SYSTEM ARCHITECTURE PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Selected Work & Systems.
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-mono font-medium transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                      {study.clientType}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      DEMO SPEC
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center mb-4">
                    <div>
                      <span className="text-xs font-bold font-mono text-cyan-400 block">{study.metrics[0].value}</span>
                      <span className="text-[9px] text-slate-400 uppercase">{study.metrics[0].label}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold font-mono text-emerald-400 block">{study.metrics[1].value}</span>
                      <span className="text-[9px] text-slate-400 uppercase">{study.metrics[1].label}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/work"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <span>Inspect Full Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Impact CTA */}
      <CtaSection 
        onStartProject={() => navigate('/contact')}
        onContactClick={() => navigate('/contact')}
      />
    </div>
  );
};
