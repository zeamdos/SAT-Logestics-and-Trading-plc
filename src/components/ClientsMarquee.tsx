'use client';

import React from 'react';
import Image from 'next/image';

interface Client {
  name: string;
  fullName: string;
  country: string;
  color: string;
  logo: string;
}

const CLIENTS: Client[] = [
  {
    name: 'CCECC',
    fullName: 'China Civil Engineering Construction Corp.',
    country: 'China',
    color: '#005FA8',
    logo: '/images/logos/ccecc.png'
  },
  {
    name: 'SINOMA',
    fullName: 'Sinoma Construction Co., Ltd.',
    country: 'China',
    color: '#E60012',
    logo: '/images/logos/sinoma.png'
  },
  {
    name: 'SINOTRANS',
    fullName: 'Sinotrans Ltd.',
    country: 'China',
    color: '#C41230',
    logo: '/images/logos/sinotrans.png'
  },
  {
    name: 'VOITH HYDRO',
    fullName: 'Voith Hydro Shanghai Ltd.',
    country: 'Germany',
    color: '#004F9E',
    logo: '/images/logos/voith.png'
  },
  {
    name: 'CHINA RAILWAY',
    fullName: 'China Railway Group (CREC)',
    country: 'China',
    color: '#005BA6',
    logo: '/images/logos/china-railway.png'
  },
  {
    name: 'TBEA',
    fullName: 'TBEA Deyang Cable Co., Ltd.',
    country: 'China',
    color: '#003A8F',
    logo: '/images/logos/tbea.png'
  },
  {
    name: 'SINOSTEEL',
    fullName: 'Sinosteel Corporation',
    country: 'China',
    color: '#1A4A8A',
    logo: '/images/logos/sinosteel.png'
  },
  {
    name: 'GCL ENERGY',
    fullName: 'GCL System Integration / GCL Energy',
    country: 'China',
    color: '#2878B5',
    logo: '/images/logos/gcl.png'
  },
  {
    name: 'ETHIOPIAN AIRLINES',
    fullName: 'Ethiopian Airlines Group',
    country: 'Ethiopia',
    color: '#A02020',
    logo: '/images/logos/ethiopian-airlines.png'
  },
  {
    name: 'ETHIOPIAN ELECTRIC UTILITY',
    fullName: 'Ethiopian Electric Utility (EEU)',
    country: 'Ethiopia',
    color: '#1E7E34',
    logo: '/images/logos/eeu.png'
  },
  {
    name: 'ETHIOPIAN ELECTRIC POWER',
    fullName: 'Ethiopian Electric Power (EEP)',
    country: 'Ethiopia',
    color: '#1C6B38',
    logo: '/images/logos/eep.png'
  },
  {
    name: 'DTS',
    fullName: 'Djibouti Transport Shipping SARL',
    country: 'Djibouti',
    color: '#006B3C',
    logo: '/images/logos/dts.png'
  },
  {
    name: 'CTC',
    fullName: 'Chongqing Taishan Cable Co., Ltd.',
    country: 'China',
    color: '#C41230',
    logo: '/images/logos/ctc.png'
  },
  {
    name: 'ZHEN ZHEN',
    fullName: 'Zhen Zhen Iron and Steel Mfg. PLC',
    country: 'Ethiopia',
    color: '#2D5A27',
    logo: '/images/logos/zhen-zhen.png'
  },
  {
    name: 'RONG CHANG',
    fullName: 'Rong Chang International',
    country: 'China',
    color: '#6A0DAD',
    logo: '/images/logos/rong-chang.png'
  },
];

// Duplicate for seamless infinite loop
const TRACK = [...CLIENTS, ...CLIENTS];

function LogoCard({ client }: { client: Client }) {
  return (
    <div className="flex-shrink-0 w-56 mx-3 flex flex-col items-center justify-between bg-white border border-neutral-200 rounded-2xl px-5 py-4 hover:border-[#841618] hover:shadow-lg transition-all duration-300 group cursor-default select-none h-36">
      
      {/* Logo Stage Area with clean white backing */}
      <div className="w-full flex-1 flex items-center justify-center p-2">
        <div className="relative w-40 h-16 flex items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            sizes="160px"
            className="object-contain filter group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Name + Country Label */}
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

export const ClientsMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-3">
      {/* CSS infinite scroll via keyframes */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 42s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track flex">
        {TRACK.map((client, idx) => (
          <LogoCard key={`${client.name}-${idx}`} client={client} />
        ))}
      </div>
    </div>
  );
};
