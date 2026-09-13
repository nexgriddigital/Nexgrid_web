import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Activity, 
  HelpCircle, 
  Clock, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  ExternalLink,
  Lock,
  Zap,
  Globe,
  LogOut,
  FolderGit2,
  Server,
  UserCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { 
  MOCK_ADMIN_TELEMETRY, 
  MOCK_ALL_PROJECTS, 
  MOCK_SECURITY_AUDIT_LOGS, 
  MOCK_TICKETS, 
  PortalTicket 
} from '../../data/portalData';
import { usePortalAuth } from '../../context/PortalAuthContext';

export const AdminPortal: React.FC = () => {
  const { currentUser, logout } = usePortalAuth();
  const displayName = currentUser?.name || 'Amanueal Hailu';
  const displayEmail = currentUser?.email || 'amanuealhailu007@gmail.com';
  const displayTitle = currentUser?.title || 'Owner & Super Admin';

  // Default to 'projects' as requested and shown in user's screenshot
  const [activeTab, setActiveTab] = useState<'projects' | 'telemetry' | 'tickets' | 'security'>('projects');
  const [telemetry, setTelemetry] = useState(MOCK_ADMIN_TELEMETRY);
  const [projects, setProjects] = useState(MOCK_ALL_PROJECTS);
  const [tickets, setTickets] = useState<PortalTicket[]>(MOCK_TICKETS);
  const [isDeploying, setIsDeploying] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [adminToast, setAdminToast] = useState<string | null>(null);

  const handleSimulateDeploy = (projectName: string) => {
    setIsDeploying(projectName);
    setAdminToast(`Publishing latest updates for ${projectName}...`);

    setTimeout(() => {
      setIsDeploying(null);
      setAdminToast(`✓ Success: ${projectName} has been updated and is live!`);
      setTimeout(() => setAdminToast(null), 4500);
    }, 1500);
  };

  const handleRefreshStatus = () => {
    setIsRefreshing(true);
    setAdminToast('Checking all systems and updating live status...');
    setTimeout(() => {
      setIsRefreshing(false);
      setAdminToast('✓ All 14 cloud systems checked: 100% operational and healthy.');
      setTimeout(() => setAdminToast(null), 3500);
    }, 800);
  };

  const handleToggleTicketStatus = (ticketId: string) => {
    setTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        const nextStatus = t.status === 'Resolved' ? 'In Progress' : 'Resolved';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
    setAdminToast(`Support ticket ${ticketId} updated successfully.`);
    setTimeout(() => setAdminToast(null), 3000);
  };

  // Plain-English project summaries
  const projectDescriptions: Record<string, { purpose: string; phase: string }> = {
    'PRJ-APEX': {
      purpose: 'Fleet management, driver dispatching, and real-time GPS tracking for delivery trucks.',
      phase: 'Testing & Client Review (Delivery in 22 days)'
    },
    'PRJ-LUMINA': {
      purpose: 'High-speed online storefront with instant checkout and inventory tracking.',
      phase: 'Live in Production (Selling globally)'
    },
    'PRJ-STRATA': {
      purpose: 'Secure financial vault and private investor portal with two-factor login.',
      phase: 'In Active Development (Sprint 3 of 4)'
    }
  };

  return (
    <div className="bg-[#070b12] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Friendly Notification Toast */}
      {adminToast && (
        <div className="bg-cyan-950/90 border-b border-cyan-800/80 px-5 py-3 text-xs text-cyan-200 flex items-center justify-between animate-in fade-in">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="font-medium">{adminToast}</span>
          </span>
          <button 
            onClick={() => setAdminToast(null)} 
            className="text-cyan-400 hover:text-white text-xs px-2 py-0.5 rounded cursor-pointer font-medium"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Clear, Professional Header */}
      <div className="p-6 sm:p-8 bg-[#0a101d] border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                Owner & Administrator
              </span>
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Full Management Access
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              NexGrid Business & Operations Dashboard
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1">
              <span>
                Signed in as: <strong className="text-white">{displayName}</strong> ({displayTitle})
              </span>
              <span>•</span>
              <span className="text-cyan-300 font-mono">{displayEmail}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                <CheckCircle2 className="w-3 h-3" />
                <span>Secure Session Active</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={handleRefreshStatus}
            disabled={isRefreshing}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
            title="Refresh current system and project status"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh Status'}</span>
          </button>

          <div className="px-3.5 py-2 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-xs font-medium text-emerald-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All 14 Systems Online</span>
          </div>

          <button
            type="button"
            onClick={logout}
            className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-800 hover:border-rose-800/60 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Sign out of your session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Clear Navigation Tabs in Plain English */}
      <div className="px-6 sm:px-8 border-b border-slate-800 bg-[#080d17] flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('projects')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'projects'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Client Projects</span>
          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 text-[11px] font-bold">
            {projects.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('telemetry')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'telemetry'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>System Health & Speed</span>
        </button>

        <button
          onClick={() => setActiveTab('tickets')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'tickets'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Customer Support Requests</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/60 text-[11px] font-bold">
            {tickets.filter(t => t.status !== 'Resolved').length} Open
          </span>
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'security'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>Security & Activity Log</span>
        </button>
      </div>

      {/* TAB 1: CLIENT PROJECTS (Primary view) */}
      {activeTab === 'projects' && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0d1424] p-4 rounded-2xl border border-slate-800">
            <div>
              <div className="text-xs text-slate-400">Total Client Projects</div>
              <div className="text-xl font-bold text-white mt-0.5">3 Active</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Live in Production</div>
              <div className="text-xl font-bold text-emerald-400 mt-0.5">1 Live (Lumina)</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">In Testing & Review</div>
              <div className="text-xl font-bold text-cyan-400 mt-0.5">2 On Schedule</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Next Target Delivery</div>
              <div className="text-xl font-bold text-amber-300 mt-0.5">Oct 04, 2026</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">Active Client Projects</h3>
              <p className="text-xs text-slate-400">
                Review progress for each client, delivery timelines, and publish live software updates with one click.
              </p>
            </div>
          </div>

          {/* Clean Project Cards */}
          <div className="space-y-4">
            {projects.map((proj) => {
              const info = projectDescriptions[proj.id] || {
                purpose: 'Custom digital system solution engineered for the client.',
                phase: 'In Progress'
              };

              const isLive = proj.status.toLowerCase().includes('live');
              const isStaging = proj.status.toLowerCase().includes('staging');

              return (
                <div 
                  key={proj.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-5"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-white bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                        {proj.client}
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        <span>Delivery: <strong>{proj.nextDelivery}</strong></span>
                      </span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs font-medium text-slate-300">
                        Plan: {proj.slaTier}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white">{proj.name}</h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {info.purpose}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                      <span className="text-slate-500">Current Phase:</span>
                      <span className="text-cyan-300 font-medium">{info.phase}</span>
                    </div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                    <div className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border ${
                      isLive 
                        ? 'bg-emerald-950/60 border-emerald-700 text-emerald-300'
                        : isStaging
                        ? 'bg-cyan-950/60 border-cyan-700 text-cyan-300'
                        : 'bg-amber-950/60 border-amber-700 text-amber-300'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'}`}></span>
                      <span>{isLive ? 'Live & Running' : isStaging ? 'In Testing (Staging Demo)' : 'In Active Development'}</span>
                    </div>

                    <button
                      disabled={isDeploying === proj.name}
                      onClick={() => handleSimulateDeploy(proj.name)}
                      className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-lg shadow-cyan-500/10"
                      title="Publish latest updates to make them live for the client"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isDeploying === proj.name ? 'Publishing Updates...' : 'Publish Update'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: SYSTEM HEALTH & SPEED (Plain English Metrics) */}
      {activeTab === 'telemetry' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">System Health & Performance</h3>
            <p className="text-xs text-slate-400">
              Clear, real-time indicators showing how fast your websites are loading and server reliability.
            </p>
          </div>

          {/* Simple 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-1">VISITOR ACTIVITY</span>
              <div className="text-2xl font-black text-white mb-1">{telemetry.totalRequestsPerMin}</div>
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Normal traffic flowing smoothly
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-1">PAGE LOADING SPEED</span>
              <div className="text-2xl font-black text-cyan-400 mb-1">{telemetry.averageLatencyMs} ms</div>
              <span className="text-xs text-slate-300 font-medium">
                Super fast (Under 50ms standard)
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-1">SYSTEM UPTIME</span>
              <div className="text-2xl font-black text-emerald-400 mb-1">99.99%</div>
              <span className="text-xs text-emerald-400 font-medium">
                Zero crashes or service outages
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800">
              <span className="text-xs font-semibold text-slate-400 block mb-1">CLOUD SERVERS</span>
              <div className="text-2xl font-black text-indigo-300 mb-1">{telemetry.activeContainers} Servers</div>
              <span className="text-xs text-slate-300 font-medium">
                100% online across all regions
              </span>
            </div>
          </div>

          {/* Human-Friendly Live Activity Feed (replacing raw terminal code) */}
          <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-300">
              <span className="flex items-center gap-2 font-semibold text-white text-sm">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span>Live System Status Feed</span>
              </span>
              <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Everything Operational
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Apex Logistics Platform is active</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">All driver GPS tracking feeds and dispatch tables are loading without delay.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Databases running at optimal speed</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">Customer records, user logins, and order data responding in under 38 milliseconds.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Security and SSL certificates verified</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">All customer connections encrypted and secure with 24/7 automated monitoring.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CUSTOMER SUPPORT REQUESTS */}
      {activeTab === 'tickets' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-white">Customer Support Requests</h3>
              <p className="text-xs text-slate-400">
                Review questions or requests submitted by your clients and track when they are completed.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {tickets.map((tck) => (
              <div 
                key={tck.id}
                className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                      {tck.id}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-semibold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                      {tck.priority}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-300">
                      Client: <strong>{tck.author}</strong>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">{tck.title}</h4>
                  
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <span>Lead Assigned:</span>
                    <span className="text-cyan-300 font-medium">{tck.assignedEngineer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={() => handleToggleTicketStatus(tck.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                      tck.status === 'Resolved'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700 hover:bg-emerald-900'
                        : 'bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 shadow-md shadow-cyan-500/10'
                    }`}
                  >
                    {tck.status === 'Resolved' ? '✓ Resolved (Click to Re-open)' : 'Mark as Completed ✓'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SECURITY & ACTIVITY LOG */}
      {activeTab === 'security' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">Security & Login Activity</h3>
            <p className="text-xs text-slate-400">
              A transparent chronological record of logins and system updates for your peace of mind.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#0d1424]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-300 uppercase font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Action / Event</th>
                  <th className="py-3.5 px-4">System Affected</th>
                  <th className="py-3.5 px-4">User / Actor</th>
                  <th className="py-3.5 px-4">When</th>
                  <th className="py-3.5 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {MOCK_SECURITY_AUDIT_LOGS.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3.5 px-4 text-white font-medium">{log.event}</td>
                    <td className="py-3.5 px-4 text-cyan-300 font-mono text-[11px]">{log.target}</td>
                    <td className="py-3.5 px-4 text-slate-300">{log.sourceIp}</td>
                    <td className="py-3.5 px-4 text-slate-400">{log.time}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-[10px] font-bold">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
