'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { pageTranslations } from '@/data/pageTranslations';
import { NavItem } from '@/types';
import {
  MapPin, CheckCircle2, Truck, ZoomIn, X, Zap,
  Layers, Package, Factory, Compass
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

const EQUIPMENT_ICONS = [Truck, Zap, Package, Layers, Compass];

export default function ProjectsPage() {
  const { currentLang } = useLanguage();
  const t = pageTranslations[currentLang]?.projects || pageTranslations.en.projects;

  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'ENERGY & POWER' | 'NATIONAL INFRASTRUCTURE' | 'INDUSTRIAL PARKS' | 'SPECIAL CARGO'>('ALL');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const handleNavigate = (section: NavItem) => {
    window.location.href = section === 'home' ? '/' : `/${section}/`;
  };

  const categoryFilters: { key: typeof selectedCategory; label: string }[] = [
    { key: 'ALL', label: t.categories.all },
    { key: 'ENERGY & POWER', label: t.categories.energy },
    { key: 'NATIONAL INFRASTRUCTURE', label: t.categories.infrastructure },
    { key: 'INDUSTRIAL PARKS', label: t.categories.parks },
    { key: 'SPECIAL CARGO', label: t.categories.special }
  ];

  const filteredProjects = selectedCategory === 'ALL'
    ? t.projects
    : t.projects.filter(p => p.categoryKey === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="projects" onNavigate={handleNavigate} />

      {/* Hero Header — High Image Visibility & Reduced Dark Shadow */}
      <section className="relative w-full min-h-[48vh] lg:min-h-[55vh] -mt-[112px] pt-[120px] flex flex-col justify-end overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pexels-samuel-wolfl-628277-1427541 (1).jpg"
            alt="Delivered Capital Projects"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-100 brightness-110 contrast-105"
          />
          {/* Drastically reduced shadow gradient */}
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

      {/* Main Delivered Projects Showcase */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-10">
            <SectionTag label={t.sectionTag} />
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black tracking-tight">
              {t.headline}
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mt-3">
              {t.intro}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categoryFilters.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <FadeIn key={proj.id} delay={idx * 0.05}>
                <div className="group border border-neutral-200 rounded-2xl overflow-hidden bg-white hover:border-[#841618] hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  
                  {/* Project Image */}
                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-neutral-100 cursor-pointer"
                    onClick={() => setLightboxImg({ src: proj.image, title: proj.title, subtitle: `${proj.location} • ${proj.client}` })}
                  >
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    
                    {/* Zoom Icon badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider rounded-md">
                        {proj.categoryKey}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#841618] shrink-0" />
                        <span className="truncate">{proj.location}</span>
                      </div>

                      <h3 className="text-base font-bold uppercase text-black leading-snug mb-2 group-hover:text-[#841618] transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {proj.desc}
                      </p>

                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 mb-4 space-y-1">
                        <div className="text-[11px] text-neutral-500">
                          <strong className="text-neutral-700">{proj.client}</strong>
                        </div>
                        <div className="text-[11px] text-neutral-500">
                          <strong className="text-neutral-700">{proj.cargo}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5 items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {proj.tags.slice(0, 2).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-[#841618] font-bold">
                        {t.deliveredBadge}
                      </span>
                    </div>
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* Expertise in Transportation & Industry Parks (PDF Page 10) */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="max-w-3xl mb-12">
            <SectionTag label={t.expertiseTag} />
            <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black tracking-tight">
              {t.expertiseTitle}
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mt-3">
              {t.expertiseDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Industrial Parks Portfolio */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Factory className="w-5 h-5 text-[#841618]" />
                  <h3 className="text-lg font-bold uppercase text-black">{t.parksTitle}</h3>
                </div>
                <p className="text-xs text-neutral-500">
                  {t.parksSub}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.parks.map((park, i) => (
                  <div key={i} className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-[#841618] transition-colors">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-sm text-black uppercase">{park.name}</p>
                      <span className="text-[10px] font-mono text-[#841618] bg-[#841618]/5 px-2 py-0.5 rounded">
                        {park.region}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">{park.type}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2.5">
                  {t.clientsTag}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {t.clientNames.map((name, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#841618]/5 text-[#841618] font-bold rounded-lg border border-[#841618]/20"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialized Equipment Breakdown */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col">
              <div>
                <h3 className="text-lg font-bold uppercase text-black mb-1">
                  {t.equipmentTitle}
                </h3>
                <p className="text-xs text-neutral-600 mb-4">
                  {t.equipmentSub}
                </p>
                <div className="space-y-3.5">
                  {t.equipment.map((eq, i) => {
                    const Icon = EQUIPMENT_ICONS[i % EQUIPMENT_ICONS.length];
                    return (
                      <div key={i} className="flex items-start gap-3 text-xs text-neutral-700">
                        <div className="w-7 h-7 rounded-lg bg-neutral-100 text-[#841618] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-black block text-sm font-semibold">{eq.name}</strong>
                          <span className="text-neutral-500 leading-relaxed">{eq.detail}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location Range & Experience (PDF Page 11) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionTag label={t.locationsTag} />
              <h2 className="text-3xl sm:text-4xl font-bold uppercase text-black tracking-tight leading-tight">
                {t.locationsTitle}
              </h2>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {t.locationsDesc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {t.locationList.map((loc, i) => (
                  <div key={i} className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-center hover:border-[#841618] transition-colors">
                    <span className="text-xs font-mono font-bold text-black uppercase block">{loc}</span>
                    <span className="text-[10px] text-neutral-400 font-mono">{t.hubBadge}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-neutral-50 rounded-2xl border-l-4 border-[#841618] text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-2 mt-4">
                <p>{t.experienceQuote1}</p>
                <p className="font-semibold text-black">{t.experienceQuote2}</p>
              </div>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-white p-4 flex items-center justify-center">
                <Image
                  src="/images/projects/ethiopia-map-single.jpg"
                  alt="Ethiopian Logistics and Transit Network Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center p-2"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-800 text-white">
                <div>
                  <h4 className="text-sm font-bold uppercase">{lightboxImg.title}</h4>
                  <p className="text-xs text-neutral-400 font-mono">{lightboxImg.subtitle}</p>
                </div>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative w-full aspect-[16/10] bg-black">
                <Image
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
