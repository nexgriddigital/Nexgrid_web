import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  KeyRound, 
  User, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Lock,
  Calendar
} from 'lucide-react';
import { usePortalAuth } from '../context/PortalAuthContext';
import { NexGridLogo } from '../components/NexGridLogo';

export const PortalSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { registerCustomer } = usePortalAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [title, setTitle] = useState('');
  const [projectScope, setProjectScope] = useState('Custom SaaS Platform');
  const [targetKickoff, setTargetKickoff] = useState('Immediate / Next 2 Weeks');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToNDA, setAgreedToNDA] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim() || !organization.trim()) {
      setErrorMessage('Please fill in your name, work email, and company.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!agreedToNDA) {
      setErrorMessage('Please accept the mutual NDA and security covenant.');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      await registerCustomer({
        name,
        email,
        organization,
        title: title || 'Client Lead'
      });

      // Navigate to Customer Portal
      navigate('/portal/customer');
    } catch {
      setErrorMessage('Failed to register client organization. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080b11] flex flex-col justify-center relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Navigation back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/portals"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portals Overview</span>
          </Link>

          <Link
            to="/portal/signin"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
          >
            Already have an account? <strong>Sign In</strong>
          </Link>
        </div>

        {/* Card Container */}
        <div className="bg-[#0b111e] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <NexGridLogo variant="icon-only" size="md" />
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLIENT ORGANIZATION ONBOARDING</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Register Client Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Provision an encrypted stakeholder workspace for live milestones, SOW deliverables, billing control, and verified code repositories.
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-start gap-2 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Full Name <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jonathan Chen"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Corporate Work Email <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="j.chen@company.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Company / Organization <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Apex Global Systems"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Role / Title
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. VP Engineering / COO"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Planned System Scope
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Custom SaaS Platform">Custom SaaS Platform</option>
                    <option value="Internal Operations ERP/CRM">Internal Operations ERP/CRM</option>
                    <option value="High-Performance Web App">High-Performance Web App</option>
                    <option value="Cloud Architecture & Migration">Cloud Architecture & Migration</option>
                    <option value="API & Microservices Mesh">API & Microservices Mesh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Target Kickoff
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={targetKickoff}
                    onChange={(e) => setTargetKickoff(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    <option value="Immediate / Next 2 Weeks">Immediate / Next 2 Weeks</option>
                    <option value="Next 30 Days">Next 30 Days</option>
                    <option value="Next Quarter Roadmap">Next Quarter Roadmap</option>
                    <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Password (min. 8 chars) <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Confirm Password <span className="text-cyan-400">*</span>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Security Agreement */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToNDA}
                  onChange={(e) => setAgreedToNDA(e.target.checked)}
                  className="mt-0.5 rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-0 w-3.5 h-3.5 shrink-0"
                />
                <span className="leading-snug">
                  I agree to NexGrid's <strong>Mutual Non-Disclosure Covenant</strong> and <strong>Zero-Trust Client Data Privacy Agreement</strong>. All code repositories and architectural deliverables remain client-owned.
                </span>
              </label>

              <div className="flex items-center gap-4 text-[11px] font-mono text-emerald-400 pt-1 border-t border-slate-800/80">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AES-256 Escrow</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Immediate Workspace Provisioning</span>
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/10 cursor-pointer"
            >
              {isLoading ? (
                <span>Provisioning Encrypted Client Enclave...</span>
              ) : (
                <>
                  <span>Create Account & Enter Customer Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Staff Redirection */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 text-center text-xs text-slate-400">
            <p>
              NexGrid Staff & Operations Engineer?{' '}
              <Link
                to="/portal/signin?role=admin"
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Sign in with Staff IAM Credentials
              </Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
