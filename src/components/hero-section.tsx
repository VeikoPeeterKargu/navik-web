'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';


const services = [
  {
    number: '01',
    title: 'Tehnoloogia & Auditid',
    desc: 'AI juurutamine ja ERP süsteemide põhjalikud auditid. Andmepõhine efektiivsus.',
    href: '/audit',
    cta: 'Avasta lähemalt',
    tag: 'AI · ERP · Audit',
  },
  {
    number: '02',
    title: 'Strateegia & Transformatsioon',
    desc: 'C-level koolitused ja meeskonna areng — unikaalsel katamaraani kogemuses.',
    href: '/strateegia',
    cta: 'Tutvu programmiga',
    tag: 'Koolitus · Liidrus',
  },
  {
    number: '03',
    title: 'Juhtumiuuringud',
    desc: 'Reaalelulised näited, kuidas riskipõhised auditid päästsid ettevõtte.',
    href: '#',
    cta: 'Loe lugusid',
    tag: 'Case Studies',
  },
];


/* ─── Klassikaline täidetud kompassiroos — täpselt nagu pildil ─── */
function CompassRose({ className }: { className?: string }) {
  const cx = 200, cy = 200;
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  /**
   * Klassikaline täidetud teemandkujuline piik.
   * wAt=0.38 → laiuspunkt 38% tipu kaugusest tsentrilt
   * Annab klassikalise kompassipiigi proportsionid nagu pildil.
   */
  const makeSpikePath = (angle: number, tipLen: number, baseLen: number, hw: number, wAt = 0.38): string => {
    const r   = toRad(angle);
    const r90 = toRad(angle + 90);
    const tx = cx + tipLen  * Math.sin(r);
    const ty = cy - tipLen  * Math.cos(r);
    const bx = cx - baseLen * Math.sin(r);
    const by = cy + baseLen * Math.cos(r);
    const wx = cx + tipLen * wAt * Math.sin(r);
    const wy = cy - tipLen * wAt * Math.cos(r);
    const lx = wx + hw * Math.sin(r90);
    const ly = wy - hw * Math.cos(r90);
    const rx = wx - hw * Math.sin(r90);
    const ry = wy + hw * Math.cos(r90);
    return `M ${tx},${ty} L ${lx},${ly} L ${bx},${by} L ${rx},${ry} Z`;
  };

  // Kraadirõnga tikid ja numbrid (0-80 igas kvadrandis, iga 10°)
  const degreeRingElements: React.ReactElement[] = [];
  for (let i = 0; i < 360; i++) {
    const rad    = toRad(i);
    const isMaj  = i % 10 === 0;
    const isMed  = i % 5  === 0;
    const rOut   = 196;
    const rIn    = isMaj ? 182 : isMed ? 186 : 192;
    degreeRingElements.push(
      <line key={`t${i}`}
        x1={cx + rOut * Math.sin(rad)} y1={cy - rOut * Math.cos(rad)}
        x2={cx + rIn  * Math.sin(rad)} y2={cy - rIn  * Math.cos(rad)}
        stroke="#C9A027"
        strokeWidth={isMaj ? 1.0 : isMed ? 0.6 : 0.35}
        opacity={isMaj ? 0.88 : isMed ? 0.60 : 0.30}
      />
    );
    if (isMaj) {
      const quadDeg = i % 90;
      if (quadDeg !== 0) {
        const numR = 176;
        const nx = cx + numR * Math.sin(rad);
        const ny = cy - numR * Math.cos(rad);
        degreeRingElements.push(
          <text key={`n${i}`}
            x={nx} y={ny}
            fontSize="7.5"
            fill="#C9A027"
            fillOpacity="0.78"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Georgia, serif"
            transform={`rotate(${i}, ${nx}, ${ny})`}
          >{quadDeg}</text>
        );
      }
    }
  }

  // Ilmakaare tähed (N, NE, E, SE, S, SW, W, NW)
  const dirs = [
    { angle: 0,   label: 'N',  r: 162, size: 16, bold: true  },
    { angle: 45,  label: 'NE', r: 158, size: 10, bold: false },
    { angle: 90,  label: 'E',  r: 162, size: 16, bold: true  },
    { angle: 135, label: 'SE', r: 158, size: 10, bold: false },
    { angle: 180, label: 'S',  r: 162, size: 16, bold: true  },
    { angle: 225, label: 'SW', r: 158, size: 10, bold: false },
    { angle: 270, label: 'W',  r: 162, size: 16, bold: true  },
    { angle: 315, label: 'NW', r: 158, size: 10, bold: false },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: 'drop-shadow(0 0 8px rgba(201,160,39,0.10)) drop-shadow(0 0 3px rgba(201,160,39,0.06))',
      }}
    >
      <defs>
        {/* Pehme kuldne taustvalgus */}
        <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#EAC84A" stopOpacity="0.10" />
          <stop offset="35%"  stopColor="#C9A027" stopOpacity="0.04" />
          <stop offset="72%"  stopColor="#C9A027" stopOpacity="0.01" />
          <stop offset="100%" stopColor="#C9A027" stopOpacity="0"    />
        </radialGradient>
        {/* Põhipiikide gradientid — tipu suunas heledam */}
        <linearGradient id="spN" x1="200" y1="8"   x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.32" />
          <stop offset="50%"  stopColor="#7A5C10" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.20" />
        </linearGradient>
        <linearGradient id="spS" x1="200" y1="392" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="spE" x1="392" y1="200" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="spW" x1="8"   y1="200" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* Taustvalgus */}
      <circle cx={cx} cy={cy} r="200" fill="url(#bgGlow)" />

      {/* Välisrõngad — väga tuhmid */}
      <circle cx={cx} cy={cy} r="198" stroke="#C9A027" strokeWidth="0.7" opacity="0.18" fill="none" />
      <circle cx={cx} cy={cy} r="193" stroke="#C9A027" strokeWidth="0.3" opacity="0.10" fill="none" />
      <circle cx={cx} cy={cy} r="170" stroke="#C9A027" strokeWidth="0.7" opacity="0.20" fill="none" />
      <circle cx={cx} cy={cy} r="165" stroke="#C9A027" strokeWidth="0.3" opacity="0.10" fill="none" />

      {/* Peened dekoratiivjooned — rist + diagonaalid (läbi terve kompassi) */}
      <line x1={cx} y1="4"  x2={cx} y2="396" stroke="#C9A027" strokeWidth="0.3" opacity="0.18" />
      <line x1="4"  y1={cy} x2="396" y2={cy}  stroke="#C9A027" strokeWidth="0.3" opacity="0.18" />
      <line x1="82"  y1="82"  x2="318" y2="318" stroke="#C9A027" strokeWidth="0.25" opacity="0.13" />
      <line x1="318" y1="82"  x2="82"  y2="318" stroke="#C9A027" strokeWidth="0.25" opacity="0.13" />
      {/* Lisapeened ringid sügavuse lisamiseks */}
      <circle cx={cx} cy={cy} r="152" stroke="#C9A027" strokeWidth="0.3" opacity="0.16" fill="none" />
      <circle cx={cx} cy={cy} r="115" stroke="#C9A027" strokeWidth="0.25" opacity="0.14" fill="none" />
      <circle cx={cx} cy={cy} r="80"  stroke="#C9A027" strokeWidth="0.25" opacity="0.14" fill="none" />

      {/* Kraadirõnga tikid ja numbrid */}
      {degreeRingElements}

      {/* Ilmakaare tähed */}
      {dirs.map(({ angle, label, r, size, bold }) => {
        const rad = toRad(angle);
        return (
          <text
            key={label}
            x={cx + r * Math.sin(rad)}
            y={cy - r * Math.cos(rad)}
            fontSize={size}
            fontWeight={bold ? '700' : '500'}
            fill="#C9A027"
            fillOpacity="0.35"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
          >{label}</text>
        );
      })}

      {/* Sisemine piikide piirrõngas */}
      <circle cx={cx} cy={cy} r="143" stroke="#C9A027" strokeWidth="0.4" opacity="0.14" fill="none" />

      {/* 4 VAHEPIIKI (NE, SE, SW, NW) */}
      {[45, 135, 225, 315].map(a => (
        <path
          key={`v${a}`}
          d={makeSpikePath(a, 138, 30, 17, 0.38)}
          fill="#4A3508"
          fillOpacity="0.26"
          stroke="#C9A027"
          strokeWidth="0.3"
          strokeOpacity="0.15"
        />
      ))}

      {/* 4 PEAPIIKI (N, S, E, W) — tuhmid */}
      <path d={makeSpikePath(0,   160, 36, 23)} fill="url(#spN)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(180, 160, 36, 23)} fill="url(#spS)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(90,  160, 36, 23)} fill="url(#spE)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(270, 160, 36, 23)} fill="url(#spW)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />

      {/* Kesksed dekoratiivringid */}
      <circle cx={cx} cy={cy} r="34" stroke="#C9A027" strokeWidth="1.6" opacity="0.82" fill="#1A1A18" fillOpacity="0.55" />
      <circle cx={cx} cy={cy} r="24" stroke="#C9A027" strokeWidth="0.7" opacity="0.62" fill="none" />
      <circle cx={cx} cy={cy} r="14" stroke="#C9A027" strokeWidth="1.1" opacity="0.78" fill="#C9A027" fillOpacity="0.25" />
      <circle cx={cx} cy={cy} r="7"  fill="#EAC840" opacity="1.0" />
      <circle cx={cx} cy={cy} r="2.8" fill="#FFFFF5" opacity="0.98" />
    </svg>
  );
}

