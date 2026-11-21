'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { pageTranslations } from '@/data/pageTranslations';
import { NavItem } from '@/types';
import {
  CheckCircle2, Mail, Phone, MapPin,
  Users, Award, Target, Leaf, TrendingUp,
  Truck, Package, ClipboardList, BarChart3, ChevronDown,
  GraduationCap
} from 'lucide-react';

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">{label}</span>
    </div>
  );
}

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

const PRINCIPLE_ICONS = [Users, Award, Target, TrendingUp, Leaf];
const PROCESS_ICONS = [ClipboardList, Truck, Package, BarChart3];

export default function AboutPage() {
  const { currentLang } = useLanguage();
  const [openStep, setOpenStep] = useState<number | null>(0);
  const t = pageTranslations[currentLang]?.about || pageTranslations.en.about;

  const handleNavigate = (section: NavItem) => {
    window.location.href = section === 'home' ? '/' : `/${section}/`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="about" onNavigate={handleNavigate} />

      {/* Hero Header — High Image Visibility & Reduced Dark Shadow */}
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
          {/* Drastically reduced shadow gradient: background transport fleet, vessel & sky clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-black/35" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-14">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white font-medium">{t.badge}</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold uppercase text-white tracking-tight leading-[1.05] mb-4 drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
              {t.heroTitle}
              {t.heroTitleSub && (
                <span className="block text-2xl sm:text-3xl font-light text-neutral-300 mt-2 tracking-normal uppercase">
                  {t.heroTitleSub}
                </span>
              )}
            </h1>
            <p className="text-white text-base sm:text-lg max-w-2xl font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              {t.heroTagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Executive Leadership — Samuel Ayalew */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait Image */}
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
                  <Image
                    src="/images/samuel-ayalew.jpg"
                    alt="Samuel Ayalew - General Manager, SAT Logistics and Trading PLC"
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
                    <p className="font-bold text-xl">Samuel Ayalew</p>
                    <p className="text-xs font-mono text-neutral-300 uppercase tracking-widest mt-0.5">
                      {t.managerRole}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Leadership & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0.1}>
                <SectionTag label={t.leadershipTag} />
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black tracking-tight leading-tight">
                  {t.foundedTitle}
                </h2>
                
                <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed mt-4">
                  <p>{t.bio1}</p>
                  <p>{t.bio2}</p>
                </div>

                {/* Educational & Professional Qualifications Card */}
                <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3 mt-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#841618]" />
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-black">
                      {t.qualificationsTag}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-neutral-700">
                    <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                      <span className="text-[10px] font-mono text-[#841618] uppercase tracking-wider block mb-1">
                        {t.degreeLabel}
                      </span>
                      <p className="font-bold text-black text-sm">{t.degreeValue}</p>
                      <p className="text-neutral-500 font-normal">{t.degreeField}</p>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
                      <span className="text-[10px] font-mono text-[#841618] uppercase tracking-wider block mb-1">
                        {t.competencyLabel}
                      </span>
                      <p className="font-bold text-black text-sm">{t.competencyValue}</p>
                      <p className="text-neutral-500 font-normal">{t.competencyField}</p>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Details */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#841618] shrink-0" />
                    <span className="font-mono font-medium">+251 932 999 977 / 0932 373 839</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#841618] shrink-0" />
                    <a href="mailto:satlogistics0001@gmail.com" className="hover:text-[#841618] transition-colors font-mono">
                      satlogistics0001@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                    <span>{t.addressText}</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:col-span-2 pt-1">
                    <svg className="w-4 h-4 text-[#0077b5] shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <a
                      href="https://et.linkedin.com/in/samuel-ayalew-7049032a7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#0077b5] hover:underline"
                    >
                      {t.linkedinText}
                    </a>
                  </div>
                </div>

              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team's Capability */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12">
            <SectionTag label={t.capabilityTag} />
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black tracking-tight">
              {t.capabilityTitle}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
              {t.capabilityDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.capabilities.map((cap, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-7 bg-white rounded-2xl border border-neutral-200 shadow-sm hover:border-[#841618] transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-[#841618] font-bold uppercase tracking-wider">
                        {cap.tag}
                      </span>
                      <span className="text-neutral-300 font-mono text-xs">0{i + 1}</span>
                    </div>
                    <h3 className="text-base font-bold uppercase text-black mb-2 group-hover:text-[#841618] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-neutral-100 text-[11px] font-mono text-neutral-400">
                    {cap.highlight}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Overview */}
            <FadeIn>
              <div className="bg-neutral-50 p-8 sm:p-10 rounded-2xl border border-neutral-200 h-full flex flex-col justify-between">
                <div>
                  <SectionTag label={t.overviewTag} />
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase text-black tracking-tight mb-4">
                    {t.overviewTitle}
                  </h2>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                    {t.overviewDesc}
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-neutral-200">
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    {t.mandateLabel}
                  </p>
                  <p className="text-sm font-semibold text-black">
                    {t.mandateText}
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.1}>
              <div className="bg-neutral-50 p-8 sm:p-10 rounded-2xl border border-neutral-200 h-full space-y-4">
                <SectionTag label={t.missionTag} />
                <h2 className="text-2xl sm:text-3xl font-bold uppercase text-black tracking-tight mb-4">
                  {t.missionTitle}
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-700">
                  {t.missionPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#841618] rounded-full mt-2 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <FadeIn className="mb-12">
            <SectionTag label={t.principlesTag} />
            <h2 className="text-3xl font-bold uppercase text-black tracking-tight">{t.principlesTitle}</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.principles.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length];
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="p-7 border border-neutral-200 rounded-2xl bg-white hover:border-[#841618] transition-colors h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center mb-4 text-[#841618]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase text-black mb-2">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">{p.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Order Processing Procedure */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <FadeIn className="mb-10 text-center">
            <SectionTag label={t.processTag} />
            <h2 className="text-3xl font-bold uppercase text-black tracking-tight">{t.processTitle}</h2>
          </FadeIn>

          <div className="space-y-3">
            {t.steps.map((step, i) => {
              const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
              const isOpen = openStep === i;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenStep(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-neutral-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#841618] text-white' : 'bg-neutral-100 text-neutral-700'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">{step.num}</span>
                          <span className="text-sm font-bold uppercase text-black">{step.title}</span>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-neutral-100">
                        <ul className="space-y-2.5 mt-2">
                          {step.items.map((item, j) => (
                            <li key={j} className="text-xs sm:text-sm text-neutral-600 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#841618] rounded-full mt-2 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
