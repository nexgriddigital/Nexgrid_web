import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  LogOut, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  Terminal,
  Zap,
  UserCheck
} from 'lucide-react';
import { CustomerPortal } from '../components/portals/CustomerPortal';
import { usePortalAuth } from '../context/PortalAuthContext';

export const CustomerPortalPage: React.FC = () => {
  const { currentUser, isAuthenticated, logout, quickDemoLogin } = usePortalAuth();
  const navigate = useNavigate();

  const isCustomerAuthed = isAuthenticated && currentUser?.role === 'customer';

  const handleSignOut = () => {
    logout();
    navigate('/portal/signin?role=customer');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/portals" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Portals Overview</span>
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Customer Portal Dashboard</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {isCustomerAuthed ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white font-semibold">{currentUser?.name}</span>
                  <span className="text-slate-400">• {currentUser?.organization}</span>
                </div>

                <Link
                  to="/portal/staff"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">View Staff Console</span>
                </Link>

                <button
                  onClick={handleSignOut}
                  className="px-3 py-1.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/50 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/portal/signin?role=customer"
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Sign In to Access</span>
                </Link>
                <Link
                  to="/portal/signup"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono transition-colors"
                >
                  Register Organization
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Content View */}
        {isCustomerAuthed ? (
          <div>
            <CustomerPortal />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto my-12 bg-[#0b111e] border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>AUTHENTICATION REQUIRED</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Customer Portal is Protected
            </h2>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
              Please authenticate with your client corporate credentials or register your organization to view live deliverables, sign SOW milestones, review invoices, and manage tickets.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                to="/portal/signin?role=customer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/10"
              >
                <span>Sign In to Client Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portal/signup"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Register New Client Account</span>
              </Link>
            </div>

            {/* Quick Demo Access */}
            <div className="pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-3">
                FOR EVALUATION & REVIEW:
              </span>
              <button
                onClick={() => quickDemoLogin('customer')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-xs font-mono inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>One-Click Client Demo Login (Sarah Chen — Apex Logistics)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
