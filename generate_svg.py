import os

def create_nexgrid_svgs():
    # 1. Icon-only SVG (512x512) for Favicon and App Icon
    icon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <!-- Background subtle dark rounded container -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#07111F" />
      <stop offset="100%" stop-color="#050912" />
    </linearGradient>

    <!-- Main Cyan to Electric Blue Ribbon Gradient -->
    <linearGradient id="ribbonMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9FF" />
      <stop offset="45%" stop-color="#00A3FF" />
      <stop offset="100%" stop-color="#087CFF" />
    </linearGradient>

    <!-- Left Leg Gradient -->
    <linearGradient id="leftLegGrad" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#00E5FF" />
      <stop offset="60%" stop-color="#0099FF" />
      <stop offset="100%" stop-color="#0066EE" />
    </linearGradient>

    <!-- Inner Fold Darker Gradient -->
    <linearGradient id="innerFoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#004FB2" />
      <stop offset="100%" stop-color="#0077D4" />
    </linearGradient>

    <!-- Right Leg Gradient -->
    <linearGradient id="rightLegGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#087CFF" />
      <stop offset="60%" stop-color="#00A3FF" />
      <stop offset="100%" stop-color="#00D9FF" />
    </linearGradient>

    <!-- Floating Pixel Voxels Gradient -->
    <linearGradient id="voxelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#00A8FF" />
    </linearGradient>

    <linearGradient id="voxelGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9FF" />
      <stop offset="100%" stop-color="#087CFF" />
    </linearGradient>

    <!-- High-Tech Glow Filter -->
    <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#00D9FF" flood-opacity="0.38" />
    </filter>

    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Dark Squircle Backdrop for perfect contrast on any browser tab theme -->
  <rect width="512" height="512" rx="128" fill="url(#bgGrad)" />
  <rect width="512" height="512" rx="128" fill="none" stroke="rgba(0, 217, 255, 0.22)" stroke-width="3" />

  <!-- The NexGrid "N" 3D Ribbon & Digital Grid Voxels -->
  <g filter="url(#cyanGlow)">
    <!-- 1. Left Vertical Ribbon Curve -->
    <path
      d="M 188 126
         C 204 116, 224 122, 230 138
         L 232 144
         C 236 154, 230 168, 216 182
         L 168 238
         C 146 264, 134 296, 134 330
         C 134 382, 172 418, 222 418
         C 246 418, 268 408, 284 390
         L 254 366
         C 244 376, 234 382, 222 382
         C 192 382, 170 358, 170 326
         C 170 304, 178 284, 194 264
         Z"
      fill="url(#leftLegGrad)"
    />

    <!-- 2. Inner Fold Flap (shadow fold) -->
    <path
      d="M 194 264
         L 248 348
         L 222 382
         C 206 382, 192 372, 182 358
         Z"
      fill="url(#innerFoldGrad)"
      opacity="0.9"
    />

    <!-- 3. Dynamic Diagonal Ribbon -->
    <path
      d="M 188 126
         C 176 136, 168 152, 168 170
         C 168 200, 184 234, 214 274
         L 332 416
         C 346 430, 368 434, 386 422
         C 402 412, 410 392, 404 374
         L 326 216
         L 248 136
         C 230 118, 204 114, 188 126
         Z"
      fill="url(#ribbonMainGrad)"
    />

    <!-- 4. Right Vertical Stem -->
    <path
      d="M 338 418
         L 374 418
         C 394 418, 408 402, 408 382
         L 408 234
         L 364 234
         L 364 366
         C 364 374, 356 382, 348 382
         Z"
      fill="url(#rightLegGrad)"
    />

    <!-- 5. Floating Digital Pixel Voxels (Grid disintegration effect) -->
    <!-- Large Top-Right Voxel -->
    <rect x="398" y="116" width="60" height="60" rx="12" fill="url(#voxelGrad1)" />

    <!-- Mid Left Voxel -->
    <rect x="344" y="152" width="46" height="46" rx="9" fill="url(#voxelGrad2)" />

    <!-- Lower Right Voxel -->
    <rect x="398" y="190" width="42" height="42" rx="8" fill="url(#voxelGrad2)" />

    <!-- Micro Accent Voxel -->
    <rect x="364" y="210" width="24" height="24" rx="5" fill="url(#voxelGrad1)" />
  </g>
