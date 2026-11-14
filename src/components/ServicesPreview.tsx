'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowUpRight } from 'lucide-react';

interface ServicesPreviewProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

const SERVICE_IMAGES = [
  { img: '/images/containers-stack.jpg', alt: 'Customs Clearance' },
  { img: '/images/port-terminal.jpg',    alt: 'Freight Forwarding' },
  { img: '/images/fleet-truck.jpg',      alt: 'Cross-Border Transport' },
  { img: '/images/harbor-cranes.jpg',    alt: 'Industrial Machinery Import' },
];

export const ServicesPreview: React.FC<ServicesPreviewProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <section id="services" className="bg-neutral-50 border-b border-neutral-200 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                {t.services.sectionTag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-black">
              {t.services.headline}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#841618] font-semibold whitespace-nowrap hover:gap-3 transition-all"
          >
            <span>All Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 cards — 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((service, i) => {
            const photo = SERVICE_IMAGES[i] || SERVICE_IMAGES[0];
            const num = (i + 1).toString().padStart(2, '0');
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-neutral-200 hover:border-[#841618] bg-white rounded-2xl overflow-hidden transition-colors flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-neutral-100">
                  <Image
                    src={photo.img}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 border-l-2 border-[#841618] px-2 py-0.5 text-[10px] font-mono font-bold text-black rounded">
                    {num}
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-bold uppercase text-black mb-1 group-hover:text-[#841618] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="mt-4 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[#841618] font-semibold"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
