import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolSignboardBadge } from './SchoolSignboardBadge';
import { OmanMinistryLogo, OmanVision2040Logo } from './OmanLogos';
import { LogIn, LogOut, PlusCircle, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentUser,
    setIsAuthModalOpen,
    setIsUploadModalOpen,
    logoutTeacher,
    setIsSignboardModalOpen,
  } = useSchool();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Ministerial Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-emerald-400">سلطنة عُمان</span>
            <span className="text-stone-500">·</span>
            <span>وزارة التربية والتعليم</span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <span className="text-stone-400 hidden sm:inline">المديرية العامة للتربية والتعليم بمحافظة الوسطى</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-300">
            <span className="hidden md:inline text-amber-300 font-medium">رؤية عُمان ٢٠٤٠ نتقدّم بثقة</span>
            <button
              onClick={() => setIsSignboardModalOpen(true)}
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>شعار المدرسة مفرغاً</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Right: School Signboard & Identity */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <SchoolSignboardBadge variant="header" />
          </div>

          {/* Center: Ministry & Vision Logos (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 border-x border-stone-200 px-6">
            <OmanMinistryLogo className="h-10" />
            <div className="h-8 w-px bg-stone-200" />
            <OmanVision2040Logo className="h-10" />
          </div>

          {/* Left: Quick Navigation & Teacher Auth */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-stone-700 ml-4">
              <a href="#showcase" className="hover:text-emerald-700 transition-colors">
                أعمال المعلمين
              </a>
              <a href="#vision" className="hover:text-emerald-700 transition-colors">
                رؤية المدرسة
              </a>
              <a href="#messages" className="hover:text-emerald-700 transition-colors">
                رسائل التوجيه
              </a>
              <a href="#guestbook" className="hover:text-emerald-700 transition-colors">
                سجل الزوار
              </a>
            </nav>

            {currentUser ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 rounded-xl shadow-xs transition-colors"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>رفع عمل جديد</span>
                </button>

                <div className="hidden sm:flex flex-col text-left pl-2 pr-1 border-r border-stone-200 text-right">
                  <span className="text-xs font-bold text-stone-900 truncate max-w-[140px]">
                    {currentUser.name}
                  </span>
                  <span className="text-[10px] text-emerald-800 font-mono truncate max-w-[140px]">
                    {currentUser.email}
                  </span>
                </div>

                <button
                  onClick={logoutTeacher}
                  title="تسجيل الخروج"
                  className="p-2 text-stone-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white text-xs sm:text-sm font-semibold py-2 px-3 sm:px-4 rounded-xl shadow-xs transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span>دخول المعلم (@moe.om)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
