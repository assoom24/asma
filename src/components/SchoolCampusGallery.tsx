import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  MapPin, 
  Sparkles, 
  Building2, 
  BookOpen, 
  Users, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Maximize2, 
  Minimize2, 
  Calendar, 
  UserCheck, 
  Award, 
  CheckCircle2, 
  Download,
  Share2,
  Copy,
  Layers,
  ZoomIn
} from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'environment' | 'teaching' | 'innovation' | 'partnership';
  shortDesc: string;
  fullDescription: string;
  location: string;
  targetGrades: string;
  supervisor: string;
  date: string;
  objectives: string[];
  toolsUsed: string[];
  impactOnStudents: string;
  src: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'المبنى المدرسي والمدخل الرئيسي الأصيل',
    category: 'البيئة المدرسية',
    categoryFilter: 'environment',
    shortDesc: 'مرافق مدرسة خلوف للتعليم الأساسي بالهندسة المعمارية العمانية والأروقة المظللة المهيأة لراحة الطلبة.',
    fullDescription: 'يمثل المبنى المدرسي لمدرسة خلوف للتعليم الأساسي نموذجاً للبيئات التعليمية المتكاملة في ولاية محوت بمحافظة الوسطى؛ حيث يتضمن مظلات واقية حديثة توفر حماية كاملة لأبنائنا الطلبة أثناء الطابور والأنشطة، مع لوحة المدرسة الرسمية وجداريات فنية مستوحاة من البيئة البحرية والطبيعية العمانية الأصيلة لشواطئ خلوف.',
    location: 'المدخل الرئيسي وساحة الطابور المظللة',
    targetGrades: 'كافة الصفوف الدراسية بالمدرسة (١ - ١٢)',
    supervisor: 'إدارة المدرسة ولجنة البيئة المدرسية والسلامة',
    date: 'الفصل الدراسي الأول ٢٠٢٦م',
    objectives: [
      'توفير بيئة تعليمية آمنة ومحفزة وجاذبة للطلاب والزوار',
      'غرس الاعتزاز بالهوية الوطنية والتراث العماني الأصيل',
      'ضمان انسيابية حركة الدخول والخروج للحافلات المدرسية',
    ],
    toolsUsed: ['مظلات معمارية واقية', 'لوحة الواجهة الرسمية', 'جداريات فنية بيئية', 'ممرات مجهزة'],
    impactOnStudents: 'شعور عالٍ بالأمان والاستقرار النفسي والانتماء للمدرسة وللوطن.',
    src: '/src/assets/images/khalluf_school_hero_1791595689257.jpg',
  },
  {
    id: 'gal-2',
    title: 'الحصص النموذجية وبيئات التعلم التفاعلية الحديثة',
    category: 'التدريس التفاعلي',
    categoryFilter: 'teaching',
    shortDesc: 'تطبيق استراتيجيات التعلم النشط، والشاشات الذكية، والمحاكاة الرقمية في تدريس العلوم والرياضيات.',
    fullDescription: 'توثيق حي لحصة نموذجية رائدة في تدريس العلوم والتقانة بمدرسة خلوف؛ حيث تم توظيف الشاشات التفاعلية وأجهزة الحواسيب المحمولة لتمكين الطلاب من إجراء تجارب المحاكاة الافتراضية والتصميم ثلاثي الأبعاد، وتطبيق استراتيجية التعلم التعاوني في مجموعات مرنة تحت إشراف المعلمات والمعلمين المجيدين.',
    location: 'قاعة التعلم التفاعلي ومختبر الحاسوب',
    targetGrades: 'الصفوف (٧ - ١٠)',
    supervisor: 'أ. أسماء العلوية (منسقة الجودة والابتكار)',
    date: 'أكتوبر ٢٠٢٦م',
    objectives: [
      'تمكين الطلاب من مهارات التفكير العلمي وحل المشكلات المعقدة',
      'دمج أدوات التقانة والمحاكاة الرقمية في المقررات الدراسية',
      'تحويل الطالب من متلقٍ سلبي إلى باحث ومبتكر نشط',
    ],
    toolsUsed: ['شاشات ذكية متصلة', 'أجهزة لابتوب شخصية', 'برمجيات المحاكاة والتصميم 3D', 'بطاقات تعلم تفاعلية'],
    impactOnStudents: 'ارتفاع ملحوظ في شغف الطلاب بمواد العلوم والرياضيات وتحقيق درجات متقدمة في التحصيل الدراسي.',
    src: '/src/assets/images/model_lesson_class_1791595705687.jpg',
  },
  {
    id: 'gal-3',
    title: 'الطابور الصباحي وأعمال المناوبة والسلام السلطاني',
    category: 'الانضباط والمناوبة',
    categoryFilter: 'partnership',
    shortDesc: 'الإشراف على الطابور الصباحي، وترديد السلام السلطاني والقسم، وتنظيم السلامة المدرسية.',
    fullDescription: 'يبدأ اليوم الدراسي في مدرسة خلوف بهمة عالية مع مراسم الطابور الصباحي المنتظم؛ حيث يؤدي الطلاب والمعلمون السلام السلطاني وتحية العلم بكل فخر واعتزاز. تتولى لجنة المناوبة اليومية الإشراف على الإذاعة المدرسية الهادفة، وتنظيم دخول وخروج الطلبة، ومتابعة الانضباط والتغذية الصحية والمقصف المدرسي.',
    location: 'الساحة المركزية ومدرج الطابور الصباحي',
    targetGrades: 'جميع طلبة المدرسة (الصفوف ١-١٢)',
    supervisor: 'أ. راشد البلوشي وفريق المناوبة اليومية',
    date: 'توثيق يومي مستمر',
    objectives: [
      'غرس روح الانضباط والالتزام بالمواعيد المدرسية',
      'تعزيز المواطنة الصادقة وترديد السلام السلطاني بفخر',
      'الحفاظ على السلامة العامة وانسيابية حركة الحافلات',
    ],
    toolsUsed: ['نظام صوتي وإذاعة مدرسية حديثة', 'سجل المناوبة المعتمد', 'لائحة السلامة والصحة المدرسية'],
    impactOnStudents: 'بداية يوم دراسي نشطة ومحفزة، وتعزيز السلوكيات الأخلاقية الحميدة لدى كافة الطلاب.',
    src: '/src/assets/images/school_duty_yard_1791595729363.jpg',
  },
  {
    id: 'gal-4',
    title: 'مختبر الابتكار الطلابي ومشاريع الروبوت والذكاء الاصطناعي',
    category: 'الابتكار والتقانة',
    categoryFilter: 'innovation',
    shortDesc: 'مشاريع عملية في هندسة الروبوتات والذكاء الاصطناعي تماشياً مع مستهدفات رؤية عُمان ٢٠٤٠.',
    fullDescription: 'يستعرض هذا النشاط المتميز نخبة من طلاب وطالبات مدرسة خلوف في نادي الابتكار والروبوت التعليمي؛ حيث يتدرب الطلاب على برمجة المستشعرات الذكية، والتحكم بالروبوتات المتنقلة، وتوظيف حلول الطاقة المتجددة الصديقة للبيئة الساحلية، تجسيداً عملياً لرؤية المدرسة في تمكين الطالب ليكون مجيداً علمياً وتقنياً.',
    location: 'مختبر الابتكار ونادي الروبوت المدرسي',
    targetGrades: 'الصفوف (٨ - ١٢)',
    supervisor: 'فريق الابتكار والذكاء الاصطناعي بالمدرسة',
    date: 'أكتوبر ٢٠٢٦م',
    objectives: [
      'مواكبة الثورة الصناعية الرابعة ومستهدفات رؤية عُمان 2040',
      'تدريب الطلاب على لغات البرمجة وتجميع الدوائر الإلكترونية',
      'المشاركة في مسابقات الابتكار والأولمبياد العلمي للروبوت',
    ],
    toolsUsed: ['حقائب روبوت تعليمية', 'متحكمات دقيقة وحساسات ذكية', 'حواسيب برمجية', 'منصات محاكاة'],
    impactOnStudents: 'إتقان المهارات التقنية المتقدمة وبناء عقلية هندسية قادرة على الابتكار والتطوير المستمر.',
    src: '/src/assets/images/student_innovation_khalluf_1791598585743.jpg',
  },
  {
    id: 'gal-5',
    title: 'تفعيل حصص الاحتياط بمسابقة تحدي القراءة الحرة',
    category: 'التدريس التفاعلي',
    categoryFilter: 'teaching',
    shortDesc: 'استثمار حصص الاحتياط في القراءة التفاعلية الموجهة واستكشاف نفائس الأدب والعلوم.',
    fullDescription: 'مبادرة رائدة لمعلمي مدرسة خلوف لتحويل حصص الاحتياط من وقت انتظار إلى فضاء إثرائي ملهم؛ حيث يتجمع الطلبة في حلقة قراءة دائرية تفاعلية بمركز مصادر التعلم لمطالعة الكتب والقصص واستخدام الأجهزة اللوحية في مسابقات المعرفة العامة، مما ينمي مهارات القراءة الصامتة والجهرية والمناقشة الحوارية.',
    location: 'مركز مصادر التعلم والمكتبة المدرسية',
    targetGrades: 'الصفوف (٣ - ٧)',
    supervisor: 'أ. فاطمة الجنيبية ومعلمات اللغة العربية',
    date: 'أسبوع القراءة المدرسية ٢٠٢٦م',
    objectives: [
      'استثمار كل دقيقة في اليوم المدرسي بنشاط معرفي نافع وممتع',
      'غرس حب المطالعة وشغف القراءة الحرة في نفوس النشء',
      'تطوير مهارات الفهم القرائي والتعبير الشفوي السليم',
    ],
    toolsUsed: ['كتب وقصص أدبية وعلمية مصورة', 'أجهزة تابلت للقراءة الرقمية', 'استمارات تلخيص مقروء'],
    impactOnStudents: 'إثراء الحصيلة اللغوية والمعرفية، وتطوير مهارات التحدث والتفكير التجريدي والخيالي.',
    src: '/src/assets/images/reading_challenge_khalluf_1791598609811.jpg',
  },
  {
    id: 'gal-6',
    title: 'ملتقى الشراكة المجتمعية والزيارات الإشرافية',
    category: 'الشراكة المجتمعية',
    categoryFilter: 'partnership',
    shortDesc: 'لقاءات تربوية تجمع إدارة المدرسة بالمشرفين وأولياء الأمور لتطوير مسيرة التعلم.',
    fullDescription: 'تجسيداً لمحور "في ظل شراكة مجتمعية هادفة" الوارد في رؤية المدرسة، تعقد مدرسة خلوف ملتقيات دورية تضم ممثلي المديرية العامة للتربية والتعليم بمحافظة الوسطى، والمشرفين التربويين، ومجلس أولياء الأمور لمناقشة الخطط الاستراتيجية، واستعراض نتائج التحصيل، ومتابعة المبادرات الميدانية الداعمة للطلبة.',
    location: 'قاعة الاجتماعات والتطوير التربوي',
    targetGrades: 'مجلس المدرسة وأولياء الأمور والمشرفين',
    supervisor: 'إدارة مدرسة خلوف ومجلس أولياء الأمور',
    date: 'الاجتماع الفصلي الأول ٢٠٢٦م',
    objectives: [
      'تأكيد الشراكة التكاملية الوثيقة بين الأسرة والمدرسة',
      'الاستماع لمرئيات أولياء الأمور والمشرفين وتطوير الأداء',
      'مواءمة الخطط المدرسية مع تطلعات المجتمع المحلي بخلوف',
    ],
    toolsUsed: ['عروض مرئية للخطط التشغيلية', 'شاشات عرض ذكية', 'تقارير مؤشرات الأداء والتحصيل'],
    impactOnStudents: 'توفير بيئة دعم أسري ومدرسي متناغمة تعزز من دافعية الطلبة وتفوقهم الدراسي والأخلاقي.',
    src: '/src/assets/images/community_meeting_khalluf_1791598650773.jpg',
  },
];

