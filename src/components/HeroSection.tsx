import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolSignboardBadge } from './SchoolSignboardBadge';
import { OmanMinistryLogo, OmanVision2040Logo } from './OmanLogos';
import { 
  Sparkles, 
  BookOpen, 
  Clock, 
  Eye, 
  ShieldCheck, 
  GraduationCap, 
  ArrowLeft,
  Image as ImageIcon
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { 
    currentUser, 
    works, 
    setIsAuthModalOpen, 
    setIsUploadModalOpen,
    setIsSignboardModalOpen,
    setFilterType,
  } = useSchool();

  const modelLessonsCount = works.filter(w => w.type === 'model_lesson').length;
  const substitutionCount = works.filter(w => w.type === 'substitution_lesson').length;
  const visitsCount = works.filter(w => w.type === 'classroom_visit').length;
  const dutyCount = works.filter(w => w.type === 'duty_supervision').length;

  const scrollToWorks = (type?: any) => {
    if (type) setFilterType(type);
    const element = document.getElementById('showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-amber-50/30 to-stone-50 border-b border-stone-200 pt-8 pb-14">
      {/* Subtle traditional Islamic geometric watermark pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#065F46_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top ministerial header in Hero for mobile / tablets */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200/70 mb-8">
          <OmanMinistryLogo className="h-10 sm:h-12" />
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-600 bg-white/80 py-1.5 px-3 rounded-xl border border-stone-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>بوابة التوثيق الرقمي والزيارات الميدانية</span>
          </div>
          <OmanVision2040Logo className="h-10 sm:h-12" />
        </div>

        {/* Central Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Column: Title, Welcome & Vision */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            {/* School Tagline */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-3.5 py-1.5 rounded-xl">
              <span>محافظة الوسطى · ولاية محوت · شاطئ خلوف</span>
              <span className="text-emerald-400">|</span>
              <span>الصفوف (١ - ١٢)</span>
            </div>

            {/* Main Welcoming Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight font-serif">
              مرحباً بكم في البوابة التعليمية
              <span className="block text-emerald-800 mt-1">
                لمدرسة خلوف للتعليم الأساسي
              </span>
            </h1>

            {/* Welcome Message Paragraph */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              نافذة تربوية رائدة لتوثيق عطاءات الهيئة التعليمية، واستعراض الحصص النموذجية، ومتابعة تفعيل حصص الاحتياط، والزيارات الصفية، وأعمال المناوبة المدرسية اليومية؛ لتكون جسراً تفاعلياً مفتوحاً لكل زائر وولي أمر ومشرف تربوي.
            </p>

            {/* Prominent Official School Vision Card */}
            <div id="vision" className="bg-white/95 border-2 border-emerald-700/30 rounded-2xl p-5 sm:p-6 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-emerald-700" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                  <GraduationCap className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-800 tracking-wider block mb-1">
                    رؤية المدرسة المعتمدة
                  </span>
                  <blockquote className="text-base sm:text-lg font-bold text-stone-900 leading-snug font-serif">
                    «تمكين الطالب ليكون مجيداً علمياً وتقنياً، وملتزماً خُلقياً، في ظل شراكة مجتمعية هادفة»
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollToWorks()}
                className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl shadow-sm transition-all hover:shadow-md cursor-pointer text-sm sm:text-base"
              >
                <span>استطلاع أعمال المعلمين (نافذة الزائر)</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              {currentUser ? (
                <button
                  onClick={() => setIsUploadModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>رفع عمل جديد للمعلم</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold px-5 py-3 rounded-xl shadow-2xs transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>تسجيل دخول المعلم (@moe.om)</span>
                </button>
              )}

              <button
                onClick={() => setIsSignboardModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-amber-900 hover:text-amber-700 bg-amber-100/70 hover:bg-amber-100 py-3 px-3.5 rounded-xl border border-amber-300/60 font-semibold transition-colors"
                title="معاينة وتحميل الشعار واللوحة مفرغة الخلفية"
              >
                <ImageIcon className="w-4 h-4 text-amber-700" />
                <span>شعار المدرسة مفرغاً</span>
              </button>
            </div>

          </div>

          {/* Left Column: The Authentic School Signboard Plaque (Background Removed) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* The isolated plaque requested in user prompt */}
            <div className="w-full max-w-md">
              <div className="text-center mb-2.5">
                <span className="text-[11px] font-bold text-stone-500 tracking-wider">
                  لوحة واجهة المدرسة الرسمية (بخلفية مفرغة)
                </span>
              </div>
              
              <SchoolSignboardBadge variant="hero" showDownload={true} />

              {/* Informational caption */}
              <div className="mt-3 bg-white/70 backdrop-blur-2xs border border-stone-200/80 rounded-xl p-3 text-xs text-stone-600 flex items-center justify-between">
                <span>الصفوف الشاملة: (١ - ١٢) أساسي وثانوي</span>
                <span className="text-emerald-700 font-semibold">بإشراف تعليمية الوسطى</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Interactive KPI Counters matching the 4 required Teacher Work categories */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
          
          <button
            onClick={() => scrollToWorks('model_lesson')}
            className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-600 transition-all text-right shadow-2xs hover:shadow-xs group"
          >
            <div className="flex items-center justify-between text-stone-400 mb-2">
              <span className="text-xs font-bold text-stone-600 group-hover:text-emerald-800">الحصص النموذجية</span>
              <BookOpen className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900">
              {modelLessonsCount}
            </div>
            <span className="text-[11px] text-stone-500 block mt-1">استراتيجيات تدريس نشط</span>
          </button>

          <button
            onClick={() => scrollToWorks('substitution_lesson')}
            className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-600 transition-all text-right shadow-2xs hover:shadow-xs group"
          >
            <div className="flex items-center justify-between text-stone-400 mb-2">
              <span className="text-xs font-bold text-stone-600 group-hover:text-emerald-800">تفعيل الاحتياط</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900">
              {substitutionCount}
            </div>
            <span className="text-[11px] text-stone-500 block mt-1">حصص إثرائية وقرائية</span>
          </button>

          <button
            onClick={() => scrollToWorks('classroom_visit')}
            className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-600 transition-all text-right shadow-2xs hover:shadow-xs group"
          >
            <div className="flex items-center justify-between text-stone-400 mb-2">
              <span className="text-xs font-bold text-stone-600 group-hover:text-emerald-800">الزيارات الصفية</span>
              <Eye className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900">
              {visitsCount}
            </div>
            <span className="text-[11px] text-stone-500 block mt-1">إشرافية وتبادل خبرات</span>
          </button>

          <button
            onClick={() => scrollToWorks('duty_supervision')}
            className="bg-white p-4 rounded-xl border border-stone-200 hover:border-emerald-600 transition-all text-right shadow-2xs hover:shadow-xs group"
          >
            <div className="flex items-center justify-between text-stone-400 mb-2">
              <span className="text-xs font-bold text-stone-600 group-hover:text-emerald-800">أعمال المناوبة</span>
              <ShieldCheck className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-stone-900">
              {dutyCount}
            </div>
            <span className="text-[11px] text-stone-500 block mt-1">انضباط وسلامة مدرسية</span>
          </button>

        </div>

      </div>
    </section>
  );
};
