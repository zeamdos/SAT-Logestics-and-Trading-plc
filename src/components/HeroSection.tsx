'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];

  return (
    <section className="relative w-full min-h-[85vh] -mt-[81px] pt-[81px] flex flex-col justify-center overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-trucks.png"
          alt="SAT Logistics container trucks on the highway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 blur-[1px]"
        />
        {/* Side gradient: solid behind the text, clear over the trucks */}
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-white/95 via-white/80 to-white/50 lg:via-white/70 lg:to-white/10" />
        {/* Soft fade at bottom into the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-start">
        {/* Minimal Category Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200/70 px-4 py-1.5 shadow-sm">
          <span className="w-2 h-2 bg-[#841618] inline-block rounded-full" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-600 font-medium">
            {t.hero.badge}
          </span>
        </div>

        {/* Large Clean Typography */}
        <div className="mb-8 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-black uppercase leading-[1.05]"
          >
            <span className="text-[#841618] font-normal">SAT</span> LOGISTICS <br />
            <span className="text-neutral-500 font-extralight">{t.hero.headlinePart2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 text-lg sm:text-xl text-neutral-700 font-light max-w-2xl leading-relaxed"
          >
            {t.hero.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              data-cursor-label="CONTACT"
              className="px-7 py-3.5 bg-[#841618] hover:bg-[#6D1113] text-white transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 shadow-md rounded-full"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              data-cursor-label="SERVICES"
              className="px-7 py-3.5 bg-white/80 backdrop-blur-sm text-black hover:bg-white hover:border-[#841618] transition-colors text-xs font-mono uppercase tracking-wider flex items-center gap-2.5 border border-neutral-300 rounded-full"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4 text-[#841618]" />
            </button>
          </motion.div>
        </div>

        {/* 4 Clean Operational Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 max-w-5xl"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-6 py-5 border border-white/60 shadow-lg shadow-black/5">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              {t.hero.stat1Label}
            </span>
            <div className="text-3xl font-light text-black">
              {t.hero.stat1Value}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-6 py-5 border border-white/60 shadow-lg shadow-black/5">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              {t.hero.stat2Label}
            </span>
            <div className="text-3xl font-light text-black">
              {t.hero.stat2Value}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-6 py-5 border border-white/60 shadow-lg shadow-black/5">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              {t.hero.stat3Label}
            </span>
            <div className="text-3xl font-light text-black">
              {t.hero.stat3Value}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl px-6 py-5 border border-white/60 shadow-lg shadow-black/5">
            <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
              {t.hero.stat4Label}
            </span>
            <div className="text-3xl font-light text-black">
              {t.hero.stat4Value}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
