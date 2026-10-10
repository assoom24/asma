import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { MessageSquare, Star, Send, User, CheckCircle2 } from 'lucide-react';

const ROLES = [
  'ولي أمر طالب / طالبة',
  'مشرف تربوي من تعليمية الوسطى',
  'زائر مجتمعي',
  'طالب / خريج من مدرسة خلوف',
  'تربوي / معلم زائر',
];

export const VisitorGuestbookSection: React.FC = () => {
  const { guestbook, addGuestbookEntry } = useSchool();
  const [visitorName, setVisitorName] = useState('');
  const [role, setRole] = useState(ROLES[0]);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !message.trim()) return;

    addGuestbookEntry({
      visitorName: visitorName.trim(),
      role,
      message: message.trim(),
      rating,
    });

    setMessage('');
    setVisitorName('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="guestbook" className="py-14 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-right max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2 bg-emerald-100/70 px-3 py-1 rounded-lg">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>سجل الشكر والانطباعات</span>
            <span>·</span>
            <span>نافذة الزائر</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
            كلمات شكر وانطباعات زوار مدرسة خلوف
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            مساحة مخصصة لأولياء الأمور والمشرفين والزوار الكرام لتدوين رسائل الشكر، والتغذية الراجعة، والاعتزاز بجهود المعلمين والطلاب.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Guestbook Entries List */}
          <div className="lg:col-span-7 space-y-4">
            {guestbook.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 shadow-2xs text-right space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200">
                      {entry.visitorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm leading-tight">{entry.visitorName}</h4>
                      <span className="text-[11px] text-stone-500">{entry.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {'★'.repeat(entry.rating)}
                    <span className="text-stone-400 text-[10px] mr-1 font-sans">{entry.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>

          {/* Add Entry Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs text-right sticky top-24">
            <h3 className="font-bold text-base text-stone-900 mb-1 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>أضف كلمة شكر أو انطباع في سجل الزوار</span>
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              نسعد بتسجيل رأيك حول الحصص المعروضة أو جهود المدرسة.
            </p>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs p-3 rounded-xl mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>شكراً جزيلاً لك! تم حفظ انطباعك في سجل الزوار بنجاح.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  الاسم الكريم *
                </label>
                <input
                  type="text"
                  placeholder="مثال: سالم بن عبد الله الحكماني"
                  value={visitorName}
                  onChange={(e) => setVisitorName(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  الصفة أو العلاقة بالمدرسة
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
                >
                  {ROLES.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  التقييم
                </label>
                <div className="flex items-center gap-2">
                  {[5, 4, 3].map((val) => (
                    <button
                      type="button"
                      key={val}
                      onClick={() => setRating(val)}
                      className={`px-3 py-1 text-xs rounded-lg border font-semibold ${
                        rating === val
                          ? 'bg-amber-100 border-amber-400 text-amber-900'
                          : 'bg-stone-50 border-stone-200 text-stone-600'
                      }`}
                    >
                      {'★'.repeat(val)} ({val === 5 ? 'ممتاز' : val === 4 ? 'جيد جداً' : 'جيد'})
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  كلمة الشكر أو الرسالة *
                </label>
                <textarea
                  rows={3}
                  placeholder="اكتب رسالتك وكلماتك الطيبة لإدارة المدرسة ومعلميها وطلابها..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إرسال الكلمة لسجل الزوار</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
