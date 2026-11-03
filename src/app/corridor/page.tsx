'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { CorridorSection } from '@/components/CorridorSection';
import { Footer } from '@/components/Footer';

export default function CorridorPage() {
  const { currentLang, triggerTransition } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="corridor" />
      <main className="pt-4">
        <CorridorSection currentLang={currentLang} onNavigate={(section) => {
          if (section !== 'corridor') {
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
