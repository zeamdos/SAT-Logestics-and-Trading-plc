'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  fullName: string;
  country: string;
  color: string;
  domain?: string; // for logo.dev / clearbit
}

const CLIENTS: Client[] = [
  { name: 'TBEA',          fullName: 'Tbea Deyang Cable Co., Ltd.',          country: 'China',    color: '#c41230', domain: 'tbea.com' },
  { name: 'CCECC',         fullName: 'CCECC',                                country: 'China',    color: '#1a4a8a', domain: 'ccecc.com.cn' },
  { name: 'SINOMA',        fullName: 'Sinoma Construction Co., Ltd.',        country: 'China',    color: '#8b4513', domain: 'sinoma.com.cn' },
  { name: 'VOITH HYDRO',   fullName: 'Voith Hydro Shanghai Ltd.',            country: 'Germany',  color: '#004f9e', domain: 'voith.com' },
  { name: 'SINOTRANS',     fullName: 'Sinotrans Ltd.',                       country: 'China',    color: '#c41230', domain: 'sinotrans.com' },
  { name: 'SINOSTEEL',     fullName: 'Sinosteel Corporation',                country: 'China',    color: '#1a4a8a', domain: 'sinosteel.com' },
  { name: 'GCL ENERGY',    fullName: 'GCL Energy',                          country: 'China',    color: '#ff6b00', domain: 'gclenergy.com' },
  { name: 'DTS',           fullName: 'Djibouti Transport Shipping SARL',     country: 'Djibouti', color: '#006b3c' },
  { name: 'CHINA RAILWAY', fullName: 'China Railway',                       country: 'China',    color: '#c41230', domain: 'crec.cn' },
  { name: 'ZHEN ZHEN',     fullName: 'Zhen Zhen Iron and Steel Mfg. PLC',   country: 'China',    color: '#2d5a27' },
  { name: 'RONG CHANG',    fullName: 'Rong Chang',                          country: 'China',    color: '#6a0dad' },
  { name: 'CTC',           fullName: 'Chongqing Taishan Cable Co., Ltd.',   country: 'China',    color: '#c41230' },
];

// Duplicate for seamless infinite loop
const TRACK = [...CLIENTS, ...CLIENTS];

function LogoCard({ client }: { client: Client }) {
  const initials = client.name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 3);

  return (
    <div className="flex-shrink-0 w-48 mx-3 flex flex-col items-center justify-center gap-3 bg-white border border-neutral-200 rounded-2xl px-5 py-6 hover:border-[#841618] hover:shadow-md transition-all duration-300 group cursor-default select-none">
      {/* Logo / avatar circle */}
      {client.domain ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://logo.clearbit.com/${client.domain}`}
          alt={client.name}
          width={56}
          height={56}
          className="w-14 h-14 object-contain rounded-full border border-neutral-100"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
            const sibling = target.nextElementSibling as HTMLElement | null;
            if (sibling) sibling.style.display = 'flex';
          }}
        />
      ) : null}
      {/* Fallback colored circle with initials */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold font-mono leading-tight text-center"
        style={{
          backgroundColor: client.color,
          display: client.domain ? 'none' : 'flex',
        }}
      >
        {initials}
      </div>

      {/* Name + country */}
      <div className="text-center">
        <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-black group-hover:text-[#841618] transition-colors leading-tight">
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
    <div className="w-full overflow-hidden py-2">
      {/* CSS infinite scroll via keyframes */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {TRACK.map((client, i) => (
          <LogoCard key={`${client.name}-${i}`} client={client} />
        ))}
      </div>
    </div>
  );
};
