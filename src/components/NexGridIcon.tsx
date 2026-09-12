import React from 'react';

export interface NexGridIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  withBackdrop?: boolean;
  glow?: boolean;
}

export const NexGridIcon: React.FC<NexGridIconProps> = ({
  size = 'md',
  className = '',
  withBackdrop = false,
  glow = true
}) => {
  const pixelSize = typeof size === 'number' ? size : {
    xs: 20,
    sm: 28,
    md: 38,
    lg: 52,
    xl: 72
  }[size];

  // Unique IDs for SVG gradients to prevent collisions if multiple rendered
  const idPrefix = React.useId().replace(/:/g, '');

  return (
    <div 
      className={`relative shrink-0 flex items-center justify-center select-none ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${glow ? 'drop-shadow-[0_0_10px_rgba(0,217,255,0.35)]' : ''}`}
        aria-label="NexGrid Geometric N Symbol"
      >
        <defs>
          {/* Main Diagonal Ribbon Gradient */}
          <linearGradient id={`${idPrefix}-diag`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="45%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#087CFF" />
          </linearGradient>

          {/* Left Vertical Curve Gradient */}
          <linearGradient id={`${idPrefix}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#00B8FF" />
            <stop offset="100%" stopColor="#0066EE" />
          </linearGradient>

          {/* Inner Fold Depth Shadow Gradient */}
          <linearGradient id={`${idPrefix}-fold`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#003D99" />
            <stop offset="100%" stopColor="#0066CC" />
          </linearGradient>

          {/* Right Stem Gradient */}
          <linearGradient id={`${idPrefix}-right`} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#087CFF" />
            <stop offset="60%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>

          {/* Voxel Gradients */}
          <linearGradient id={`${idPrefix}-vox1`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" />
            <stop offset="100%" stopColor="#0099FF" />
          </linearGradient>

          <linearGradient id={`${idPrefix}-vox2`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" />
            <stop offset="100%" stopColor="#087CFF" />
          </linearGradient>
        </defs>

        {/* Optional Squircle Backdrop */}
        {withBackdrop && (
          <>
            <rect width="100" height="100" rx="24" fill="#07111F" />
            <rect width="100" height="100" rx="24" fill="none" stroke="rgba(0, 217, 255, 0.25)" strokeWidth="1.5" />
          </>
        )}

        <g transform={withBackdrop ? 'scale(0.8) translate(12, 12)' : 'scale(0.95) translate(2.5, 2.5)'}>
          {/* 1. Left Vertical Ribbon Curve */}
          <path
            d="M 37 25
               C 40 23, 44 24, 45 27
               L 45.5 28
               C 46 30, 45 33, 42 36
               L 33 47
               C 28 52, 26 58, 26 65
               C 26 75, 33 82, 43 82
               C 48 82, 52 80, 55 77
               L 49 72
               C 47 74, 45 75, 43 75
               C 37 75, 33 70, 33 64
               C 33 60, 35 56, 38 52
               Z"
            fill={`url(#${idPrefix}-left)`}
          />

          {/* 2. Inner Fold Flap (Darker depth layer) */}
          <path
            d="M 38 52
               L 49 69
               L 43 75
               C 40 75, 37 73, 35 70
               Z"
            fill={`url(#${idPrefix}-fold)`}
          />

          {/* 3. Main Diagonal Ribbon */}
          <path
            d="M 37 25
               C 34 27, 33 30, 33 34
               C 33 40, 36 46, 42 54
               L 65 82
               C 68 85, 72 86, 76 83
               C 79 81, 81 77, 80 73
               L 64 42
               L 49 27
               C 45 23, 40 22, 37 25
               Z"
            fill={`url(#${idPrefix}-diag)`}
          />

          {/* 4. Right Vertical Stem */}
          <path
            d="M 66 82
               L 73 82
               C 77 82, 80 79, 80 75
               L 80 46
               L 71 46
               L 71 72
               C 71 73.5, 69.5 75, 68 75
               Z"
            fill={`url(#${idPrefix}-right)`}
          />

          {/* 5. Floating Pixel Voxels (Disintegrating Digital Grid) */}
          {/* Top-Right Big Voxel */}
          <rect x="78" y="23" width="12" height="12" rx="2.5" fill={`url(#${idPrefix}-vox1)`} />

          {/* Mid-Left Voxel */}
          <rect x="67" y="30" width="9" height="9" rx="2" fill={`url(#${idPrefix}-vox2)`} />

          {/* Mid-Right Voxel */}
          <rect x="78" y="38" width="8.5" height="8.5" rx="1.8" fill={`url(#${idPrefix}-vox2)`} />

          {/* Micro Accent Voxel */}
          <rect x="71" y="42" width="5" height="5" rx="1" fill={`url(#${idPrefix}-vox1)`} />
        </g>
      </svg>
    </div>
  );
};
