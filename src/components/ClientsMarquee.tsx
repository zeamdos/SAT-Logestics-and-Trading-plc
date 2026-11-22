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

const CLIENTS: Client[] = [
  { name: 'DEV. BANK OF ETHIOPIA', fullName: 'Development Bank of Ethiopia', country: 'Ethiopia', color: '#1B5E20', logo: '/images/partners/development-bank-of-ethiopia.png' },
  { name: 'SEGON-MARILL', fullName: 'Segon-Marill International Movers & Logistics', country: 'Ethiopia', color: '#0D47A1', logo: '/images/partners/segon-marill.png' },
  { name: 'AO LOGISTICS', fullName: 'AO Logistics One Member PLC', country: 'Ethiopia', color: '#D32F2F', logo: '/images/partners/ao-logistics.png' },
  { name: 'SETS TRADING', fullName: 'Sets General Trading PLC', country: 'Ethiopia', color: '#E65100', logo: '/images/partners/sets-general-trading.png' },
  { name: 'BERSHAKON', fullName: 'Bershakon Construction PLC', country: 'Ethiopia', color: '#0F2D59', logo: '/images/logos/bershakon.png' },
  { name: 'JORRO', fullName: 'Jorro Construction Materials Manufacturer PLC', country: 'Ethiopia', color: '#C2410C', logo: '/images/logos/jorro.png' },
  { name: 'CCECC', fullName: 'China Civil Engineering Construction Corp.', country: 'China', color: '#005FA8', logo: '/images/logos/ccecc.png' },
  { name: 'SINOTRANS', fullName: 'Sinotrans Ltd.', country: 'China', color: '#C41230', logo: '/images/logos/sinotrans.png' },
  { name: 'VOITH HYDRO', fullName: 'Voith Hydro Shanghai Ltd.', country: 'Germany', color: '#004F9E', logo: '/images/logos/voith.png' },
  { name: 'CHINA RAILWAY', fullName: 'China Railway Group (CREC)', country: 'China', color: '#005BA6', logo: '/images/logos/china-railway.png' },
  { name: 'TBEA', fullName: 'TBEA Deyang Cable Co., Ltd.', country: 'China', color: '#003A8F', logo: '/images/logos/tbea.png' },
  { name: 'GCL ENERGY', fullName: 'GCL System Integration / GCL Energy', country: 'China', color: '#2878B5', logo: '/images/logos/gcl.png' },
  { name: 'ETHIOPIAN AIRLINES', fullName: 'Ethiopian Airlines Group', country: 'Ethiopia', color: '#A02020', logo: '/images/logos/ethiopian-airlines.png' },
  { name: 'ETHIOPIAN ELECTRIC UTILITY', fullName: 'Ethiopian Electric Utility (EEU)', country: 'Ethiopia', color: '#1E7E34', logo: '/images/logos/eeu.png' },
  { name: 'ETHIOPIAN ELECTRIC POWER', fullName: 'Ethiopian Electric Power (EEP)', country: 'Ethiopia', color: '#1C6B38', logo: '/images/logos/eep.png' },
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

export const ClientsMarquee: React.FC<{ currentLang?: Language; activePartnersEyebrow?: string }> = () => {
  return (
    <div className="w-full overflow-hidden py-3">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track flex">
        {TRACK.map((client, idx) => (
          <LogoCard key={`${client.name}-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
};
