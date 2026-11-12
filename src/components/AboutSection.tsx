'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

const CUSTOMERS = [
  { name: 'TBEA Deyang Cable', short: 'TBEA', country: 'China', color: '#c41230' },
  { name: 'CCRCC', short: 'CCRCC', country: 'China', color: '#1a4a8a' },
  { name: 'Zhen Zhen Iron & Steel', short: 'ZZIS', country: 'China', color: '#2d5a27' },
  { name: 'Sinoma Construction', short: 'SINOMA', country: 'China', color: '#8b4513' },
  { name: 'VOITH HYDRO Shanghai', short: 'VOITH', country: 'Germany', color: '#004f9e' },
  { name: 'Chongqing Taishan Cable', short: 'CTC', country: 'China', color: '#6a0dad' },
  { name: 'SINOTRANS', short: 'SINO\nTRANS', country: 'China', color: '#c41230' },
  { name: 'SINOSTEEL', short: 'SINO\nSTEEL', country: 'China', color: '#1a4a8a' },
  { name: 'GCL Energy', short: 'GCL', country: 'China', color: '#ff6b00' },
  { name: 'DTS — Djibouti', short: 'DTS', country: 'Djibouti', color: '#006b3c' },
  { name: 'China Railway', short: 'CHINA\nRAILWAY', country: 'China', color: '#c41230' },
  { name: 'RONG CHANG', short: 'RONG\nCHANG', country: 'China', color: '#2d5a27' },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Order Receipt & Planning',
    icon: '📋',
    items: [
      'Receive customer instructions and internal order details',
      'Verify product type, quantity, delivery destination and timeframe',
      'Determine the most efficient and economical transportation mode',
      'Schedule delivery dates and allocate resources',
    ],
  },
  {
    num: '02',
    title: 'Transportation & Reporting',
    icon: '🚛',
    items: [
      'Select carrier or transportation method based on logistics plan',
      'Prepare or receive necessary shipping documentation',
      'Allocate trucks and load goods onto vehicles',
      'Share tracking details and daily progress reports with customers',
    ],
  },
  {
    num: '03',
    title: 'Delivery & Customer Support',
    icon: '📦',
    items: [
      'Deliver goods to customer or distribution center as instructed',
      'Address any issues during delivery such as delays or damaged goods',
      'Allocate warehouse space if needed for staging',
    ],
  },
  {
    num: '04',
    title: 'Monitoring & Compliance',
    icon: '📊',
    items: [
      'Track key performance metrics and identify bottlenecks for improvement',
      'Ensure all logistics activities comply with local and international regulations',
      'Conduct training on safety protocols for staff handling hazardous materials or heavy machinery',
      'Maintain accurate records for compliance and audit purposes',
    ],
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const a = t.about;

  // Customer carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDone, setCarouselDone] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInView = useInView(carouselRef, { once: true, margin: '-100px' });
  const totalSlides = Math.ceil(CUSTOMERS.length / 3); // 4 slides of 3

  useEffect(() => {
    if (!carouselInView || carouselDone) return;
    const interval = setInterval(() => {
      setCarouselIndex(prev => {
        const next = prev + 1;
        if (next >= totalSlides) {
          clearInterval(interval);
          setCarouselDone(true);
          return prev;
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [carouselInView, carouselDone, totalSlides]);

  const visibleCustomers = CUSTOMERS.slice(carouselIndex * 3, carouselIndex * 3 + 3);

  return (
    <section id="about" className="bg-white border-b border-neutral-200">
      {/* ── SECTION HEADER ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 lg:pt-24 pb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
            {a.sectionTag}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black mb-4">
          {a.headline}
        </h2>
        <p className="text-neutral-600 text-base sm:text-lg font-light max-w-3xl leading-relaxed">
          {a.overview}
        </p>
      </div>

      {/* ── MISSION & TARGET INDUSTRIES ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <div className="border border-neutral-200 rounded-2xl overflow-hidden">
          {/* Header strip */}
          <div className="bg-[#841618] px-8 py-4 flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/70">
              {a.missionTag}
            </span>
            <span className="text-white font-light text-lg uppercase tracking-wide ml-2">
              {a.missionHeadline}
            </span>
          </div>
          <div className="bg-neutral-50/40 p-8 sm:p-10 space-y-5">
            {a.missionItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 w-2 h-2 bg-[#841618] shrink-0 rounded-full" />
                <p className="text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PURPOSE + PRINCIPLES ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Purpose card */}
        <div className="border border-neutral-200 rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-black px-8 py-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">{a.purposeTag}</span>
            <span className="text-white font-light text-lg uppercase">{a.purposeHeadline}</span>
          </div>
          <div className="p-8 flex flex-col gap-4 flex-1 bg-neutral-50/40">
            <div className="border-l-4 border-[#841618] pl-5">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1">Founded 2023</p>
              <p className="text-sm text-neutral-700 font-light leading-relaxed">{a.purposeFoundedNote}</p>
            </div>
            <div className="border-l-4 border-neutral-200 pl-5">
              <p className="text-sm text-neutral-700 font-light leading-relaxed">{a.purposeMission}</p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-auto inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#841618] hover:text-[#6D1113] font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Principles */}
        <div className="border border-neutral-200 rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-black px-8 py-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">{a.principlesTag}</span>
            <span className="text-white font-light text-lg uppercase">{a.principlesHeadline}</span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1 bg-neutral-50/40">
            {a.principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-black uppercase block mb-0.5">{p.title}</span>
                  <span className="text-xs text-neutral-500 font-light leading-relaxed">{p.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TEAM CAPABILITY ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">{a.capabilityTag}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-light tracking-tight uppercase text-black">{a.capabilityHeadline}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {a.capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-neutral-200 hover:border-[#841618] transition-colors p-6 rounded-2xl bg-neutral-50/40 group"
            >
              <div className="w-8 h-1 bg-[#841618] mb-4 group-hover:w-12 transition-all duration-300" />
              <h4 className="text-sm font-semibold text-black uppercase mb-2 leading-snug">{cap.title}</h4>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── DELIVERED PROJECTS ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <div className="border border-neutral-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-neutral-900 p-8 sm:p-10 text-white flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">{a.projectsTag}</span>
              <h3 className="text-2xl sm:text-3xl font-light uppercase mb-4">{a.projectsHeadline}</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">{a.projectsDesc}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Through these engagements, we have demonstrated our commitment to excellence, reliability, and contributing to Ethiopia's economic and infrastructural development.</span>
            </div>
          </div>
          <div className="p-8 sm:p-10 bg-neutral-50/40 flex flex-col justify-center gap-3">
            {a.projectsList.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 p-3 border border-neutral-200 hover:border-[#841618] transition-colors bg-white rounded-xl"
              >
                <span className="text-[10px] font-mono text-[#841618] font-bold w-5 shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="text-xs text-neutral-700 font-light">{proj}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ORDER PROCESSING PROCEDURE ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">ORDER PROCESSING</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-light tracking-tight uppercase text-black">Our 4-Step Procedure.</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="border border-neutral-200 hover:border-[#841618] transition-colors rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="bg-[#841618] px-5 py-4 flex items-center gap-3">
                <span className="text-2xl">{step.icon}</span>
                <div>
                  <div className="text-[10px] font-mono text-white/60 uppercase tracking-wider">Step {step.num}</div>
                  <div className="text-white text-xs font-semibold uppercase leading-tight">{step.title}</div>
                </div>
              </div>
              <div className="p-5 bg-neutral-50/40 flex-1 space-y-2.5">
                {step.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-[#841618] shrink-0 rounded-full" />
                    <span className="text-xs text-neutral-600 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CUSTOMER CAROUSEL ── */}
      <div ref={carouselRef} className="max-w-7xl mx-auto px-6 sm:px-8 pb-16 lg:pb-24">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">{a.customersTag}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-light tracking-tight uppercase text-black">{a.customersHeadline}</h3>
          <p className="text-neutral-500 text-sm font-light mt-2">{a.customersSubheadline}</p>
        </div>

        {/* Carousel indicator */}
        <div className="flex gap-1.5 mb-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === carouselIndex ? 'bg-[#841618] w-8' : 'bg-neutral-200 w-4'}`}
            />
          ))}
          {carouselDone && (
            <span className="text-[10px] font-mono text-neutral-400 ml-2 self-center uppercase tracking-wider">All partners shown</span>
          )}
        </div>

        {/* 3 visible cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 overflow-hidden">
          {visibleCustomers.map((customer, i) => (
            <motion.div
              key={`${carouselIndex}-${i}`}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-neutral-200 hover:border-[#841618] transition-all duration-300 rounded-2xl p-6 bg-white group flex flex-col items-center text-center"
            >
              {/* Logo badge */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white font-bold text-xs font-mono leading-tight text-center"
                style={{ backgroundColor: customer.color }}
              >
                {customer.short.split('\n').map((line, li) => (
                  <span key={li} className="block leading-tight">{line}</span>
                ))}
              </div>
              <h4 className="text-sm font-semibold text-black uppercase group-hover:text-[#841618] transition-colors leading-snug mb-1">
                {customer.name}
              </h4>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{customer.country}</span>
            </motion.div>
          ))}
        </div>

        {/* Show all logos as text list below (all 12 always visible) */}
        <div className="mt-10 pt-8 border-t border-neutral-100">
          <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-4">All International Partners</p>
          <div className="flex flex-wrap gap-2">
            {CUSTOMERS.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1.5 border border-neutral-200 text-xs text-neutral-600 font-mono rounded-full hover:border-[#841618] hover:text-[#841618] transition-colors cursor-default"
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
