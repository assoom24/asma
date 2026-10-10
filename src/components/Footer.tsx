import React from 'react';
import { SchoolSignboardBadge } from './SchoolSignboardBadge';
import { OmanMinistryLogo, OmanVision2040Logo } from './OmanLogos';
import { MapPin, Phone, Mail, Globe, Sparkles, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-right">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: School Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/30 border border-amber-500/50 flex items-center justify-center text-amber-300 font-bold text-sm">
                ⚔
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">مدرسة خلوف للتعليم الأساسي</h3>
                <span className="text-xs text-emerald-400 font-medium">الصفوف (١ - ١٢) · سلطنة عُمان</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              صرح تربوي ينبض بالعطاء في ولاية محوت بمحافظة الوسطى، نسعى لتمكين أبنائنا الطلبة علمياً وتقنياً وخُلقياً في ظل بيئة مدرسية محفزة وشراكة مجتمعية رائدة.
            </p>

            <div className="space-y-1.5 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>محافظة الوسطى، ولاية محوت، قرية خلوف الساحلية</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-mono dir-ltr">khalluf.school@moe.om</span>
              </div>
            </div>
          </div>

          {/* Col 2: Vision & Values */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 tracking-wider">رؤية المدرسة والوطن</h4>
            <blockquote className="text-xs sm:text-sm text-stone-200 leading-relaxed bg-stone-800/80 p-3.5 rounded-xl border border-stone-700/80">
              «تمكين الطالب ليكون مجيداً علمياً وتقنياً، وملتزماً خُلقياً، في ظل شراكة مجتمعية هادفة»
            </blockquote>
            <p className="text-[11px] text-stone-400">
              نسير بخطى واثقة نحو مستهدفات التعليم والابتكار في <span className="text-white font-semibold">رؤية عُمان ٢٠٤٠</span>.
            </p>
          </div>

          {/* Col 3: Portal Sections */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className="font-bold text-white mb-2">أقسام البوابة</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <a href="#showcase" className="hover:text-emerald-400 transition-colors">
                  • سجل الحصص النموذجية
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-emerald-400 transition-colors">
                  • تفعيل حصص الاحتياط
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-emerald-400 transition-colors">
                  • الزيارات الصفية والإشرافية
                </a>
              </li>
              <li>
                <a href="#showcase" className="hover:text-emerald-400 transition-colors">
                  • أعمال المناوبة والانضباط
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  • المعرض التفاعلي المصور للأنشطة
                </a>
              </li>
              <li>
                <a href="#messages" className="hover:text-emerald-400 transition-colors">
                  • رسائل أولياء الأمور والطلاب
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar with mandatory credit: "فكرة واعداد أ. أسماء العلوية" in small font */}
      <div className="border-t border-stone-800 bg-stone-950 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400">
          
          <div className="flex items-center gap-3 text-xs">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()} مدرسة خلوف للتعليم الأساسي</span>
            <span>·</span>
            <span>وزارة التربية والتعليم - سلطنة عُمان</span>
          </div>

          {/* The required specific attribution in small font */}
          <div className="text-[11px] sm:text-xs text-amber-300 font-medium tracking-wide flex items-center gap-1.5 bg-stone-900/90 border border-stone-800 px-3 py-1 rounded-lg">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>فكرة وإعداد: أ. أسماء العلوية</span>
          </div>

        </div>
      </div>

    </footer>
  );
};
