import React, { useState } from 'react';
import { 
  Clock, 
  ShieldCheck, 
  Mail, 
  Building2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  FileCode2, 
  DollarSign, 
  CheckCircle2,
  Terminal,
  RotateCcw
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { useInquiry } from '../context/InquiryContext';

export const ContactPage: React.FC = () => {
  const { inquiryState } = useInquiry();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What happens after I submit this inquiry form?',
      a: 'A senior solutions architect (not a sales rep) reviews your technical requirements and returns an initial feasibility evaluation within 24 hours. If it looks like a mutual fit, we will arrange a 30-minute scoping workshop to map out the system specification.'
    },
    {
      q: 'Do you sign Non-Disclosure Agreements (NDAs) before discovery?',
      a: 'Absolutely. We regularly work with proprietary business logic, sensitive customer workflows, and private trade data. We are happy to execute your company’s standard NDA or provide our standard mutual confidentiality agreement before discovery.'
    },
    {
      q: 'How are development milestones and payments structured?',
      a: 'We operate on transparent, deliverable-based milestones. Typically: 30% project kickoff & architecture, 40% core beta build & staging demo, and 30% final security audit, deployment & code repository transfer. You never pay in full upfront.'
    },
    {
      q: 'Who owns the intellectual property and code repository?',
      a: 'You do. 100%. Upon settlement of final milestone deliverables, full copyright and repository permissions (GitHub, Dockerfiles, database schemas, and documentation) are legally transferred to your organization with zero licensing strings attached.'
    },
    {
      q: 'What level of ongoing support do you provide post-launch?',
      a: 'Every production build includes 30 days of complimentary bug-fixing and telemetry monitoring. Following launch, we offer dedicated monthly SLA packages covering proactive security updates, database backups, performance audits, and continuous feature expansion.'
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
            <span>DIRECT ARCHITECT INTAKE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Start Your System Build.
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Tell us about your business bottlenecks or what you need engineered. 
            A senior systems architect will review your specification within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Intake Form Section with prefilled state */}
      <ContactSection 
        initialProjectType={inquiryState.projectType}
        initialDescription={inquiryState.description}
        selectedModules={inquiryState.selectedModules}
        preferredTimeline={inquiryState.preferredTimeline}
      />

      {/* Client Onboarding FAQ Accordion */}
      <section className="py-24 bg-[#090d16] border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-2">
              CLARITY & POLICIES
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Everything you need to know about working with NexGrid.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#0d1320] border border-slate-800 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
