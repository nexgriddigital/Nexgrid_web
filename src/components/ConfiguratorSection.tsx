import React, { useState } from 'react';
import { 
  Globe, 
  ShoppingBag, 
  Users, 
  Cpu, 
  Calendar, 
  Layers, 
  AppWindow, 
  BarChart3, 
  ShieldCheck, 
  Plus, 
  Check, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Layers3, 
  Zap,
  Server,
  Terminal
} from 'lucide-react';
import { 
  CONFIGURATOR_SYSTEM_TYPES, 
  CONFIGURATOR_ADDONS 
} from '../data/agencyData';
import { ConfiguratorSystemType, ConfiguratorAddon } from '../types';

interface ConfiguratorSectionProps {
  onTransferToInquiry: (config: {
    systemType: string;
    addons: string[];
    timeline: string;
    notes: string;
  }) => void;
}

export const ConfiguratorSection: React.FC<ConfiguratorSectionProps> = ({ onTransferToInquiry }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('webapp');
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['rbac', 'websockets', 'thirdparty']);
  const [scaleTier, setScaleTier] = useState<'mvp' | 'growth' | 'enterprise'>('growth');

  const selectedSystem = CONFIGURATOR_SYSTEM_TYPES.find((t) => t.id === selectedTypeId) || CONFIGURATOR_SYSTEM_TYPES[0];

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) => 
      prev.includes(addonId) 
        ? prev.filter((id) => id !== addonId) 
        : [...prev, addonId]
    );
  };

  // Calculate estimated timeline in weeks
  const baseWeeks = selectedSystem.baseTimelineWeeks;
  const addonsAddedWeeks = selectedAddonIds.reduce((sum, id) => {
    const addon = CONFIGURATOR_ADDONS.find((a) => a.id === id);
    return sum + (addon ? addon.addedWeeks : 0);
  }, 0);

  const scaleMultiplier = scaleTier === 'mvp' ? 0.8 : scaleTier === 'enterprise' ? 1.35 : 1.0;
  const totalWeeks = Math.max(3, Math.round((baseWeeks + addonsAddedWeeks) * scaleMultiplier));

  // Determine recommended stack dynamically
  const getDynamicStack = () => {
    const stack = ['React', 'TypeScript', 'Tailwind CSS'];
    if (selectedTypeId === 'website') {
      stack.push('Next.js', 'Headless CMS', 'Edge CDN');
    } else if (selectedTypeId === 'ecommerce') {
      stack.push('Next.js Commerce', 'Stripe API', 'PostgreSQL', 'Redis');
    } else {
      stack.push('Node.js / Express', 'PostgreSQL', 'Prisma ORM');
      if (selectedAddonIds.includes('websockets')) stack.push('WebSockets / Redis PubSub');
      if (selectedAddonIds.includes('payments')) stack.push('Stripe Connect');
      if (selectedAddonIds.includes('pwa')) stack.push('ServiceWorker PWA');
    }
    return stack;
  };

  const getSystemIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-teal-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'AppWindow': return <AppWindow className="w-5 h-5 text-cyan-300" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handleTransfer = () => {
    const addonNames = selectedAddonIds.map((id) => {
      const a = CONFIGURATOR_ADDONS.find((addon) => addon.id === id);
      return a ? a.name : id;
    });

    onTransferToInquiry({
      systemType: selectedSystem.name,
      addons: addonNames,
      timeline: `${totalWeeks}-${totalWeeks + 2} Weeks`,
      notes: `Configured system: ${selectedSystem.name} (${scaleTier.toUpperCase()} scale). Modules: ${addonNames.join(', ')}.`
    });
  };

  return (
    <section id="configurator" className="py-24 bg-[#080b11] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-dots opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE SYSTEM CONFIGURATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            What Can We Build For You?
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Select your target digital platform, operational scale, and modular capabilities. 
            Our interactive engine instantly models the recommended architectural direction and development timeline.
          </p>
        </div>

        {/* 3 Steps Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selection Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Select System Type (9 options) */}
            <div className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-[10px]">
                    1
                  </span>
                  Select Primary System Archetype:
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {CONFIGURATOR_SYSTEM_TYPES.length} Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {CONFIGURATOR_SYSTEM_TYPES.map((type) => {
                  const isSelected = type.id === selectedTypeId;
                  return (
                    <button
                      key={type.id}
                      id={`cfg-type-${type.id}`}
                      onClick={() => setSelectedTypeId(type.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                          : 'bg-slate-950/60 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-950 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                          {getSystemIcon(type.iconName)}
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        )}
                      </div>

                      <div>
                        <div className="text-xs font-bold text-white mb-0.5 leading-tight">
                          {type.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {type.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Operational Scale */}
            <div className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-[10px]">
                    2
                  </span>
                  Select Deployment Scale & Depth:
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', label: 'Startup MVP', desc: 'Core features, fast validation' },
                  { id: 'growth', label: 'Growth / SMB', desc: 'Full workflows & integrations' },
                  { id: 'enterprise', label: 'Enterprise Fleet', desc: 'High concurrency & compliance' },
                ].map((tier) => {
                  const isSelected = scaleTier === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setScaleTier(tier.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/50 border-cyan-500 text-white shadow-md'
                          : 'bg-slate-950/60 hover:bg-slate-900 border-slate-800 text-slate-400'
                      }`}
                    >
                      <span className="text-xs font-bold block text-white">{tier.label}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{tier.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Modular Capabilities (Addons) */}
            <div className="p-6 rounded-2xl bg-[#0d1320] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-800 flex items-center justify-center text-[10px]">
                    3
                  </span>
                  Include Modular Capabilities:
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {selectedAddonIds.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CONFIGURATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-start justify-between gap-2 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-slate-900/90 border-cyan-500/50 text-white'
                          : 'bg-slate-950/40 hover:bg-slate-900/60 border-slate-800 text-slate-400'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <span>{addon.name}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                          {addon.description}
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-cyan-500 text-slate-950' : 'border border-slate-700 bg-slate-800'
                      }`}>
                        {isChecked ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 text-slate-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Architectural Blueprint & Delivery Model */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-slate-700/80 p-6 shadow-2xl shadow-cyan-950/30">
              {/* Header */}
              <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    GENERATED SYSTEM SPECIFICATION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedSystem.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    EST. TIMELINE
                  </span>
                  <span className="text-base font-bold font-mono text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    ~{totalWeeks} - {totalWeeks + 2} wks
                  </span>
                </div>
              </div>

              {/* System Architecture Overview */}
              <div className="py-4 border-b border-slate-800 text-xs">
                <p className="text-slate-300 leading-relaxed">
                  {selectedSystem.description}
                </p>
              </div>

              {/* Selected Modules Summary */}
              <div className="py-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Configured System Modules ({selectedAddonIds.length + 1}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded bg-cyan-950 border border-cyan-800/60 text-cyan-300 text-[11px] font-mono">
                    Core {selectedSystem.name} Engine
                  </span>
                  {selectedAddonIds.map((id) => {
                    const a = CONFIGURATOR_ADDONS.find((addon) => addon.id === id);
                    if (!a) return null;
                    return (
                      <span key={id} className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono">
                        {a.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Suggested Tech Stack */}
              <div className="py-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  Recommended Architecture Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {getDynamicStack().map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Transfer to Project Inquiry */}
              <div className="pt-6">
                <button
                  id="transfer-spec-btn"
                  onClick={handleTransfer}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <span>Send This Spec to Project Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <p className="text-center text-[11px] font-mono text-slate-500 mt-3">
                  Populates the project inquiry form below with your custom architectural spec.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
