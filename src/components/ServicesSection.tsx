import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  ShoppingBag, 
  Layers, 
  AppWindow, 
  Wrench, 
  ArrowRight, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-cyan-300" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6 text-blue-400" />;
      default: return <Wrench className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-900">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>CORE ARCHITECTURAL DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered For Companies That Can’t Afford Broken Software.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We bridge the gap between creative visual excellence and rock-solid systems architecture. 
            From customer-facing flagships to mission-critical operational backbones.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-gradient-to-b from-[#0e1422] to-[#090d16] border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              {/* Card Corner Tech Accent */}
              <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 group-hover:text-cyan-400/80 transition-colors">
                [0{index + 1}]
              </div>

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 shrink-0 mt-1.5"></span>
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Learn More & Direct Inquire */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => setActiveModalService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none cursor-pointer"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-700/80 transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Architecture Promise Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b101c] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-200">
              Need a unified hybrid solution combining multiple services?
            </span>
          </div>

          <button
            onClick={() => onSelectService('Multi-Service Unified System')}
            className="px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all"
          >
            <span>Request Bespoke Solution Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Modal View for Deep-Dive */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectServiceForInquiry={(name) => {
          setActiveModalService(null);
          onSelectService(name);
        }}
      />
    </section>
  );
};
