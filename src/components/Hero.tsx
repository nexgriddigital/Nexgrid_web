import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Activity, 
  Layers, 
  Cpu, 
  Database, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Server,
  Zap
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

interface SystemNode {
  id: string;
  label: string;
  type: string;
  status: string;
  metric: string;
  stack: string;
  x: number; // percentage
  y: number; // percentage
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreServices }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeNodeId, setActiveNodeId] = useState<string>('erp');
  const [isSimulating, setIsSimulating] = useState(true);
  const [pulseCount, setPulseCount] = useState(12840);

  // System nodes representing interconnected digital architecture
  const nodes: SystemNode[] = [
    {
      id: 'web',
      label: 'Corporate Web / Store',
      type: 'Frontend & Edge',
      status: 'ONLINE • 100/100 CWV',
      metric: '0.4s TTFB',
      stack: 'Next.js, Tailwind, Edge CDN',
      x: 18,
      y: 28,
      color: '#06b6d4',
      icon: Globe
    },
    {
      id: 'gateway',
      label: 'Secure API Gateway',
      type: 'Routing & Auth Layer',
      status: 'MTLS • ZERO TRUST',
      metric: '42,000 req/min',
      stack: 'Go / Node, JWT, Redis Cache',
      x: 50,
      y: 22,
      color: '#3b82f6',
      icon: ShieldCheck
    },
    {
      id: 'erp',
      label: 'Custom Business Engine',
      type: 'Core Operations & Logic',
      status: 'ACTIVE • 0 ERRORS',
      metric: '18 Automated Workflows',
      stack: 'TypeScript, PostgreSQL, Prisma',
      x: 50,
      y: 52,
      color: '#10b981',
      icon: Cpu
    },
    {
      id: 'db',
      label: 'Primary Database & Storage',
      type: 'Distributed Data Store',
      status: 'REPLICATED • ACID',
      metric: '99.999% Durability',
      stack: 'PostgreSQL 16 + Redis Cluster',
      x: 82,
      y: 34,
      color: '#8b5cf6',
      icon: Database
    },
    {
      id: 'dashboard',
      label: 'Real-Time Ops Cockpit',
      type: 'Executive Interface',
      status: 'STREAMING • 60 FPS',
      metric: 'Live WebSocket Stream',
      stack: 'React, D3, High-Density UI',
      x: 22,
      y: 74,
      color: '#f59e0b',
      icon: Activity
    },
    {
      id: 'portal',
      label: 'Customer Self-Service Hub',
      type: 'Client Portal',
      status: '2FA ENABLED',
      metric: '8,400 Active Clients',
      stack: 'React, Stripe Billing, Webhooks',
      x: 78,
      y: 72,
      color: '#ec4899',
      icon: Layers
    }
  ];

  // Mouse move handler for ambient lighting
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[2];

  return (
    <section 
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-center bg-[#080b11]"
    >
      {/* Dynamic Cursor Light Following Effect */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.12), rgba(99, 102, 241, 0.05) 40%, transparent 80%)`
        }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-75 pointer-events-none" />

      {/* Subtle Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Status & Positioning Badge */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="tracking-wide">ENGINEERING MODERN BUSINESS INFRASTRUCTURE</span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">NexGrid Digital Systems</span>
          </div>
        </div>

        {/* Hero Grid: Text & Interactive System Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              We Build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-400">
                Digital Systems
              </span>{' '}
              That Move Businesses Forward.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              NexGrid designs and develops high-performance websites, custom business systems, 
              and digital platforms built around the way your company works.
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                id="hero-primary-cta"
                onClick={onStartProject}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-slate-950 font-bold text-base hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-slate-950" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-white font-medium text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Credibility Micro-List */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Custom Code</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Zero fragile template bloat</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-sm font-semibold">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Sub-Second</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">100/100 Core Web Vitals</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-mono text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Full-Stack</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">End-to-end architecture</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Systems Architecture Simulator */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c121d]/90 border border-slate-800/90 p-5 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Header Bar of System Simulator */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    NEXGRID // INTERCONNECTED DIGITAL TOPOLOGY
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                    LIVE TELEMETRY
                  </span>
                </div>
              </div>

              {/* Interactive Canvas Stage */}
              <div className="relative w-full h-[360px] sm:h-[400px] bg-[#090d16] rounded-xl border border-slate-800/60 overflow-hidden">
                {/* Micro Grid Background */}
                <div className="absolute inset-0 bg-tech-dots opacity-40"></div>

                {/* Pulsing Central Hub Glow */}
                <div 
                  className="absolute w-44 h-44 rounded-full blur-2xl pointer-events-none transition-all duration-700"
                  style={{
                    left: `${activeNode.x}%`,
                    top: `${activeNode.y}%`,
                    transform: 'translate(-50%, -50%)',
                    background: `${activeNode.color}25`
                  }}
                />

                {/* SVG Connecting Cables & Pulsing Packets */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cableGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="cableGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>

                  {/* Connecting lines between nodes */}
                  {/* Web (18,28) to Gateway (50,22) */}
                  <line x1="18%" y1="28%" x2="50%" y2="22%" stroke="url(#cableGrad1)" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Gateway (50,22) to Database (82,34) */}
                  <line x1="50%" y1="22%" x2="82%" y2="34%" stroke="#6366f1" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Gateway (50,22) to ERP (50,52) */}
                  <line x1="50%" y1="22%" x2="50%" y2="52%" stroke="url(#cableGrad2)" strokeWidth="2.5" />
                  {/* ERP (50,52) to Database (82,34) */}
                  <line x1="50%" y1="52%" x2="82%" y2="34%" stroke="#8b5cf6" strokeOpacity="0.4" strokeWidth="2" />
                  {/* ERP (50,52) to Dashboard (22,74) */}
                  <line x1="50%" y1="52%" x2="22%" y2="74%" stroke="#f59e0b" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="3 3" />
                  {/* ERP (50,52) to Portal (78,72) */}
                  <line x1="50%" y1="52%" x2="78%" y2="72%" stroke="#ec4899" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Dashboard (22,74) to Web (18,28) */}
                  <line x1="22%" y1="74%" x2="18%" y2="28%" stroke="#06b6d4" strokeOpacity="0.2" strokeWidth="1.5" />
                </svg>

                {/* Render Interactive Nodes */}
                {nodes.map((node) => {
                  const isActive = activeNodeId === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      id={`hero-node-${node.id}`}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group transition-all duration-300 focus:outline-none cursor-pointer z-20`}
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                      {/* Node Circle */}
                      <div 
                        className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'scale-115 shadow-lg border-2' 
                            : 'hover:scale-105 border bg-slate-900/90'
                        }`}
                        style={{
                          backgroundColor: isActive ? `${node.color}20` : '#0f172a',
                          borderColor: isActive ? node.color : 'rgba(255,255,255,0.15)',
                          boxShadow: isActive ? `0 0 25px ${node.color}50` : 'none'
                        }}
                      >
                        <Icon className="w-5 h-5 transition-colors" style={{ color: isActive ? node.color : '#94a3b8' }} />

                        {/* Active heartbeat indicator */}
                        {isActive && (
                          <span 
                            className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping"
                            style={{ backgroundColor: node.color }}
                          />
                        )}
                        <span 
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: node.color }}
                        />
                      </div>

                      {/* Node Label Chip */}
                      <span 
                        className={`mt-1 px-2 py-0.5 rounded text-[10px] font-mono tracking-tight transition-all duration-200 whitespace-nowrap ${
                          isActive 
                            ? 'bg-slate-900 text-white font-semibold border' 
                            : 'text-slate-400 group-hover:text-slate-200 bg-slate-950/80 border border-transparent'
                        }`}
                        style={{ borderColor: isActive ? `${node.color}60` : 'transparent' }}
                      >
                        {node.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Inspection Drawer for Selected Node */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${activeNode.color}20`, border: `1px solid ${activeNode.color}40` }}
                  >
                    <activeNode.icon className="w-4 h-4" style={{ color: activeNode.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{activeNode.label}</span>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-slate-800 text-slate-300">
                        {activeNode.type}
                      </span>
                    </div>
                    <div className="text-slate-400 text-[11px] font-mono mt-0.5">
                      Stack: <span className="text-slate-200">{activeNode.stack}</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {activeNode.status}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    Throughput: {activeNode.metric}
                  </span>
                </div>
              </div>

              <div className="mt-2 text-center text-[10px] font-mono text-slate-500">
                Click on any system node to inspect architectural layers & real-time telemetry
              </div>
            </div>
          </div>
        </div>

        {/* Global Architecture Pillars Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight">
              &lt; 150<span className="text-cyan-400">ms</span>
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
              Target Response Time
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight">
              100<span className="text-emerald-400">%</span>
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
              Bespoke Codebases
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight">
              360<span className="text-blue-400">°</span>
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
              Systems Integration
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight">
              99.9<span className="text-violet-400">%</span>
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
              Uptime Architectural Target
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
