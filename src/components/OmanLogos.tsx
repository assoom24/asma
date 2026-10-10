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
 * Oman Vision 2040 Emblem
 */
export const OmanVision2040Logo: React.FC<{ className?: string }> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`} title="رؤية عُمان 2040">
      <div className="flex flex-col text-right leading-tight">
        <span className="text-[10px] text-emerald-800 font-bold">نتقدّم بثقة</span>
        <span className="text-xs font-black text-stone-800">رؤية عُمان 2040</span>
        <span className="text-[9px] text-stone-400 font-sans">Oman Vision 2040</span>
      </div>
      {/* Dynamic Vision 2040 Multi-color Arc */}
      <svg viewBox="0 0 80 80" className="w-9 h-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="36" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3 3" />
        {/* Dynamic Colorful Swirls */}
        <path d="M40 10 A30 30 0 0 1 70 40" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
        <path d="M70 40 A30 30 0 0 1 40 70" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
        <path d="M40 70 A30 30 0 0 1 10 40" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" />
        <path d="M10 40 A30 30 0 0 1 40 10" stroke="#D97706" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="40" r="14" fill="#047857" fillOpacity="0.1" />
        <text x="40" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065F46" fontFamily="sans-serif">2040</text>
      </svg>
    </div>
  );
};
