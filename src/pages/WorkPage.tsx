import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { WorkSection } from '../components/WorkSection';
import { CtaSection } from '../components/CtaSection';
import { useInquiry } from '../context/InquiryContext';

export const WorkPage: React.FC = () => {
  const navigate = useNavigate();
  const { setInquiryPrefill } = useInquiry();

  const handleInquireProject = (projectName: string) => {
    setInquiryPrefill({
      projectType: 'Business System',
      description: `Inquiry regarding custom architectural specification inspired by: ${projectName}. We want to build a similar system for our operations.`
    });
    navigate('/contact');
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#080b11] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>SYSTEM ARCHITECTURE & SPECIFICATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Selected Digital Systems & Case Studies.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore showcase architecture blueprints and digital system specifications engineered by NexGrid. 
            Each demonstrates our approach to high data density, sub-second latency, and intuitive operations.
          </p>
        </div>
      </section>

      {/* Main Work & Filter Section */}
      <WorkSection onInquireProject={handleInquireProject} />

      {/* System Engineering Principles Summary */}
      <section className="py-20 bg-[#080b11] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0c1220] border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
                  PRODUCTION VERIFICATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Need a Custom Architecture Blueprint for Your Company?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Every business has unique database relationships, security constraints, and operational flows. 
                  We analyze your business requirements and provide a detailed technical architecture specification before starting development.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Database schema & entity-relationship modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>User permission & Role-Based Access Control matrix</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Third-party API & payment integration map</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Sprint delivery schedule & milestone deliverables</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-800">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full max-w-xs py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Request Custom Architecture</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>
            </div>
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
