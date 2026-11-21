'use client';

import React from 'react';

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
  targetView: string;
}

// Instantaneous navigation - no blocking shutter animation
export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = () => {
  return null;
};
