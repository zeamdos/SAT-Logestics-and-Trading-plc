'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth luxury spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'button, a, input, select, textarea, [data-cursor], .interactive-card'
      ) as HTMLElement | null;

      if (interactiveEl) {
        setIsHovered(true);
        const label = interactiveEl.getAttribute('data-cursor-label');
        setHoverLabel(label || null);
      } else {
        setIsHovered(false);
        setHoverLabel(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Sleek Minimalist Outer Ring with Brand Red Accent */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.6 : 1,
            borderColor: isHovered ? '#841618' : '#71717A',
            borderWidth: isHovered ? '1.5px' : '1px',
            backgroundColor: isHovered ? 'rgba(132, 22, 24, 0.06)' : 'rgba(0, 0, 0, 0)',
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="w-7 h-7 rounded-none border relative flex items-center justify-center transition-colors"
        />

        {hoverLabel && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-9 left-1/2 -translate-x-1/2 bg-[#841618] text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 whitespace-nowrap shadow-sm"
          >
            {hoverLabel}
          </motion.div>
        )}
      </motion.div>

      {/* Center Target Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 0 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.1 }}
          className="w-1.5 h-1.5 rounded-none bg-black"
        />
      </motion.div>
    </>
  );
};
