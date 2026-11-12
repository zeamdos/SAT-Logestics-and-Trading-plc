'use client';

import React, { useState } from 'react';
import { Language } from '@/types';
import { translations } from '@/data/translations';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// 🔑 Web3Forms access key — swap this string once you receive it from your
//    client's Gmail account (goes to: https://web3forms.com/).
//    It looks like: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [dispatchRef, setDispatchRef] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    // Generate a local reference id
    const refId = `SAT-ET-${Math.floor(100000 + Math.random() * 900000)}`;
    data.append('dispatch_ref', refId);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setDispatchRef(refId);
        setSubmitted(true);
      } else {
        setError('Submission failed. Please try again or email us directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-16 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#841618] inline-block" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-medium">
              {t.contact.sectionTag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase text-black">
            {t.contact.headline}
          </h2>
          <p className="text-neutral-500 text-base sm:text-lg font-light mt-2">
            {t.contact.subheadline}
          </p>
        </div>

        {/* Split Layout */}
        <div className="border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 bg-white">
          {/* Left: Form */}
          <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-neutral-200">
            <h3 className="text-xl font-light text-black uppercase mb-1">Dispatch Request</h3>
            <p className="text-xs text-neutral-400 mb-6">Inquiries reviewed within 2 operational hours.</p>

            {submitted ? (
              <div className="p-6 border border-neutral-200 bg-neutral-50 text-center space-y-3">
                <CheckCircle2 className="w-9 h-9 text-[#841618] mx-auto" />
                <h4 className="text-lg font-light text-black uppercase">Inquiry Registered</h4>
                <p className="text-xs text-neutral-600 font-mono">
                  {t.contact.form.successMsg}
                  <span className="font-bold text-[#841618] ml-1">{dispatchRef}</span>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setError(''); }}
                  className="mt-3 px-5 py-2 bg-[#841618] hover:bg-[#6D1113] text-white text-xs font-mono uppercase tracking-wider"
                >
                  New Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Web3Forms required hidden fields */}
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="New Dispatch Inquiry — SAT Logistics & Trading PLC" />
                <input type="hidden" name="from_name" value="SAT Logistics Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="full_name" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      name="full_name"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company_name" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.companyLabel} *
                    </label>
                    <input
                      id="company_name"
                      type="text"
                      name="company_name"
                      required
                      placeholder={t.contact.form.companyPlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="phone_number" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.phoneLabel} *
                    </label>
                    <input
                      id="phone_number"
                      type="tel"
                      name="phone_number"
                      required
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm font-mono focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                </div>

                {/* Cargo Type */}
                <div>
                  <label htmlFor="cargo_type" className="block text-xs font-medium text-neutral-600 mb-1">
                    {t.contact.form.cargoTypeLabel} *
                  </label>
                  <select
                    id="cargo_type"
                    name="cargo_type"
                    required
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                  >
                    {t.contact.form.cargoTypes.map((type, idx) => (
                      <option key={idx} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Volume & Origin/Dest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="cargo_volume" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.volumeLabel}
                    </label>
                    <input
                      id="cargo_volume"
                      type="text"
                      name="cargo_volume"
                      placeholder={t.contact.form.volumePlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="origin_destination" className="block text-xs font-medium text-neutral-600 mb-1">
                      {t.contact.form.originDestLabel}
                    </label>
                    <input
                      id="origin_destination"
                      type="text"
                      name="origin_destination"
                      placeholder={t.contact.form.originDestPlaceholder}
                      className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="cargo_details" className="block text-xs font-medium text-neutral-600 mb-1">
                    {t.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="cargo_details"
                    name="cargo_details"
                    rows={2}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-3 py-2 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-[#841618] transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="flex items-start gap-2 p-3 border border-red-200 bg-red-50 text-xs text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  data-cursor-label="SUBMIT"
                  className="w-full py-3.5 bg-[#841618] hover:bg-[#6D1113] text-white disabled:bg-neutral-400 transition-colors text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
                >
                  {submitting ? (
                    <span>{t.contact.form.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.contact.form.submitBtn}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-neutral-400 font-mono text-center">
                  Powered by Web3Forms — no server required
                </p>
              </form>
            )}
          </div>

          {/* Right: Map & Office Info */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-neutral-50/40">
            {/* Office Info */}
            <div className="p-6 sm:p-8 border-b border-neutral-200 bg-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#841618] block mb-1 font-medium">
                {t.contact.location.buildingTitle}
              </span>
              <h3 className="text-xl font-light text-black uppercase mb-1">
                {t.contact.location.buildingName}
              </h3>
              <p className="text-xs text-neutral-600 font-light">
                {t.contact.location.addressLine1}, {t.contact.location.addressLine2}
              </p>
            </div>

            {/* Google Map */}
            <div className="relative w-full h-[300px] border-b border-neutral-200 overflow-hidden bg-neutral-100">
              <iframe
                title="Google Maps — Fetele Building, Wolo Sefer, Addis Ababa"
                src="https://maps.google.com/maps?q=Wolo%20Sefer,%20Kirkos,%20Addis%20Ababa,%20Ethiopia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(10%) contrast(105%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-mono text-black uppercase border border-neutral-300 shadow-sm flex items-center gap-1.5 border-l-2 border-l-[#841618]">
                <MapPin className="w-3 h-3 text-[#841618]" />
                <span>Fetele Building // Wolo Sefer</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wolo+Sefer+Addis+Ababa+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-black hover:bg-[#841618] text-white px-3 py-1 text-[11px] font-mono uppercase tracking-wider flex items-center gap-1 shadow-sm transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="p-6 sm:p-8 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <div className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-mono text-[10px] mb-0.5">
                  <Phone className="w-3 h-3 text-[#841618]" />
                  <span>{t.contact.location.phoneTitle}</span>
                </div>
                <div className="text-black font-medium">{t.contact.location.phone}</div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-mono text-[10px] mb-0.5">
                  <Mail className="w-3 h-3 text-[#841618]" />
                  <span>{t.contact.location.emailTitle}</span>
                </div>
                <div className="text-black font-medium break-all">{t.contact.location.email}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center gap-1.5 text-neutral-400 uppercase tracking-wider font-mono text-[10px] mb-0.5">
                  <Clock className="w-3 h-3 text-[#841618]" />
                  <span>{t.contact.location.hoursTitle}</span>
                </div>
                <div className="text-neutral-600">{t.contact.location.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
