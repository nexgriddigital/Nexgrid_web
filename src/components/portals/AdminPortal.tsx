import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  Terminal, 
  Server, 
  Activity, 
  GitPullRequest, 
  Users, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RefreshCw, 
  ArrowUpRight,
  Filter,
  Lock,
  Zap,
  Globe,
  LogOut
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
  const displayName = currentUser?.name || 'Alex Vance';
  const displayEmail = currentUser?.email || 'alex.vance@nexgrid.tech';
  const displayTitle = currentUser?.title || 'Lead Architect & Superadmin';
  const displayToken = currentUser?.token || 'ng_tok_adm_77a1c4e902b8';

  const [activeTab, setActiveTab] = useState<'telemetry' | 'projects' | 'tickets' | 'security'>('telemetry');
  const [telemetry, setTelemetry] = useState(MOCK_ADMIN_TELEMETRY);
  const [projects, setProjects] = useState(MOCK_ALL_PROJECTS);
  const [tickets, setTickets] = useState<PortalTicket[]>(MOCK_TICKETS);
  const [isDeploying, setIsDeploying] = useState(false);
  const [adminToast, setAdminToast] = useState<string | null>(null);

  const handleSimulateDeploy = (projectName: string) => {
    setIsDeploying(true);
    setAdminToast(`Initiating zero-downtime CI/CD container build for ${projectName}...`);

    setTimeout(() => {
      setIsDeploying(false);
      setAdminToast(`Success: ${projectName} container promoted to latest staging release.`);
      setTimeout(() => setAdminToast(null), 4000);
    }, 2000);
  };

  const handlePurgeCache = () => {
    setAdminToast('Edge Cloudflare CDN cache purged globally (24 PoPs cleared in 420ms).');
    setTimeout(() => setAdminToast(null), 4000);
  };

  const handleToggleTicketStatus = (ticketId: string) => {
    setTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        const nextStatus = t.status === 'Resolved' ? 'In Progress' : 'Resolved';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
    setAdminToast(`Ticket ${ticketId} status updated.`);
    setTimeout(() => setAdminToast(null), 3000);
  };

  return (
    <div className="bg-[#070b12] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Toast Bar */}
      {adminToast && (
        <div className="bg-cyan-950 border-b border-cyan-800/80 px-4 py-2.5 text-xs text-cyan-300 flex items-center justify-between animate-in fade-in">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>{adminToast}</span>
          </span>
          <button onClick={() => setAdminToast(null)} className="text-cyan-400 hover:text-white text-xs">Dismiss</button>
        </div>
      )}

      {/* Staff Header */}
      <div className="p-6 sm:p-8 bg-[#0a101d] border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-blue-500/50 flex items-center justify-center shrink-0">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                STAFF / ADMIN CONSOLE
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                SUPERUSER PERMISSIONS
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              NexGrid Systems Engineering Cockpit
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1">
              <span>
                Authenticated: <strong className="text-slate-200">{displayName}</strong> ({displayTitle})
              </span>
              <span>•</span>
              <span className="text-blue-300 font-mono">{displayEmail}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                <Lock className="w-3 h-3" />
                <span>OTP Verified: {displayToken.slice(0, 12)}...</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePurgeCache}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span>Purge Edge Cache</span>
          </button>

          <div className="px-3 py-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All 14 Clusters Healthy</span>
          </div>

          <button
            type="button"
            onClick={logout}
            className="px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-red-950/40 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-800/60 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Sign out of engineering console and return to OTP authentication"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-6 sm:px-8 border-b border-slate-800 bg-[#080d17] flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('telemetry')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'telemetry'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Infrastructure & Telemetry</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'projects'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Client Projects Matrix</span>
          <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 text-[10px]">{projects.length}</span>
        </button>

        <button
          onClick={() => setActiveTab('tickets')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'tickets'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <GitPullRequest className="w-4 h-4" />
          <span>Engineering Triage</span>
          <span className="px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 text-[10px]">{tickets.filter(t => t.status !== 'Resolved').length} Active</span>
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
          <span>Audit Stream & Security</span>
        </button>
      </div>

      {/* Tab 1: Telemetry */}
      {activeTab === 'telemetry' && (
        <div className="p-6 sm:p-8 space-y-6">
          {/* Telemetry Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-1">AGGREGATE THROUGHPUT</span>
              <div className="text-2xl font-extrabold font-mono text-white mb-1">{telemetry.totalRequestsPerMin}</div>
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Nominal Traffic Curve
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-1">AVERAGE P95 LATENCY</span>
              <div className="text-2xl font-extrabold font-mono text-cyan-400 mb-1">{telemetry.averageLatencyMs} ms</div>
              <span className="text-xs text-slate-400 font-mono">Target &lt; 50ms (Exceeded)</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-1">ERROR RATE (4XX/5XX)</span>
              <div className="text-2xl font-extrabold font-mono text-emerald-400 mb-1">{telemetry.errorRatePercent}%</div>
              <span className="text-xs text-emerald-400 font-mono">SLA: 99.988% Up</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 block mb-1">ACTIVE CLUSTERS</span>
              <div className="text-2xl font-extrabold font-mono text-indigo-400 mb-1">{telemetry.activeContainers} Nodes</div>
              <span className="text-xs text-slate-400 font-mono">{telemetry.databaseConnections} Pool Connections</span>
            </div>
          </div>

          {/* Quick Command Terminal Simulation */}
          <div className="p-5 rounded-2xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-slate-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>NEXGRID DEPLOYMENT & TELEMETRY STREAM</span>
              </span>
              <span className="text-emerald-400">LIVE SYNC</span>
            </div>

            <div className="space-y-1 text-slate-300">
              <p><span className="text-cyan-400">[08:12:04 UTC]</span> gVisor container sandbox: Apex Logistics OS (v2.4.0-rc1) running on port 3000</p>
              <p><span className="text-cyan-400">[08:12:15 UTC]</span> Postgres pg_stat_statements: 0 slow queries (&gt;100ms) recorded across 18 schemas</p>
              <p><span className="text-cyan-400">[08:12:44 UTC]</span> Redis Pub/Sub: 142 GPS driver packets processed / sec (0 dropped)</p>
              <p><span className="text-emerald-400">[08:13:00 UTC]</span> Security Heartbeat: all mTLS certificates valid until 2027</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Projects Matrix */}
      {activeTab === 'projects' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Multi-Tenant Client Deployments</h3>
              <p className="text-xs text-slate-400">Direct pipeline controls to build, test, and promote client software.</p>
            </div>
          </div>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="p-5 rounded-2xl bg-[#0d1424] border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                      {proj.client}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-mono text-cyan-400">{proj.branch}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-mono text-indigo-400">{proj.slaTier}</span>
                  </div>

                  <h4 className="text-base font-bold text-white">{proj.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">Stack: {proj.tech} • Delivery: {proj.nextDelivery}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                    {proj.status}
                  </span>

                  <button
                    disabled={isDeploying}
                    onClick={() => handleSimulateDeploy(proj.name)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isDeploying ? 'Deploying...' : 'Promote Build'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Tickets Triage */}
      {activeTab === 'tickets' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Client Issue Triage & Engineering Queue</h3>
              <p className="text-xs text-slate-400">Strict SLA countdown monitoring and assignment.</p>
            </div>
          </div>

          <div className="space-y-3">
            {tickets.map((tck) => (
              <div 
                key={tck.id}
                className="p-5 rounded-xl bg-[#0d1424] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-cyan-400">{tck.id}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-amber-400">{tck.priority}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">Author: {tck.author}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{tck.title}</h4>
                  <p className="text-xs text-slate-400 font-mono">Assigned Staff: {tck.assignedEngineer}</p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <button
                    onClick={() => handleToggleTicketStatus(tck.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors cursor-pointer ${
                      tck.status === 'Resolved'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800 hover:bg-amber-900'
                    }`}
                  >
                    {tck.status === 'Resolved' ? 'Status: RESOLVED (Click to Re-open)' : 'Click to Mark RESOLVED'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Security & Audit Stream */}
      {activeTab === 'security' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Immutable Security Audit Trail</h3>
              <p className="text-xs text-slate-400">Real-time recording of zero-trust handshakes and authorization events.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-900/80 text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Event Type</th>
                  <th className="py-3 px-4">Target Resource</th>
                  <th className="py-3 px-4">Source / Actor</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {MOCK_SECURITY_AUDIT_LOGS.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 text-white font-medium">{log.event}</td>
                    <td className="py-3.5 px-4 text-cyan-400">{log.target}</td>
                    <td className="py-3.5 px-4 text-slate-400">{log.sourceIp}</td>
                    <td className="py-3.5 px-4 text-slate-500">{log.time}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px]">
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
