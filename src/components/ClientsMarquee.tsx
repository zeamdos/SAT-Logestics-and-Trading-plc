'use client';

import React from 'react';
import { Language } from '@/types';

interface Client {
  monogram: string;
  name: string;
  nameAm: string;
  sector: string;
  sectorAm: string;
}

const CLIENTS: Client[] = [
  {
    monogram: 'DBE',
    name: 'Development Bank of Ethiopia',
    nameAm: 'የኢትዮጵያ ልማት ባንክ',
    sector: 'Financial & Development Institution',
    sectorAm: 'የፋይናንስ እና የልማት ተቋም'
  },
  {
    monogram: 'SM',
    name: 'Segon-Marill International Movers & Logistics',
    nameAm: 'ሴጎን-ማሪል ኢንተርናሽናል አንቀሳቃሽዎች እና ሎጂስቲክስ',
    sector: 'Global Freight & Forwarding Partner',
    sectorAm: 'ዓለም አቀፍ ጭነት እና የመላኪያ አጋር'
  },
  {
    monogram: 'AO',
    name: 'AO Logistics One Member PLC',
    nameAm: 'ኤኦ ሎጂስቲክስ ዋን ሜምበር PLC',
    sector: 'Logistics & Transport Operations',
    sectorAm: 'የሎጂስቲክስ እና የትራንስፖርት አሰራሮች'
  },
  {
    monogram: 'SGT',
    name: 'Sets General Trading PLC',
    nameAm: 'ሴትስ ጀነራል ትሬዲንግ PLC',
    sector: 'Import, Export & Commercial Trading',
    sectorAm: 'አስመጪ፣ ኤግስፖርት እና የንግድ ንግድ'
  }
];

function PartnerCard({ client, isAmharic }: { client: Client; isAmharic: boolean }) {
  return (
    <article className="min-h-[230px] bg-white border border-neutral-200 px-5 py-6 flex flex-col items-center text-center transition-all duration-300 hover:border-[#EF4444] hover:shadow-lg group">
      <div className="relative w-16 h-16 mb-5 border border-neutral-300 flex items-center justify-center bg-neutral-950 text-white font-mono text-sm font-bold tracking-wider transition-colors group-hover:border-[#EF4444]">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#EF4444]" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#EF4444]" />
        {client.monogram}
      </div>
      <h4 className="text-sm font-bold leading-snug text-black min-h-[44px] flex items-center">
        {isAmharic ? client.nameAm : client.name}
      </h4>
      <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-500">
        {isAmharic ? client.sectorAm : client.sector}
      </p>
    </article>
  );
}

export const ClientsMarquee: React.FC<{ currentLang: Language }> = ({ currentLang }) => {
  const isAmharic = currentLang === 'am';

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CLIENTS.map((client) => (
          <PartnerCard key={client.monogram} client={client} isAmharic={isAmharic} />
        ))}
      </div>
    </div>
  );
};
