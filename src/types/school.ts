export type WorkType = 
  | 'model_lesson'       // حصة نموذجية
  | 'substitution_lesson'// تفعيل حصة احتياط
  | 'classroom_visit'    // زيارة صفية
  | 'duty_supervision';  // أعمال المناوبة

export interface Teacher {
  id: string;
  name: string;
  email: string; // must end with @moe.om
  civilId?: string;
  subject: string;
  grades: string[];
  role: string;
  avatar?: string;
}

export interface WorkAttachment {
  id: string;
  name: string;
  size: string;
  type: 'image' | 'pdf' | 'doc' | 'link';
  url: string;
}

export interface SchoolWorkItem {
  id: string;
  type: WorkType;
  title: string;
  teacherName: string;
  teacherEmail: string;
  subject: string;
  grade: string; // e.g. "الصف العاشر", "الصفوف (١-٤)", "الصف الثاني عشر"
  date: string; // YYYY-MM-DD
  description: string;
  
  // Type-specific metadata
  modelLessonData?: {
    strategy: string; // e.g. التعلم التعاوني، الصف المقلوب، الاستقصاء
    targetCompetencies: string;
    studentCount?: number;
    lessonDuration?: string;
    teachingAids?: string;
  };

  substitutionData?: {
    periodNumber: number; // الحصة الأولى، الثانية...
    absentTeacherName: string;
    activityType: string; // إثراء علمي، أنشطة قرائية، مسابقات تقنية، مراجعة مفاهيم
    learningOutcome: string;
  };

  visitData?: {
    visitorName: string;
    visitorRole: string; // مشرف تربوي، مديرة المدرسة، معلم أول، زيارة تبادلية
    strengths: string;
    recommendations: string;
    rating?: number; // 1 to 5
  };

  dutyData?: {
    dutyLocation: string; // بوابة المدرسة، ساحة الطابور، ممرات الفصول، المقصف، حافلات الانصراف
    shiftTime: string; // صباحي، الفسحة، الانصراف، طوال اليوم
    safetyNotes: string;
    actionTaken: string;
  };

  attachments: WorkAttachment[];
  viewsCount: number;
  likesCount: number;
  isFeatured?: boolean;
  createdAt: string;
}

export interface VisitorGuestbookEntry {
  id: string;
  visitorName: string;
  role: string; // ولي أمر، مشرف تربوي، زائر مجتمعي، طالب
  message: string;
  date: string;
  rating: number;
}
