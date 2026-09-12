import React from 'react';
import { 
  Compass, 
  Palette, 
  Code2, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Terminal
} from 'lucide-react';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const pillars = [
    {
      title: 'Strategy',
      subtitle: 'Business Diagnosis',
      icon: Compass,
      color: '#06b6d4',
      description: 'We deconstruct your operational bottlenecks, revenue leaks, and employee workflows before writing a single line of code.'
    },
    {
      title: 'Design',
      subtitle: 'Interface Precision',
      icon: Palette,
      color: '#3b82f6',
      description: 'High-density, intuitive user interfaces built to eliminate cognitive overload, reduce operational errors, and maximize speed.'
    },
    {
      title: 'Development',
      subtitle: 'Full-Stack Rigor',
      icon: Code2,
      color: '#10b981',
      description: 'Strict TypeScript typing, modular database schemas, edge rendering, and comprehensive automated test suites.'
    },
    {
      title: 'Systems',
      subtitle: 'Long-Term Infrastructure',
      icon: Cpu,
      color: '#8b5cf6',
      description: 'Resilient APIs, multi-tenant security, continuous backup pipelines, and long-term technical support that scales with you.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>AGENCY PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            More Than Web Designers. <br className="hidden sm:inline" />
            Your Dedicated Systems Partner.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            NexGrid combines business strategy, product design, custom software engineering, 
            and long-term system architecture under one focused roof.
          </p>
        </div>

        {/* 4 Pillars Clean Visual Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="relative rounded-2xl bg-[#0d1320] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{ 
                        backgroundColor: `${pillar.color}15`, 
                        borderColor: `${pillar.color}40` 
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                  NexGrid Standard Specification
                </div>
              </div>
            );
          })}
        </div>

        {/* Manifesto / Partner Blueprint Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0f172a]/90 to-slate-900/90 border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
                HOW WE THINK
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                "We don't ask what pages you want. <br className="hidden sm:inline" />
                We ask how your company generates value and where it wastes time."
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Most agencies treat digital projects as static visual decoration. At NexGrid, 
                we recognize that digital systems are the operational skeleton of your company. 
                When your systems are clean, cohesive, and fast, your team moves faster, customers trust you more, 
                and your margins expand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Direct access to senior software architects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Zero outsourcing to junior subcontractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Transparent milestone-based delivery schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Long-term post-launch SLA and proactive updates</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800">
              <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-center w-full max-w-xs">
                <div className="text-3xl font-extrabold font-mono text-cyan-400 mb-1">
                  100%
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-4">
                  Commitment to Custom Architecture
                </div>
                <button
                  onClick={onStartProject}
                  className="w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
