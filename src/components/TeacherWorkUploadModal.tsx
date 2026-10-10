import React, { useState } from 'react';
import { useSchool } from '../context/SchoolContext';
import { WorkType, WorkAttachment } from '../types/school';
import { 
  X, 
  BookOpen, 
  Clock, 
  Eye, 
  ShieldCheck, 
  Upload, 
  Check, 
  FileText, 
  Sparkles,
  Paperclip
} from 'lucide-react';

const GRADES_LIST = [
  'الصف الأول',
  'الصف الثاني',
  'الصف الثالث',
  'الصف الرابع',
  'الصف الخامس',
  'الصف السادس',
  'الصف السابع',
  'الصف الثامن',
  'الصف التاسع',
  'الصف العاشر',
  'الصف الحادي عشر',
  'الصف الثاني عشر',
  'الصفوف المشتركة (١ - ٤)',
  'الصفوف المشتركة (٥ - ٩)',
  'الصفوف المشتركة (١٠ - ١٢)',
  'جميع الصفوف بالمدرسة (١ - ١٢)',
];

const SUBJECTS_LIST = [
  'العلوم العامة',
  'الفيزياء',
  'الكيمياء',
  'الأحياء',
  'اللغة العربية',
  'الرياضيات',
  'الدراسات الاجتماعية',
  'اللغة الإنجليزية',
  'التربية الإسلامية',
  'تقنية المعلومات والذكاء الاصطناعي',
  'المهارات الحياتية',
  'الفنون التشكيلية',
  'المهارات الموسيقية',
  'الرياضة المدرسية',
  'النشاط المدرسي والمناوبة',
];

