'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Language, NavItem } from '@/types';
import { translations } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, ChevronDown, ArrowUpRight, Menu, X, Check } from 'lucide-react';

interface NavigationProps {
  activeSection?: NavItem;
  onNavigate?: (section: NavItem) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection: propActiveSection,
  onNavigate: propOnNavigate,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { currentLang, setLanguage, triggerTransition } = useLanguage();
  const t = translations[currentLang];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'am', label: 'Amharic', native: 'አማርኛ' },
    { code: 'ar', label: 'Arabic', native: 'العربية' },
    { code: 'zh', label: 'Chinese', native: '中文' },
  ];

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  const navItems: { id: NavItem; label: string; path: string }[] = [
    { id: 'home',      label: t.nav.home,      path: '/' },
    { id: 'about',     label: t.nav.about,     path: '/about/' },
    { id: 'services',  label: t.nav.services,  path: '/services/' },
    { id: 'projects',  label: t.nav.projects,  path: '/projects/' },
    { id: 'contact',   label: t.nav.contact,   path: '/contact/' },
  ];

  const currentActive = propActiveSection || (
    pathname === '/' ? 'home' :
    pathname.startsWith('/about') ? 'about' :
    pathname.startsWith('/services') ? 'services' :
    pathname.startsWith('/projects') ? 'projects' :
    pathname.startsWith('/contact') ? 'contact' : 'home'
  );

  // Routes that are full pages (not scroll anchors on homepage)
  const PAGE_ROUTES = new Set([
    '/about', '/about/',
    '/services', '/services/',
    '/projects', '/projects/',
    '/contact', '/contact/'
  ]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.id === 'home' && propOnNavigate) {
      propOnNavigate('home');
      return;
    }
    router.push(item.path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-28">
        {/* Logo */}
        <Link
          href="/"
          prefetch={true}
          className="group flex items-center py-2"
          data-cursor-label="HOME"
        >
          <div className="relative w-48 sm:w-56 h-16 flex items-center">
            <Image
              src="/images/logo-transparent.png"
              alt="SAT Logistics & Trading PLC"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation — Instant Prefetched Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => {
            const isActive = currentActive === item.id;
            return (
              <Link
                key={item.id}
                href={item.path}
                prefetch={true}
                className={`relative px-4 py-2 text-sm transition-colors rounded-none flex items-center gap-1.5 ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#841618] inline-block shrink-0" />
                )}
                <span suppressHydrationWarning>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Language + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              data-cursor-label="LANGUAGE"
              className="flex items-center gap-2 px-3 py-2 border border-neutral-300 bg-white hover:border-[#841618] transition-colors text-xs font-mono uppercase text-neutral-800"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#841618]" />
              <span suppressHydrationWarning>{currentLangObj.native}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-1.5 w-44 bg-white border border-neutral-300 shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
                  Select Language
                </div>
                {languages.map((lang) => {
                  const isSelected = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                        isSelected ? 'font-semibold text-[#841618] bg-neutral-50' : 'text-neutral-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{lang.native}</span>
                        <span className="text-[10px] text-neutral-400 font-mono">({lang.label})</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#841618]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact/"
            prefetch={true}
            className="hidden sm:flex items-center gap-2 bg-[#841618] hover:bg-[#6D1113] text-white transition-colors px-4 py-2 text-xs font-mono uppercase tracking-wider shadow-sm"
          >
            <span suppressHydrationWarning>{t.nav.quoteBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-neutral-300 text-neutral-900 hover:bg-neutral-100"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-left py-2.5 px-3 border border-neutral-200 text-sm font-medium uppercase hover:border-[#841618]"
            >
              <span suppressHydrationWarning>{item.label}</span>
            </Link>
          ))}
          <Link
            href="/contact/"
            prefetch={true}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-3 py-3 bg-[#841618] hover:bg-[#6D1113] text-white text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2"
          >
            <span suppressHydrationWarning>{t.nav.quoteBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};
