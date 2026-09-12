import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sliders, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { ConfiguratorSection } from '../components/ConfiguratorSection';
import { CtaSection } from '../components/CtaSection';
import { useInquiry } from '../context/InquiryContext';

export const ConfiguratorPage: React.FC = () => {
  const navigate = useNavigate();
  const { setInquiryPrefill } = useInquiry();

  const handleTransferToInquiry = (config: {
    systemType: string;
    addons: string[];
    timeline: string;
    notes: string;
  }) => {
    let mappedType = 'Business System';
    if (config.systemType.includes('Website')) mappedType = 'Website';
    else if (config.systemType.includes('Commerce')) mappedType = 'E-commerce';
    else if (config.systemType.includes('Web App')) mappedType = 'Web Application';

    setInquiryPrefill({
      projectType: mappedType,
      description: `Custom Configured System: ${config.systemType}. Selected Modules: ${config.addons.length ? config.addons.join(', ') : 'Base package'}. Estimated Target Timeline: ~${config.timeline}.`,
      selectedModules: config.addons,
      preferredTimeline: config.timeline
    });

    navigate('/contact');
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#080b11] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE ARCHITECTURAL ESTIMATOR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Configure Your Digital System.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Select your system archetype, choose operational modules, and generate an estimated development 
            timeline with recommended production architecture in real time.
          </p>
        </div>
      </section>

      {/* Main Configurator Section */}
      <ConfiguratorSection onTransferToInquiry={handleTransferToInquiry} />

      {/* FAQ Guide on Estimations & Delivery */}
      <section className="py-20 bg-[#080b11] border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              How NexGrid Estimates & Delivers
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Clear expectations on timeline precision, milestone demos, and scope flexibility.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                How accurate are the estimated timelines?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The configurator calculates timeline based on senior engineering hours required for core schema design, 
                frontend state implementation, testing, and production deployment. During our initial 24-hour triage, 
                we solidify this into a binding milestone schedule with weekly demo check-ins.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                Can modules be added or removed mid-development?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Yes. Because our systems use modular TypeScript architecture, isolated API routes, and decoupled database models, 
                additional capabilities (such as Stripe payments or SMS dispatch) can be slotted in without rewriting existing code.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                What happens after I transfer my configuration?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your selected modules and target timeline will be automatically prefilled in our Project Specification form. 
                Our lead systems architect reviews the technical viability and schedules a 20-minute feasibility consultation.
              </p>
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
