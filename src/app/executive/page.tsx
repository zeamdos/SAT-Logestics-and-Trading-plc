'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { ExecutiveSection } from '@/components/ExecutiveSection';
import { Footer } from '@/components/Footer';

export default function ExecutivePage() {
  const { currentLang, triggerTransition } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="executive" />
      <main className="pt-4">
        <ExecutiveSection currentLang={currentLang} onNavigate={(section) => {
          if (section !== 'executive') {
            triggerTransition(section.toUpperCase(), () => {
              window.location.href = section === 'home' ? '/' : `/${section}`;
            });
          }
        }} />
      </main>
      <Footer currentLang={currentLang} onNavigate={(section) => {
        window.location.href = section === 'home' ? '/' : `/${section}`;
      }} />
    </div>
  );
}
