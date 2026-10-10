import React, { useRef } from 'react';
import { Download, Sparkles, Check } from 'lucide-react';

interface SchoolSignboardBadgeProps {
  variant?: 'hero' | 'header' | 'isolated' | 'card';
  showDownload?: boolean;
}

/**
 * Authentic School Signboard Plaque with Transparent Background
 * Recreates the official Khalluf School entrance plaque from the user's photo with background removed.
 */
export const SchoolSignboardBadge: React.FC<SchoolSignboardBadgeProps> = ({
  variant = 'hero',
  showDownload = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [downloaded, setDownloaded] = React.useState(false);

  const handleDownloadTransparentPNG = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 700;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background to be 100% transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw plaque rounded rectangle with subtle shadow and transparent back
    ctx.save();
    ctx.fillStyle = '#FAF7F0'; // Sand-ivory marble background
    ctx.strokeStyle = '#B45309'; // Gold bronze border
    ctx.lineWidth = 6;
    
    // Rounded rect
    const x = 50, y = 50, w = 1100, h = 600, r = 24;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Inner thin border
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 2;
    ctx.strokeRect(65, 65, 1070, 570);

    // 4 Corner bolts
    ctx.fillStyle = '#78350F';
    [
      [80, 80],
      [1120, 80],
      [80, 620],
      [1120, 620]
    ].forEach(([bx, by]) => {
      ctx.beginPath();
      ctx.arc(bx, by, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Year
    ctx.fillStyle = '#78350F';
    ctx.font = 'bold 30px "Cairo", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('٢٠٢٤ م', 1080, 140);

    // National Emblem (Khanjar)
    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 50px "Cairo", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('⚔', 600, 160);

    // Title 1
    ctx.fillStyle = '#1C1917';
    ctx.font = '900 64px "Cairo", sans-serif';
    ctx.fillText('مدرسة خلوف للتعليم الأساسي', 600, 270);

    // Subtitle (Grades)
    ctx.fillStyle = '#065F46';
    ctx.font = 'bold 48px "Cairo", sans-serif';
    ctx.fillText('الصفوف ( ١ - ١٢ )', 600, 370);

    // Ministry
    ctx.fillStyle = '#78350F';
    ctx.font = 'bold 42px "Cairo", sans-serif';
    ctx.fillText('وزارة التربية و التعليم', 600, 480);

    ctx.restore();

    // Trigger download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'shoaar-madrasat-khalluf-transparent.png';
    link.href = dataUrl;
    link.click();

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-3">
        {/* Isolated Plaque Micro Icon */}
        <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-300/80 shadow-xs flex flex-col items-center justify-center p-1 text-center relative overflow-hidden group">
          <span className="text-amber-800 text-[10px] leading-none font-bold">⚔</span>
          <span className="text-stone-900 font-extrabold text-[9px] leading-tight mt-0.5">خلوف</span>
          <span className="text-emerald-800 text-[7px] font-semibold">١-١٢</span>
        </div>
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg font-bold text-stone-900 leading-tight">
              مدرسة خلوف للتعليم الأساسي
            </h1>
          </div>
          <p className="text-xs text-stone-500 font-medium">
            الصفوف (١ - ١٢) · سلطنة عُمان
          </p>
        </div>
      </div>
    );
  }

  // Hero or Isolated Signboard Plaque with transparent cut-out design
  return (
    <div className="relative inline-block group">
      {/* Isolated Signboard Plaque Card - Authentic replication from user's image with background removed */}
      <div className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFE0] border-2 border-amber-600/70 rounded-2xl shadow-xl px-6 py-6 sm:px-10 sm:py-8 text-center max-w-xl mx-auto backdrop-blur-xs transition-all duration-300 hover:shadow-2xl">
        
        {/* Traditional Ornamental Screw Bolts in the 4 corners */}
        <div className="absolute top-3 right-3 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-800 to-amber-500 border border-amber-900 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-amber-950/60 rotate-45" />
        </div>
        <div className="absolute top-3 left-3 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-800 to-amber-500 border border-amber-900 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-amber-950/60 rotate-45" />
        </div>
        <div className="absolute bottom-3 right-3 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-800 to-amber-500 border border-amber-900 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-amber-950/60 rotate-45" />
        </div>
        <div className="absolute bottom-3 left-3 w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-800 to-amber-500 border border-amber-900 shadow-xs flex items-center justify-center">
          <div className="w-1.5 h-0.5 bg-amber-950/60 rotate-45" />
        </div>

        {/* Inner golden hairline border like traditional stone plaques */}
        <div className="absolute inset-2 border border-amber-400/40 rounded-xl pointer-events-none" />

        {/* Date stamp as on the original plaque */}
        <div className="absolute top-4 left-6 text-xs text-amber-900/80 font-bold tracking-tight">
          ٢٠٢٤ م
        </div>

        {/* Top Khanjar & Swords Emblem */}
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 flex items-center justify-center text-amber-700">
            <svg viewBox="0 0 100 100" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 C48 10 47 11 47 13 L47 24 L42 24 C40 24 39 25.5 39 27 C39 28.5 40 30 42 30 L47 30 L47 38 C43 42 38 47 36 54 C33 64 38 74 48 77 L48 90 C48 92 50 94 51 94 C52 94 54 92 54 90 L54 77 C64 74 69 64 66 54 C64 47 59 42 55 38 L55 30 L60 30 C62 30 63 28.5 63 27 C63 25.5 62 24 60 24 L55 24 L55 13 C55 11 53 10 51 10 Z" fill="#92400E" />
              <path d="M24 38 C34 48 47 56 52 58 C57 56 70 48 80 38 C81 37 83 38 83 39 C77 55 60 67 52 70 C44 67 27 55 21 39 C21 38 23 37 24 38 Z" fill="#B45309" />
            </svg>
          </div>
        </div>

        {/* School Main Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-1 font-serif leading-snug">
          مدرسة خلوف للتعليم الأساسي
        </h2>

        {/* Grades Bracket */}
        <div className="text-emerald-800 font-extrabold text-lg sm:text-xl my-1 tracking-wide">
          الصفوف ( ١ - ١٢ )
        </div>

        {/* Ministry Subtitle */}
        <p className="text-amber-900 font-bold text-sm sm:text-base tracking-wide mt-1">
          وزارة التربية و التعليم
        </p>

        {/* Status pill indicating background removed */}
        <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-stone-500">
          <span className="flex items-center gap-1.5 text-emerald-800 font-medium text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            شعار المدرسة الرسمي (بخلفية مفرغة نقية)
          </span>
          <button
            onClick={handleDownloadTransparentPNG}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 hover:text-amber-700 bg-amber-100/80 hover:bg-amber-200/80 px-2.5 py-1 rounded-md transition-colors"
            title="تحميل الشعار بصيغة PNG شفافة"
          >
            {downloaded ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span>تم التحميل</span>
              </>
            ) : (
              <>
                <Download className="w-3 h-3" />
                <span>تحميل الشعار مفرغاً</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
