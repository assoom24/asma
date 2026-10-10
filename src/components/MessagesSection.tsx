import React from 'react';
import { HeartHandshake, Users, Sparkles, GraduationCap, Compass, BookOpen } from 'lucide-react';

export const MessagesSection: React.FC = () => {
  return (
    <section id="messages" className="py-14 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-right max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2 bg-emerald-100/70 px-3 py-1 rounded-lg">
            <span>التوجيه والرسائل التربوية</span>
            <span>·</span>
            <span>مدرسة خلوف للتعليم الأساسي (١-١٢)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
            رسائل القيادة التربوية والشركاء
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            كلمات من القلب إلى مجتمعنا المدرسي والمحلي، تجسد رؤيتنا الراسخة في بناء الإنسان العُماني الواعي والملتزم.
          </p>
        </div>

        {/* 1. Welcome Message Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-850 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden mb-10 text-right">
          {/* Subtle ornamental glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 text-xs text-amber-350 font-bold mb-3 tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>رسالة ترحيبية لكل زائر لموقع المدرسة</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 leading-snug font-serif">
              أهلاً وسهلاً بكم في رحاب صرحنا التعليمي.. مدرسة خلوف للتعليم الأساسي
            </h3>

            <p className="text-stone-200 text-sm sm:text-base leading-relaxed mb-4">
              يطيب لنا أن نرحب بكل زائر كريم يطالع نافذتنا الرقمية من أولياء أمورنا الأوفياء، ومشرفينا التربويين، وأبنائنا الطلبة، وأفراد المجتمع المحلي. إن هذه المنصة تمثل سجلاً وثائقياً تفاعلياً يعكس نبض الميدان التربوي وجهود معلماتنا ومعلمينا في تقديم حصص نموذجية متميزة، وتفعيل حصص الاحتياط بما يثري المعارف والمهارات، والحرص على الانضباط والمناوبة والسلامة المدرسية في كل يوم دراسي.
            </p>

            <div className="text-xs text-emerald-300 font-semibold border-t border-emerald-800/80 pt-3 flex items-center justify-between">
              <span>إدارة ومعلمو مدرسة خلوف للتعليم الأساسي</span>
              <span className="font-sans">سلطنة عُمان · محافظة الوسطى</span>
            </div>
          </div>
        </div>

        {/* 2 & 3: Messages to Parents and Students (Split Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Message to Parents */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:border-emerald-700/50 transition-all text-right flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
                  شراكة مجتمعية هادفة
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug">
                رسالة إلى أولياء الأمور الكرام
              </h3>

              <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>أولياء أمورنا الأفاضل، شركاء المسيرة والنجاح:</strong>
                </p>
                <p>
                  أنتم الركيزة الأساسية والطرف الأصيل في بناء شخصية الطالب وتفوقه. إننا نؤمن إيماناً راسخاً بأن التعليم لا يكتمل نوره إلا بتكامل البيت والمدرسة، وتعاونكم الدائم معنا هو صمام الأمان لتحقيق رؤيتنا المدرسية في تنشئة جيل واعٍ، مجيد علمياً، وملتزم بأخلاق وقيم ديننا الحنيف وعادات مجتمعنا العُماني الأصيل.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  ندعوكم لمتابعة أعمال أبنائكم عبر هذا الموقع، ومشاركتنا آراءكم ومقترحاتكم القيّمة دوماً، فأبواب مدرستنا وقلوب معلميها مشرعة لكم دائماً.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">مجلس أولياء الأمور والمعلمين</span>
              <HeartHandshake className="w-4 h-4 text-emerald-700" />
            </div>
          </div>

          {/* Message to Students */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:border-emerald-700/50 transition-all text-right flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                  صنّاع المستقبل ورؤية ٢٠٤٠
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-stone-900 leading-snug">
                رسالة إلى طلابنا وطالباتنا المتميزين
              </h3>

              <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>أبناءنا وبناتنا طلبة مدرسة خلوف (الصفوف ١-١٢):</strong>
                </p>
                <p>
                  أنتم ثروة هذا الوطن الغالي وأمله المشرق. اجعلوا من مقاعد دراستكم منطلقاً لشغف المعرفة، وتفوقوا في العلوم والتقانة الحديثة، وتمسكوا بالخُلق الرفيع وبر الوالدين وحب الوطن. إن معلميكم يبذلون قصارى جهدهم في كل حصة وزيارة ومناوبة من أجلكم ومن أجل مستقبلكم الواعد.
                </p>
                <p className="text-xs sm:text-sm text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                  ثقوا بقدراتكم، واستثمروا أوقاتكم في القراءة والابتكار والبحث العلمي، لترفعوا اسم عُمان عالياً في كافة الميادين والمحافل الدولية.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="font-semibold text-stone-700">طريقكم نحو التميز والإجادة</span>
              <Compass className="w-4 h-4 text-emerald-700" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
