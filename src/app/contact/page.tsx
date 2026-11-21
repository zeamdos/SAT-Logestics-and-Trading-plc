'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { pageTranslations } from '@/data/pageTranslations';
import { NavItem } from '@/types';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  AlertCircle, Building2, ShieldCheck, ArrowRight,
  ExternalLink, MessageSquare, Copy, Check
} from 'lucide-react';

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">{label}</span>
    </div>
  );
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const { currentLang } = useLanguage();
  const t = pageTranslations[currentLang]?.contact || pageTranslations.en.contact;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [dispatchRef, setDispatchRef] = useState('');
  const [copied, setCopied] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    serviceRequired: 'International Freight Forwarding (Djibouti - Ethiopia)',
    originDestination: '',
    cargoVolume: '',
    details: ''
  });

  const handleNavigate = (section: NavItem) => {
    window.location.href = section === 'home' ? '/' : `/${section}/`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const refId = `SAT-${Date.now().toString().slice(-6)}`;

    // 1. Direct FormSubmit.co to satlogistics0001@gmail.com (Instant free email gateway)
    try {
      const res = await fetch('https://formsubmit.co/ajax/satlogistics0001@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Dispatch Request ${refId}] ${formData.fullName} - ${formData.companyName}`,
          'Dispatch Reference': refId,
          'Full Name': formData.fullName,
          'Company Name': formData.companyName,
          'Phone Number': formData.phoneNumber,
          'Client Email': formData.email,
          'Service Required': formData.serviceRequired,
          'Origin & Destination': formData.originDestination || 'Not Specified',
          'Estimated Volume / Weight': formData.cargoVolume || 'Not Specified',
          'Cargo Details': formData.details || 'None provided',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok || data.success === 'true' || data.success === true) {
        setDispatchRef(refId);
        setSubmitted(true);
        setSubmitting(false);
        return;
      }
    } catch {
      // fallback to next options
    }

    // 2. Web3Forms fallback
    try {
      const web3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
          subject: `[Dispatch ${refId}] ${formData.fullName} - ${formData.companyName}`,
          from_name: 'SAT Logistics Portal',
          to_email: 'satlogistics0001@gmail.com',
          replyto: formData.email,
          'Dispatch Reference': refId,
          'Full Name': formData.fullName,
          'Company Name': formData.companyName,
          'Direct Phone': formData.phoneNumber,
          'Client Email': formData.email,
          'Service Required': formData.serviceRequired,
          'Origin & Destination': formData.originDestination || 'Not Specified',
          'Estimated Volume / Weight': formData.cargoVolume || 'Not Specified',
          'Special Cargo Details': formData.details || 'None provided'
        }),
      });

      const web3Data = await web3Res.json().catch(() => ({}));
      if (web3Res.ok && web3Data.success) {
        setDispatchRef(refId);
        setSubmitted(true);
        setSubmitting(false);
        return;
      }
    } catch {
      // fallback to PHP
    }

    // 3. Native PHP Backend fallback (for live cPanel/Yegara hosting)
    try {
      const phpRes = await fetch('/api/dispatch.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          serviceRequired: formData.serviceRequired,
          originDestination: formData.originDestination,
          cargoVolume: formData.cargoVolume,
          details: formData.details,
          dispatchRef: refId,
        }),
      });

      if (phpRes.ok) {
        setDispatchRef(refId);
        setSubmitted(true);
        setSubmitting(false);
        return;
      }
    } catch {
      // fallback to mailto
    }

    // 4. Client Mailto Fallback
    openMailtoFallback(refId);
    setDispatchRef(refId);
    setSubmitted(true);
    setSubmitting(false);
  };

  const openMailtoFallback = (refId: string) => {
    const subject = encodeURIComponent(`[Dispatch Request ${refId}] ${formData.fullName} - ${formData.companyName}`);
    const body = encodeURIComponent(
      `Dispatch Reference ID: ${refId}\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Phone Number: ${formData.phoneNumber}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.serviceRequired}\n` +
      `Origin / Destination: ${formData.originDestination}\n` +
      `Volume / Weight: ${formData.cargoVolume}\n\n` +
      `Cargo Details:\n${formData.details}\n`
    );
    window.location.href = `mailto:satlogistics0001@gmail.com?subject=${subject}&body=${body}`;
    setDispatchRef(refId);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection="contact" onNavigate={handleNavigate} />

      {/* Header — Sleek Dark with Decreased Shadow for High Photo Visibility */}
      <section className="relative w-full min-h-[58vh] lg:min-h-[65vh] -mt-[112px] pt-[130px] sm:pt-[150px] flex flex-col justify-end overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sat-office-wall.jpg"
            alt="SAT Logistics & Trading PLC Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_12%] opacity-100 brightness-110 contrast-105"
          />
          {/* Drastically reduced shadow gradient: very light bottom vignette so SAT 3D logo & office wall are crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-black/35" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pb-14 lg:pb-18 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 bg-[#841618] inline-block rounded-full shadow-[0_0_8px_#841618]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-white font-medium">{t.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase text-white tracking-tight leading-[1.05] mb-5 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              {t.heroTitle} <span className="text-[#DC2626] font-bold">{t.heroTitleHighlight}</span>
            </h1>
            <p className="text-white text-base sm:text-xl max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              {t.heroTagline}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Split Section: Form + Operations Desk Info */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Interactive Dispatch Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#841618] inline-block rounded-full" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    {t.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black">
                  {t.formTitle}
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  {t.formDesc}
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 border border-neutral-200 rounded-2xl bg-neutral-50 text-center space-y-5"
                >
                  <div className="w-14 h-14 bg-[#841618]/10 text-[#841618] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-black">{t.successTitle}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-md mx-auto">
                      {t.successDesc}
                    </p>
                    <div className="inline-block mt-4 px-4 py-2 bg-white border border-neutral-300 rounded-lg text-base font-mono font-bold text-[#841618]">
                      {t.dispatchRefLabel}: {dispatchRef}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => copyToClipboard(dispatchRef)}
                      className="px-5 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:bg-black transition-all"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? t.copiedBtn : t.copyRefBtn}</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          email: '',
                          phoneNumber: '',
                          serviceRequired: 'International Freight Forwarding (Djibouti - Ethiopia)',
                          originDestination: '',
                          cargoVolume: '',
                          details: ''
                        });
                      }}
                      className="px-5 py-2.5 bg-white border border-neutral-300 text-neutral-700 hover:border-black rounded-xl text-xs font-mono uppercase tracking-wider transition-all"
                    >
                      {t.sendAnotherBtn}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                        {t.fullNameLabel}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={t.fullNamePlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                        {t.companyLabel}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder={t.companyPlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-neutral-900 font-semibold">
                          <Phone className="w-3.5 h-3.5 text-[#841618]" />
                          {t.phoneLabel}
                        </span>
                        <span className="text-[10px] text-[#841618] font-mono">REQUIRED</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder={t.phonePlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono focus:outline-none focus:border-[#841618] focus:bg-white transition-all ring-1 ring-neutral-200"
                      />
                      <p className="text-[10px] text-neutral-500 mt-1">
                        Our operations desk at Gorgorios Square will call this number immediately.
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.emailPlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                      {t.serviceLabel}
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                    >
                      {t.serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3: Origin/Dest & Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                        {t.originDestLabel}
                      </label>
                      <input
                        type="text"
                        name="originDestination"
                        value={formData.originDestination}
                        onChange={handleChange}
                        placeholder={t.originDestPlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                        {t.volumeLabel}
                      </label>
                      <input
                        type="text"
                        name="cargoVolume"
                        value={formData.cargoVolume}
                        onChange={handleChange}
                        placeholder={t.volumePlaceholder}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-1.5">
                      {t.detailsLabel}
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      placeholder={t.detailsPlaceholder}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#841618] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#841618] hover:bg-[#6D1113] text-white font-mono uppercase tracking-widest text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>{t.submittingBtn}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t.submitBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Right: Operational Headquarters Info */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-6">
                <div>
                  <SectionTag label={t.sidebarTitle} />
                  <h3 className="text-xl font-bold uppercase text-black">
                    SAT Logistics & Trading PLC
                  </h3>
                </div>

                {/* Office Animation Showcase */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-neutral-200 shadow-md bg-[#EBEBE8]">
                  <video
                    src="/videos/sat-contact-animated.mp4"
                    poster="/images/sat-contact-animated.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 bg-black/80 backdrop-blur-sm rounded text-[10px] font-mono uppercase text-white tracking-wider font-semibold z-10 shadow-sm">
                    Headquarters • Fetele Building 3rd Floor
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black text-xs font-mono uppercase">{t.sidebarOfficeLabel}</strong>
                      <span>{t.sidebarOfficeValue}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black text-xs font-mono uppercase">{t.sidebarPhoneLabel}</strong>
                      <span className="font-mono">+251 932 999 977 / 0932 373 839</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black text-xs font-mono uppercase">{t.sidebarEmailLabel}</strong>
                      <a href="mailto:satlogistics0001@gmail.com" className="hover:text-[#841618] font-mono">
                        satlogistics0001@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#841618] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-black text-xs font-mono uppercase">{t.sidebarHoursLabel}</strong>
                      <span>{t.sidebarHoursValue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                    {t.directGmLabel}
                  </span>
                  <p className="font-bold text-sm text-black">Samuel Ayalew</p>
                  <p className="text-xs text-neutral-500 font-mono">Manager / General Manager</p>
                </div>
              </div>

              {/* Direct Call Button */}
              <a
                href="tel:+251932999977"
                className="w-full py-4 bg-neutral-900 hover:bg-black text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md block text-center"
              >
                <Phone className="w-4 h-4 text-[#841618]" />
                <span>{t.callDirectBtn}</span>
              </a>

              {/* Google Map of Fetele Building */}
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#841618]" />
                    <span className="text-xs font-mono uppercase font-bold text-black tracking-wider">
                      Fetele Building • Gorgorios Square
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Gorgorios+Square+Addis+Ababa+Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#841618] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Open Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="relative w-full h-[260px] bg-neutral-100">
                  <iframe
                    title="Google Maps — Fetele Building, Gorgorios Square, Addis Ababa"
                    src="https://maps.google.com/maps?q=Gorgorios%20Square,%20Kirkos,%20Addis%20Ababa,%20Ethiopia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-2.5 left-2.5 bg-white/95 px-2.5 py-1 text-[10px] font-mono text-black uppercase border border-neutral-300 shadow-sm flex items-center gap-1.5 border-l-2 border-l-[#841618] rounded">
                    <MapPin className="w-3 h-3 text-[#841618]" />
                    <span>Fetele Building 3rd Floor • Addis Ababa</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
