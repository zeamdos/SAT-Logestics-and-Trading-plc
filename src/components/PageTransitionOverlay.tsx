'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionOverlayProps {
  isTransitioning: boolean;
  targetView: string;
}

export const PageTransitionOverlay: React.FC<PageTransitionOverlayProps> = ({
  isTransitioning,
  targetView,
}) => {
  const columns = [0, 1, 2, 3, 4];

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="clean-wipe-transition"
          className="fixed inset-0 z-50 pointer-events-none flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Elegant Shutter Blades */}
          {columns.map((colIndex) => (
            <motion.div
              key={colIndex}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{
                duration: 0.45,
                delay: colIndex * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              style={{ originY: 0 }}
              className="flex-1 bg-neutral-950 border-r border-neutral-900 last:border-r-0 relative"
            />
          ))}

          {/* Clean Editorial Title during Transition */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, delay: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center text-white px-8 py-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                SAT LOGISTICS & TRADING PLC
              </span>
              <div className="text-2xl sm:text-3xl font-light tracking-tight uppercase">
                {targetView}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
