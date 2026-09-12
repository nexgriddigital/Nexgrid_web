import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Building2, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Users, 
  Cpu, 
  Database, 
  FileText, 
  Key, 
  CreditCard, 
  Activity, 
  GitBranch, 
  HelpCircle,
  Eye,
  UserPlus,
  LogIn,
  ExternalLink
} from 'lucide-react';
import { CustomerPortal } from '../components/portals/CustomerPortal';
import { AdminPortal } from '../components/portals/AdminPortal';
import { PortalOtpGate } from '../components/portals/PortalOtpGate';
import { PortalFeaturesBreakdown } from '../components/portals/PortalFeaturesBreakdown';
import { usePortalAuth } from '../context/PortalAuthContext';
import { ROLE_CAPABILITIES_MATRIX } from '../data/portalData';

export const PortalsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPortal = (searchParams.get('view') as 'customer' | 'admin') || 'customer';
  const [selectedPortal, setSelectedPortal] = useState<'customer' | 'admin'>(initialPortal);
  const { currentUser, isAuthenticated, logout } = usePortalAuth();

  const isAuthedForSelected = isAuthenticated && currentUser?.role === selectedPortal;

  useEffect(() => {
    const view = searchParams.get('view');
    if (view === 'customer' || view === 'admin') {
      setSelectedPortal(view);
    }
  }, [searchParams]);

  const handleSwitchPortal = (portal: 'customer' | 'admin') => {
    setSelectedPortal(portal);
    setSearchParams({ view: portal });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>ROLE-BASED CLIENT & ENGINEERING ENVIRONMENTS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Dedicated Customer & Staff Portals
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            NexGrid provisions segregated, high-security digital environments for every stakeholder. 
            Review the explicit capability definitions below, or test the interactive environments live.
          </p>

          {/* Quick Section Anchors & Direct Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
            <Link
              to="/portal/signin"
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Portal Sign In</span>
            </Link>
            <Link
              to="/portal/signup"
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition-colors"
            >
              <UserPlus className="w-3.5 h-3.5 text-cyan-400" />
              <span>Register Client</span>
            </Link>
            <a
              href="#portal-simulator"
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              Live Sandbox
            </a>
            <a
              href="#portal-features"
              className="px-3.5 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/80 text-cyan-300 border border-cyan-500/40 font-semibold transition-colors"
            >
              Features Breakdown
            </a>
            <a
              href="#permissions-matrix"
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              Permissions Matrix
            </a>
          </div>
        </div>

        {/* Section 1: Definitive Role Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Customer Portal Card */}
          <div 
            className={`p-8 rounded-3xl border transition-all relative overflow-hidden group ${
              selectedPortal === 'customer'
                ? 'bg-gradient-to-b from-[#0e172a] to-[#090d16] border-cyan-500/80 shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500'
                : 'bg-[#0a0f1d] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                CLIENT ENVIRONMENT
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Customer Portal</span>
              {selectedPortal === 'customer' && (
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">Active Focus</span>
              )}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Designed for client executives, product managers, and internal operational leads to oversee system development, verify deliverables, and control billing with complete transparency.
            </p>

            <div className="space-y-2.5 mb-8 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Sprint & Milestone Tracking:</strong> Inspect weekly burnup charts and interactive staging previews.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Deliverable Sign-Offs:</strong> Review and sign off on database schemas, specs, and user journeys.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Invoicing & Escrow:</strong> Pay milestone releases via Stripe/ACH and download legal IP transfer pacts.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Priority Ticket SLAs:</strong> Submit change orders with guaranteed 4h to 24h engineering turnaround.</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/portal/customer"
                className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Launch Customer Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              
              <Link
                to="/portal/signin?role=customer"
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sign In</span>
              </Link>

              <Link
                to="/portal/signup"
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 border border-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </Link>
            </div>
          </div>

          {/* Staff / Admin Portal Card */}
          <div 
            className={`p-8 rounded-3xl border transition-all relative overflow-hidden group ${
              selectedPortal === 'admin'
                ? 'bg-gradient-to-b from-[#0e172a] to-[#090d16] border-blue-500/80 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500'
                : 'bg-[#0a0f1d] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Terminal className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800/50">
                STAFF / ADMIN CONSOLE
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Staff / Admin Portal</span>
              {selectedPortal === 'admin' && (
                <span className="text-xs font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded">Active Focus</span>
              )}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Engineered for NexGrid software architects, systems engineers, and project leads to orchestrate container clusters, triage support, and manage code cutovers.
            </p>

            <div className="space-y-2.5 mb-8 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Zero-Downtime Deploys:</strong> Trigger CI/CD pipelines, promote staging containers, and perform rollbacks.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Multi-Tenant Telemetry:</strong> Monitor P95 latency, requests/min, memory, and Postgres connection pools.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Triage & Issue Queue:</strong> Assign tickets, update statuses, deploy hotfixes, and audit delivery SLAs.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span><strong>Zero-Trust Security Stream:</strong> Verify mTLS handshakes, manage Git repo permissions, and audit keys.</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/portal/staff"
                className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Launch Staff Console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              
              <Link
                to="/portal/signin?role=admin"
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-400" />
                <span>Staff IAM Sign In</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Interactive Portal Simulator */}
        <div id="portal-simulator" className="mb-20 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">LIVE PORTAL WORKSPACE</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Interactive Environment Simulator
              </h3>
            </div>

            {/* Quick Switcher Buttons */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 self-start sm:self-auto">
              <button
                onClick={() => handleSwitchPortal('customer')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  selectedPortal === 'customer'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Customer View</span>
              </button>

              <button
                onClick={() => handleSwitchPortal('admin')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  selectedPortal === 'admin'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Staff / Admin View</span>
              </button>
            </div>
          </div>

          {/* Conditional Rendering: OTP Gate vs Authenticated Workspace */}
          {isAuthedForSelected ? (
            <div className="space-y-4">
              {/* Active Session Verification Bar */}
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 font-bold">OTP Session Verified:</span>
                  <span>{currentUser?.name}</span>
                  <span className="text-slate-500">({currentUser?.email})</span>
                  <span className="hidden md:inline text-slate-600">•</span>
                  <span className="hidden md:inline text-cyan-400">{currentUser?.clearanceLevel}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={logout}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer text-[11px]"
                    title="Lock session and test the OTP authentication flow again"
                  >
                    <Lock className="w-3 h-3" />
                    <span>Lock Session / Re-test OTP</span>
                  </button>
                </div>
              </div>

              {/* Render Active Portal */}
              {selectedPortal === 'customer' ? <CustomerPortal /> : <AdminPortal />}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Role Mismatch Notice if user is logged into the other portal */}
              {isAuthenticated && currentUser?.role !== selectedPortal && (
                <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-700/60 text-amber-300 text-xs flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>
                      <strong>Cross-Role Boundary Enforced:</strong> You are currently authenticated as <span className="font-mono text-white">{currentUser?.name}</span> ({currentUser?.role === 'customer' ? 'Customer Lead' : 'Staff Architect'}). Access to the {selectedPortal === 'customer' ? 'Customer Portal' : 'Staff / Admin Console'} requires passing One-Time Password (OTP) verification for that role.
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="text-[11px] font-mono underline hover:text-white shrink-0 cursor-pointer"
                  >
                    Clear Session
                  </button>
                </div>
              )}

              {/* OTP Gate */}
              <PortalOtpGate initialRole={selectedPortal} />
            </div>
          )}
        </div>

        {/* Section 3: Deep-Dive Features Breakdown Component */}
        <div className="mb-20">
          <PortalFeaturesBreakdown onSelectPortalView={handleSwitchPortal} />
        </div>

        {/* Section 4: Definitive Capability & Permissions Matrix */}
        <div id="permissions-matrix" className="scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              EXPLICIT PERMISSIONS MATRIX
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              What Customers vs. Staff/Admin Can Do
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              A comprehensive breakdown of functional boundaries, privilege levels, and governance rules enforced across NexGrid digital systems.
            </p>
          </div>

          <div className="bg-[#0a0f1d] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0e1628] text-slate-300 font-mono uppercase border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-6 w-1/4">Functional Domain & Capability</th>
                    <th className="py-4 px-6 w-3/8 text-cyan-300 bg-cyan-950/20 border-r border-slate-800/80">
                      Customer / Client Privileges
                    </th>
                    <th className="py-4 px-6 w-3/8 text-blue-300 bg-blue-950/20">
                      NexGrid Staff & Admin Privileges
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {ROLE_CAPABILITIES_MATRIX.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-900/40 transition-colors">
                      {/* Capability Name & Category */}
                      <td className="py-4 px-6">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                          {row.category}
                        </span>
                        <span className="text-sm font-bold text-white block">
                          {row.capability}
                        </span>
                      </td>

                      {/* Customer Side */}
                      <td className="py-4 px-6 bg-cyan-950/10 border-r border-slate-800/80">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800/60 text-cyan-300 font-mono text-[11px] mb-2 font-semibold">
                          {row.customerAccess}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-xs">
                          {row.customerDescription}
                        </p>
                      </td>

                      {/* Staff/Admin Side */}
                      <td className="py-4 px-6 bg-blue-950/10">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800/60 text-blue-300 font-mono text-[11px] mb-2 font-semibold">
                          {row.staffAdminAccess}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-xs">
                          {row.staffAdminDescription}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
