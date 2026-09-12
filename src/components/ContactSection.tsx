import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Mail, 
  Building2, 
  Phone, 
  User, 
  FileText, 
  AlertCircle,
  Sparkles,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialProjectType?: string;
  initialDescription?: string;
  selectedModules?: string[];
  preferredTimeline?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialProjectType = '',
  initialDescription = '',
  selectedModules = [],
  preferredTimeline = ''
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Business System',
    budgetRange: '$25,000 - $50,000',
    projectDescription: '',
    selectedModules: [],
    preferredTimeline: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync external prefill if provided
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialProjectType,
        projectDescription: initialDescription || prev.projectDescription,
        selectedModules: selectedModules.length ? selectedModules : prev.selectedModules,
        preferredTimeline: preferredTimeline || prev.preferredTimeline
      }));
    }
  }, [initialProjectType, initialDescription, selectedModules, preferredTimeline]);

  const projectTypeOptions = [
    'Website',
    'E-commerce',
    'Business System',
    'Web Application',
    'Mobile/Responsive Platform',
    'Custom Software',
    'Other'
  ];

  const budgetOptions = [
    '< $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      errs.company = 'Company name is required';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      errs.projectDescription = 'Please provide a brief description (at least 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean client-side submission with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'Business System',
      budgetRange: '$25,000 - $50,000',
      projectDescription: '',
      selectedModules: [],
      preferredTimeline: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>PROJECT INQUIRY & INTAKE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Start Your System Build.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Whether you need to replace messy legacy spreadsheets, build a high-volume ecommerce flagship, 
              or architect a bespoke business operating engine, we are ready to discuss specifications.
            </p>

            {/* Quick Guarantees Box */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">24-Hour Initial Triage</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    A senior solutions architect will review your operational requirements and return an initial feasibility response within 1 business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Mutual Confidentiality (NDA)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    All proprietary company details, database structures, and trade workflows remain 100% confidential.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Info */}
            <div className="p-5 rounded-xl bg-[#0b101c] border border-slate-800 text-xs font-mono space-y-2 text-slate-400">
              <div className="text-slate-300 font-semibold mb-2">DIRECT COMMUNICATION:</div>
              <div>Email: <a href="mailto:hello@nexgrid.tech" className="text-cyan-400 hover:underline">hello@nexgrid.tech</a></div>
              <div>Office: London Technology Hub / Remote Global</div>
              <div>Consultation Hours: Mon - Fri, 08:00 - 19:00 UTC</div>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Success State */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d1320] border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-cyan-950/20 relative">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 px-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-5 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Inquiry Received & Logged
                  </h3>

                  <p className="text-sm font-mono text-cyan-400 mb-6">
                    TICKET REF: BG-{Math.floor(100000 + Math.random() * 900000)}
                  </p>

                  <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs mb-8 space-y-2 text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500">CLIENT:</span>
                      <span className="font-semibold text-white">{formData.fullName} ({formData.company})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500">PROJECT TYPE:</span>
                      <span className="font-semibold text-cyan-400">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-500">BUDGET RANGE:</span>
                      <span className="font-semibold text-white">{formData.budgetRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">NEXT STEP:</span>
                      <span className="text-emerald-400 font-semibold">Technical Architecture Review</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-8 max-w-sm mx-auto">
                    We've routed your inquiry to our lead systems engineer. You will receive an initial email confirmation and scheduling link shortly.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Project Specification Form</span>
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      STEP 1 OF 1
                    </span>
                  </div>

                  {formData.preferredTimeline && (
                    <div className="mb-6 p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-between text-xs">
                      <span className="text-cyan-300 font-mono">
                        Imported from Configurator: {formData.projectType} (~{formData.preferredTimeline})
                      </span>
                      <span className="text-emerald-400 font-semibold">Configured</span>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Row 1: Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="input-full-name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                              errors.fullName 
                                ? 'border-red-500 focus:ring-red-500' 
                                : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                          Company / Organization <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          id="input-company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Apex Industries Ltd"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.company 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                          }`}
                        />
                        {errors.company && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="input-email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          type="tel"
                          id="input-phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder-slate-500 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Project Type Selection */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Project Type <span className="text-red-400">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypeOptions.map((type) => {
                          const isSelected = formData.projectType === type;
                          return (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, projectType: type })}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 4: Budget Range */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Estimated Budget Range (USD)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => {
                          const isSelected = formData.budgetRange === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setFormData({ ...formData, budgetRange: b })}
                              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-slate-800 border-cyan-400 text-cyan-300 border font-bold'
                                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-400 border border-slate-800'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 5: Project Description */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                        Project Description & Objectives <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="input-description"
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Tell us about what your business does, your operational bottlenecks, desired features, or key problems this system must solve..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-y ${
                          errors.projectDescription 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-slate-800 focus:border-cyan-500 focus:ring-cyan-500'
                        }`}
                      />
                      {errors.projectDescription && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.projectDescription}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        id="submit-inquiry-btn"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-cyan-500/25 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Verifying & Sending Telemetry...</span>
                        ) : (
                          <>
                            <span>Request Project Consultation</span>
                            <Send className="w-4 h-4 text-slate-950" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] font-mono text-slate-500 mt-3">
                        Strict zero-spam policy. Your contact info is strictly used for this project assessment.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
