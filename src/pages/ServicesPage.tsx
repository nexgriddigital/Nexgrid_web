import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layers, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Terminal,
  Database,
  Cloud,
  Zap
} from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';
import { CtaSection } from '../components/CtaSection';
import { useInquiry } from '../context/InquiryContext';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { setInquiryPrefill } = useInquiry();

  const handleSelectService = (serviceName: string) => {
    setInquiryPrefill({
      projectType: serviceName.includes('E-Commerce') ? 'E-commerce' : 
                   serviceName.includes('Web Dev') ? 'Website' : 
                   serviceName.includes('App') ? 'Web Application' : 'Business System',
      description: `Inquiring about ${serviceName}. We need a bespoke software architecture built to our requirements.`
    });
    navigate('/contact');
  };

  const comparisonPoints = [
    {
      metric: 'Architecture & Foundation',
      nexgrid: 'Bespoke TypeScript & edge-ready schema designed specifically for your business workflow.',
      templates: 'Bloated multi-purpose WordPress/Wix themes with 80+ unused plugins.'
    },
    {
      metric: 'Speed & Core Web Vitals',
      nexgrid: 'Sub-second edge loading, 100/100 CWV target, zero script bloat or unused CSS.',
      templates: 'Heavy blocking JS bundles, slow Time-to-Interactive, score penalties.'
    },
    {
      metric: 'Data & Code Ownership',
      nexgrid: '100% full intellectual property and Git repository ownership transferred to you.',
      templates: 'Proprietary platform lock-in, recurring monthly app store plugin fees.'
    },
    {
      metric: 'API & Workflow Extensibility',
      nexgrid: 'Custom REST/GraphQL APIs, seamless CRM, ERP, Stripe, and third-party webhook sync.',
      templates: 'Restricted by rigid marketplace plugins with limited custom integration capabilities.'
    },
    {
      metric: 'Security & Access Control',
      nexgrid: 'Granular Role-Based Access Control (RBAC), multi-factor auth, and data encryption.',
      templates: 'Vulnerable generic admin logins prone to automated brute-force attacks.'
    }
  ];

  const techEcosystem = [
    {
      layer: 'Frontend & UI',
      techs: ['React 19', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless UI'],
      icon: Code2,
      color: 'text-cyan-400'
    },
    {
      layer: 'Backend & APIs',
      techs: ['Node.js', 'Express', 'Go / Golang', 'GraphQL', 'Edge Workers', 'tRPC'],
      icon: Cpu,
      color: 'text-blue-400'
    },
    {
      layer: 'Data & Storage',
      techs: ['PostgreSQL', 'Redis Edge Cache', 'Prisma / Drizzle', 'ClickHouse', 'S3 Object Storage'],
      icon: Database,
      color: 'text-emerald-400'
    },
    {
      layer: 'Infrastructure & DevOps',
      techs: ['Docker Containers', 'Cloud Run', 'Vercel / AWS', 'GitHub Actions CI/CD', 'Automated Backups'],
      icon: Cloud,
      color: 'text-indigo-400'
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#080b11] relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>6 SPECIALIZED ENGINEERING DISCIPLINES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Custom Software & Web Engineering Built to Perform.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            We don't sell generic drag-and-drop templates. Every solution we produce is 
            architected from the ground up for measurable business growth, security, and velocity.
          </p>
        </div>
      </section>

      {/* Full Interactive Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Comparison: NexGrid Custom vs. Off-The-Shelf Templates */}
      <section className="py-24 bg-[#090d16] border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              THE ARCHITECTURAL DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bespoke Engineering vs. Generic Agency Templates
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Why fast-growing organizations migrate away from off-the-shelf page builders to NexGrid systems.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse rounded-2xl overflow-hidden bg-[#0d1320] border border-slate-800">
              <thead>
                <tr className="bg-slate-900/90 border-b border-slate-800 text-xs font-mono">
                  <th className="p-4 sm:p-5 text-slate-300 w-1/4">Evaluation Dimension</th>
                  <th className="p-4 sm:p-5 text-cyan-400 w-3/8 bg-cyan-950/20 border-x border-cyan-800/30">
                    NexGrid Engineered Systems
                  </th>
                  <th className="p-4 sm:p-5 text-slate-400 w-3/8">
                    Standard Agency / Templates
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {comparisonPoints.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-white font-mono">
                      {item.metric}
                    </td>
                    <td className="p-4 sm:p-5 bg-cyan-950/10 border-x border-cyan-800/20 text-slate-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item.nexgrid}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500/70 shrink-0 mt-0.5" />
                        <span>{item.templates}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Production Technology Ecosystem */}
      <section className="py-24 bg-[#080b11] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
              PRODUCTION STACKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Modern, Tested, Scalable Foundations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              We choose battle-tested technologies that are easy to maintain, hire for, and scale to millions of requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techEcosystem.map((eco) => {
              const Icon = eco.icon;
              return (
                <div 
                  key={eco.layer}
                  className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <Icon className={`w-5 h-5 ${eco.color}`} />
                    </div>
                    <h3 className="text-base font-bold text-white">{eco.layer}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {eco.techs.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
