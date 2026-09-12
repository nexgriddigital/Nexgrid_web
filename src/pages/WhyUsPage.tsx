import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Cpu, 
  GitBranch,
  Lock,
  Sparkles
} from 'lucide-react';
import { WhyNexGrid } from '../components/WhyNexGrid';
import { ProcessSection } from '../components/ProcessSection';
import { CtaSection } from '../components/CtaSection';

export const WhyUsPage: React.FC = () => {
  const navigate = useNavigate();

  const standards = [
    {
      title: 'Strict TypeScript Type Safety',
      desc: 'All backend routes and frontend components are strictly typed end-to-end to prevent runtime runtime errors.',
      icon: Terminal,
      color: 'text-cyan-400'
    },
    {
      title: 'Sub-Second Edge Latency',
      desc: 'Edge CDN routing, compressed assets, and intelligent query caching deliver instant load times worldwide.',
      icon: Zap,
      color: 'text-emerald-400'
    },
    {
      title: '100% Intellectual Property Ownership',
      desc: 'You receive complete source code, repository commits, schema migrations, and assets upon project completion.',
      icon: Lock,
      color: 'text-blue-400'
    },
    {
      title: 'Weekly Verifiable Staging Deployments',
      desc: 'Private staging environments updated weekly so you test working software every 5 business days.',
      icon: GitBranch,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#080b11] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING PRINCIPLES & PROCESS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Why Technology Leaders Partner With NexGrid.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We are not a generic design shop selling theme skins. We are an engineering partner building 
            serious digital infrastructure backed by strict performance and security standards.
          </p>
        </div>
      </section>

      {/* 8 Core Advantages Bento Grid */}
      <WhyNexGrid />

      {/* Strict Engineering Standards Banner */}
      <section className="py-20 bg-[#090e18] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              ZERO COMPROMISE PROTOCOL
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Our Non-Negotiable Engineering Standards
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Every codebase we deliver meets four fundamental quality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                      <Icon className={`w-5 h-5 ${std.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{std.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{std.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-cyan-400">
                    VERIFIED IN CI/CD PIPELINE
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Step Development Lifecycle & Stage Inspector */}
      <ProcessSection />

      {/* CTA Section */}
      <CtaSection 
        onStartProject={() => navigate('/contact')}
        onContactClick={() => navigate('/contact')}
      />
    </div>
  );
};
