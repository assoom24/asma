import React, { useState } from 'react';
import { Camera, MapPin, Sparkles, Building2, BookOpen, Users } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    title: 'المبنى المدرسي والساحة التعليمية',
    category: 'البيئة المدرسية',
    description: 'مرافق مدرسة خلوف للتعليم الأساسي بالهندسة المعمارية العمانية الأصيلة وأروقة الفصول المنظمة.',
    src: '/src/assets/images/khalluf_school_hero_1791595689257.jpg',
  },
  {
    title: 'الحصص النموذجية وبيئات التعلم التفاعلية',
    category: 'التدريس الحديث',
    description: 'تطبيق استراتيجيات التعلم النشط، والشاشات الذكية، والمحاكاة الرقمية لتمكين الطلبة علمياً وتقنياً.',
    src: '/src/assets/images/model_lesson_class_1791595705687.jpg',
  },
  {
    title: 'الطابور الصباحي وأعمال المناوبة المدرسية',
    category: 'الانضباط والسلامة',
    description: 'الإشراف على الطابور الصباحي والسلام السلطاني وتنظيم المرافق وتأمين حركة وانصراف حافلات الطلاب.',
    src: '/src/assets/images/school_duty_yard_1791595729363.jpg',
  },
];

export const SchoolCampusGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-right">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2 bg-emerald-50 px-3 py-1 rounded-lg">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>معرض البيئة التعليمية</span>
              <span>·</span>
              <span>مدرسة خلوف (١-١٢)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              أجواء التعلم والحياة المدرسية في خلوف
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md">
            لقطات توثيقية تعكس حيوية اليوم الدراسي، وانضباط الطابور، وتألق الغرف الصفية في ظل رؤية المدرسة الطموحة.
          </p>
        </div>

        {/* 3 Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 hover:border-emerald-700/60 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-stone-200">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {img.category}
                </div>
              </div>

              <div className="p-4 text-right flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 text-sm group-hover:text-emerald-800 transition-colors mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {img.description}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-emerald-800 font-semibold">
                  <span>تكبير الصورة والتفاصيل</span>
                  <span>←</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-xs animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-700 text-right"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            <div className="relative aspect-video bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-emerald-800 font-bold block mb-1">
                  {activeImage.category}
                </span>
                <h3 className="text-lg font-bold text-stone-900">{activeImage.title}</h3>
                <p className="text-xs text-stone-600 mt-1 max-w-2xl">{activeImage.description}</p>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="px-4 py-2 bg-stone-900 text-white text-xs font-bold rounded-xl hover:bg-stone-800"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