export const SchoolCampusGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        handleNext();
      } else if (e.key === 'ArrowRight') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.categoryFilter === filter);

  const currentIndex = activeItem 
    ? filteredItems.findIndex(i => i.id === activeItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIdx]);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIdx]);
    setIsZoomed(false);
  };

  const handleCopyShare = () => {
    if (!activeItem) return;
    navigator.clipboard?.writeText(window.location.origin + '#' + activeItem.id);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="gallery" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 text-right">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2.5 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-xl shadow-2xs">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>المعرض التفاعلي المصوّر</span>
              <span className="text-emerald-300">|</span>
              <span>مدرسة خلوف للتعليم الأساسي (١-١٢)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 leading-tight">
              أجواء الحياة المدرسية والفعاليات الموثقة
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg leading-relaxed">
            انقر على أي صورة لفتح <strong className="text-emerald-800 font-bold">العرض التفاعلي الموسّع</strong> والاطلاع على التفاصيل الكاملة للنشاط، والمستهدفين، والأهداف التربوية والأثر الميداني.
          </p>
        </div>

        {/* Filter Segmented Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-stone-100 p-1.5 rounded-2xl">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            كافة الصور والأنشطة ({GALLERY_ITEMS.length})
          </button>
          <button
            onClick={() => setFilter('environment')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              filter === 'environment'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            بيئة المدرسة والمرافق
          </button>
          <button
            onClick={() => setFilter('teaching')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              filter === 'teaching'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            الحصص والمختبرات
          </button>
          <button
            onClick={() => setFilter('innovation')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              filter === 'innovation'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            الابتكار ورؤية ٢٠٤٠
          </button>
          <button
            onClick={() => setFilter('partnership')}
            className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              filter === 'partnership'
                ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            المناوبة والشراكة
          </button>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setIsZoomed(false);
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-white hover:border-emerald-600 hover:shadow-xl transition-all duration-300 flex flex-col text-right relative"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-video overflow-hidden bg-stone-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg border border-white/20">
                  {item.category}
                </div>

                {/* Hover Click-to-Expand Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-emerald-900/90 text-white text-xs font-bold px-4 py-2 rounded-xl backdrop-blur-xs flex items-center gap-2 shadow-lg transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4 text-emerald-300" />
                    <span>انقر للعرض التفاعلي الموسع</span>
                  </div>
                </div>

                {/* Bottom metadata chip */}
                <div className="absolute bottom-2.5 right-3 left-3 flex items-center justify-between text-[11px] text-stone-200 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span className="truncate max-w-[180px]">{item.location}</span>
                  </span>
                  <span className="text-stone-300 font-sans">{item.date}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-800 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Footer of Card */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {item.targetGrades}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                    <span>التفاصيل والأهداف</span>
                    <span>←</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================= */}
      {/* Interactive Modal (Lightbox & Detailed Activity Card) */}
      {/* ========================================================= */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => {
            setActiveItem(null);
            setIsZoomed(false);
          }}
          dir="rtl"
        >
          <div 
            className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl border border-stone-700 text-right my-auto max-h-[94vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-stone-900 text-white p-4 sm:px-6 flex items-center justify-between border-b border-stone-800 flex-shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-800 text-emerald-200">
                  {activeItem.category}
                </span>
                <div className="hidden sm:block">
                  <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">{activeItem.title}</h3>
                  <p className="text-[11px] text-stone-400">مدرسة خلوف للتعليم الأساسي (١-١٢) · سلطنة عُمان</p>
                </div>
              </div>

              {/* Top Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-xl transition-colors text-xs flex items-center gap-1"
                  title={isZoomed ? 'إلغاء التكبير' : 'تكبير الصورة'}
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZoomed ? 'تصغير' : 'تكبير'}</span>
                </button>

                <button
                  onClick={handleCopyShare}
                  className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-xl transition-colors text-xs flex items-center gap-1"
                  title="مشاركة تفاصيل النشاط"
                >
                  {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copiedLink ? 'تم النسخ' : 'مشاركة'}</span>
                </button>

                <div className="h-5 w-px bg-stone-700 mx-1" />

                <button
                  onClick={() => {
                    setActiveItem(null);
                    setIsZoomed(false);
                  }}
                  className="p-2 text-stone-400 hover:text-white hover:bg-stone-800 rounded-xl transition-colors cursor-pointer"
                  title="إغلاق النافذة (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split or Scrollable Layout */}
            <div className="overflow-y-auto flex-1 p-0">
              
              {/* Hero Image in Modal */}
              <div className="relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[58vh]">
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className={`w-full h-full transition-transform duration-300 ${
                    isZoomed 
                      ? 'object-contain scale-125 cursor-zoom-out' 
                      : 'object-contain cursor-zoom-in max-h-[58vh]'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Previous Navigation Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg backdrop-blur-xs transition-colors cursor-pointer"
                  title="الصورة السابقة (السهم الأيمن)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Next Navigation Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-900/80 hover:bg-emerald-800 text-white flex items-center justify-center shadow-lg backdrop-blur-xs transition-colors cursor-pointer"
                  title="الصورة التالية (السهم الأيسر)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Picture Index Counter */}
                <div className="absolute bottom-3 right-4 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-lg">
                  {currentIndex + 1} / {filteredItems.length}
                </div>
              </div>

              {/* Detailed Activity Sheet Container */}
              <div className="p-6 sm:p-8 space-y-6 bg-stone-50/70">
                
                {/* Title & Location Header */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-800 font-bold mb-2">
                    <span className="flex items-center gap-1.5 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{activeItem.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-stone-200/80 text-stone-700 px-2.5 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{activeItem.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-amber-700" />
                      <span>الفئة المستهدفة: {activeItem.targetGrades}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 leading-snug">
                    {activeItem.title}
                  </h2>
                </div>

                {/* Full Activity Description */}
                <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                  <h4 className="text-xs font-bold text-stone-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>تفاصيل ومجريات النشاط الموضح في الصورة:</span>
                  </h4>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                    {activeItem.fullDescription}
                  </p>
                </div>

                {/* 2-Column Details: Objectives & Tools */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Objectives */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
                    <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-700" />
                      <span>الأهداف التربوية المستفادة:</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                      {activeItem.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact & Supervisory Info */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
                    <h4 className="text-xs font-bold text-stone-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-amber-600" />
                      <span>المشرف المسؤول والأثر التربوي:</span>
                    </h4>

                    <div className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                      <div>
                        <span className="text-[11px] text-stone-400 block mb-0.5">القائم على النشاط / الإشراف:</span>
                        <strong className="text-stone-900 font-bold">{activeItem.supervisor}</strong>
                      </div>

                      <div>
                        <span className="text-[11px] text-stone-400 block mb-0.5">الأثر المحقق على الطلبة:</span>
                        <p className="text-stone-700 text-xs sm:text-sm leading-relaxed bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/60">
                          {activeItem.impactOnStudents}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Tools & Aids Used */}
                <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="font-bold text-stone-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-600" />
                    <span>الوسائل والتقنيات المطبقة:</span>
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {activeItem.toolsUsed.map((tool, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-white border-t border-stone-200 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-xs font-bold text-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>النشاط السابق</span>
                </button>
                <button
                  onClick={handleNext}
                  className="px-3.5 py-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-xs font-bold text-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>النشاط التالي</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  setActiveItem(null);
                  setIsZoomed(false);
                }}
                className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
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
