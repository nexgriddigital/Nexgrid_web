import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Terminal, 
  ShieldCheck, 
  LogOut, 
  Lock, 
  ArrowRight, 
  ArrowLeft,
  Building2,
  Cpu
} from 'lucide-react';
import { AdminPortal } from '../components/portals/AdminPortal';
import { usePortalAuth } from '../context/PortalAuthContext';

export const StaffPortalPage: React.FC = () => {
  const { currentUser, isAuthenticated, logout } = usePortalAuth();
  const navigate = useNavigate();

  const isStaffAuthed = isAuthenticated && currentUser?.role === 'admin';

  const handleSignOut = () => {
    logout();
    navigate('/portal/signin?role=admin');
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Owner & Admin Dashboard</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {isStaffAuthed ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-white font-semibold">{currentUser?.name}</span>
                  <span className="text-cyan-400 font-medium">• Owner & Super Admin</span>
                </div>

                <Link
                  to="/portal/customer"
                  className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">View Customer Portal</span>
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
                  to="/portal/signin?role=admin"
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Staff IAM Sign In</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Content View */}
        {isStaffAuthed ? (
          <div>
            <AdminPortal />
          </div>
        ) : (
          <div className="max-w-2xl mx-auto my-12 bg-[#0b111e] border border-slate-800 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6">
              <Terminal className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>STAFF CLEARANCE REQUIRED</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Engineering Console is Restricted
            </h2>
            
            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-lg mx-auto">
              This environment provides root telemetry, database query logs, CI/CD pipeline deployments, and security feature flag controls for NexGrid engineering personnel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                to="/portal/signin?role=admin"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/10"
              >
                <span>Sign In with Staff SSO / OTP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/portals"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Return to Overview</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
