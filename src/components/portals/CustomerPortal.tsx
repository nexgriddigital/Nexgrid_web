import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  FileText, 
  Layers, 
  MessageSquare, 
  Plus, 
  ShieldCheck, 
  Key, 
  GitBranch, 
  AlertCircle, 
  Download, 
  Send,
  Eye,
  CreditCard,
  Sparkles,
  ChevronRight,
  LogOut,
  Lock,
  FolderLock,
  Copy,
  Check,
  Upload
} from 'lucide-react';
import { 
  MOCK_CLIENT_PROJECT, 
  MOCK_CLIENT_INVOICES, 
  MOCK_TICKETS, 
  ClientInvoice, 
  PortalTicket 
} from '../../data/portalData';
import { usePortalAuth } from '../../context/PortalAuthContext';

export const CustomerPortal: React.FC = () => {
  const { currentUser, logout } = usePortalAuth();
  const displayName = currentUser?.name || 'Sarah Jenkins';
  const displayEmail = currentUser?.email || 'sarah.jenkins@apexlogistics.io';
  const displayOrg = currentUser?.organization || 'Apex Logistics Corp';
  const displayTitle = currentUser?.title || 'VP Operations';
  const displayToken = currentUser?.token || 'bg_tok_cst_892f3a4b901e';

  const [activeTab, setActiveTab] = useState<'system' | 'billing' | 'tickets' | 'files' | 'code'>('system');
  const [invoices, setInvoices] = useState<ClientInvoice[]>(MOCK_CLIENT_INVOICES);
  const [tickets, setTickets] = useState<PortalTicket[]>(MOCK_TICKETS);
  const [milestones, setMilestones] = useState(MOCK_CLIENT_PROJECT.milestones);
  const [apiKeyRevealed, setApiKeyRevealed] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [approvalToast, setApprovalToast] = useState<string | null>(null);
  const [copiedFileChecksum, setCopiedFileChecksum] = useState<string | null>(null);

  // Secure Vault Files
  const [vaultFiles, setVaultFiles] = useState([
    {
      id: 'f-1',
      name: 'Apex_Architecture_Blueprint_v2.4.pdf',
      category: 'System Architecture',
      size: '14.2 MB',
      checksum: 'sha256:8f9a2e...c291',
      date: 'Aug 14, 2026',
      clearance: 'All Client Roles',
      status: 'Verified Signed'
    },
    {
      id: 'f-2',
      name: 'PostgreSQL_Schema_Migration_v2.4.sql',
      category: 'Database Spec',
      size: '184 KB',
      checksum: 'sha256:3d11b8...70e4',
      date: 'Aug 28, 2026',
      clearance: 'Technical Leads',
      status: 'Signed Off'
    },
    {
      id: 'f-3',
      name: 'OpenAPI_3.1_Dispatch_Endpoints.json',
      category: 'API Contract',
      size: '890 KB',
      checksum: 'sha256:99bc41...04a2',
      date: 'Sep 10, 2026',
      clearance: 'Developers & Leads',
      status: 'Live on Staging'
    },
    {
      id: 'f-4',
      name: 'NexGrid_Mutual_NDA_Executed.pdf',
      category: 'Legal Pact',
      size: '2.1 MB',
      checksum: 'sha256:12e8c0...fa09',
      date: 'Aug 10, 2026',
      clearance: 'Executive Signatory',
      status: 'Legally Binding'
    },
    {
      id: 'f-5',
      name: 'NexGrid_IP_Ownership_Transfer_Deed.pdf',
      category: 'Intellectual Property',
      size: '1.4 MB',
      checksum: 'sha256:77fa11...b901',
      date: 'Sep 12, 2026',
      clearance: 'Executive Signatory',
      status: 'Held in Escrow'
    }
  ]);

  const handleDownloadVaultFile = (fileName: string) => {
    const token = `tok_${Math.random().toString(36).substring(2, 8)}`;
    setApprovalToast(`Generated 15-min signed token (${token}) for "${fileName}". Secure download started.`);
    setTimeout(() => setApprovalToast(null), 5000);
  };

  const handleCopyFileChecksum = (checksum: string) => {
    navigator.clipboard.writeText(checksum);
    setCopiedFileChecksum(checksum);
    setTimeout(() => setCopiedFileChecksum(null), 2500);
  };

  // New ticket modal state
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    title: '',
    category: 'Feature Request' as PortalTicket['category'],
    priority: 'Normal (24h SLA)' as PortalTicket['priority'],
    description: ''
  });

  const handleApproveMilestone = (id: string, title: string) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, approvedByClient: true } : m));
    setApprovalToast(`Approved deliverable: ${title}`);
    setTimeout(() => setApprovalToast(null), 4000);
  };

  const handlePayInvoice = (id: string) => {
    setInvoices(prev => prev.map(inv => inv.id === id ? { ...inv, status: 'Paid' } : inv));
    setApprovalToast('Invoice payment simulated successfully. Receipt generated.');
    setTimeout(() => setApprovalToast(null), 4000);
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.title.trim()) return;

    const newTicket: PortalTicket = {
      id: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      title: ticketForm.title,
      category: ticketForm.category,
      priority: ticketForm.priority,
      status: 'Open',
      createdAt: 'Just now',
      author: 'Sarah Jenkins (Client)',
      assignedEngineer: 'Alex Vance (Lead Architect)',
      messagesCount: 1
    };

    setTickets([newTicket, ...tickets]);
    setTicketForm({
      title: '',
      category: 'Feature Request',
      priority: 'Normal (24h SLA)',
      description: ''
    });
    setIsTicketModalOpen(false);
    setApprovalToast('Ticket submitted. Priority SLA timer initialized.');
    setTimeout(() => setApprovalToast(null), 4000);
  };

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText('bg_live_apex_99f38a01c2e44d88e00192');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2500);
  };

  return (
    <div className="bg-[#090d16] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Toast Notification */}
      {approvalToast && (
        <div className="bg-cyan-950 border-b border-cyan-800/80 px-4 py-2.5 text-xs text-cyan-300 flex items-center justify-between animate-in fade-in">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{approvalToast}</span>
          </span>
          <button onClick={() => setApprovalToast(null)} className="text-cyan-400 hover:text-white text-xs">Dismiss</button>
        </div>
      )}

      {/* Portal Top Header Bar */}
      <div className="p-6 sm:p-8 bg-[#0c1322] border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-cyan-400" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                CUSTOMER PORTAL
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE SPRINT
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {displayOrg}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1">
              <span>
                Authorized: <strong className="text-slate-200">{displayName}</strong> ({displayTitle})
              </span>
              <span>•</span>
              <span className="text-cyan-300 font-mono">{displayEmail}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                <Lock className="w-3 h-3" />
                <span>OTP Verified: {displayToken.slice(0, 12)}...</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#staging-preview"
            onClick={(e) => { e.preventDefault(); alert('Redirecting to secure Staging preview environment: https://staging.apex-logistics.nexgrid.cloud'); }}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>Launch Staging Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <span className="text-slate-500">Lead Architect:</span>
            <span className="text-white font-medium">Alex Vance</span>
          </div>

          <button
            type="button"
            onClick={logout}
            className="px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-red-950/40 text-slate-400 hover:text-red-300 border border-slate-800 hover:border-red-800/60 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Sign out of customer session and return to OTP authentication"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="px-6 sm:px-8 border-b border-slate-800 bg-[#0a0f1c] flex items-center gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('system')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'system'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>System & Milestones</span>
          <span className="px-1.5 py-0.2 rounded bg-cyan-900/60 text-cyan-300 text-[10px]">78%</span>
        </button>

        <button
          onClick={() => setActiveTab('billing')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'billing'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <CreditCard className="w-4 h-4" />
          <span>Invoices & Contracts</span>
          {invoices.some(i => i.status === 'Pending Approval') && (
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('tickets')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'tickets'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Tickets & SLAs</span>
          <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 text-[10px]">{tickets.length}</span>
        </button>

        <button
          onClick={() => setActiveTab('files')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'files'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <FolderLock className="w-4 h-4" />
          <span>Secure File Vault</span>
          <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 text-[10px] border border-cyan-800/40">{vaultFiles.length}</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`py-3.5 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
            activeTab === 'code'
              ? 'text-cyan-400 border-cyan-400 bg-cyan-950/20'
              : 'text-slate-400 border-transparent hover:text-slate-200'
          }`}
        >
          <Key className="w-4 h-4" />
          <span>Code & API Keys</span>
        </button>
      </div>

      {/* Tab 1: System & Milestones */}
      {activeTab === 'system' && (
        <div className="p-6 sm:p-8 space-y-8">
          {/* Progress Overview Card */}
          <div className="p-6 rounded-2xl bg-[#0e1626] border border-slate-800/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  SPRINT PROGRESS & HEALTH
                </span>
                <h3 className="text-lg font-bold text-white">
                  Sprint 4: WebSocket Telemetry & Route Optimization
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-2xl font-extrabold font-mono text-cyan-400">78%</span>
                <span className="text-xs text-slate-400 block">Overall Target Completion</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: '78%' }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 border-t border-slate-800 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">TARGET LAUNCH</span>
                <span className="text-white font-semibold">Oct 15, 2026</span>
              </div>
              <div>
                <span className="text-slate-500 block">STAGING VERSION</span>
                <span className="text-cyan-400 font-semibold">v2.4.0-rc1</span>
              </div>
              <div>
                <span className="text-slate-500 block">CI/CD PIPELINE</span>
                <span className="text-emerald-400 font-semibold">All Tests Passing (41/41)</span>
              </div>
              <div>
                <span className="text-slate-500 block">UPTIME SLA</span>
                <span className="text-indigo-400 font-semibold">99.98% Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Milestone Deliverables Checklist */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Phase Deliverables & Sign-Off Schedule</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">
                Customer Acceptance Verification
              </span>
            </div>

            <div className="space-y-3">
              {milestones.map((m, idx) => (
                <div 
                  key={m.id}
                  className={`p-5 rounded-xl border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    m.status === 'completed'
                      ? 'bg-slate-900/50 border-slate-800'
                      : m.status === 'current'
                      ? 'bg-cyan-950/20 border-cyan-800/60 shadow-lg'
                      : 'bg-slate-900/20 border-slate-800/40 opacity-70'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        m.status === 'completed' ? 'bg-emerald-400' :
                        m.status === 'current' ? 'bg-cyan-400 animate-ping' : 'bg-slate-600'
                      }`} />
                      <span className="text-xs font-mono text-slate-400">{m.date}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.2 rounded uppercase ${
                        m.status === 'completed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' :
                        m.status === 'current' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {m.status}
                      </span>
                    </div>

                    <h5 className="text-sm font-bold text-white">{m.title}</h5>
                    <p className="text-xs text-slate-400 font-mono">Deliverables: {m.deliverable}</p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    {m.approvedByClient ? (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approved & Verified</span>
                      </span>
                    ) : m.status === 'current' ? (
                      <button
                        onClick={() => handleApproveMilestone(m.id, m.title)}
                        className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Sign-Off & Approve Deliverable</span>
                      </button>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Awaiting Prior Phase</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Billing & Contracts */}
      {activeTab === 'billing' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Milestone Invoicing & Contracts</h3>
              <p className="text-xs text-slate-400">All deliverables backed by deliverable escrow release.</p>
            </div>

            <button
              onClick={() => alert('Downloading Master Services Agreement & Intellectual Property Transfer Contract (PDF)...')}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Master Contract (PDF)</span>
            </button>
          </div>

          <div className="space-y-3">
            {invoices.map((inv) => (
              <div 
                key={inv.id}
                className="p-5 rounded-xl bg-[#0e1626] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-cyan-400 font-bold">{inv.number}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400 font-mono">Issued {inv.invoiceDate}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{inv.milestone}</h4>
                  <span className="text-xs text-slate-400">Due: {inv.dueDate}</span>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <span className="text-lg font-extrabold font-mono text-white">{inv.amount}</span>
                  
                  {inv.status === 'Paid' ? (
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 text-xs font-mono flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>PAID</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handlePayInvoice(inv.id)}
                      className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Authorize Payment</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>Full copyright, Git repository ownership, and database migrations are legally transferred to your organization upon final milestone clearance.</span>
          </div>
        </div>
      )}

      {/* Tab 3: Tickets & SLAs */}
      {activeTab === 'tickets' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">Tickets & Priority Change Orders</h3>
              <p className="text-xs text-slate-400">Direct engineering escalation with guaranteed SLA response times.</p>
            </div>

            <button
              onClick={() => setIsTicketModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Submit New Ticket</span>
            </button>
          </div>

          <div className="space-y-3">
            {tickets.map((tck) => (
              <div 
                key={tck.id}
                className="p-5 rounded-xl bg-[#0e1626] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">{tck.id}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-mono text-slate-400">{tck.category}</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-mono text-amber-400">{tck.priority}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{tck.title}</h4>
                  <p className="text-xs text-slate-400">
                    Assigned to: <span className="text-slate-200">{tck.assignedEngineer}</span> • Submitted {tck.createdAt}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-mono font-semibold ${
                    tck.status === 'Resolved' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40' :
                    tck.status === 'In Progress' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40' :
                    'bg-slate-800 text-slate-300'
                  }`}>
                    {tck.status}
                  </span>

                  <button
                    onClick={() => alert(`Opening ticket discussion thread for ${tck.id}...`)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="View Discussion"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Ticket Submission Modal */}
          {isTicketModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="w-full max-w-lg rounded-2xl bg-[#0c1220] border border-slate-700 p-6 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <h4 className="text-base font-bold text-white">Create Technical Ticket / Scope Request</h4>
                  <button onClick={() => setIsTicketModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>

                <form onSubmit={handleCreateTicket} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Issue / Feature Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Export multi-stop route manifests to CSV"
                      value={ticketForm.title}
                      onChange={e => setTicketForm({ ...ticketForm, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">Category</label>
                      <select
                        value={ticketForm.category}
                        onChange={e => setTicketForm({ ...ticketForm, category: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Feature Request">Feature Request</option>
                        <option value="Bug">Bug Report</option>
                        <option value="Performance">Performance Optimization</option>
                        <option value="Question">Technical Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-300 block mb-1">SLA Tier</label>
                      <select
                        value={ticketForm.priority}
                        onChange={e => setTicketForm({ ...ticketForm, priority: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Normal (24h SLA)">Normal (24h SLA)</option>
                        <option value="High (12h SLA)">High (12h SLA)</option>
                        <option value="Critical (4h SLA)">Critical (4h SLA)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1">Detailed Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the desired behavior, user story, or steps to reproduce..."
                      value={ticketForm.description}
                      onChange={e => setTicketForm({ ...ticketForm, description: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setIsTicketModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Code & API Keys */}
      {activeTab === 'code' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Git Repository Access Card */}
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-3">
                  <GitBranch className="w-4 h-4" />
                  <span>PRIVATE REPOSITORY STATUS</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">github.com/nexgrid/apex-logistics-os</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Full repository visibility with branch protection rules. Your engineering team has read and pull permissions on all staging releases.
                </p>

                <div className="space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Default Branch:</span>
                    <span className="text-white">release/v2.4</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>License:</span>
                    <span className="text-emerald-400">Exclusive Commercial Ownership</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => alert('Access verified. You have full contributor and reviewer privileges on GitHub.')}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in GitHub</span>
                </button>
              </div>
            </div>

            {/* Sandbox & Production API Credentials */}
            <div className="p-6 rounded-2xl bg-[#0e1626] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-3">
                  <Key className="w-4 h-4" />
                  <span>API ACCESS CREDENTIALS</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Staging Environment API Token</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Use this bearer token to authenticate automated requests and integrate your external warehouse ERP systems.
                </p>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs flex items-center justify-between">
                  <span className="text-slate-300 truncate mr-2">
                    {apiKeyRevealed ? 'bg_live_apex_99f38a01c2e44d88e00192' : 'bg_live_apex_••••••••••••••••••••'}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setApiKeyRevealed(!apiKeyRevealed)}
                      className="text-slate-400 hover:text-white"
                      title="Reveal / Hide"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleCopyApiKey}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[10px]"
                    >
                      {copiedKey ? 'COPIED!' : 'COPY'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
                Scope: telemetry:read, manifests:write, fleet:subscribe
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Secure File Vault & Deliverables */}
      {activeTab === 'files' && (
        <div className="p-6 sm:p-8 space-y-8">
          {/* Security Banner */}
          <div className="p-6 rounded-2xl bg-[#0e1626] border border-slate-800/90 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  CRYPTOGRAPHIC ASSET ESCROW & REPOSITORY
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Secure File Vault & Architectural Deliverables
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                All deliverables, architectural schemas, legal non-disclosure covenants, and IP deeds are encrypted via AES-256-GCM at rest. Downloads are governed by ephemeral 15-minute signed bearer tokens.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero-Trust Token Expiry: <strong>15m TTL</strong></span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs flex items-center gap-2 text-cyan-300">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>SHA-256 Verification: <strong>Enforced</strong></span>
              </div>
            </div>
          </div>

          {/* Files List */}
          <div className="bg-[#0a101d] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Deliverables & Verified Artifacts</h4>
                <p className="text-xs text-slate-400">Cryptographically signed files accessible to Apex Logistics Corp</p>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {vaultFiles.length} files available
              </span>
            </div>

            <div className="divide-y divide-slate-800/80">
              {vaultFiles.map((file) => (
                <div key={file.id} className="p-4 sm:p-5 hover:bg-slate-900/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-mono text-cyan-400 font-semibold bg-cyan-950/90 px-2 py-0.5 rounded border border-cyan-800/40">
                          {file.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">• {file.size}</span>
                        <span className="text-xs text-slate-400">• Added {file.date}</span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                          {file.status}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-1">{file.name}</h5>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span>Role Clearance: {file.clearance}</span>
                        <span>•</span>
                        <span>Hash: {file.checksum}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                    <button
                      onClick={() => handleCopyFileChecksum(file.checksum)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy SHA-256 Hash"
                    >
                      {copiedFileChecksum === file.checksum ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied Hash</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Hash</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleDownloadVaultFile(file.name)}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download (Signed Token)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client File Upload Portal Card */}
          <div className="p-6 rounded-2xl bg-[#0e1626] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-cyan-400">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Need to provide proprietary client assets?</h4>
                <p className="text-xs text-slate-400 max-w-lg">
                  Upload external API specs, enterprise SSO SAML metadata, or brand guidelines securely into NexGrid's isolated staging enclave.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setApprovalToast('Secure dropzone opened: Client files will be encrypted before ingest.');
                setTimeout(() => setApprovalToast(null), 4000);
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shrink-0"
            >
              <Upload className="w-3.5 h-3.5 text-cyan-400" />
              <span>Upload to Client Enclave</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
