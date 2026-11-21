'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowRight } from 'lucide-react';
import { ClientsMarquee } from '@/components/ClientsMarquee';

interface HomeAboutSnippetProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const HomeAboutSnippet: React.FC<HomeAboutSnippetProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];
  const a = t.about;

  return (
    <section id="about" className="bg-white border-b border-neutral-100">

      {/* ── MISSION STRIP ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: headline + blurb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                {a.sectionTag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black mb-5 leading-tight">
              {a.headline}
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              {a.overview}
            </p>
            <a
              href="/about/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#841618] font-semibold hover:gap-3 transition-all"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Right: 3 mission bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {a.missionItems.slice(0, 3).map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-neutral-200 rounded-2xl bg-white hover:border-[#841618] transition-colors">
                <span className="mt-1 w-2 h-2 bg-[#841618] shrink-0 rounded-full" />
                <p className="text-sm text-neutral-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── CLIENTS HORIZONTAL MARQUEE ── */}
      <div className="bg-neutral-50 border-t border-neutral-100 py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                  {a.customersTag}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-black">
                {a.customersHeadline}
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              12 International Partners
            </span>
          </motion.div>
        </div>

        {/* Scrolling ticker — no padding so cards bleed edge-to-edge */}
        <ClientsMarquee />
      </div>

    </section>
  );
};
