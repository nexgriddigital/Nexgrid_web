import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Search, 
  FileCode2, 
  Palette, 
  Cpu, 
  Rocket, 
  ArrowRight, 
  Clock, 
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-cyan-400" />;
      case 1: return <FileCode2 className="w-5 h-5 text-blue-400" />;
      case 2: return <Palette className="w-5 h-5 text-purple-400" />;
      case 3: return <Cpu className="w-5 h-5 text-emerald-400" />;
      default: return <Rocket className="w-5 h-5 text-amber-400" />;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#090d16] relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>ENGINEERING METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How We Build Systems That Don’t Fail.
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We follow an unyielding, 5-phase software development lifecycle. Every phase produces 
            tangible artifacts, verified milestones, and transparent client reviews.
          </p>
        </div>

        {/* 5-Step Horizontal Interactive Timeline */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  id={`process-step-btn-${idx}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40 text-white'
                      : 'bg-[#0d131f]/70 hover:bg-[#111827] border-slate-800 text-slate-400'
                  }`}
                >
                  {/* Top indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xl font-bold font-mono ${isActive ? 'text-cyan-400' : 'text-slate-600'}`}>
                      {step.step}
                    </span>
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-950 text-cyan-300' : 'bg-slate-800 text-slate-500'}`}>
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                      {step.timeline}
                    </span>
                    <span className={`text-sm font-bold block ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {step.title}
                    </span>
                  </div>

                  {/* Active bottom accent line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Showcase */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0e1526] to-[#0a0f1d] border border-slate-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: Step info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold font-mono text-cyan-400">
                  {activeStep.step}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeStep.title} — {activeStep.subtitle}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    Estimated Window: {activeStep.timeline}
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6">
                {activeStep.description}
              </p>

              {/* Guiding Action Motto */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                  Core Objective & Philosophy:
                </span>
                <p className="text-slate-200 text-sm font-medium">
                  "{activeStep.keyAction}"
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Phase Deliverables & Verification Artifacts:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Visual Process Inspector Terminal */}
            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#080c14] border border-slate-800 p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    PHASE_{activeStep.step}_TELEMETRY
                  </span>
                  <span className="text-[10px] text-emerald-400">STATUS: APPROVED</span>
                </div>

                <div className="space-y-3 text-slate-300">
                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">CURRENT PHASE:</span>
                    <span className="text-cyan-400 font-bold">{activeStep.title.toUpperCase()}</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">CLIENT CHECKPOINT:</span>
                    <span className="text-slate-200">Weekly sprint review + live staging demonstration</span>
                  </div>

                  <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">QA GATEWAY:</span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Zero unresolved critical bugs permitted past this stage
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                  <span>NexGrid Lifecycle v4.2</span>
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
