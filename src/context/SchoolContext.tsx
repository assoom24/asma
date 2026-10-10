import React, { createContext, useContext, useState, useEffect } from 'react';
import { SchoolWorkItem, Teacher, VisitorGuestbookEntry, WorkType } from '../types/school';
import { INITIAL_SCHOOL_WORKS, INITIAL_GUESTBOOK, DEMO_TEACHERS } from '../data/initialData';

interface SchoolContextType {
  currentUser: Teacher | null;
  loginTeacher: (email: string, name?: string) => { success: boolean; error?: string };
  logoutTeacher: () => void;
  works: SchoolWorkItem[];
  addWork: (item: Omit<SchoolWorkItem, 'id' | 'viewsCount' | 'likesCount' | 'createdAt'>) => void;
  deleteWork: (id: string) => void;
  updateWork: (id: string, updates: Partial<SchoolWorkItem>) => void;
  likeWork: (id: string) => void;
  incrementViews: (id: string) => void;
  guestbook: VisitorGuestbookEntry[];
  addGuestbookEntry: (entry: Omit<VisitorGuestbookEntry, 'id' | 'date'>) => void;
  filterType: WorkType | 'all';
  setFilterType: (type: WorkType | 'all') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedGrade: string;
  setSelectedGrade: (grade: string) => void;
  selectedSubject: string;
  setSelectedSubject: (subj: string) => void;
  isUploadModalOpen: boolean;
  setIsUploadModalOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  selectedWorkForDetail: SchoolWorkItem | null;
  setSelectedWorkForDetail: (item: SchoolWorkItem | null) => void;
  isSignboardModalOpen: boolean;
  setIsSignboardModalOpen: (open: boolean) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

const STORAGE_KEYS = {
  WORKS: 'khalluf_school_works_v1',
  USER: 'khalluf_school_current_teacher_v1',
  GUESTBOOK: 'khalluf_school_guestbook_v1',
  LIKES: 'khalluf_school_user_likes_v1',
};

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Teacher | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.USER);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [works, setWorks] = useState<SchoolWorkItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WORKS);
      return saved ? JSON.parse(saved) : INITIAL_SCHOOL_WORKS;
    } catch {
      return INITIAL_SCHOOL_WORKS;
    }
  });

  const [guestbook, setGuestbook] = useState<VisitorGuestbookEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.GUESTBOOK);
      return saved ? JSON.parse(saved) : INITIAL_GUESTBOOK;
    } catch {
      return INITIAL_GUESTBOOK;
    }
  });

  const [filterType, setFilterType] = useState<WorkType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('الكل');
  const [selectedSubject, setSelectedSubject] = useState('الكل');
  
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedWorkForDetail, setSelectedWorkForDetail] = useState<SchoolWorkItem | null>(null);
  const [isSignboardModalOpen, setIsSignboardModalOpen] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WORKS, JSON.stringify(works));
    } catch (e) {
      console.error('Failed to save works:', e);
    }
  }, [works]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GUESTBOOK, JSON.stringify(guestbook));
    } catch (e) {
      console.error('Failed to save guestbook:', e);
    }
  }, [guestbook]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    } catch (e) {
      console.error('Failed to save user:', e);
    }
  }, [currentUser]);

  const loginTeacher = (email: string, name?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Strict requirement: email must end with @moe.om
    if (!cleanEmail.endsWith('@moe.om')) {
      return {
        success: false,
        error: 'عذراً، يجب تسجيل الدخول باستخدام البريد الوزاري المعتمد التابع لوزارة التربية والتعليم المنتهي بـ @moe.om',
      };
    }

    // Match existing teacher or create session
    const matched = DEMO_TEACHERS.find(t => t.email.toLowerCase() === cleanEmail);
    const teacher: Teacher = matched || {
      id: `t-${Date.now()}`,
      name: name?.trim() || 'معلم مدرسة خلوف',
      email: cleanEmail,
      subject: 'معلم مادة',
      grades: ['الصفوف (١ - ١٢)'],
      role: 'معلم بمدرسة خلوف للتعليم الأساسي',
    };

    setCurrentUser(teacher);
    setIsAuthModalOpen(false);
    return { success: true };
  };

  const logoutTeacher = () => {
    setCurrentUser(null);
  };

  const addWork = (item: Omit<SchoolWorkItem, 'id' | 'viewsCount' | 'likesCount' | 'createdAt'>) => {
    const newWork: SchoolWorkItem = {
      ...item,
      id: `work-${Date.now()}`,
      viewsCount: 1,
      likesCount: 0,
      createdAt: new Date().toISOString(),
    };
    setWorks(prev => [newWork, ...prev]);
    setIsUploadModalOpen(false);
  };

  const deleteWork = (id: string) => {
    setWorks(prev => prev.filter(w => w.id !== id));
    if (selectedWorkForDetail?.id === id) {
      setSelectedWorkForDetail(null);
    }
  };

  const updateWork = (id: string, updates: Partial<SchoolWorkItem>) => {
    setWorks(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
    if (selectedWorkForDetail?.id === id) {
      setSelectedWorkForDetail(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const likeWork = (id: string) => {
    setWorks(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, likesCount: w.likesCount + 1 };
      }
      return w;
    }));
    if (selectedWorkForDetail?.id === id) {
      setSelectedWorkForDetail(prev => prev ? { ...prev, likesCount: prev.likesCount + 1 } : null);
    }
  };

  const incrementViews = (id: string) => {
    setWorks(prev => prev.map(w => {
      if (w.id === id) {
        return { ...w, viewsCount: w.viewsCount + 1 };
      }
      return w;
    }));
  };

  const addGuestbookEntry = (entry: Omit<VisitorGuestbookEntry, 'id' | 'date'>) => {
    const newEntry: VisitorGuestbookEntry = {
      ...entry,
      id: `gb-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
    };
    setGuestbook(prev => [newEntry, ...prev]);
  };

  return (
    <SchoolContext.Provider
      value={{
        currentUser,
        loginTeacher,
        logoutTeacher,
        works,
        addWork,
        deleteWork,
        updateWork,
        likeWork,
        incrementViews,
        guestbook,
        addGuestbookEntry,
        filterType,
        setFilterType,
        searchQuery,
        setSearchQuery,
        selectedGrade,
        setSelectedGrade,
        selectedSubject,
        setSelectedSubject,
        isUploadModalOpen,
        setIsUploadModalOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        selectedWorkForDetail,
        setSelectedWorkForDetail,
        isSignboardModalOpen,
        setIsSignboardModalOpen,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
