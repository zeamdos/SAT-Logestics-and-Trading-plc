'use client';

import React from 'react';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';

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
    {
      img: '/images/containers-stack.jpg',
      alt: 'Customs Clearance Depot',
    },
    {
      img: '/images/port-terminal.jpg',
      alt: 'Freight Forwarding Djibouti to Addis',
    },
    {
      img: '/images/fleet-truck.jpg',
      alt: 'Cross-Border Truck Fleet',
    },
    {
      img: '/images/harbor-cranes.jpg',
      alt: 'Industrial Machinery Import',
    },
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {t.services.sectionTag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {t.services.headline}
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg font-light mt-2">
            {t.services.subheadline}
          </p>
        </div>

        {/* 4 Clean Service Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const photo = serviceImages[index] || serviceImages[0];
            const num = (index + 1).toString().padStart(2, '0');

            return (
              <div
                key={service.id}
                data-cursor-label={`SERVICE ${num}`}
                className="group border border-neutral-200 hover:border-[#841618] transition-colors bg-white flex flex-col justify-between rounded-2xl overflow-hidden"
              >
                <div>
                  {/* Photo Frame */}
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

                  {/* Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight text-black uppercase mb-1 group-hover:text-[#841618] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Concise Capabilities List */}
                    <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                      {service.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="text-xs text-neutral-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#841618] shrink-0 rounded-full" />
                          <span className="font-light">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer KPI & Action */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between mt-2">
                  <span className="text-xs font-mono text-neutral-500">
                    {service.kpi}
                  </span>

                  <button
                    onClick={() => onNavigate('contact')}
                    data-cursor-label="INQUIRE"
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#841618] group-hover:underline font-medium"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
