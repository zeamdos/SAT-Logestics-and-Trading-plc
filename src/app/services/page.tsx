'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { pageTranslations } from '@/data/pageTranslations';
import { NavItem } from '@/types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicesPage() {
  const { currentLang } = useLanguage();
  const t = pageTranslations[currentLang]?.services || pageTranslations.en.services;

  const handleNavigate = (section: NavItem) => {
    window.location.href = section === 'home' ? '/' : `/${section}/`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="services" onNavigate={handleNavigate} />

      {/* Header — High Image Visibility & Reduced Dark Shadow */}
      <section className="relative w-full min-h-[48vh] lg:min-h-[55vh] -mt-[112px] pt-[120px] flex flex-col justify-end overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-samuel-wolfl-628277-1427541 (1).jpg"
            alt="Commercial Cargo Port & Terminal Logistics"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-100 brightness-110 contrast-105"
          />
          {/* Drastically reduced shadow gradient: clear background transport view */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-black/35" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white font-medium">{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight leading-[1.05] mb-4 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              {t.heroTitle} <span className="text-[#DC2626] font-bold">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white text-base sm:text-lg max-w-2xl font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              {t.heroTagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main 3 Services (Page 18) */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.mainServices.map((srv, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="border border-neutral-200 rounded-2xl p-8 hover:border-[#841618] transition-colors flex flex-col justify-between h-full bg-white shadow-sm">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#841618] uppercase tracking-wider block mb-2">{srv.num}</span>
                    <h2 className="text-2xl font-bold uppercase text-black mb-3">{srv.title}</h2>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-neutral-100">
                    <span className="text-xs font-mono text-neutral-400">{srv.sub}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Port Handling & Local Customs Clearance (Page 15) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">{t.portSectionTag}</span>
            </div>
            <h2 className="text-3xl font-bold uppercase text-black tracking-tight">
              {t.portHeadline}
            </h2>
            <div className="space-y-1.5 text-neutral-700 text-sm mt-3">
              <p>❖ {t.bullet1}</p>
              <p>❖ {t.bullet2}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.05}>
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 h-full shadow-sm">
                <h3 className="text-xl font-bold uppercase text-black mb-4">{t.portHandlingTitle}</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  {t.portHandlingItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#841618] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 h-full shadow-sm">
                <h3 className="text-xl font-bold uppercase text-black mb-4">{t.customsTitle}</h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  {t.customsItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Over-height & Special Cargo (Page 14) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                <Image
                  src="/images/projects/oog-special-haulage.jpg"
                  alt={t.specialCargoTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">{t.specialCargoTag}</span>
              <h2 className="text-3xl font-bold uppercase text-black tracking-tight">
                {t.specialCargoTitle}
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {t.specialCargoDesc}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="px-6 py-3 bg-[#841618] hover:bg-[#6D1113] text-white text-xs font-mono uppercase tracking-wider rounded-full transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>{t.specialCargoCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