export const TeacherWorkUploadModal: React.FC = () => {
  const { isUploadModalOpen, setIsUploadModalOpen, currentUser, addWork } = useSchool();

  const [workType, setWorkType] = useState<WorkType>('model_lesson');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState(SUBJECTS_LIST[0]);
  const [grade, setGrade] = useState(GRADES_LIST[8]); // Default 9th grade
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');

  // Model Lesson fields
  const [strategy, setStrategy] = useState('التعلم التعاوني والاستقصاء العلمي');
  const [targetCompetencies, setTargetCompetencies] = useState('تنمية مهارات التفكير الناقد وحل المشكلات والتطبيق العملي');
  const [studentCount, setStudentCount] = useState<number>(24);
  const [lessonDuration, setLessonDuration] = useState('٤٥ دقيقة');

  // Substitution Lesson fields
  const [periodNumber, setPeriodNumber] = useState<number>(2);
  const [absentTeacherName, setAbsentTeacherName] = useState('');
  const [activityType, setActivityType] = useState('أنشطة إثرائية وقراءة موجهة ومسابقات معرفية');
  const [learningOutcome, setLearningOutcome] = useState('استثمار زمن الحصة بنشاط تعليمي تفاعلي يعزز المهارات الأساسية');

  // Classroom Visit fields
  const [visitorName, setVisitorName] = useState('');
  const [visitorRole, setVisitorRole] = useState('مشرف تربوي');
  const [strengths, setStrengths] = useState('إدارة صفية ملهمة، تفاعل طلابي عالي، توظيف رائع للتقانة');
  const [recommendations, setRecommendations] = useState('تعميم المبادرة ونقل الأثر التدريبي للزملاء في الملتقيات التربوية');
  const [rating, setRating] = useState<number>(5);

  // Duty Supervision fields
  const [dutyLocation, setDutyLocation] = useState('ساحة الطابور الصباحي والبوابة الرئيسية');
  const [shiftTime, setShiftTime] = useState('الفترة الصباحية والفسحة وانصراف الحافلات');
  const [safetyNotes, setSafetyNotes] = useState('انسيابية تامة في حركة الطلاب وسلامة الصعود للحافلات المدرسية');
  const [actionTaken, setActionTaken] = useState('الإشراف الميداني وتوجيه الطلاب للالتزام بقواعد النظام والسلامة');

  // Mock attachments
  const [attachments, setAttachments] = useState<WorkAttachment[]>([
    {
      id: 'att-user-1',
      name: 'توثيق_العمل_المعتمد.pdf',
      size: '1.2 MB',
      type: 'pdf',
      url: '#',
    },
  ]);

  if (!isUploadModalOpen) return null;

  const handleAddAttachment = () => {
    const newAtt: WorkAttachment = {
      id: `att-${Date.now()}`,
      name: `مرفق_مستند_توثيق_${attachments.length + 1}.pdf`,
      size: '850 KB',
      type: 'pdf',
      url: '#',
    };
    setAttachments([...attachments, newAtt]);
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments(attachments.filter(a => a.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addWork({
      type: workType,
      title: title.trim(),
      teacherName: currentUser?.name || 'أ. أسماء العلوية',
      teacherEmail: currentUser?.email || 'asmaa.alawi@moe.om',
      subject,
      grade,
      date,
      description: description.trim(),
      modelLessonData: workType === 'model_lesson' ? {
        strategy,
        targetCompetencies,
        studentCount,
        lessonDuration,
      } : undefined,
      substitutionData: workType === 'substitution_lesson' ? {
        periodNumber,
        absentTeacherName: absentTeacherName || 'المعلم الزميل',
        activityType,
        learningOutcome,
      } : undefined,
      visitData: workType === 'classroom_visit' ? {
        visitorName: visitorName || 'المشرف التربوي الزائر',
        visitorRole,
        strengths,
        recommendations,
        rating,
      } : undefined,
      dutyData: workType === 'duty_supervision' ? {
        dutyLocation,
        shiftTime,
        safetyNotes,
        actionTaken,
      } : undefined,
      attachments,
      isFeatured: false,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden text-right my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        dir="rtl"
      >
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">رفع وتوثيق عمل تربوي جديد</h3>
              <p className="text-xs text-stone-400">
                المعلم المسجل: <span className="text-emerald-400 font-semibold">{currentUser?.name || 'أ. أسماء العلوية'}</span> ({currentUser?.email || 'asmaa.alawi@moe.om'})
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsUploadModalOpen(false)}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          
          {/* Work Type Selection Tabs (The 4 core requirements) */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-2">
              اختر تصنيف العمل المراد توثيقه:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              
              <button
                type="button"
                onClick={() => setWorkType('model_lesson')}
                className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  workType === 'model_lesson'
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold shadow-xs'
                    : 'border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">١. حصة نموذجية</span>
                  <BookOpen className={`w-4 h-4 ${workType === 'model_lesson' ? 'text-emerald-700' : 'text-stone-400'}`} />
                </div>
                <span className="text-[10px] text-stone-500 font-normal">استراتيجيات تدريس نشط</span>
              </button>

              <button
                type="button"
                onClick={() => setWorkType('substitution_lesson')}
                className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  workType === 'substitution_lesson'
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold shadow-xs'
                    : 'border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">٢. تفعيل الاحتياط</span>
                  <Clock className={`w-4 h-4 ${workType === 'substitution_lesson' ? 'text-emerald-700' : 'text-stone-400'}`} />
                </div>
                <span className="text-[10px] text-stone-500 font-normal">استثمار حصص الفراغ</span>
              </button>

              <button
                type="button"
                onClick={() => setWorkType('classroom_visit')}
                className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  workType === 'classroom_visit'
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold shadow-xs'
                    : 'border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">٣. زيارة صفية</span>
                  <Eye className={`w-4 h-4 ${workType === 'classroom_visit' ? 'text-emerald-700' : 'text-stone-400'}`} />
                </div>
                <span className="text-[10px] text-stone-500 font-normal">إشرافية أو تبادلية</span>
              </button>

              <button
                type="button"
                onClick={() => setWorkType('duty_supervision')}
                className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  workType === 'duty_supervision'
                    ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold shadow-xs'
                    : 'border-stone-200 bg-stone-50/60 text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs">٤. أعمال المناوبة</span>
                  <ShieldCheck className={`w-4 h-4 ${workType === 'duty_supervision' ? 'text-emerald-700' : 'text-stone-400'}`} />
                </div>
                <span className="text-[10px] text-stone-500 font-normal">طابور وفسحة وحافلات</span>
              </button>

            </div>
          </div>

          {/* General Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                عنوان العمل أو المبادرة *
              </label>
              <input
                type="text"
                placeholder={
                  workType === 'model_lesson'
                    ? 'مثال: حصة نموذجية في درس خصائص المادة للصف الثامن'
                    : workType === 'substitution_lesson'
                    ? 'مثال: تفعيل حصة احتياط بأنشطة القراءة الرقمية ومسابقات كاهوت'
                    : workType === 'classroom_visit'
                    ? 'مثال: زيارة المشرف التربوي لمتابعة توظيف استراتيجيات التفكير العليا'
                    : 'مثال: الإشراف على الطابور الصباحي وتنظيم سلامة حافلات خلوف'
                }
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  المادة الدراسية / المجال
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
                >
                  {SUBJECTS_LIST.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  الصف المستهدف
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
                >
                  {GRADES_LIST.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  تاريخ التنفيذ
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-emerald-600 focus:outline-none font-sans"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                الوصف التفصيلي والملخص الإجرائي *
              </label>
              <textarea
                rows={3}
                placeholder="اكتب وصفاً موجزاً لما تم تنفيذه، ومجريات الحصة أو النشاط وأبرز الملاحظات..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:bg-white focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Conditional Sub-fields based on Selected Type */}
          {workType === 'model_lesson' && (
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>بيانات الحصة النموذجية المتقدمة:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    الاستراتيجية التدريسية المطبقة
                  </label>
                  <input
                    type="text"
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="مثال: الصف المقلوب، الاستقصاء، التعلم باللعب"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    زمن الحصة وعدد الطلاب
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={lessonDuration}
                      onChange={(e) => setLessonDuration(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                      placeholder="٤٥ دقيقة"
                    />
                    <input
                      type="number"
                      value={studentCount}
                      onChange={(e) => setStudentCount(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                      placeholder="عدد الطلاب"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  الكفايات والمهارات المستهدفة
                </label>
                <input
                  type="text"
                  value={targetCompetencies}
                  onChange={(e) => setTargetCompetencies(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  placeholder="المخرجات والكفايات التي حققها الطلاب في الحصة"
                />
              </div>
            </div>
          )}

          {workType === 'substitution_lesson' && (
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>بيانات تفعيل حصة الاحتياط:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    رقم الحصة المستبدلة
                  </label>
                  <select
                    value={periodNumber}
                    onChange={(e) => setPeriodNumber(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <option key={num} value={num}>الحصة رقم ({num})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    المعلم الغائب / الزميل المكلف عنه
                  </label>
                  <input
                    type="text"
                    value={absentTeacherName}
                    onChange={(e) => setAbsentTeacherName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="اسم المعلم الغائب"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  نوع النشاط المفعّل والمخرج التعليمي
                </label>
                <input
                  type="text"
                  value={learningOutcome}
                  onChange={(e) => setLearningOutcome(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  placeholder="كيف تم استثمار زمن الحصة بنشاط نافع؟"
                />
              </div>
            </div>
          )}

          {workType === 'classroom_visit' && (
            <div className="bg-blue-50/60 border border-blue-200/80 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-blue-700" />
                <span>بيانات الزيارة الصفية والتغذية الراجعة:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    اسم الزائر (المشرف / المدير / الزميل)
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="اسم الزائر الكريم"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    صفة الزيارة
                  </label>
                  <select
                    value={visitorRole}
                    onChange={(e) => setVisitorRole(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  >
                    <option value="مشرف تربوي من تعليمية الوسطى">مشرف تربوي تخصصي</option>
                    <option value="إدارة المدرسة (المديرة / المساعد)">إدارة المدرسة</option>
                    <option value="معلم أول مادة">معلم أول</option>
                    <option value="زيارة تبادلية بين الزملاء المعلمين">زيارة تبادلية بين الزملاء</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    أبرز نقاط القوة المرصودة
                  </label>
                  <input
                    type="text"
                    value={strengths}
                    onChange={(e) => setStrengths(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    التوصيات ومقترحات التطوير
                  </label>
                  <input
                    type="text"
                    value={recommendations}
                    onChange={(e) => setRecommendations(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {workType === 'duty_supervision' && (
            <div className="bg-purple-50/60 border border-purple-200/80 rounded-xl p-4 space-y-3">
              <h4 className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>بيانات أعمال المناوبة والإشراف اليومي:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    موقع المناوبة في المدرسة
                  </label>
                  <input
                    type="text"
                    value={dutyLocation}
                    onChange={(e) => setDutyLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="ساحة الطابور، البوابة، المقصف، الممرات..."
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    فترة المناوبة
                  </label>
                  <input
                    type="text"
                    value={shiftTime}
                    onChange={(e) => setShiftTime(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    placeholder="صباحي، الفسحة، الانصراف"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  ملاحظات السلامة والانضباط والإجراءات المتخذة
                </label>
                <input
                  type="text"
                  value={safetyNotes}
                  onChange={(e) => setSafetyNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                />
              </div>
            </div>
          )}

          {/* Attachments & Evidence */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-stone-700 flex items-center gap-1.5">
                <Paperclip className="w-3.5 h-3.5 text-stone-500" />
                <span>مرفقات التوثيق (خطط الدروس، استمارات، صور، أوراق عمل):</span>
              </label>
              <button
                type="button"
                onClick={handleAddAttachment}
                className="text-xs text-emerald-800 hover:text-emerald-900 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md"
              >
                <span>+ إضافة ملف توثيقي</span>
              </button>
            </div>

            <div className="space-y-1.5">
              {attachments.map((att) => (
                <div
                  key={att.id}
                  className="flex items-center justify-between p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-700" />
                    <span className="font-medium text-stone-800">{att.name}</span>
                    <span className="text-[10px] text-stone-400">({att.size})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAttachment(att.id)}
                    className="text-stone-400 hover:text-red-600 text-xs px-1"
                  >
                    حذف
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsUploadModalOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>حفظ وتوثيق العمل في نافذة المدرسة</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
