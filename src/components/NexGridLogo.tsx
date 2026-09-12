import React from 'react';
import { NexGridIcon } from './NexGridIcon';

export interface NexGridLogoProps {
  /**
   * 'horizontal': Icon + NEXGRID + DIGITAL SYSTEMS (default, ideal for Navbar & Footer)
   * 'full': Stacked/prominent layout
   * 'icon': Icon only (compact/mobile)
   */
  variant?: 'horizontal' | 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const NexGridLogo: React.FC<NexGridLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  showSubtitle = true,
  theme = 'dark',
  className = ''
}) => {
  // Sizing configurations
  const config = {
    sm: {
      iconSize: 34,
      titleClass: 'text-lg sm:text-xl',
      xStroke: 2.2,
      subtitleClass: 'text-[9px] tracking-[0.26em]',
      gap: 'gap-2.5'
    },
    md: {
      iconSize: 42,
      titleClass: 'text-xl sm:text-2xl',
      xStroke: 2.8,
      subtitleClass: 'text-[10px] sm:text-[11px] tracking-[0.28em]',
      gap: 'gap-3'
    },
    lg: {
      iconSize: 56,
      titleClass: 'text-3xl sm:text-4xl',
      xStroke: 3.5,
      subtitleClass: 'text-xs tracking-[0.32em]',
      gap: 'gap-4'
    },
    xl: {
      iconSize: 76,
      titleClass: 'text-5xl sm:text-6xl',
      xStroke: 4.8,
      subtitleClass: 'text-sm tracking-[0.36em]',
      gap: 'gap-5'
    }
  }[size];

  const isLight = theme === 'light';
  const primaryText = isLight ? 'text-slate-900' : 'text-white';
  const subtitleText = isLight ? 'text-slate-600' : 'text-slate-200';

  // Icon only view
  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <NexGridIcon size={config.iconSize} />
      </div>
    );
  }

  // Full stacked view
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group select-none ${className}`}>
        <div className="mb-3 transition-transform duration-300 group-hover:scale-105">
          <NexGridIcon size={config.iconSize * 1.3} glow />
        </div>
        <div className="flex flex-col items-center">
          {/* Wordmark */}
          <div className={`font-black tracking-wider uppercase flex items-center font-sans ${config.titleClass} ${primaryText}`}>
            <span>NE</span>
            {/* Custom Stylized X */}
            <span className="relative inline-flex items-center justify-center mx-[0.5px] w-[0.82em] h-[0.9em]">
              {/* Back slash in primary text color */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="4" x2="20" y2="20" stroke={isLight ? '#0F172A' : '#FFFFFF'} strokeWidth={config.xStroke * 1.2} strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="url(#xGradFull)" strokeWidth={config.xStroke * 1.2} strokeLinecap="round" />
                <defs>
                  <linearGradient id="xGradFull" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D9FF" />
                    <stop offset="100%" stopColor="#087CFF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="bg-gradient-to-r from-[#00D9FF] via-[#00A8FF] to-[#087CFF] bg-clip-text text-transparent">
              GRID
            </span>
          </div>

          {/* Subtitle */}
          {showSubtitle && (
            <div className={`font-mono font-bold uppercase ${config.subtitleClass} ${subtitleText} mt-1 opacity-90`}>
              DIGITAL SYSTEMS
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal layout (Default: used in Navbar & Footer)
  return (
    <div className={`inline-flex items-center ${config.gap} group select-none cursor-pointer ${className}`}>
      {/* Icon */}
      <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
        <NexGridIcon size={config.iconSize} glow />
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        {/* Wordmark */}
        <div className={`font-black tracking-wider uppercase flex items-center font-sans ${config.titleClass} ${primaryText}`}>
          <span>NE</span>
          
          {/* Custom Stylized X matching the brand logo */}
          <span className="relative inline-flex items-center justify-center mx-[0.5px] w-[0.78em] h-[0.88em]">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
              {/* Back slash */}
              <line x1="4" y1="4" x2="20" y2="20" stroke={isLight ? '#0F172A' : '#FFFFFF'} strokeWidth={config.xStroke * 1.15} strokeLinecap="round" />
              {/* Forward slash in electric cyan gradient */}
              <line x1="20" y1="4" x2="4" y2="20" stroke="url(#xGradHoriz)" strokeWidth={config.xStroke * 1.15} strokeLinecap="round" />
              <defs>
                <linearGradient id="xGradHoriz" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="100%" stopColor="#087CFF" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="bg-gradient-to-r from-[#00D9FF] via-[#00A8FF] to-[#087CFF] bg-clip-text text-transparent">
            GRID
          </span>
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <div className={`font-mono font-bold uppercase ${config.subtitleClass} ${subtitleText} mt-1 opacity-90`}>
            DIGITAL SYSTEMS
          </div>
        )}
      </div>
    </div>
  );
};
