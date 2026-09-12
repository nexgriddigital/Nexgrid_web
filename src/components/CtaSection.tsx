import React from 'react';
import { ArrowRight, Terminal, Sparkles, MessageSquare, Mail, PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  onStartProject: () => void;
  onContactClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartProject, onContactClick }) => {
  return (
    <section className="py-24 bg-[#090d16] relative overflow-hidden border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-950/40">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>INITIATE PROJECT ASSESSMENT</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Have a Business Problem? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            Let's Build the Solution.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us what you're trying to achieve. We'll help turn the idea into a practical digital product.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            id="final-cta-start-project"
            onClick={onStartProject}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all cursor-pointer group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="final-cta-contact"
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-medium text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact NexGrid</span>
          </button>
        </div>

        {/* Direct contact line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Avg Response: &lt; 24 Hours
          </span>
          <span>•</span>
          <a href="mailto:hello@nexgrid.tech" className="hover:text-cyan-400 transition-colors">
            hello@nexgrid.tech
          </a>
          <span>•</span>
          <span>NDA Protection Guaranteed</span>
        </div>
      </div>
    </section>
  );
};
