import React from 'react';
import { useSchool } from '../context/SchoolContext';
import { SchoolWorkItem } from '../types/school';
import { 
  X, 
  Printer, 
  Heart, 
  Eye, 
  Calendar, 
  User, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Award,
  Sparkles,
  Share2,
  Trash2
} from 'lucide-react';

export const WorkDetailModal: React.FC = () => {
  const { 
    selectedWorkForDetail, 
    setSelectedWorkForDetail, 
    likeWork, 
    currentUser, 
    deleteWork 
  } = useSchool();

  if (!selectedWorkForDetail) return null;

  const item = selectedWorkForDetail;

  const getTypeLabel = (type: SchoolWorkItem['type']) => {
    switch (type) {
      case 'model_lesson': return { text: 'حصة نموذجية', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
      case 'substitution_lesson': return { text: 'تفعيل حصة احتياط', color: 'bg-amber-100 text-amber-900 border-amber-300' };
      case 'classroom_visit': return { text: 'زيارة صفية وإشرافية', color: 'bg-blue-100 text-blue-900 border-blue-300' };
      case 'duty_supervision': return { text: 'أعمال المناوبة المدرسية', color: 'bg-purple-100 text-purple-900 border-purple-300' };
    }
  };

  const typeMeta = getTypeLabel(item.type);

  const handlePrint = () => {
    window.print();
  };

  const isOwner = currentUser?.email.toLowerCase() === item.teacherEmail.toLowerCase();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden text-right my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${typeMeta.color}`}>
                  {typeMeta.text}
                </span>
                <span className="text-xs text-stone-400">مدرسة خلوف للتعليم الأساسي</span>
              </div>
              <h3 className="font-bold text-base sm:text-lg mt-1 line-clamp-1">{item.title}</h3>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="طباعة بطاقة العمل التربوي"
              className="text-stone-300 hover:text-white hover:bg-stone-800 p-2 rounded-xl transition-colors text-xs flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">طباعة</span>
            </button>
            <button
              onClick={() => setSelectedWorkForDetail(null)}
              className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Printable/View Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 print:p-0">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs">
            <div>
              <span className="text-stone-400 block mb-0.5">المعلم المنفذ:</span>
              <span className="font-bold text-stone-900 text-sm">{item.teacherName}</span>
              <span className="text-[10px] text-emerald-800 font-mono block dir-ltr">{item.teacherEmail}</span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">المادة والمجال:</span>
              <span className="font-bold text-stone-900 text-sm">{item.subject}</span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">الصف المستهدف:</span>
              <span className="font-bold text-stone-900 text-sm">{item.grade}</span>
            </div>
            <div>
              <span className="text-stone-400 block mb-0.5">تاريخ التوثيق:</span>
              <span className="font-bold text-stone-900 text-sm font-sans">{item.date}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-2">الوصف والملخص الإجرائي:</h4>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed bg-amber-50/30 p-4 rounded-xl border border-amber-100">
              {item.description}
            </p>
          </div>

          {/* Specific Details based on type */}
          {item.modelLessonData && (
            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>تفاصيل الحصة النموذجية واستراتيجيات التدريس:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block mb-0.5">الاستراتيجية المطبقة:</span>
                  <span className="font-bold text-stone-800">{item.modelLessonData.strategy}</span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-0.5">الكفايات المستهدفة:</span>
                  <span className="font-bold text-stone-800">{item.modelLessonData.targetCompetencies}</span>
                </div>
                {item.modelLessonData.studentCount && (
                  <div>
                    <span className="text-stone-500 block mb-0.5">عدد الطلاب المستفيدين:</span>
                    <span className="font-bold text-stone-800">{item.modelLessonData.studentCount} طالباً</span>
                  </div>
                )}
                {item.modelLessonData.lessonDuration && (
                  <div>
                    <span className="text-stone-500 block mb-0.5">زمن الحصة:</span>
                    <span className="font-bold text-stone-800">{item.modelLessonData.lessonDuration}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {item.substitutionData && (
            <div className="border border-amber-200 bg-amber-50/50 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>تفاصيل تفعيل حصة الاحتياط واستثمار الزمن:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block mb-0.5">الحصة المستبدلة:</span>
                  <span className="font-bold text-stone-800">الحصة رقم ({item.substitutionData.periodNumber})</span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-0.5">المعلم الغائب:</span>
                  <span className="font-bold text-stone-800">{item.substitutionData.absentTeacherName}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-stone-500 block mb-0.5">نوع النشاط والمخرج التعليمي المحقق:</span>
                  <span className="font-bold text-stone-800">{item.substitutionData.learningOutcome}</span>
                </div>
              </div>
            </div>
          )}

          {item.visitData && (
            <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-700" />
                <span>تقرير الزيارة الصفية والتغذية الراجعة:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block mb-0.5">الزائر الكريم:</span>
                  <span className="font-bold text-stone-800">{item.visitData.visitorName}</span>
                  <span className="text-[10px] text-stone-500 block">({item.visitData.visitorRole})</span>
                </div>
                {item.visitData.rating && (
                  <div>
                    <span className="text-stone-500 block mb-0.5">التقييم العام للزيارة:</span>
                    <span className="font-bold text-amber-600">{'★'.repeat(item.visitData.rating)} ممتاز</span>
                  </div>
                )}
                <div>
                  <span className="text-stone-500 block mb-0.5">أبرز نقاط القوة:</span>
                  <span className="font-bold text-stone-800">{item.visitData.strengths}</span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-0.5">التوصيات التربوية:</span>
                  <span className="font-bold text-stone-800">{item.visitData.recommendations}</span>
                </div>
              </div>
            </div>
          )}

          {item.dutyData && (
            <div className="border border-purple-200 bg-purple-50/50 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-purple-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>تقرير أعمال المناوبة والإشراف اليومي:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-stone-500 block mb-0.5">موقع المناوبة بالمدرسة:</span>
                  <span className="font-bold text-stone-800">{item.dutyData.dutyLocation}</span>
                </div>
                <div>
                  <span className="text-stone-500 block mb-0.5">الفترة الزمنية:</span>
                  <span className="font-bold text-stone-800">{item.dutyData.shiftTime}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-stone-500 block mb-0.5">ملاحظات السلامة والانضباط والإجراءات:</span>
                  <span className="font-bold text-stone-800">{item.dutyData.safetyNotes}</span>
                </div>
              </div>
            </div>
          )}

          {/* Attachments list */}
          {item.attachments.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-stone-800 mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>المرفقات والوثائق المعتمدة ({item.attachments.length}):</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.attachments.map((att) => (
                  <div
                    key={att.id}
                    className="flex items-center justify-between p-3 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileText className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                      <span className="font-semibold text-stone-800 truncate">{att.name}</span>
                    </div>
                    <span className="text-[10px] text-stone-400 flex-shrink-0">{att.size}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{item.viewsCount} مشاهدة</span>
            </span>
            <button
              onClick={() => likeWork(item.id)}
              className="flex items-center gap-1.5 font-bold text-rose-600 hover:text-rose-700 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-rose-600" />
              <span>{item.likesCount} إعجاب بالعمل</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {isOwner && (
              <button
                onClick={() => deleteWork(item.id)}
                className="text-xs text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 flex items-center gap-1"
                title="حذف هذا العمل"
              >
                <Trash2 className="w-4 h-4" />
                <span>حذف</span>
              </button>
            )}

            <button
              onClick={() => setSelectedWorkForDetail(null)}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              إغلاق النافذة
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
