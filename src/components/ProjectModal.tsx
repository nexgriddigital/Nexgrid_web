import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  ArrowRight, 
  Layers, 
  Activity, 
  ShoppingBag, 
  Globe, 
  Building2,
  Calendar,
  ShieldCheck
} from 'lucide-react';
import { CaseStudyItem } from '../types';

interface ProjectModalProps {
  project: CaseStudyItem | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  onInquireSimilar 
}) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0d1320] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 text-left overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="project-case-modal"
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Demo Tag & Category */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/50">
            {project.clientType}
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
            Showcase Architecture Spec
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-cyan-400 mb-6">
          {project.tagline}
        </p>

        {/* Challenge vs. Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold block mb-1">
              Operational Challenge
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40">
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block mb-1">
              Engineered System Solution
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 uppercase tracking-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Architectural Highlights & Modules:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-6 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Technologies & Infrastructure:
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-slate-500">
            *Representative demo system specification engineered by NexGrid.
          </span>

          <button
            onClick={() => {
              onClose();
              onInquireSimilar(project.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/20 transition-all"
          >
            <span>Request a System Like This</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </div>
  );
};