/* ─── gold map grid overlay ─── */
const mapGridStyle: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(201, 160, 39, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201, 160, 39, 0.05) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export function HeroSection() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#1A1A18] pt-20"
        style={mapGridStyle}
      >
        {/* Vignette radial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(201,160,39,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Large compass — right side */}
        <div className="absolute right-[-100px] md:right-[-60px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] md:w-[760px] md:h-[760px] pointer-events-none select-none">
          <div className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,160,39,0.08) 0%, rgba(201,160,39,0.03) 40%, transparent 70%)' }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 480, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full"
          >
            <CompassRose className="w-full h-full" />
          </motion.div>
        </div>

        {/* Thin gold left border */}
        <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#C9A027]/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#C9A027] text-[1.32rem] font-semibold tracking-[0.35em] uppercase mb-8 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="inline-block w-8 h-px bg-[#C9A027]" />
              Strateegiline navigaator
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[clamp(4rem,9vw,7rem)] font-light text-[#F8F5EE] leading-[1.0] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Piirideta<br />
              <em className="italic font-light text-[#C9A027]">potentsiaal.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[1.32rem] text-[#C0B49A] max-w-lg leading-[1.8] mb-12 border-l-2 border-[#C9A027]/40 pl-5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              B2B tehnoloogiakonsultatsioon, AI juurutamine ja strateegiline liderite arendus — erakordsel katamaraani platvormil.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              <Link
                href="/strateegia"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A027] text-[#1A1A18] text-[1.32rem] font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Avasta kapatsiteet
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-[#F8F5EE]/30 text-[#F8F5EE] text-[1.32rem] font-semibold tracking-wider hover:border-[#C9A027] hover:text-[#C9A027] transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Võta ühendust
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>



          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#161614] py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="flex items-end justify-between mb-16 border-b border-[#2A2820] pb-8">
            <div>
              <p
                className="text-[#C9A027] text-[1.32rem] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — Meie teenused
              </p>
              <h2
                className="text-[clamp(2.3rem,5vw,3.5rem)] font-light text-[#F8F5EE] leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Mida me teeme
              </h2>
            </div>
            <Link
              href="/strateegia"
              className="hidden md:inline-flex items-center gap-2 text-[#C9A027] text-[1.32rem] tracking-wide border-b border-[#C9A027]/40 pb-0.5 hover:border-[#C9A027] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Kõik teenused <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A2820]">
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group bg-[#161614] p-10 flex flex-col relative overflow-hidden hover:bg-[#1A1A18] transition-colors duration-400"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A027] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="flex items-center justify-between mb-10">
                  <span
                    className="text-[#C9A027]/70 text-[1.32rem] tracking-widest font-mono"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.number}
                  </span>
                  <span
                    className="text-[#A89E8A] text-[1.1rem] tracking-[0.2em] uppercase border border-[#3A3830] px-2 py-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.tag}
                  </span>
                </div>

                <h3
                  className="text-[#F8F5EE] text-[1.85rem] font-light mb-5 leading-snug group-hover:text-[#C9A027] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#B0A690] text-[1.32rem] leading-relaxed mb-12 flex-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s.desc}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[#C9A027] text-[1.32rem] tracking-wide group-hover:gap-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="bg-[#F8F5EE] py-28 md:py-44 relative overflow-hidden" style={mapGridStyle}>
        <div
          className="absolute right-6 bottom-0 text-[20rem] font-light text-[#1A1A18]/5 leading-none pointer-events-none select-none"
          style={{ fontFamily: 'var(--font-display)' }}
          aria-hidden
        >
          N
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.blockquote
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="w-12 h-[3px] bg-[#C9A027] mb-10" />
              <p
                className="text-[clamp(2rem,4vw,3rem)] font-light text-[#1A1A18] leading-[1.25] mb-10"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {`„Navigeeri keerukuses, avasta sügavusi —\u00a0`}
                <em className="italic text-[#C9A027]">igal vool on oma suund.</em>
                {`"`}
              </p>
              <Link
                href="/meist"
                className="inline-flex items-center gap-2 text-[#1A1A18] text-[1.32rem] tracking-wide border-b border-[#C9A027]/60 pb-0.5 hover:border-[#C9A027] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Tutvu Navikuga <ArrowRight size={14} />
              </Link>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {[
                { q: 'Kiirem otsustamine', a: 'Andmepõhised strateegiad, mis vähendavad otsustusaega kuni 60%.' },
                { q: 'Meeskond, mis kasvab', a: 'Liderlikoolitused katamaraani pardal — erakordne keskkond, erakordne tulemus.' },
                { q: 'Tehnoloogia töötab teie eest', a: 'AI ja ERP lahendused, mis vabastavad aega strateegiliseks mõtlemiseks.' },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#C9A027]/30 pl-6 py-1 hover:border-[#C9A027] transition-colors duration-300">
                  <p
                    className="text-[#1A1A18] text-[1.32rem] font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.q}
                  </p>
                  <p
                    className="text-[#4A4236] text-[1.32rem] leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="bg-[#1A1A18] py-24 md:py-36 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(201,160,39,0.06) 0%, transparent 65%)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <p
            className="text-[#C9A027] text-[1.32rem] tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            — Alustame
          </p>
          <h2
            className="text-[clamp(2.9rem,6vw,4.5rem)] font-light text-[#F8F5EE] leading-[1.1] mb-10"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Valmis oma<br />
            <em className="italic text-[#C9A027]">potentsiaali avama?</em>
          </h2>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A027] text-[#1A1A18] text-[1.32rem] font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Alustame vestlust <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
