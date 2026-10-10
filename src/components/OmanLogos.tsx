import React from 'react';

/**
 * Official Oman Ministry of Education Emblem SVG
 */
export const OmanMinistryLogo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`} title="سلطنة عُمان - وزارة التربية والتعليم">
      <div className="flex flex-col text-right leading-tight">
        <span className="text-xs font-bold text-red-700 tracking-wider">سلطنة عُمان</span>
        <span className="text-sm font-black text-stone-900">وزارة التربية والتعليم</span>
        <span className="text-[10px] text-stone-500 font-sans tracking-tight">Ministry of Education</span>
      </div>
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 text-red-700 flex-shrink-0"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized Omani Khanjar and Crossed Swords */}
        <path d="M50 8 C48 8 46 9 46 11 L46 22 L41 22 C39 22 38 23.5 38 25 C38 26.5 39.5 28 41 28 L46 28 L46 36 C42 40 37 45 35 52 C32 62 37 72 47 75 L47 88 C47 90 49 92 50 92 C51 92 53 90 53 88 L53 75 C63 72 68 62 65 52 C63 45 58 40 54 36 L54 28 L59 28 C60.5 28 62 26.5 62 25 C62 23.5 61 22 59 22 L54 22 L54 11 C54 9 52 8 50 8 Z" fill="#991B1B" />
        {/* Swords Crossing */}
        <path d="M22 35 C32 45 45 53 50 55 C55 53 68 45 78 35 C79 34 81 35 81 36 C75 52 58 64 50 67 C42 64 25 52 19 36 C19 35 21 34 22 35 Z" fill="#991B1B" opacity="0.9" />
        {/* Central Crown / Khanjar Pommel Accent */}
        <circle cx="50" cy="18" r="3" fill="#D97706" />
        <circle cx="50" cy="28" r="2.5" fill="#D97706" />
      </svg>
    </div>
  );
};

/**
 * Oman Vision 2040 Emblem - Accurate representation of official brandmark (شعارنا.jpg)
 */
export const OmanVision2040Logo: React.FC<{ className?: string; inverted?: boolean }> = ({ 
  className = 'h-12 w-auto',
  inverted = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`} title="رؤية عُمان 2040 - نتقدّم بثقة">
      <div className="flex flex-col text-right leading-tight">
        <div className="flex items-center gap-1.5 justify-end">
          <span className="text-xs font-black text-cyan-600">نتقدّم بثقة</span>
          <span className="h-3.5 w-0.5 bg-cyan-500 inline-block" />
        </div>
        <span className="text-[9px] font-semibold text-cyan-700 tracking-tight font-sans">
          Moving Forward with Confidence
        </span>
      </div>

      {/* Dynamic Vision 2040 Vortex Motif from شعارنا.jpg */}
      <svg viewBox="0 0 100 100" className="w-10 h-10 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vortexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Orbiting pixelated wave tiles replicating the official vortex */}
        <g transform="translate(50, 50) rotate(-20) scale(0.85)">
          {/* Outer magenta tiles */}
          <rect x="-42" y="-35" width="7" height="7" rx="1.5" transform="rotate(45 -42 -35)" fill="#D946EF" />
          <rect x="-32" y="-40" width="7" height="7" rx="1.5" transform="rotate(40 -32 -40)" fill="#E879F9" />
          <rect x="-20" y="-42" width="7" height="7" rx="1.5" transform="rotate(35 -20 -42)" fill="#C084FC" />
          <rect x="-8" y="-42" width="7" height="7" rx="1.5" transform="rotate(30 -8 -42)" fill="#A855F7" />

          {/* Middle purple/blue tiles */}
          <rect x="-28" y="-22" width="6" height="6" rx="1" transform="rotate(45 -28 -22)" fill="#818CF8" />
          <rect x="-16" y="-28" width="6.5" height="6.5" rx="1" transform="rotate(40 -16 -28)" fill="#6366F1" />
          <rect x="-2" y="-30" width="7" height="7" rx="1" transform="rotate(32 -2 -30)" fill="#4F46E5" />
          <rect x="12" y="-28" width="7" height="7" rx="1" transform="rotate(22 12 -28)" fill="#3B82F6" />

          {/* Inner cyan vortex tunnel */}
          <rect x="-14" y="-10" width="5.5" height="5.5" rx="1" transform="rotate(48 -14 -10)" fill="#38BDF8" />
          <rect x="-2" y="-14" width="6" height="6" rx="1" transform="rotate(38 -2 -14)" fill="#0EA5E9" />
          <rect x="10" y="-14" width="6.5" height="6.5" rx="1" transform="rotate(25 10 -14)" fill="#0284C7" />
          <rect x="22" y="-10" width="7" height="7" rx="1" transform="rotate(10 22 -10)" fill="#06B6D4" />
          <rect x="30" y="2" width="6.5" height="6.5" rx="1" transform="rotate(-5 30 2)" fill="#0891B2" />

          {/* Lower swirling dots */}
          <rect x="28" y="16" width="6" height="6" rx="1" transform="rotate(-20 28 16)" fill="#0D9488" />
          <rect x="20" y="28" width="5.5" height="5.5" rx="1" transform="rotate(-35 20 28)" fill="#14B8A6" />
          <rect x="8" y="32" width="5" height="5" rx="1" transform="rotate(-50 8 32)" fill="#8B5CF6" />
          <rect x="-6" y="30" width="4.5" height="4.5" rx="1" transform="rotate(-65 -6 30)" fill="#C026D3" />

          {/* Central vortex aperture */}
          <ellipse cx="6" cy="6" rx="12" ry="16" transform="rotate(-30 6 6)" stroke="url(#vortexGrad)" strokeWidth="2.5" fill="none" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
