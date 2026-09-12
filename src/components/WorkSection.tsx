import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Globe, 
  ShoppingBag, 
  Activity, 
  ShieldCheck, 
  Calendar, 
  Building2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudyItem, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';

interface WorkSectionProps {
  onInquireProject: (projectName: string) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudyItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'business-systems', label: 'Business Systems' },
    { id: 'web-apps', label: 'Web Applications' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'corporate', label: 'Corporate Flagships' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((p) => p.category === activeCategory);

  const renderVisualMockup = (project: CaseStudyItem) => {
    switch (project.mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                DISPATCH_OPS_NODE
              </span>
              <span className="text-emerald-400">140 ACTIVE TRUCKS</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">ON ROUTE</span>
                <span className="text-sm font-bold text-white">118</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">DOCKED</span>
                <span className="text-sm font-bold text-cyan-400">22</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">EFFICIENCY</span>
                <span className="text-sm font-bold text-emerald-400">98.4%</span>
              </div>
            </div>
            <div className="h-6 w-full bg-slate-900/80 rounded flex items-center px-2 text-[9px] text-slate-400 border border-slate-800">
              <span className="text-cyan-400 mr-2">&gt;</span> Automated manifest sync: Zero paper lag
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="text-cyan-400">HEADLESS_EDGE_CART</span>
              <span className="text-emerald-400">0.4s CHECKOUT</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800 my-1">
              <span className="text-white font-semibold">SKU-ULTRA-DROP (x2)</span>
              <span className="text-cyan-300 font-bold">$280.00</span>
            </div>
            <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center justify-between">
              <span>ONE-TOUCH APPLE PAY</span>
              <span className="font-bold">VERIFIED</span>
            </div>
            <div className="text-[9px] text-slate-400 text-center">
              Global multi-currency checkout: 32 countries
            </div>
          </div>
        );

      case 'system':
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="text-indigo-400">PROPERTY_LEASE_CONSOLE</span>
              <span className="text-emerald-400">620 UNITS</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-1">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">RENT COLLECTED</span>
                <span className="text-white font-bold">$384,200</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-slate-500 block">MAINTENANCE</span>
                <span className="text-amber-400 font-bold">2 Dispatched</span>
              </div>
            </div>
            <div className="p-1.5 rounded bg-slate-900 text-slate-300 text-[9px] border border-slate-800">
              Auto Direct Debit: 98.2% on-time settlement
            </div>
          </div>
        );

      case 'website':
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="text-blue-400">STRATA_CAPITAL_VAULT</span>
              <span className="text-cyan-400">100/100 CWV</span>
            </div>
            <div className="p-3 rounded bg-slate-900 border border-slate-800 my-1">
              <span className="text-white font-bold block text-xs">INVESTOR DATA ROOM</span>
              <span className="text-slate-400 text-[9px]">Biometric MFA & Watermarked Audits</span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-400 px-1">
              <span>FUND AUM: $240M</span>
              <span className="text-emerald-400">ENCRYPTED</span>
            </div>
          </div>
        );

      case 'booking':
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="text-teal-400">CLINIC_SCHEDULER_V2</span>
              <span className="text-emerald-400">8 CLINICS</span>
            </div>
            <div className="space-y-1 my-1">
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">09:30 AM — Consultation</span>
                <span className="text-emerald-400">CONFIRMED</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">11:00 AM — MRI Intake</span>
                <span className="text-cyan-400">SMS SENT</span>
              </div>
            </div>
            <div className="text-[9px] text-slate-400 text-center">
              No-show rate dropped from 18% to 3.8%
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-[#0a0e18] p-3 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-[10px]">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
              <span className="text-cyan-400">SALES_PIPELINE_CRM</span>
              <span className="text-emerald-400">$480K ACTIVE</span>
            </div>
            <div className="grid grid-cols-3 gap-1 my-1 text-center">
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <span className="text-[9px] text-slate-500 block">QUALIFY</span>
                <span className="font-bold text-white">8</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                <span className="text-[9px] text-slate-500 block">PROPOSAL</span>
                <span className="font-bold text-cyan-400">5</span>
              </div>
              <div className="p-1.5 rounded bg-emerald-950/40 border border-emerald-800/40">
                <span className="text-[9px] text-emerald-400 block">WON</span>
                <span className="font-bold text-white">12</span>
              </div>
            </div>
            <div className="text-[9px] text-slate-400 text-center">
              Custom CPQ quote engine: 5-min turnaround
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>PORTFOLIO & SYSTEM SPECIFICATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Selected Digital Systems.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore our showcase architecture blueprints and prototype case studies. 
              Each demonstrates how we turn operational complexity into clean, scalable software.
            </p>
          </div>

          {/* Transparency Disclaimer Notice */}
          <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-right">
            <span className="text-[11px] font-mono text-cyan-400 block font-semibold">
              *TRANSPARENT DEMO NOTICE
            </span>
            <span className="text-[10px] text-slate-400">
              Showcase demo case studies demonstrating NexGrid architecture
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`case-card-${project.id}`}
              className="group rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/40"
            >
              <div>
                {/* Visual Mockup Stage */}
                <div className="mb-5 overflow-hidden rounded-xl">
                  {renderVisualMockup(project)}
                </div>

                {/* Tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    {project.clientType}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    [DEMO SPEC]
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 mb-4 text-center">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-bold font-mono text-cyan-400 block">{m.value}</span>
                      <span className="text-[9px] text-slate-500 uppercase">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono text-[10px] border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Details Button */}
              <div className="pt-2">
                <button
                  id={`view-project-btn-${project.id}`}
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 border border-slate-700/80 hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <span>View Full Architecture Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquireSimilar={(title) => {
          setActiveModalProject(null);
          onInquireProject(`Inquiry regarding system architecture like ${title}`);
        }}
      />
    </section>
  );
};
