import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { DEMO_TEACHERS } from '../data/initialData';
import { X, Lock, Mail, User, AlertCircle, CheckCircle2, Shield } from 'lucide-react';

export const TeacherAuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, loginTeacher } = useSchool();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = loginTeacher(email, name);
    if (!result.success) {
      setError(result.error || 'حدث خطأ أثناء تسجيل الدخول');
    }
  };

  const handleSelectDemoTeacher = (t: typeof DEMO_TEACHERS[0]) => {
    setEmail(t.email);
    setName(t.name);
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-stone-200 overflow-hidden text-right animate-in fade-in zoom-in-95 duration-200"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">بوابة المعلم المعتمدة</h3>
              <p className="text-[11px] text-stone-400">مدرسة خلوف للتعليم الأساسي (١-١٢)</p>
            </div>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5">تنبيه النظام الوزاري:</span>
              يُسمح بالدخول فقط بالبريد الإلكتروني الوزاري الرسمي الصادر من وزارة التربية والتعليم المنتهي بنطاق <strong className="text-emerald-800 font-mono">@moe.om</strong>.
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                البريد الإلكتروني الوزاري (@moe.om)
              </label>
              <div className="relative">
                <input
                  type="email"
                  dir="ltr"
                  placeholder="name@moe.om"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-3 pr-10 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors font-mono"
                />
                <Mail className="w-4 h-4 text-stone-400 absolute right-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                اسم المعلم / المعلمة (اختياري)
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="أ. أسماء العلوية"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-3 pr-10 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:border-emerald-600 focus:outline-none transition-colors"
                />
                <User className="w-4 h-4 text-stone-400 absolute right-3 top-3" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>تسجيل الدخول ومتابعة الأعمال</span>
            </button>
          </form>

          {/* Quick Demo Pickers */}
          <div className="pt-3 border-t border-stone-200">
            <span className="text-[11px] font-bold text-stone-500 block mb-2">
              حسابات تجريبية سريعة لهيئة التدريس بمدرسة خلوف:
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {DEMO_TEACHERS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleSelectDemoTeacher(t)}
                  className={`text-right p-2 rounded-lg text-xs border transition-colors flex items-center justify-between ${
                    email.toLowerCase() === t.email.toLowerCase()
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-[10px] text-stone-500">{t.role}</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 dir-ltr">{t.email}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
