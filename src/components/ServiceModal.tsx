import React from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Globe, 
  ShoppingBag, 
  AppWindow, 
  Wrench, 
  Terminal, 
  ShieldCheck 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ 
  service, 
  onClose, 
  onSelectServiceForInquiry 
}) => {
  if (!service) return null;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-indigo-400" />;
      case 'AppWindow': return <AppWindow className="w-6 h-6 text-blue-400" />;
      default: return <Wrench className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0d131f] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-left overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="service-detail-modal"
      >
        {/* Top Decorative accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
            {getIcon(service.iconName)}
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
              {service.badge}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Ideal For Box */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 text-xs sm:text-sm">
          <span className="font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
            Target Fit & Application:
          </span>
          <p className="text-slate-300">
            {service.idealFor}
          </p>
        </div>

        {/* Two Column Breakdown: Technical Capabilities & Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              Technical Capabilities
            </h4>
            <ul className="space-y-2.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Key Deliverables
            </h4>
            <ul className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-6 pt-4 border-t border-slate-800">
          <span className="text-xs font-mono text-slate-400 block mb-2">
            Recommended Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-mono">
            Custom engineered • Strict SLA • 100% IP ownership
          </span>

          <button
            onClick={() => {
              onClose();
              onSelectServiceForInquiry(service.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
