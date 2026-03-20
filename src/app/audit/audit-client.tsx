'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    title: 'Selge otsus — 1 lehekülg',
    desc: 'OSTA, ÄRA OSTA või OOTA. Fikseeritud hinnaga (2 500 €) sõltumatu hinnang 2 nädalaga — ilma IT-žargoonita.',
  },
  {
    title: 'Realistlikud variandid',
    desc: 'Kolm lahendusteed koos eelarve ja riskidega: lihtne (0–5k€), keskmine (10–30k€) ja põhjalik (50–100k€).',
  },
  {
    title: 'Konkreetne tegevusplaan',
    desc: '30–60–90 päeva sammud ja kriitilised küsimused, mida IT-müüjalt küsida — et vältida varjatud kulusid.',
  },
  {
    title: 'Garantii',
    desc: 'Selgus ja konkreetne tegevusplaan — või raha tagasi. Esimene kaardistuskõne (30 min) on tasuta.',
  },
];

export function AuditPageClient() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6 bg-[#1A1A18]">
      <div className="max-w-4xl w-full">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#F8F5EE]"
          style={{ fontFamily: 'var(--font-display)' }}>
          IT-otsuse <span className="text-[#C9A027]">Audit</span>
        </h1>

        <p className="text-xl text-[#B0A690] mb-4 max-w-2xl leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}>
          Oled ostmas uut tarkvara (ERP, WMS, CRM)? Annan 2 nädalaga sõltumatu hinnangu: <strong className="text-[#F8F5EE]">osta, ära osta või oota.</strong>
        </p>

        <p className="text-[#8A8070] text-[1rem] mb-10 max-w-xl"
          style={{ fontFamily: 'var(--font-body)' }}>
          Olen istunud läbirääkimistelaua igal küljel — ERP-müüjana (BCS Itera), suurostjana (Eesti Raudtee) ja ettevõtjana (Klick Eesti). Tõlgin tehnoloogia tagasi ärikeelde.
        </p>

        <Link
          href="/#footer-contact"
          className="inline-flex items-center gap-2 mb-14 px-7 py-3 bg-[#C9A027] text-[#1A1A18] font-semibold tracking-wide hover:bg-[#D4AA2C] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Küsi auditit <ArrowRight size={16} />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-8 border border-[#2A2820] bg-[#161614] hover:border-[#C9A027]/30 transition-colors duration-300"
            >
              <div className="w-6 h-px bg-[#C9A027] mb-5" />
              <h2
                className="text-[1.2rem] font-light mb-3 text-[#F8F5EE]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {c.title}
              </h2>
              <p
                className="text-[#8A8070] text-[0.97rem] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
