'use client';

import React, { useState } from 'react';
import { NavItem } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HomeAboutSnippet } from '@/components/HomeAboutSnippet';
import { ServicesPreview } from '@/components/ServicesPreview';
import { GallerySection } from '@/components/GallerySection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { currentLang, triggerTransition } = useLanguage();
  const [activeSection, setActiveSection] = useState<NavItem>('home');

  const handleNavigate = (section: NavItem) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    window.location.href = `/${section}/`;
  };

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="relative z-10">
        {/* 1 · Hero */}
        <HeroSection
          currentLang={currentLang}
          onNavigate={handleNavigate}
        />

        {/* 2 · About snippet + clients */}
        <HomeAboutSnippet
          currentLang={currentLang}
          onNavigate={handleNavigate}
        />

        {/* 3 · Services preview cards */}
        <ServicesPreview
          currentLang={currentLang}
          onNavigate={handleNavigate}
        />

        {/* 4 · Operations gallery */}
        <GallerySection />
      </main>

      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
