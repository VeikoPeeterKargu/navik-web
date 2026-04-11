'use client';

import * as React from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('navik_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptAll = () => {
    localStorage.setItem('navik_cookie_consent', 'all');
    // Siit käivituks GTM reaalajas
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('navik_cookie_consent', 'essential');
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A18] border-t border-[#C9A027]/40 p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="mb-2 md:mb-0 max-w-4xl">
        <p className="text-[#F8F5EE] text-sm md:text-base mb-1 font-semibold" style={{ fontFamily: 'var(--font-body)' }}>Privaatsus on oluline</p>
        <p className="text-[#B0A690] text-xs md:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          Kasutame küpsiseid, et tagada veebilehe põhifunktsioonide toimimine ning analüüsida liiklust, et muuta kasutajakogemust mugavamaks.
          Lisainfot saad meie <Link href="/privaatsuspoliitika" className="text-[#C9A027] hover:underline underline-offset-2">Privaatsuspoliitikast</Link>.
        </p>
      </div>
      <div className="flex flex-row items-center gap-3 shrink-0 whitespace-nowrap">
        <button
          onClick={acceptEssential}
          className="px-4 py-2 text-xs md:text-sm border border-[#2A2820] text-[#B0A690] hover:bg-[#2A2820] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Ainult vajalikud
        </button>
        <button
          onClick={acceptAll}
          className="px-5 py-2 text-xs md:text-sm bg-[#C9A027] text-[#1A1A18] font-semibold hover:bg-[#D4AA2C] transition-colors"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Nõustun kõigiga
        </button>
      </div>
    </div>
  );
}
