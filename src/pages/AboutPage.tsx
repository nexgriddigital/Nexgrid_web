import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Palette, 
  Code2, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Users, 
  Workflow,
  Sparkles
} from 'lucide-react';
import { AboutSection } from '../components/AboutSection';
import { CtaSection } from '../components/CtaSection';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const values = [
    {
      title: 'Direct Architect Communication',
      desc: 'You work directly with senior systems architects who write code, not non-technical account managers playing telephone.',
      icon: Users
    },
    {
      title: 'Zero Junior Subcontracting',
      desc: 'All work is handled internally by senior software engineers. We never outsource your core IP to anonymous offshore third-parties.',
      icon: ShieldCheck
    },
    {
      title: 'Pragmatic, High-Velocity Delivery',
      desc: 'We prioritize functional working prototypes over 200-page slide decks. You test working builds in the first 2 weeks.',
      icon: Workflow
    },
    {
      title: 'Long-Term System Longevity',
      desc: 'We engineer software designed to last 5+ years without painful re-platforming, using modular codebases and industry standards.',
      icon: Terminal
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#080b11] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>AGENCY PHILOSOPHY & ETHOS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            More Than Web Designers. Your Systems Partner.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            NexGrid was formed to bridge the gap between superficial digital creative agencies 
            and rigid enterprise software consultancies. We engineer fast, beautiful, durable digital systems.
          </p>
        </div>
      </section>

      {/* Main 4 Pillars & Manifesto */}
      <AboutSection onStartProject={() => navigate('/contact')} />

      {/* Engineering Culture & Client Commitment */}
      <section className="py-24 bg-[#090d16] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Principles That Guide Every Build
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Clear commitments on how we work, communicate, and deliver results for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{val.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        onStartProject={() => navigate('/contact')}
        onContactClick={() => navigate('/contact')}
      />
    </div>
  );
};