</svg>'''

    with open('public/favicon.svg', 'w') as f:
        f.write(icon_svg)
    with open('public/nexgrid-icon.svg', 'w') as f:
        f.write(icon_svg)

    # 2. Full Horizontal Logo SVG with Wordmark & Subtitle
    full_logo_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 200" fill="none">
  <defs>
    <!-- Ribbon Gradients -->
    <linearGradient id="fullRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9FF" />
      <stop offset="45%" stop-color="#00A3FF" />
      <stop offset="100%" stop-color="#087CFF" />
    </linearGradient>

    <linearGradient id="fullLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#0077EE" />
    </linearGradient>

    <linearGradient id="fullFoldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#003D99" />
      <stop offset="100%" stop-color="#0066CC" />
    </linearGradient>

    <linearGradient id="fullGridTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00D9FF" />
      <stop offset="100%" stop-color="#087CFF" />
    </linearGradient>

    <linearGradient id="fullVoxelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F5FF" />
      <stop offset="100%" stop-color="#0099FF" />
    </linearGradient>

    <!-- Glow -->
    <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#00D9FF" flood-opacity="0.32" />
    </filter>
  </defs>

  <!-- Left: The NexGrid "N" Ribbon Mark -->
  <g transform="translate(16, 16) scale(0.33)" filter="url(#logoGlow)">
    <!-- Left vertical curve -->
    <path
      d="M 188 126
         C 204 116, 224 122, 230 138
         L 232 144
         C 236 154, 230 168, 216 182
         L 168 238
         C 146 264, 134 296, 134 330
         C 134 382, 172 418, 222 418
         C 246 418, 268 408, 284 390
         L 254 366
         C 244 376, 234 382, 222 382
         C 192 382, 170 358, 170 326
         C 170 304, 178 284, 194 264
         Z"
      fill="url(#fullLeftGrad)"
    />

    <!-- Inner fold flap -->
    <path
      d="M 194 264
         L 248 348
         L 222 382
         C 206 382, 192 372, 182 358
         Z"
      fill="url(#fullFoldGrad)"
    />

    <!-- Diagonal ribbon -->
    <path
      d="M 188 126
         C 176 136, 168 152, 168 170
         C 168 200, 184 234, 214 274
         L 332 416
         C 346 430, 368 434, 386 422
         C 402 412, 410 392, 404 374
         L 326 216
         L 248 136
         C 230 118, 204 114, 188 126
         Z"
      fill="url(#fullRibbonGrad)"
    />

    <!-- Right vertical stem -->
    <path
      d="M 338 418
         L 374 418
         C 394 418, 408 402, 408 382
         L 408 234
         L 364 234
         L 364 366
         C 364 374, 356 382, 348 382
         Z"
      fill="url(#fullRibbonGrad)"
    />

    <!-- Voxels -->
    <rect x="398" y="116" width="60" height="60" rx="12" fill="url(#fullVoxelGrad)" />
    <rect x="344" y="152" width="46" height="46" rx="9" fill="url(#fullRibbonGrad)" />
    <rect x="398" y="190" width="42" height="42" rx="8" fill="url(#fullRibbonGrad)" />
    <rect x="364" y="210" width="24" height="24" rx="5" fill="url(#fullVoxelGrad)" />
  </g>

  <!-- Right: The Wordmark "NEXGRID" & "DIGITAL SYSTEMS" -->
  <g transform="translate(195, 25)">
    <!-- Primary Wordmark: NEXGRID -->
    <g font-family="system-ui, -apple-system, 'Plus Jakarta Sans', Inter, sans-serif" font-weight="900" font-size="82" letter-spacing="2">
      <!-- "NE" in Pure White -->
      <text x="0" y="86" fill="#FFFFFF">NE</text>
      
      <!-- Stylized "X" -->
      <!-- Left diagonal of X in white -->
      <path d="M 152 26 L 194 86" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round" />
      <!-- Right diagonal of X in electric cyan -->
      <path d="M 194 26 L 152 86" stroke="url(#fullGridTextGrad)" stroke-width="18" stroke-linecap="round" />

      <!-- "GRID" in Cyan to Blue Gradient -->
      <text x="216" y="86" fill="url(#fullGridTextGrad)">GRID</text>
    </g>

    <!-- Subtitle: DIGITAL SYSTEMS -->
    <text
      x="4"
      y="132"
      font-family="system-ui, -apple-system, 'JetBrains Mono', monospace, sans-serif"
      font-weight="700"
      font-size="21"
      letter-spacing="14"
      fill="#F1F5F9"
      opacity="0.95"
    >
      DIGITAL SYSTEMS
    </text>
  </g>
</svg>'''

    with open('public/nexgrid-logo.svg', 'w') as f:
        f.write(full_logo_svg)

create_nexgrid_svgs()
print("NexGrid SVGs created successfully!")
