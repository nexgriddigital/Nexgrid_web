import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  ShoppingBag, 
  Layers, 
  Calendar, 
  Home, 
  UserCheck, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Server,
  AlertCircle,
  Terminal
} from 'lucide-react';
import { SOLUTIONS } from '../data/agencyData';
import { SolutionItem } from '../types';

interface SolutionsSectionProps {
  onSelectSolutionForInquiry: (solutionName: string) => void;
  onNavigateToConfigurator: (typeId: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ 
  onSelectSolutionForInquiry,
  onNavigateToConfigurator
}) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>('company-ops');
  const [activeSimulatedTab, setActiveSimulatedTab] = useState<'kpis' | 'logs' | 'modules'>('kpis');

  const activeSolution = SOLUTIONS.find((s) => s.id === selectedSolutionId) || SOLUTIONS[0];

  const getProblemIcon = (id: string) => {
    switch (id) {
      case 'company-ops': return <Building2 className="w-4 h-4" />;
      case 'customer-management': return <Users className="w-4 h-4" />;
      case 'sales-ecommerce': return <ShoppingBag className="w-4 h-4" />;
      case 'inventory-ops': return <Layers className="w-4 h-4" />;
      case 'appointments-booking': return <Calendar className="w-4 h-4" />;
      case 'property-management': return <Home className="w-4 h-4" />;
      case 'employees-hr': return <UserCheck className="w-4 h-4" />;
      case 'custom-requirements': return <Terminal className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getMappedConfiguratorType = (id: string) => {
    switch (id) {
      case 'company-ops': return 'management';
      case 'customer-management': return 'crm';
      case 'sales-ecommerce': return 'ecommerce';
      case 'inventory-ops': return 'inventory';
      case 'appointments-booking': return 'booking';
      case 'property-management': return 'management';
      case 'employees-hr': return 'management';
      case 'custom-requirements': return 'other';
      default: return 'webapp';
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>OPERATIONAL PROBLEM & SOLUTION MATCHER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered For Companies That Can't Afford Broken Software.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We bridge the gap between creative visual excellence and rock-solid systems architecture. From customer-facing digital experiences to mission-critical operational platforms.
          </p>
        </div>

        {/* Interactive Problem / Solution Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Problem Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-3 pb-1">
              Select Business Area:
            </div>

            {SOLUTIONS.map((sol) => {
              const isSelected = sol.id === selectedSolutionId;
              return (
                <button
                  key={sol.id}
                  id={`solution-tab-${sol.id}`}
                  onClick={() => setSelectedSolutionId(sol.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-950/50'
                      : 'bg-[#0e1422]/60 hover:bg-[#121a2c]/80 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected 
                          ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50' 
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {getProblemIcon(sol.id)}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {sol.problemTitle}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-cyan-400/90 flex items-center gap-1 mt-0.5">
                        <span>→</span>
                        <span>{sol.solutionName}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-all duration-200 ${
                    isSelected ? 'text-cyan-400 translate-x-1 opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Solution Cockpit */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-black/60 relative overflow-hidden">
              {/* Top Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-0.5 rounded">
                    {activeSolution.solutionType}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                    {activeSolution.solutionName}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Target Department: {activeSolution.problemArea}
                  </p>
                </div>

                <button
                  onClick={() => onSelectSolutionForInquiry(activeSolution.solutionName)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md shadow-cyan-500/20 shrink-0"
                >
                  <span>Build This System</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </div>

              {/* Problem vs. Solution Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-red-950/15 border border-red-900/30">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-400 mb-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>THE OPERATIONAL PAIN</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeSolution.problemPain}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 mb-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>NEXGRID SYSTEM ANSWER</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeSolution.description}
                  </p>
                </div>
              </div>

              {/* Impact Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                {activeSolution.impactMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-tight mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulated System UI Mockup */}
              <div className="rounded-xl border border-slate-700/80 bg-[#080c14] overflow-hidden">
                {/* Mockup Window Header */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-slate-200 font-semibold">{activeSolution.previewUi.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-[11px] font-semibold">
                      {activeSolution.previewUi.status}
                    </span>
                  </div>
                </div>

                {/* Mockup Tabs */}
                <div className="px-4 pt-3 pb-2 border-b border-slate-800 flex items-center gap-2 text-xs">
                  <button
                    onClick={() => setActiveSimulatedTab('kpis')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      activeSimulatedTab === 'kpis'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Live KPIs
                  </button>
                  <button
                    onClick={() => setActiveSimulatedTab('logs')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      activeSimulatedTab === 'logs'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Event Stream
                  </button>
                  <button
                    onClick={() => setActiveSimulatedTab('modules')}
                    className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                      activeSimulatedTab === 'modules'
                        ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Included Modules
                  </button>
                </div>

                {/* Mockup Content Body */}
                <div className="p-4 sm:p-5">
                  {activeSimulatedTab === 'kpis' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeSolution.previewUi.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                          <span className="text-xs text-slate-400 block">{kpi.label}</span>
                          <span className="text-xl font-bold font-mono text-white block my-1">{kpi.value}</span>
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {kpi.change}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSimulatedTab === 'logs' && (
                    <div className="space-y-2 font-mono text-xs">
                      {activeSolution.previewUi.recentActivity.map((log) => (
                        <div key={log.id} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400 text-[10px]">{log.id}</span>
                            <span className="text-slate-300 text-xs">{log.action}</span>
                          </div>
                          <span className="text-slate-500 text-[10px]">{log.time}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeSimulatedTab === 'modules' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeSolution.keyModules.map((module, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center gap-2 text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Configurator Bridge */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <span className="text-slate-400 font-mono">
                  Custom scope tailored to your team size & workflow rules.
                </span>

                <button
                  onClick={() => onNavigateToConfigurator(getMappedConfiguratorType(activeSolution.id))}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 cursor-pointer focus:outline-none"
                >
                  <span>Customize in Interactive Configurator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
