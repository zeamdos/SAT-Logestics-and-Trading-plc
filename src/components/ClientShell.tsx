'use client';

import React from 'react';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { CustomCursor } from '@/components/CustomCursor';
import { PageTransitionOverlay } from '@/components/PageTransitionOverlay';

const ShellInner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isTransitioning, transitionTarget } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative">
      <CustomCursor />
      <PageTransitionOverlay
        isTransitioning={isTransitioning}
        targetView={transitionTarget}
      />
      {children}
    </div>
  );
};

export const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <ShellInner>{children}</ShellInner>
    </LanguageProvider>
  );
};
