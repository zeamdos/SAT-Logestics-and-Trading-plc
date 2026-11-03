'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  const { currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="contact" />
      <main className="pt-4">
        <ContactSection currentLang={currentLang} />
      </main>
      <Footer currentLang={currentLang} onNavigate={(section) => {
        window.location.href = section === 'home' ? '/' : `/${section}`;
      }} />
    </div>
  );
}
