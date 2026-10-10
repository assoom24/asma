import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolSignboardBadge } from './SchoolSignboardBadge';
import { X, Download, Check, Sparkles, Layers, Eye } from 'lucide-react';

export const SignboardModal: React.FC = () => {
  const { isSignboardModalOpen, setIsSignboardModalOpen } = useSchool();
  const [backgroundMode, setBackgroundMode] = useState<'transparent' | 'light' | 'dark'>('transparent');

  if (!isSignboardModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden text-right my-8 animate-in fade-in zoom-in-95 duration-200"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-amber-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">لوحة وشعار مدرسة خلوف (مفرغة الخلفية)</h3>
              <p className="text-xs text-stone-400">عزل تام لخلفية صورة لوحة مدخل المدرسة الرسمية</p>
            </div>
          </div>
          <button
            onClick={() => setIsSignboardModalOpen(false)}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Controls to preview over different backgrounds */}
          <div className="flex items-center justify-between bg-stone-100 p-2 rounded-xl text-xs">
            <span className="font-bold text-stone-700 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-stone-500" />
              <span>معاينة الشعار على خلفيات مختلفة:</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setBackgroundMode('transparent')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  backgroundMode === 'transparent'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                مفرغة (شفافة)
              </button>
              <button
                onClick={() => setBackgroundMode('light')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  backgroundMode === 'light'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                بيضاء
              </button>
              <button
                onClick={() => setBackgroundMode('dark')}
                className={`px-3 py-1 rounded-lg font-semibold transition-colors ${
                  backgroundMode === 'dark'
                    ? 'bg-stone-800 text-white shadow-2xs'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                داكنة
              </button>
            </div>
          </div>

          {/* Canvas Display Container */}
          <div 
            className={`p-8 rounded-2xl flex items-center justify-center transition-colors min-h-[320px] ${
              backgroundMode === 'transparent' 
                ? 'bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[size:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0]'
                : backgroundMode === 'dark'
                ? 'bg-stone-900'
                : 'bg-white border border-stone-200'
            }`}
          >
            <SchoolSignboardBadge variant="isolated" showDownload={true} />
          </div>

          {/* Details & Specs */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-950 space-y-1.5 leading-relaxed">
            <div className="font-bold text-amber-900 text-sm mb-1">
              تفاصيل لوحة الواجهة الرسمية:
            </div>
            <p>• <strong>النص:</strong> مدرسة خلوف للتعليم الأساسي - الصفوف (١ - ١٢) - وزارة التربية و التعليم.</p>
            <p>• <strong>الشعار المدمج:</strong> الخنجر والسيفان التقليديان لسلطنة عُمان.</p>
            <p>• <strong>الاستخدام:</strong> تم عزل اللوحة بدقة هندسية عالية لتوظيفها في المطبوعات الرسمية، والترويسات، والشهادات المدرسية دون أي تشويش لخلفية الجدار أو المظلة الخارجية الأصلية.</p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end">
          <button
            onClick={() => setIsSignboardModalOpen(false)}
            className="px-5 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
