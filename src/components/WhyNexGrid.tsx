import React from 'react';
import { 
  Layers, 
  Cpu, 
  Smartphone, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  HeartHandshake, 
  Check, 
  Terminal, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { ADVANTAGES } from '../data/agencyData';

export const WhyNexGrid: React.FC = () => {
  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-indigo-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-red-400" />;
      case 'Target': return <Target className="w-5 h-5 text-teal-400" />;
      default: return <HeartHandshake className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-dots opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>ENGINEERING PRINCIPLES & ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Why Technology Leaders Partner With NexGrid.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We are not a generic digital design shop selling drag-and-drop themes. 
            We build serious digital systems engineered around measurable business performance, longevity, and security.
          </p>
        </div>

        {/* 8 Advantages Bento-Inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              id={`why-adv-${adv.id}`}
              className="group p-6 rounded-2xl bg-[#0d1320]/80 hover:bg-[#101828] border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all">
                  {getAdvantageIcon(adv.iconName)}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {adv.description}
                </p>
              </div>

              {/* Technical Proof Badge */}
              <div className="pt-3 border-t border-slate-800/70">
                <div className="flex items-start gap-1.5 text-[11px] font-mono text-cyan-400/90 leading-tight">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{adv.technicalProof}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Benchmarks Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0e172a]/90 to-slate-900/90 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  PERFORMANCE STANDARDS
                </span>
              </div>
              <p className="text-sm text-slate-300">
                Every web build aims for <strong className="text-white">100/100 Core Web Vitals</strong> and strict asset compression without third-party script bloat.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:px-6">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  DEVELOPMENT SPEED
                </span>
              </div>
              <p className="text-sm text-slate-300">
                Weekly verifiable sprint increments deployed to private staging environments so you never wait months to see real progress.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  INTELLECTUAL PROPERTY
                </span>
              </div>
              <p className="text-sm text-slate-300">
                You receive <strong className="text-white">100% full ownership</strong> of all repository codebases, schemas, configurations, and assets upon final delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
