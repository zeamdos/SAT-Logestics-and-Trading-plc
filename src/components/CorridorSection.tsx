'use client';

import React from 'react';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';

interface CorridorSectionProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const CorridorSection: React.FC<CorridorSectionProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section id="corridor" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {t.corridor.sectionTag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {t.corridor.headline}
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg font-light mt-2">
            {t.corridor.subheadline}
          </p>
        </div>

        {/* Featured Corridor Visual */}
        <div className="relative w-full h-64 sm:h-80 lg:h-[400px] overflow-hidden border border-neutral-200 mb-8 rounded-2xl">
          <Image
            src="/images/railway-corridor.jpg"
            alt="Ethio-Djibouti Railway Multimodal Freight Corridor"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F87171] block mb-0.5">
                Multimodal Lifeline
              </span>
              <p className="text-sm font-light text-neutral-100">
                910+ km integrated rail and highway arterial connecting maritime berths to central dry ports.
              </p>
            </div>
            <div className="text-xs font-mono text-neutral-300 hidden sm:block">
              DJIBOUTI ➔ ADDIS
            </div>
          </div>
        </div>

        {/* 4 Clean Corridor Milestones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.corridor.stops.map((stop, index) => {
            const stepNum = (index + 1).toString().padStart(2, '0');
            return (
              <div
                key={stop.code}
                className="p-5 border border-neutral-200 hover:border-[#841618] transition-colors bg-neutral-50/40 flex flex-col justify-between rounded-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3 pb-2 border-b border-neutral-200">
                    <span className="font-semibold text-[#841618]">{stepNum}</span>
                    <span>{stop.transitTime}</span>
                  </div>

                  <h3 className="text-base font-light text-black uppercase mb-1 leading-snug">
                    {stop.name}
                  </h3>

                  <p className="text-[11px] font-mono text-neutral-400 mb-2">
                    {stop.type}
                  </p>

                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {stop.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
