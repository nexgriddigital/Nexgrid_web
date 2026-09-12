import React, { useState } from 'react';
import { 
  FolderLock, 
  Layers, 
  MessageSquare, 
  Activity, 
  GitBranch, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Clock, 
  ExternalLink, 
  Key, 
  Terminal, 
  Building2, 
  ArrowRight, 
  Sparkles, 
  Filter, 
  RefreshCw, 
  Copy, 
  Check, 
  FileText, 
  ChevronRight, 
  Search,
  Zap,
  Lock
} from 'lucide-react';
import { PORTAL_FEATURES, PortalFeatureDetail } from '../../data/portalFeaturesData';

interface PortalFeaturesBreakdownProps {
  onSelectPortalView?: (portal: 'customer' | 'admin') => void;
}

export const PortalFeaturesBreakdown: React.FC<PortalFeaturesBreakdownProps> = ({
  onSelectPortalView
}) => {
  const [activePerspective, setActivePerspective] = useState<'both' | 'customer' | 'staff'>('both');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>('secure-file-sharing');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive demo states
  const [copiedChecksum, setCopiedChecksum] = useState<string | null>(null);
  const [simulatedTokenGenerated, setSimulatedTokenGenerated] = useState<string | null>(null);
  const [activeSlaPriority, setActiveSlaPriority] = useState<'critical' | 'high' | 'normal'>('critical');
  const [liveStreamEvents, setLiveStreamEvents] = useState([
    { id: 'ev-1', title: 'Staging Environment Promoted', desc: 'CI/CD Pipeline #842 deployed v2.4.0-rc1', time: 'Just now', type: 'deploy', role: 'both' },
    { id: 'ev-2', title: 'Phase 3 Deliverable Signed Off', desc: 'Sarah Jenkins (VP Ops) approved Dispatch Console UI', time: '14m ago', type: 'milestone', role: 'both' },
    { id: 'ev-3', title: 'mTLS Mutual Verification Verified', desc: 'Authorized API handshake from Apex Gateway', time: '22m ago', type: 'security', role: 'staff' },
    { id: 'ev-4', title: 'Automated Container Health Check Passed', desc: 'All 14 pods reporting 100% healthy, P95: 38ms', time: '35m ago', type: 'telemetry', role: 'staff' }
  ]);
  const [isSimulatingEvent, setIsSimulatingEvent] = useState(false);
  const [milestoneSignoffState, setMilestoneSignoffState] = useState<Record<string, boolean>>({
    'Phase 1': true,
    'Phase 2': true,
    'Phase 3': true,
    'Phase 4': false,
    'Phase 5': false
  });

  const getFeatureIcon = (iconName: PortalFeatureDetail['iconName'], className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'FolderLock': return <FolderLock className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'GitBranch': return <GitBranch className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'secure-file-sharing', label: 'File Vault' },
    { id: 'project-progress-tracking', label: 'Progress Tracking' },
    { id: 'ticket-management-slas', label: 'Tickets & SLAs' },
    { id: 'real-time-activity-feed', label: 'Activity Feeds' },
    { id: 'git-repo-code-ownership', label: 'Git & IP Transfer' },
    { id: 'milestone-billing-escrow', label: 'Invoices & Escrow' }
  ];

  const filteredFeatures = PORTAL_FEATURES.filter(feature => {
    const matchesCategory = selectedCategory === 'all' || feature.id === selectedCategory;
    const matchesQuery = searchQuery.trim() === '' || 
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.customerCapabilities.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      feature.staffCapabilities.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleCopyChecksum = (checksum: string) => {
    navigator.clipboard.writeText(checksum);
    setCopiedChecksum(checksum);
    setTimeout(() => setCopiedChecksum(null), 2500);
  };

  const handleGenerateToken = (fileName: string) => {
    const token = `nex_vault_${Math.random().toString(36).substring(2, 10)}_exp15m`;
    setSimulatedTokenGenerated(`15-min secure token generated for "${fileName}": ${token}`);
    setTimeout(() => setSimulatedTokenGenerated(null), 4000);
  };

  const handleSimulateNewEvent = () => {
    setIsSimulatingEvent(true);
    setTimeout(() => {
      const sampleEvents = [
        { id: `ev-${Date.now()}`, title: 'Zero-Downtime Hotfix Deployed', desc: 'Hotfix patch #902 applied to edge redis caching cluster', time: 'Just now', type: 'deploy', role: 'staff' },
        { id: `ev-${Date.now() + 1}`, title: 'Client Feedback Appended to Ticket', desc: 'Sarah Jenkins commented on TCK-402 (CSV export spec)', time: 'Just now', type: 'ticket', role: 'both' },
        { id: `ev-${Date.now() + 2}`, title: 'Escrow Milestone Verification Triggered', desc: 'Phase 4 milestone verification submitted for client sign-off', time: 'Just now', type: 'milestone', role: 'both' }
      ];
      const picked = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      setLiveStreamEvents(prev => [picked, ...prev.slice(0, 5)]);
      setIsSimulatingEvent(false);
    }, 600);
  };

  const toggleMilestoneApproval = (phase: string) => {
    setMilestoneSignoffState(prev => ({
      ...prev,
      [phase]: !prev[phase]
    }));
  };

  return (
    <section id="portal-features" className="py-20 bg-[#070a10] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEEP DIVE // PORTAL CAPABILITIES ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Full Feature Breakdown by Role
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Examine how secure file sharing, milestone tracking, ticket triage, and real-time activity feeds operate across client stakeholders and NexGrid engineering staff.
          </p>
        </div>

        {/* View Mode & Perspective Selector */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0b101c] border border-slate-800 mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Perspective Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Role Perspective:</span>
            </span>

            <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800">
              <button
                onClick={() => setActivePerspective('both')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePerspective === 'both'
                    ? 'bg-slate-800 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Side-by-Side Unified
              </button>

              <button
                onClick={() => setActivePerspective('customer')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePerspective === 'customer'
                    ? 'bg-cyan-500 text-slate-950 shadow font-bold'
                    : 'text-slate-400 hover:text-cyan-300'
                }`}
              >
                <Building2 className="w-3 h-3" />
                <span>Customer Portal</span>
              </button>

              <button
                onClick={() => setActivePerspective('staff')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activePerspective === 'staff'
                    ? 'bg-blue-600 text-white shadow font-bold'
                    : 'text-slate-400 hover:text-blue-300'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Staff & Admin Console</span>
              </button>
            </div>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter capabilities (e.g. SLA, vault)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
          </div>
        </div>

        {/* Category Quick Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl border whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300 font-semibold shadow-sm'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Features List */}
        <div className="space-y-10">
          {filteredFeatures.map((feature) => {
            const isExpanded = expandedFeatureId === feature.id;

            return (
              <div 
                key={feature.id}
                id={`feature-${feature.id}`}
                className="bg-[#0b101c] border border-slate-800/90 hover:border-slate-700/80 rounded-3xl overflow-hidden transition-all shadow-xl"
              >
                {/* Feature Header Card */}
                <div className="p-6 sm:p-8 bg-[#0e1424] border-b border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      {getFeatureIcon(feature.iconName, 'w-6 h-6')}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/50">
                          {feature.category}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-800/40">
                          {feature.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {feature.title}
                      </h3>

                      <p className="text-slate-400 text-xs sm:text-sm">
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Live Simulator Toggle */}
                  <div className="flex items-center gap-3 self-start lg:self-auto">
                    <button
                      onClick={() => setExpandedFeatureId(isExpanded ? null : feature.id)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse Interactive View' : 'Inspect Live Capabilities'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Feature Description Banner */}
                <div className="px-6 sm:px-8 py-4 bg-[#090d18] border-b border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feature.overview}
                </div>

                {/* Role Capabilities Comparison Grid */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
                  
                  {/* Customer Portal Side */}
                  {(activePerspective === 'both' || activePerspective === 'customer') && (
                    <div className={`${activePerspective === 'customer' ? 'lg:col-span-2' : ''} space-y-4`}>
                      <div className="flex items-center justify-between pb-3 border-b border-cyan-900/40">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                            CUSTOMER PORTAL CAPABILITIES
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300/80 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/40">
                          Client Experience
                        </span>
                      </div>

                      <div className="space-y-3">
                        {feature.customerCapabilities.map((cap, idx) => (
                          <div 
                            key={idx}
                            className="p-4 rounded-xl bg-[#0d1527]/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                          >
                            <div className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                                  {cap.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {cap.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Staff & Admin Console Side */}
                  {(activePerspective === 'both' || activePerspective === 'staff') && (
                    <div className={`${activePerspective === 'staff' ? 'lg:col-span-2' : 'lg:pl-8 pt-6 lg:pt-0'} space-y-4`}>
                      <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                            STAFF & ADMIN CONSOLE CAPABILITIES
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-blue-300/80 bg-blue-950 px-2 py-0.5 rounded border border-blue-800/40">
                          Engineering Control
                        </span>
                      </div>

                      <div className="space-y-3">
                        {feature.staffCapabilities.map((cap, idx) => (
                          <div 
                            key={idx}
                            className="p-4 rounded-xl bg-[#0c1426]/70 border border-slate-800/80 hover:border-blue-500/40 transition-colors"
                          >
                            <div className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                              <div className="flex-1">
                                <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                                  {cap.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                  {cap.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Technical Specifications Bar */}
                <div className="px-6 sm:px-8 py-3 bg-[#080c16] border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                  {feature.technicalSpecifications.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase">{spec.label}</span>
                      <span className="text-slate-200 font-semibold truncate">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Expandable Live Interactive Simulator Widget for this Feature */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#090e1c] border-t border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                          LIVE FUNCTIONAL SIMULATION // {feature.title}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        Interactive Demonstration
                      </span>
                    </div>

                    {/* Simulation Sub-Components based on feature type */}
                    
                    {/* 1. SECURE FILE SHARING DEMO */}
                    {feature.id === 'secure-file-sharing' && (
                      <div className="space-y-4">
                        {simulatedTokenGenerated && (
                          <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800 text-xs text-cyan-300 flex items-center justify-between">
                            <span className="font-mono">{simulatedTokenGenerated}</span>
                            <span className="text-[11px] text-cyan-400">TTL: 14m 58s</span>
                          </div>
                        )}

                        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                          <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-300">{feature.interactiveSample.data.vaultName}</span>
                            <span className="text-emerald-400">Status: {feature.interactiveSample.data.vaultSize} Encrypted</span>
                          </div>

                          <div className="divide-y divide-slate-800/60">
                            {feature.interactiveSample.data.files.map((file: any, fIdx: number) => (
                              <div key={fIdx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                <div className="flex items-start gap-3">
                                  <FileText className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                                  <div>
                                    <div className="font-bold text-white flex items-center gap-2">
                                      <span>{file.name}</span>
                                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                                        {file.type}
                                      </span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400 font-mono text-[11px] mt-1">
                                      <span>Size: {file.size}</span>
                                      <span>•</span>
                                      <span className="text-cyan-400/90">{file.checksum}</span>
                                      <span>•</span>
                                      <span className="text-emerald-400">{file.clearance}</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 self-start sm:self-auto">
                                  <button
                                    onClick={() => handleCopyChecksum(file.checksum)}
                                    className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-[11px] font-mono flex items-center gap-1 cursor-pointer transition-colors"
                                    title="Copy SHA-256 Checksum"
                                  >
                                    {copiedChecksum === file.checksum ? (
                                      <>
                                        <Check className="w-3 h-3 text-emerald-400" />
                                        <span className="text-emerald-400">Copied</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="w-3 h-3 text-slate-400" />
                                        <span>Checksum</span>
                                      </>
                                    )}
                                  </button>

                                  <button
                                    onClick={() => handleGenerateToken(file.name)}
                                    className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                                  >
                                    <Download className="w-3 h-3" />
                                    <span>Download via Token</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 2. PROJECT PROGRESS TRACKING DEMO */}
                    {feature.id === 'project-progress-tracking' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                            <div>
                              <span className="text-xs font-mono text-cyan-400">ACTIVE ROADMAP MILESTONES</span>
                              <h4 className="text-base font-bold text-white">{feature.interactiveSample.data.projectName}</h4>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-extrabold font-mono text-cyan-400">
                                {feature.interactiveSample.data.overallProgress}%
                              </span>
                              <a
                                href="#staging-demo"
                                onClick={(e) => { e.preventDefault(); alert('Redirecting to secure staging sandbox: https://staging.apex-logistics.nexgrid.cloud'); }}
                                className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                              >
                                <span>Preview Staging</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>

                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-5">
                            <div 
                              className="bg-cyan-500 h-full rounded-full transition-all duration-500"
                              style={{ width: `${feature.interactiveSample.data.overallProgress}%` }}
                            ></div>
                          </div>

                          <div className="space-y-3">
                            {feature.interactiveSample.data.milestones.map((m: any, mIdx: number) => {
                              const isApproved = milestoneSignoffState[m.phase] !== undefined ? milestoneSignoffState[m.phase] : m.status === 'Approved';

                              return (
                                <div key={mIdx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                                      isApproved 
                                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                                    }`}>
                                      {mIdx + 1}
                                    </div>
                                    <div>
                                      <div className="font-bold text-white flex items-center gap-2">
                                        <span>{m.name}</span>
                                        <span className="text-[10px] font-mono text-slate-400">({m.date})</span>
                                      </div>
                                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                                        Progress: {m.progress}% • Deliverable Sign-off Status: {isApproved ? 'Approved by Client' : 'Awaiting Review'}
                                      </div>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => toggleMilestoneApproval(m.phase)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto ${
                                      isApproved
                                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                                        : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'
                                    }`}
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>{isApproved ? 'Approved (Toggle Revoke)' : 'Sign Off Deliverable'}</span>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. TICKET MANAGEMENT & SLAS DEMO */}
                    {feature.id === 'ticket-management-slas' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                          {/* SLA Priority Selector */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800 mb-4">
                            <span className="text-xs font-mono text-slate-300">Contractual SLA Matrix Simulation:</span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setActiveSlaPriority('critical')}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                                  activeSlaPriority === 'critical'
                                    ? 'bg-red-500 text-white'
                                    : 'bg-slate-900 text-slate-400 hover:text-white'
                                }`}
                              >
                                Critical (&lt;4h SLA)
                              </button>
                              <button
                                onClick={() => setActiveSlaPriority('high')}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                                  activeSlaPriority === 'high'
                                    ? 'bg-amber-500 text-slate-950'
                                    : 'bg-slate-900 text-slate-400 hover:text-white'
                                }`}
                              >
                                High (&lt;12h SLA)
                              </button>
                              <button
                                onClick={() => setActiveSlaPriority('normal')}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                                  activeSlaPriority === 'normal'
                                    ? 'bg-cyan-500 text-slate-950'
                                    : 'bg-slate-900 text-slate-400 hover:text-white'
                                }`}
                              >
                                Normal (&lt;24h SLA)
                              </button>
                            </div>
                          </div>

                          {/* Tickets view */}
                          <div className="space-y-3">
                            {feature.interactiveSample.data.tickets.map((tck: any, tIdx: number) => (
                              <div key={tIdx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono text-cyan-400 font-bold">{tck.id}</span>
                                    <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-slate-800 text-slate-300">
                                      {tck.category}
                                    </span>
                                    <span className={`text-[10px] font-mono px-2 py-0.2 rounded ${
                                      tck.status === 'Resolved' 
                                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                                        : 'bg-amber-950 text-amber-300 border border-amber-800'
                                    }`}>
                                      {tck.status}
                                    </span>
                                  </div>
                                  <h4 className="font-bold text-white text-sm">{tck.title}</h4>
                                  <p className="text-slate-400 text-xs">{tck.lastMessage}</p>
                                  <div className="text-[11px] font-mono text-slate-500 pt-1">
                                    Assigned: <span className="text-slate-300">{tck.assignedTo}</span>
                                  </div>
                                </div>

                                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-right md:text-right shrink-0">
                                  <div className="text-[10px] font-mono text-slate-400 uppercase">SLA Clock Remaining</div>
                                  <div className="text-base font-bold font-mono text-cyan-400 flex items-center justify-end gap-1.5 mt-0.5">
                                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>{tck.slaRemaining}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 4. REAL TIME ACTIVITY FEED DEMO */}
                    {feature.id === 'real-time-activity-feed' && (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-xs font-mono">
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                              <span>FEED STATUS: {feature.interactiveSample.data.streamStatus}</span>
                            </span>

                            <button
                              onClick={handleSimulateNewEvent}
                              disabled={isSimulatingEvent}
                              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                            >
                              <RefreshCw className={`w-3 h-3 ${isSimulatingEvent ? 'animate-spin' : ''}`} />
                              <span>Simulate Pipeline Event</span>
                            </button>
                          </div>

                          <div className="space-y-2.5">
                            {liveStreamEvents.map((evt) => (
                              <div key={evt.id} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-1.5"></span>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-bold text-white">{evt.title}</span>
                                    <span className="text-[10px] font-mono text-slate-500">{evt.time}</span>
                                  </div>
                                  <p className="text-slate-400 text-xs mt-0.5">{evt.desc}</p>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                                  {evt.role}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 5. GIT REPO & IP TRANSFER DEMO */}
                    {feature.id === 'git-repo-code-ownership' && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                          <span className="text-cyan-400 font-bold flex items-center gap-2">
                            <GitBranch className="w-4 h-4" />
                            <span>{feature.interactiveSample.data.repoName}</span>
                          </span>
                          <span className="text-emerald-400">Private Repository (Client Granted)</span>
                        </div>
                        <div className="text-slate-300">
                          Branch: <span className="text-white font-bold">{feature.interactiveSample.data.branch}</span>
                        </div>
                        <div className="text-slate-400">
                          Latest Commit: <span className="text-cyan-300">{feature.interactiveSample.data.latestCommit}</span>
                        </div>
                        <div className="text-slate-500">
                          Author: {feature.interactiveSample.data.author}
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-[11px]">
                          Automated CI Status: {feature.interactiveSample.data.status}
                        </div>
                      </div>
                    )}

                    {/* 6. MILESTONE BILLING & ESCROW DEMO */}
                    {feature.id === 'milestone-billing-escrow' && (
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-3">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-mono text-slate-500 block">TOTAL CONTRACT</span>
                            <span className="text-base font-bold font-mono text-white">{feature.interactiveSample.data.totalContract}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-mono text-slate-500 block">PAID MILESTONES</span>
                            <span className="text-base font-bold font-mono text-emerald-400">{feature.interactiveSample.data.paidToDate}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-mono text-slate-500 block">ESCROW PROTECTED</span>
                            <span className="text-base font-bold font-mono text-amber-400">{feature.interactiveSample.data.pendingEscrow}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-mono text-slate-500 block">PAYMENT SECURITY</span>
                            <span className="text-base font-bold font-mono text-cyan-400">Stripe Escrow</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                          Next Release Trigger: {feature.interactiveSample.data.nextPaymentDue}
                        </div>
                      </div>
                    )}

                    {/* Simulator switch banner */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">
                        Want to test the full live system environment?
                      </span>
                      {onSelectPortalView && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onSelectPortalView('customer')}
                            className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <Building2 className="w-3.5 h-3.5" />
                            <span>Launch Customer Simulator</span>
                          </button>
                          <button
                            onClick={() => onSelectPortalView('admin')}
                            className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-600/40 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Launch Staff Simulator</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
