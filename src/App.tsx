import React from 'react';
import { SchoolProvider } from './context/SchoolContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WorksShowcaseSection } from './components/WorksShowcaseSection';
import { SchoolCampusGallery } from './components/SchoolCampusGallery';
import { MessagesSection } from './components/MessagesSection';
import { VisitorGuestbookSection } from './components/VisitorGuestbookSection';
import { Footer } from './components/Footer';
import { TeacherAuthModal } from './components/TeacherAuthModal';
import { TeacherWorkUploadModal } from './components/TeacherWorkUploadModal';
import { WorkDetailModal } from './components/WorkDetailModal';
import { SignboardModal } from './components/SignboardModal';

export default function App() {
  return (
    <SchoolProvider>
      <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans" dir="rtl">
        {/* Navigation Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero with Vision, Welcome, and School Signboard */}
          <HeroSection />

          {/* Teachers Works Showcase (Visitor Window) */}
          <WorksShowcaseSection />

          {/* School Life & Campus Gallery */}
          <SchoolCampusGallery />

          {/* Educational Guidance Messages: Welcome, Parents, and Students */}
          <MessagesSection />

          {/* Visitor Guestbook & Appreciation */}
          <VisitorGuestbookSection />
        </main>

        {/* Footer with credit: فكرة وإعداد أ. أسماء العلوية */}
        <Footer />

        {/* Modals & Dialogs */}
        <TeacherAuthModal />
        <TeacherWorkUploadModal />
        <WorkDetailModal />
        <SignboardModal />
      </div>
    </SchoolProvider>
  );
}
