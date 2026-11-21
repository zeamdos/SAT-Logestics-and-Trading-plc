'use client';

import React from 'react';
import Image from 'next/image';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (section: NavItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-black border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-neutral-200 pb-10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative w-48 sm:w-56 h-16 flex items-center">
              <Image
                src="/images/logo.png"
                alt="SAT Logistics & Trading PLC"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="text-[11px] text-neutral-400 space-y-0.5">
              <div>{t.footer.registration}</div>
              <div>{t.footer.licensing}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">Menu</span>
            <ul className="space-y-1.5 text-xs text-neutral-600">
              <li>
                <a href="/" className="hover:text-[#841618] transition-colors block">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="/about/" className="hover:text-[#841618] transition-colors block">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="/services/" className="hover:text-[#841618] transition-colors block">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="/projects/" className="hover:text-[#841618] transition-colors block">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="/contact/" className="hover:text-[#841618] transition-colors block">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Operations */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2">Operations</span>
            <div className="text-xs text-neutral-600 space-y-2">
              <div className="border-l-2 border-[#841618] pl-2.5">
                <span className="font-medium text-black block text-[11px]">ADDIS ABABA HQ</span>
                <span className="text-neutral-400 text-[10px]">Fetele Building, Wolo Sefer</span>
              </div>
              <div className="border-l-2 border-neutral-200 pl-2.5">
                <span className="font-medium text-black block text-[11px]">PORT OF DJIBOUTI</span>
                <span className="text-neutral-400 text-[10px]">Doraleh Multimodal Park (DMP)</span>
              </div>
              <div className="border-l-2 border-neutral-200 pl-2.5">
                <span className="font-medium text-black block text-[11px]">MOJO DRY PORT</span>
                <span className="text-neutral-400 text-[10px]">Customs Stacking Depot</span>
              </div>
              <div className="border-l-2 border-neutral-200 pl-2.5">
                <span className="font-medium text-black block text-[11px]">CONTACT</span>
                <span className="text-neutral-400 text-[10px]">satlogistics0001@gmail.com</span>
                <span className="text-neutral-400 text-[10px] block">+251 93 299 9977</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <div>{t.footer.copyright}</div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span className="text-[11px] text-neutral-400 font-sans">
              Powered by <span className="text-neutral-700 font-medium">Zeamdos Tech</span> · Contact: <a href="tel:0942099162" className="text-neutral-500 hover:text-[#841618] underline font-mono">0942099162</a>
            </span>
            <button
              onClick={scrollToTop}
              data-cursor-label="TOP"
              className="flex items-center gap-1.5 text-black hover:text-[#841618] uppercase tracking-wider text-xs font-medium transition-colors shrink-0"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
