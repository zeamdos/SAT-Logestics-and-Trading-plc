'use client';

import React from 'react';
import Image from 'next/image';
import { Language } from '@/types';

interface Client {
  name: string;
  fullName: string;
  country: string;
  color: string;
  logo: string;
}

interface ActivePartner {
  monogram: string;
  logo: string;
  name: string;
  nameAm: string;
  sector: string;
  sectorAm: string;
}

const ACTIVE_PARTNERS: ActivePartner[] = [
  {
    monogram: 'DBE',
    logo: '/images/partners/development-bank-of-ethiopia.png',
    name: 'Development Bank of Ethiopia',
    nameAm: 'የኢትዮጵያ ልማት ባንክ',
    sector: 'Financial & Development Institution',
    sectorAm: 'የፋይናንስ እና የልማት ተቋም'
  },
  {
    monogram: 'SM',
    logo: '/images/partners/segon-marill.png',
    name: 'Segon-Marill International Movers & Logistics',
    nameAm: 'ሴጎን-ማሪል ኢንተርናሽናል አንቀሳቃሽዎች እና ሎጂስቲክስ',
    sector: 'Global Freight & Forwarding Partner',
    sectorAm: 'ዓለም አቀፍ ጭነት እና የመላኪያ አጋር'
  },
  {
    monogram: 'AO',
    logo: '/images/partners/ao-logistics.png',
    name: 'AO Logistics One Member PLC',
    nameAm: 'ኤኦ ሎጂስቲክስ ዋን ሜምበር PLC',
    sector: 'Logistics & Transport Operations',
    sectorAm: 'የሎጂስቲክስ እና የትራንስፖርት አሰራሮች'
  },
  {
    monogram: 'SGT',
    logo: '/images/partners/sets-general-trading.png',
    name: 'Sets General Trading PLC',
    nameAm: 'ሴትስ ጀነራል ትሬዲንግ PLC',
    sector: 'Import, Export & Commercial Trading',
    sectorAm: 'አስመጪ፣ ኤግስፖርት እና የንግድ ንግድ'
  }
];

const CLIENTS: Client[] = [
  { name: 'CCECC', fullName: 'China Civil Engineering Construction Corp.', country: 'China', color: '#005FA8', logo: '/images/logos/ccecc.png' },
  { name: 'SINOMA', fullName: 'Sinoma Construction Co., Ltd.', country: 'China', color: '#E60012', logo: '/images/logos/sinoma.png' },
  { name: 'SINOTRANS', fullName: 'Sinotrans Ltd.', country: 'China', color: '#C41230', logo: '/images/logos/sinotrans.png' },
  { name: 'VOITH HYDRO', fullName: 'Voith Hydro Shanghai Ltd.', country: 'Germany', color: '#004F9E', logo: '/images/logos/voith.png' },
  { name: 'CHINA RAILWAY', fullName: 'China Railway Group (CREC)', country: 'China', color: '#005BA6', logo: '/images/logos/china-railway.png' },
  { name: 'TBEA', fullName: 'TBEA Deyang Cable Co., Ltd.', country: 'China', color: '#003A8F', logo: '/images/logos/tbea.png' },
  { name: 'SINOSTEEL', fullName: 'Sinosteel Corporation', country: 'China', color: '#1A4A8A', logo: '/images/logos/sinosteel.png' },
  { name: 'GCL ENERGY', fullName: 'GCL System Integration / GCL Energy', country: 'China', color: '#2878B5', logo: '/images/logos/gcl.png' },
  { name: 'ETHIOPIAN AIRLINES', fullName: 'Ethiopian Airlines Group', country: 'Ethiopia', color: '#A02020', logo: '/images/logos/ethiopian-airlines.png' },
  { name: 'ETHIOPIAN ELECTRIC UTILITY', fullName: 'Ethiopian Electric Utility (EEU)', country: 'Ethiopia', color: '#1E7E34', logo: '/images/logos/eeu.png' },
  { name: 'ETHIOPIAN ELECTRIC POWER', fullName: 'Ethiopian Electric Power (EEP)', country: 'Ethiopia', color: '#1C6B38', logo: '/images/logos/eep.png' },
  { name: 'DTS', fullName: 'Djibouti Transport Shipping SARL', country: 'Djibouti', color: '#006B3C', logo: '/images/logos/dts.png' },
  { name: 'CTC', fullName: 'Chongqing Taishan Cable Co., Ltd.', country: 'China', color: '#C41230', logo: '/images/logos/ctc.png' },
  { name: 'ZHEN ZHEN', fullName: 'Zhen Zhen Iron and Steel Mfg. PLC', country: 'Ethiopia', color: '#2D5A27', logo: '/images/logos/zhen-zhen.png' },
  { name: 'RONG CHANG', fullName: 'Rong Chang International', country: 'China', color: '#6A0DAD', logo: '/images/logos/rong-chang.png' }
];

const TRACK = [...CLIENTS, ...CLIENTS];

function LogoCard({ client }: { client: Client }) {
  return (
    <div className="flex-shrink-0 w-56 mx-3 flex flex-col items-center justify-between bg-white border border-neutral-200 rounded-2xl px-5 py-4 hover:border-[#841618] hover:shadow-lg transition-all duration-300 group cursor-default select-none h-36">
      <div className="w-full flex-1 flex items-center justify-center p-2">
        <div className="relative w-40 h-16 flex items-center justify-center">
          <Image src={client.logo} alt={client.name} fill sizes="160px" className="object-contain filter group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
      <div className="text-center pt-2 border-t border-neutral-100 w-full">
        <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-black group-hover:text-[#841618] transition-colors leading-tight truncate">
          {client.name}
        </p>
        <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
          {client.country}
        </p>
      </div>
    </div>
  );
}

function ActivePartners({ currentLang, eyebrow }: { currentLang: Language; eyebrow: string }) {
  const isAmharic = currentLang === 'am';

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1.5 h-1.5 bg-[#EF4444] inline-block" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{eyebrow}</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {ACTIVE_PARTNERS.map((partner) => (
          <article key={partner.monogram} className="min-h-[96px] bg-white border border-neutral-200 px-3 py-3 flex items-center gap-3 hover:border-[#EF4444] transition-colors">
            <div className="relative w-12 h-12 shrink-0 border border-neutral-200 bg-white flex items-center justify-center p-1.5">
              <Image
                src={partner.logo}
                alt={isAmharic ? partner.nameAm : partner.name}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-[11px] sm:text-xs font-bold leading-snug text-black">
                {isAmharic ? partner.nameAm : partner.name}
              </h4>
              <p className="mt-1 text-[8px] sm:text-[9px] font-mono uppercase tracking-wide text-neutral-500 leading-tight">
                {isAmharic ? partner.sectorAm : partner.sector}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export const ClientsMarquee: React.FC<{ currentLang: Language; activePartnersEyebrow: string }> = ({ currentLang, activePartnersEyebrow }) => {
  return (
    <div className="w-full">
      <ActivePartners currentLang={currentLang} eyebrow={activePartnersEyebrow} />
      <div className="overflow-hidden py-3">
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 42s linear infinite;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="marquee-track flex">
          {TRACK.map((client, idx) => (
            <LogoCard key={`${client.name}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};
