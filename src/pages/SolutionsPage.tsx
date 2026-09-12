import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  Sliders, 
  Workflow, 
  Database, 
  ShieldCheck, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { SolutionsSection } from '../components/SolutionsSection';
import { CtaSection } from '../components/CtaSection';
import { useInquiry } from '../context/InquiryContext';

export const SolutionsPage: React.FC = () => {
  const navigate = useNavigate();
  const { setInquiryPrefill } = useInquiry();

  const handleSelectSolutionForInquiry = (solutionName: string) => {
    setInquiryPrefill({
      projectType: 'Business System',
      description: `Interested in implementing an engineered solution for ${solutionName} to eliminate operational bottlenecks.`
    });
    navigate('/contact');
  };

  const handleNavigateToConfigurator = (typeId: string) => {
    navigate('/configurator');
  };

  const diagnosisSteps = [
    {
      step: '01',
      title: 'Bottleneck Audit & Process Mapping',
      description: 'We audit where your team spends hours manually copying data between email, spreadsheets, and disconnected platforms.'
    },
    {
      step: '02',
      title: 'Unified Schema Architecture',
      description: 'We design a centralized relational database that acts as the single source of truth for orders, inventory, clients, and assets.'
    },
    {
      step: '03',
      title: 'Zero-Friction Staff Interfaces',
      description: 'We craft dense, intuitive management dashboards designed for high data entry speed, minimal clicks, and zero confusion.'
    },
    {
      step: '04',
      title: 'Autonomous Integrations & Webhooks',
      description: 'We hook in real-time notifications, automated invoicing, customer SMS/email alerts, and accounting sync.'
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
            <span>ENTERPRISE SOLUTIONS BY DOMAIN</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            One Agency. Multiple Digital Solutions.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Replace chaotic paper manifests, fragile Excel models, and disjointed tools with unified, 
            high-performance digital software engineered around your specific operations.
          </p>
        </div>
      </section>

      {/* Solutions Section with Interactive Department Simulators */}
      <SolutionsSection 
        onSelectSolutionForInquiry={handleSelectSolutionForInquiry}
        onNavigateToConfigurator={handleNavigateToConfigurator}
      />

      {/* Methodology: How We Diagnose Workflows */}
      <section className="py-24 bg-[#090d16] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              THE WORKFLOW TRANSFORMATION PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Fragmented Chaos to Unified Systems
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              How we systematically analyze and eliminate operational bottlenecks in four decisive phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosisSteps.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="text-2xl font-extrabold font-mono text-cyan-400 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                  NexGrid Engineered Protocol
                </div>
              </div>
            ))}
          </div>

          {/* Configurator Banner Callout */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Know what type of system you need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Use our Interactive System Configurator to calculate estimated delivery timelines and preview recommended architecture stacks.
              </p>
            </div>

            <button
              onClick={() => navigate('/configurator')}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 transition-colors cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>Launch Configurator</span>
            </button>
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
