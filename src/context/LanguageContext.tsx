'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  isTransitioning: boolean;
  triggerTransition: (viewName: string, callback?: () => void) => void;
  transitionTarget: string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'en',
  setLanguage: () => {},
  isTransitioning: false,
  triggerTransition: () => {},
  transitionTarget: 'VIEW',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always start with 'en' on both server and client to avoid hydration mismatch.
  // The useEffect below will sync from localStorage after mount.
  const [currentLang, setCurrentLangState] = useState<Language>('en');

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionTarget, setTransitionTarget] = useState<string>('INIT');

  useEffect(() => {
    const saved = localStorage.getItem('sat_lang') as Language | null;
    if (saved && ['en', 'am', 'ar', 'zh'].includes(saved)) {
      setCurrentLangState(saved);
      if (saved === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = saved;
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLangState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sat_lang', lang);
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
      } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
      }
    }
  };

  const triggerTransition = (viewName: string, callback?: () => void) => {
    setTransitionTarget(viewName);
    if (callback) {
      callback();
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        isTransitioning,
        triggerTransition,
        transitionTarget,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
