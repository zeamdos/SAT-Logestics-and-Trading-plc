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
  const [currentLang, setCurrentLangState] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [transitionTarget, setTransitionTarget] = useState<string>('INIT');

  useEffect(() => {
    const saved = localStorage.getItem('sat_lang') as Language | null;
    if (saved && ['en', 'am', 'ar', 'zh'].includes(saved)) {
      setCurrentLangState(saved);
    }
  }, []);

  useEffect(() => {
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = currentLang;
    }
    localStorage.setItem('sat_lang', currentLang);
  }, [currentLang]);

  const setLanguage = (lang: Language) => {
    setIsTransitioning(true);
    setTransitionTarget(`LOCALE // ${lang.toUpperCase()}`);
    setTimeout(() => {
      setCurrentLangState(lang);
      setIsTransitioning(false);
    }, 450);
  };

  const triggerTransition = (viewName: string, callback?: () => void) => {
    setTransitionTarget(viewName);
    setIsTransitioning(true);
    setTimeout(() => {
      if (callback) callback();
    }, 300);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
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
