'use client';

import React from 'react';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesGridProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];

  const serviceImages = [
    { img: '/images/services-doc/page15-244.jpeg', alt: 'Port handling and customs clearance (company profile)' },
    { img: '/images/services-doc/page12-204.jpeg', alt: 'Transport operations (company profile)' },
    { img: '/images/services-doc/page13-208.jpeg', alt: 'Freight and fleet transport operations (company profile)' },
    { img: '/images/projects/oog-special-haulage.jpg', alt: 'Over-height and special cargo transport (company profile)' },
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-12 max-w-4xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {t.services.sectionTag}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {t.services.headline}
          </h1>
          <p className="text-neutral-500 text-base sm:text-lg font-light mt-3 leading-relaxed">
            {t.services.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const photo = serviceImages[index] || serviceImages[0];
            const num = (index + 1).toString().padStart(2, '0');

            return (
              <article
                key={service.id}
                data-cursor-label={`SERVICE ${num}`}
                className="group border border-neutral-200 hover:border-[#841618] transition-colors bg-white flex flex-col rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-100 border-b border-neutral-200">
                  <Image
                    src={photo.img}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 border-l-2 border-[#841618] px-2.5 py-0.5 text-xs font-mono font-medium text-black rounded-md">
                    {num}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h2 className="text-xl sm:text-2xl font-light tracking-tight text-black uppercase mb-1 group-hover:text-[#841618] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-100">
                    <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-3">
                      {service.includesTitle || 'Includes'}
                    </p>
                    <ul className="space-y-2">
                      {service.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="text-sm text-neutral-700 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                          <span className="font-light leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.idealFor && service.idealFor.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-neutral-100">
                      <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
                        Ideal for
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.idealFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs border border-neutral-200 text-neutral-700 bg-neutral-50 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <span className="text-xs font-mono text-neutral-500">
                      {service.kpi}
                    </span>
                    <button
                      onClick={() => onNavigate('contact')}
                      data-cursor-label="INQUIRE"
                      className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#841618] hover:underline font-medium shrink-0"
                    >
                      <span>Request Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {t.services.processSteps && t.services.processSteps.length > 0 && (
          <div className="mt-16 lg:mt-20 border-t border-neutral-200 pt-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
                  {t.services.processTag || 'Process'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight uppercase text-black">
                {t.services.processHeadline || 'How We Work'}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.services.processSteps.map((step, i) => (
                <div key={i} className="border border-neutral-200 rounded-xl p-5 bg-neutral-50/50">
                  <div className="text-xs font-mono text-[#841618] mb-2">Step {i + 1}</div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-black mb-2 leading-snug">
                    {step.title.replace(/^\d+\.\s*/, '')}
                  </h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {t.services.capabilityCards && t.services.capabilityCards.length > 0 && (
          <div className="mt-16 lg:mt-20 border-t border-neutral-200 pt-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
                  {t.services.capabilitiesTag || 'Capabilities'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight uppercase text-black">
                {t.services.capabilitiesHeadline || 'Operational Strengths'}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {t.services.capabilityCards.map((card, i) => (
                <div key={i} className="border border-neutral-200 rounded-2xl p-6 bg-white">
                  <h3 className="text-lg font-light uppercase tracking-tight text-black mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-sm text-neutral-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#841618] rounded-full mt-2 shrink-0" />
                        <span className="font-light leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 border border-[#841618]/20 bg-[#841618]/[0.03] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-light uppercase tracking-tight text-black">Need a tailored logistics plan?</h3>
            <p className="text-sm text-neutral-600 font-light mt-1">Share your cargo type, route, and timeline for a clear service recommendation.</p>
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
