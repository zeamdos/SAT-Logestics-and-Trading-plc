'use client';

import React, { useState } from 'react';
import { NavItem } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ExecutiveSection } from '@/components/ExecutiveSection';
import { CorridorSection } from '@/components/CorridorSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { currentLang, triggerTransition } = useLanguage();
  const [activeSection, setActiveSection] = useState<NavItem>('home');

  const handleNavigate = (section: NavItem) => {
    const viewLabels: Record<NavItem, string> = {
      home: 'OVERVIEW',
      services: 'SERVICES GRID',
      executive: 'EXECUTIVE LEADERSHIP',
      corridor: 'DJIBOUTI CORRIDOR',
      contact: 'CONTACT & DISPATCH',
    };

    triggerTransition(viewLabels[section] || 'LOGISTICS SEGMENT', () => {
      setActiveSection(section);
      const targetElement = document.getElementById(section === 'home' ? 'top' : section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <div id="top" className="min-h-screen bg-white">
      {/* Structural Header Navigation */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Single-Page App with Architectural Sections */}
      <main className="relative z-10">
        <HeroSection 
          currentLang={currentLang} 
          onNavigate={handleNavigate} 
        />

        <ServicesGrid 
          currentLang={currentLang} 
          onNavigate={handleNavigate} 
        />

        <ExecutiveSection 
          currentLang={currentLang} 
          onNavigate={handleNavigate} 
        />

        <CorridorSection 
          currentLang={currentLang} 
          onNavigate={handleNavigate} 
        />

        <ContactSection 
          currentLang={currentLang} 
        />
      </main>

      {/* Structural Minimalist Grid Footer */}
      <Footer 
        currentLang={currentLang} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
