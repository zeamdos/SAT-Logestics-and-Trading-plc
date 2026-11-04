'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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

  // Close dropdown on click outside
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
    { id: 'home', label: t.nav.home, path: '/' },
    { id: 'services', label: t.nav.services, path: '/services' },
    { id: 'executive', label: t.nav.executive, path: '/executive' },
    { id: 'corridor', label: t.nav.corridor, path: '/corridor' },
    { id: 'contact', label: t.nav.contact, path: '/contact' },
  ];

  const currentActive = propActiveSection || (
    pathname === '/' ? 'home' :
    pathname.startsWith('/services') ? 'services' :
    pathname.startsWith('/executive') ? 'executive' :
    pathname.startsWith('/corridor') ? 'corridor' :
    pathname.startsWith('/contact') ? 'contact' : 'home'
  );

  const handleNavClick = (item: typeof navItems[0]) => {
    if (propOnNavigate) {
      propOnNavigate(item.id);
      return;
    }

    if (pathname === item.path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    triggerTransition(item.label.toUpperCase(), () => {
      router.push(item.path);
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/10 backdrop-blur-[2px] border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* Exact Original Company Logo (With Corrected Spelling) */}
        <div 
          onClick={() => handleNavClick(navItems[0])}
          className="cursor-pointer group flex items-center py-2"
          data-cursor-label="HOME"
        >
          <div className="relative w-44 sm:w-52 h-14 flex items-center">
            <Image
              src="/images/logo-transparent.png"
              alt="SAT Logistics & Trading PLC"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </div>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item) => {
            const isActive = currentActive === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                data-cursor-label={item.label}
                className={`relative px-4 py-2 text-sm transition-colors rounded-none flex items-center gap-1.5 ${
                  isActive
                    ? 'text-black font-semibold'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#841618] inline-block shrink-0" />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Language Dropdown + Brand Crimson CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Custom Clean Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              data-cursor-label="LANGUAGE"
              className="flex items-center gap-2 px-3 py-2 border border-neutral-300 bg-white hover:border-[#841618] transition-colors text-xs font-mono uppercase text-neutral-800"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#841618]" />
              <span>{currentLangObj.native}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
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

          {/* Brand Crimson Dispatch Button */}
          <button
            onClick={() => handleNavClick(navItems[4])}
            data-cursor-label="DISPATCH"
            className="hidden sm:flex items-center gap-2 bg-[#841618] hover:bg-[#6D1113] text-white transition-colors px-4 py-2 text-xs font-mono uppercase tracking-wider shadow-sm"
          >
            <span>{t.nav.quoteBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2.5 px-3 border border-neutral-200 text-sm font-medium uppercase hover:border-[#841618]"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              handleNavClick(navItems[4]);
              setMobileMenuOpen(false);
            }}
            className="w-full mt-3 py-3 bg-[#841618] hover:bg-[#6D1113] text-white text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2"
          >
            <span>{t.nav.quoteBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
