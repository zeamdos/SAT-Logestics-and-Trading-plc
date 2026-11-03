'use client';

import React from 'react';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowRight } from 'lucide-react';

interface ExecutiveSectionProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const ExecutiveSection: React.FC<ExecutiveSectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];

  return (
    <section id="executive" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {t.executive.sectionTag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {t.executive.headline}
          </h2>
        </div>

        {/* Executive Profile Main Block (Clean & Concise) */}
        <div className="border border-neutral-200 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 bg-neutral-50/40">
          {/* Left Column: Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200 pb-8 lg:pb-0 lg:pr-10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                Executive Profile
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-black uppercase mb-1">
                {t.executive.name}
              </h3>
              <p className="text-sm font-medium text-neutral-500 mb-6">
                {t.executive.title}
              </p>

              {/* Exact required credential badge */}
              <div className="p-4 bg-white border border-neutral-300 border-l-4 border-l-[#841618] mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                  Credential
                </span>
                <span className="text-sm font-semibold text-black block">
                  {t.executive.credentialBadge}
                </span>
              </div>

              <div className="text-xs text-neutral-400 font-mono">
                {t.executive.governanceBadge}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200">
              <button
                onClick={() => onNavigate('contact')}
                data-cursor-label="CONTACT"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#841618] hover:text-[#6D1113] font-semibold"
              >
                <span>Direct Advisory Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Quote & Bio (Concise) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Quote */}
              <blockquote className="text-lg sm:text-xl font-light text-neutral-900 leading-relaxed mb-6 border-l-4 border-[#841618] pl-5 italic">
                {t.executive.quote}
              </blockquote>

              {/* Concise Bio */}
              <div className="space-y-3 text-neutral-600 text-sm font-light leading-relaxed mb-6">
                <p>{t.executive.bioParagraph1}</p>
                <p>{t.executive.bioParagraph2}</p>
              </div>
            </div>

            {/* Concise Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-neutral-200 text-xs">
              <div>
                <h4 className="font-semibold text-black uppercase mb-0.5">
                  {t.executive.metricTitle1}
                </h4>
                <p className="text-neutral-500">{t.executive.metricDesc1}</p>
              </div>

              <div>
                <h4 className="font-semibold text-black uppercase mb-0.5">
                  {t.executive.metricTitle2}
                </h4>
                <p className="text-neutral-500">{t.executive.metricDesc2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
