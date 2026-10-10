import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolWorkItem, WorkType } from '../types/school';
import { 
  BookOpen, 
  Clock, 
  Eye, 
  ShieldCheck, 
  Search, 
  Filter, 
  Heart, 
  ChevronLeft,
  Calendar,
  User,
  GraduationCap,
  Sparkles
} from 'lucide-react';

const TABS: { id: WorkType | 'all'; label: string; icon: any; countKey?: string }[] = [
  { id: 'all', label: 'كافة الأعمال والتوثيق', icon: Sparkles },
  { id: 'model_lesson', label: 'الحصص النموذجية', icon: BookOpen },
  { id: 'substitution_lesson', label: 'تفعيل حصص الاحتياط', icon: Clock },
  { id: 'classroom_visit', label: 'الزيارات الصفية', icon: Eye },
  { id: 'duty_supervision', label: 'أعمال المناوبة المدرسية', icon: ShieldCheck },
];

export const WorksShowcaseSection: React.FC = () => {
  const { 
    works, 
    filterType, 
    setFilterType, 
    searchQuery, 
    setSearchQuery, 
    selectedGrade, 
    setSelectedGrade,
    selectedSubject,
    setSelectedSubject,
    setSelectedWorkForDetail,
    incrementViews,
    likeWork,
    setIsUploadModalOpen,
    currentUser,
    setIsAuthModalOpen,
  } = useSchool();

  // Extract unique subjects and grades from works
  const allGrades = ['الكل', ...Array.from(new Set(works.map(w => w.grade)))];
  const allSubjects = ['الكل', ...Array.from(new Set(works.map(w => w.subject)))];

  // Filtering logic
  const filteredWorks = works.filter((w) => {
    // Category filter
    if (filterType !== 'all' && w.type !== filterType) {
      return false;
    }
    // Grade filter
    if (selectedGrade !== 'الكل' && w.grade !== selectedGrade) {
      return false;
    }
    // Subject filter
    if (selectedSubject !== 'الكل' && w.subject !== selectedSubject) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = w.title.toLowerCase().includes(q);
      const matchDesc = w.description.toLowerCase().includes(q);
      const matchTeacher = w.teacherName.toLowerCase().includes(q);
      const matchSubject = w.subject.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchTeacher && !matchSubject) {
        return false;
      }
    }
    return true;
  });

  const getBadgeMeta = (type: WorkType) => {
    switch (type) {
      case 'model_lesson':
        return { label: 'حصة نموذجية', border: 'border-emerald-300', text: 'text-emerald-900', bg: 'bg-emerald-50' };
      case 'substitution_lesson':
        return { label: 'تفعيل احتياط', border: 'border-amber-300', text: 'text-amber-900', bg: 'bg-amber-50' };
      case 'classroom_visit':
        return { label: 'زيارة صفية', border: 'border-blue-300', text: 'text-blue-900', bg: 'bg-blue-50' };
      case 'duty_supervision':
        return { label: 'أعمال مناوبة', border: 'border-purple-300', text: 'text-purple-900', bg: 'bg-purple-50' };
    }
  };

  const handleOpenDetail = (item: SchoolWorkItem) => {
    incrementViews(item.id);
    setSelectedWorkForDetail(item);
  };

  return (
    <section id="showcase" className="py-14 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span>نافذة الزائر المفتوحة</span>
            <span className="text-stone-300">/</span>
            <span>استطلاع إنجازات مدرسة خلوف للتعليم الأساسي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
            سجل الأعمال والفعاليات التعليمية الموثقة
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
            منصة حية تتيح للزوار، وأولياء الأمور، والمشرفين التربويين الاطلاع على أحدث الحصص النموذجية، والممارسات التدريسية، وتفعيل الاحتياط، والزيارات الصفية، والمناوبة المدرسية.
          </p>
        </div>

        {/* Primary Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-100 rounded-2xl mb-6">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = filterType === tab.id;
            const count = tab.id === 'all' 
              ? works.length 
              : works.filter(w => w.type === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-white text-emerald-950 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-emerald-100 text-emerald-900' : 'bg-stone-200 text-stone-600'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Search Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-8 bg-stone-50 p-3 rounded-2xl border border-stone-200">
          
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <input
              type="text"
              placeholder="ابحث بالعنوان، أو اسم المعلم، أو المادة، أو استراتيجية التدريس..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3 pr-9 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-3.5" />
          </div>

          {/* Grade Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
            >
              <option value="الكل">جميع الصفوف (١ - ١٢)</option>
              {allGrades.filter(g => g !== 'الكل').map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
            >
              <option value="الكل">كافة المواد الدراسية</option>
              {allSubjects.filter(s => s !== 'الكل').map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Results Counter / Clear Filter */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>
            يتم عرض <strong className="text-stone-900 font-bold">{filteredWorks.length}</strong> عمل موثق
          </span>
          {(searchQuery || selectedGrade !== 'الكل' || selectedSubject !== 'الكل' || filterType !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGrade('الكل');
                setSelectedSubject('الكل');
                setFilterType('all');
              }}
              className="text-emerald-800 hover:underline font-semibold cursor-pointer"
            >
              إعادة ضبط التصفية
            </button>
          )}
        </div>

        {/* Works Grid */}
        {filteredWorks.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
            <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800 mb-1">لم يتم العثور على أعمال مطابقة</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
              جرّب تغيير كلمات البحث أو مسح تصفيات الصفوف والمواد لاستعراض كافة أعمال المدرسة.
            </p>
            {currentUser ? (
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold"
              >
                + رفع أول عمل في هذا التصنيف
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-800 text-white rounded-xl text-xs font-bold"
              >
                تسجيل دخول المعلم (@moe.om) لرفع عمل جديد
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((item) => {
              const meta = getBadgeMeta(item.type);

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200 hover:border-emerald-700/60 transition-all duration-200 hover:shadow-md flex flex-col justify-between overflow-hidden group text-right"
                >
                  {/* Card Header & Content */}
                  <div className="p-5">
                    
                    {/* Top Row: Quiet Metadata without pills */}
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${meta.bg} ${meta.border} ${meta.text}`}>
                          {meta.label}
                        </span>
                        <span>·</span>
                        <span className="font-sans text-stone-400">{item.date}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                        {item.grade}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => handleOpenDetail(item)}
                      className="text-base font-bold text-stone-900 group-hover:text-emerald-900 transition-colors cursor-pointer leading-snug mb-2.5 line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    {/* Teacher & Subject Info */}
                    <div className="flex items-center gap-2 text-xs text-stone-600 mb-3">
                      <User className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" />
                      <span className="font-semibold text-stone-800">{item.teacherName}</span>
                      <span>·</span>
                      <span className="text-emerald-800 font-medium">{item.subject}</span>
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlight Box based on Work Type */}
                    {item.modelLessonData && (
                      <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-2.5 text-[11px] text-stone-700">
                        <span className="font-bold text-emerald-800 block mb-0.5">الاستراتيجية المطبقة:</span>
                        <span className="line-clamp-1">{item.modelLessonData.strategy}</span>
                      </div>
                    )}

                    {item.substitutionData && (
                      <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-2.5 text-[11px] text-stone-700">
                        <span className="font-bold text-amber-900 block mb-0.5">
                          تفعيل الحصة ({item.substitutionData.periodNumber}) بديلة عن: {item.substitutionData.absentTeacherName}
                        </span>
                        <span className="line-clamp-1">{item.substitutionData.activityType}</span>
                      </div>
                    )}

                    {item.visitData && (
                      <div className="bg-blue-50/50 border border-blue-200/60 rounded-xl p-2.5 text-[11px] text-stone-700">
                        <span className="font-bold text-blue-900 block mb-0.5">
                          الزائر: {item.visitData.visitorName} ({item.visitData.visitorRole})
                        </span>
                        <span className="line-clamp-1">{item.visitData.strengths}</span>
                      </div>
                    )}

                    {item.dutyData && (
                      <div className="bg-purple-50/50 border border-purple-200/60 rounded-xl p-2.5 text-[11px] text-stone-700">
                        <span className="font-bold text-purple-900 block mb-0.5">
                          موقع المناوبة: {item.dutyData.dutyLocation}
                        </span>
                        <span className="line-clamp-1">{item.dutyData.shiftTime}</span>
                      </div>
                    )}

                  </div>

                  {/* Card Footer: Action & Social Counters */}
                  <div className="p-4 bg-stone-50/70 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenDetail(item)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                    >
                      <span>عرض التوثيق والملف</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span className="flex items-center gap-1" title="عدد المشاهدات">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{item.viewsCount}</span>
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          likeWork(item.id);
                        }}
                        className="flex items-center gap-1 text-stone-500 hover:text-rose-600 transition-colors cursor-pointer"
                        title="إعجاب"
                      >
                        <Heart className="w-3.5 h-3.5 hover:fill-rose-600" />
                        <span>{item.likesCount}</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
