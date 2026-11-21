'use client';

import React from 'react';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowUpRight, MapPin, CheckCircle2, Building2 } from 'lucide-react';

interface ProjectsSectionProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const p = t.projects;

  const images = [
    '/images/projects/gerd-dam.jpg',
    '/images/projects/ethiopian-airlines-cargo.jpg',
    '/images/projects/electric-power.jpg',
    '/images/projects/industrial-parks-corridor.jpg',
    '/images/projects/gilgel-gibe.jpg',
    '/images/projects/project-oog-kiln.jpg',
  ];

  return (
    <section id="projects" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {p.sectionTag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {p.headline}
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg font-light mt-3 leading-relaxed">
            {p.subheadline}
          </p>
          <p className="text-neutral-700 text-sm sm:text-base font-light mt-4 leading-relaxed max-w-3xl">
            {p.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 border border-neutral-200 rounded-2xl p-6 sm:p-8 bg-neutral-50/40">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
                {p.experienceTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight uppercase text-black mb-5">
              {p.experienceHeadline}
            </h2>
            <ul className="space-y-3">
              {p.experiencePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#841618] shrink-0 mt-1" />
                  <span className="font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative min-h-[260px] rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100">
            <Image
              src={images[1]}
              alt="Project cargo and transport expertise"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {p.items.map((item, index) => (
            <article
              key={index}
              className="group border border-neutral-200 hover:border-[#841618] transition-colors bg-white rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-44 bg-neutral-100 border-b border-neutral-200">
                <Image
                  src={images[index % images.length]}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 border-l-2 border-[#841618] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-black rounded-md">
                  {item.sector}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-light tracking-tight text-black uppercase mb-2 group-hover:text-[#841618] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <div className="space-y-2 text-xs sm:text-sm border-t border-neutral-100 pt-4">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-neutral-400 text-[10px] block mb-0.5">Scope</span>
                    <span className="text-neutral-700 font-light">{item.scope}</span>
                  </div>
                  <div>
                    <span className="font-mono uppercase tracking-wider text-neutral-400 text-[10px] block mb-0.5">Cargo / Equipment</span>
                    <span className="text-neutral-700 font-light">{item.cargo}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-neutral-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#841618] rounded-full mt-1.5 shrink-0" />
                        <span className="font-light">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 border border-neutral-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-[#841618]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
                {p.coverageTag}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight uppercase text-black mb-2">
              {p.coverageHeadline}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-5">
              {p.coverageDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.locations.map((loc, i) => (
                <span key={i} className="px-2.5 py-1 text-xs border border-neutral-200 text-neutral-700 bg-neutral-50 rounded-full">
                  {loc}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 border border-neutral-200 rounded-2xl p-6 sm:p-8 bg-[#841618]/[0.03]">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-[#841618]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
                {p.partnersTag}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-light tracking-tight uppercase text-black mb-2">
              {p.partnersHeadline}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
              {p.partnersDesc}
            </p>
            <ul className="space-y-2">
              {p.partners.map((partner, i) => (
                <li key={i} className="text-sm text-neutral-700 font-light flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-[#841618] rounded-full mt-2 shrink-0" />
                  <span>{partner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border border-[#841618]/20 bg-[#841618]/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-light uppercase tracking-tight text-black">Discuss a project shipment</h3>
            <p className="text-sm text-neutral-600 font-light mt-1">Share your cargo details, route, and timeline for a tailored logistics plan.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#841618] hover:bg-[#6D1113] text-white text-xs font-mono uppercase tracking-widest transition-colors rounded-md"
          >
            <span>Contact Our Team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
