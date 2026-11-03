'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Footer } from '@/components/Footer';

export default function ServicesPage() {
  const { currentLang, triggerTransition } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="services" />
      <main className="pt-4">
        <ServicesGrid currentLang={currentLang} onNavigate={(section) => {
          if (section !== 'services') {
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
