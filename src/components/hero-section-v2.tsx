'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react';

/* ─── Klassikaline täidetud kompassiroos — 100% sama mis v1 ─── */
function CompassRose({ className }: { className?: string }) {
  const cx = 200, cy = 200;
  const toRad = (deg: number) => (deg * Math.PI) / 180;

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

  const degreeRingElements: React.ReactElement[] = [];
  for (let i = 0; i < 360; i++) {
    const rad   = toRad(i);
    const isMaj = i % 10 === 0;
    const isMed = i % 5  === 0;
    const rOut  = 196;
    const rIn   = isMaj ? 182 : isMed ? 186 : 192;
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
      style={{ filter: 'drop-shadow(0 0 8px rgba(201,160,39,0.10)) drop-shadow(0 0 3px rgba(201,160,39,0.06))' }}
    >
      <defs>
        <radialGradient id="bgGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#EAC84A" stopOpacity="0.10" />
          <stop offset="35%"  stopColor="#C9A027" stopOpacity="0.04" />
          <stop offset="72%"  stopColor="#C9A027" stopOpacity="0.01" />
          <stop offset="100%" stopColor="#C9A027" stopOpacity="0"    />
        </radialGradient>
        <linearGradient id="spN2" x1="200" y1="8"   x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.32" />
          <stop offset="50%"  stopColor="#7A5C10" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.20" />
        </linearGradient>
        <linearGradient id="spS2" x1="200" y1="392" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="spE2" x1="392" y1="200" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="spW2" x1="8"   y1="200" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C9A027" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3A2504" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <circle cx={cx} cy={cy} r="200" fill="url(#bgGlow2)" />
      <circle cx={cx} cy={cy} r="198" stroke="#C9A027" strokeWidth="0.7" opacity="0.18" fill="none" />
      <circle cx={cx} cy={cy} r="193" stroke="#C9A027" strokeWidth="0.3" opacity="0.10" fill="none" />
      <circle cx={cx} cy={cy} r="170" stroke="#C9A027" strokeWidth="0.7" opacity="0.20" fill="none" />
      <circle cx={cx} cy={cy} r="165" stroke="#C9A027" strokeWidth="0.3" opacity="0.10" fill="none" />
      <line x1={cx} y1="4"  x2={cx} y2="396" stroke="#C9A027" strokeWidth="0.3" opacity="0.18" />
      <line x1="4"  y1={cy} x2="396" y2={cy}  stroke="#C9A027" strokeWidth="0.3" opacity="0.18" />
      <line x1="82"  y1="82"  x2="318" y2="318" stroke="#C9A027" strokeWidth="0.25" opacity="0.13" />
      <line x1="318" y1="82"  x2="82"  y2="318" stroke="#C9A027" strokeWidth="0.25" opacity="0.13" />
      <circle cx={cx} cy={cy} r="152" stroke="#C9A027" strokeWidth="0.3" opacity="0.16" fill="none" />
      <circle cx={cx} cy={cy} r="115" stroke="#C9A027" strokeWidth="0.25" opacity="0.14" fill="none" />
      <circle cx={cx} cy={cy} r="80"  stroke="#C9A027" strokeWidth="0.25" opacity="0.14" fill="none" />
      {degreeRingElements}
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
      <circle cx={cx} cy={cy} r="143" stroke="#C9A027" strokeWidth="0.4" opacity="0.14" fill="none" />
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
      <path d={makeSpikePath(0,   160, 36, 23)} fill="url(#spN2)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(180, 160, 36, 23)} fill="url(#spS2)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(90,  160, 36, 23)} fill="url(#spE2)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <path d={makeSpikePath(270, 160, 36, 23)} fill="url(#spW2)" stroke="#C9A027" strokeWidth="0.4" strokeOpacity="0.18" />
      <circle cx={cx} cy={cy} r="34" stroke="#C9A027" strokeWidth="1.6" opacity="0.82" fill="#1A1A18" fillOpacity="0.55" />
      <circle cx={cx} cy={cy} r="24" stroke="#C9A027" strokeWidth="0.7" opacity="0.62" fill="none" />
      <circle cx={cx} cy={cy} r="14" stroke="#C9A027" strokeWidth="1.1" opacity="0.78" fill="#C9A027" fillOpacity="0.25" />
      <circle cx={cx} cy={cy} r="7"  fill="#EAC840" opacity="1.0" />
      <circle cx={cx} cy={cy} r="2.8" fill="#FFFFF5" opacity="0.98" />
    </svg>
  );
}

const services = [
  {
    number: '01',
    tag: 'Audit · Sõltumatu · ERP',
    title: 'IT-otsuse Audit',
    desc: 'Kavatsed osta uut tarkvara (ERP, WMS, CRM)? Annan 2 nädalaga sõltumatu ja ausa hinnangu: osta, ära osta või oota. Aitan vältida ebaefektiivseid IT-investeeringuid ja tagan, et valitud lahendus toetab päriselt Sinu äri kasvu.',
    cta: 'Küsi sõltumatut auditit',
    href: '/kontakt?allikas=Küsi+sõltumatut+auditit+(teenuste+kaart)',
    cardHref: '/audit',
    icon: Shield,
  },
  {
    number: '02',
    tag: 'Digijuht · Osaline · ROI',
    title: 'Sõltumatu Digijuht',
    desc: 'Kasvad kiiresti, aga protsessid logisevad? Asendan kulukat täiskohaga IT-juhti. Juhin su digistrateegiat, esindan professionaalselt Sinu huve suhtluses IT-partneritega ja viin meeskonna muutustest turvaliselt läbi.',
    cta: 'Räägi oma vajadusest',
    href: '/kontakt?allikas=Räägi+oma+vajadusest+(Digijuht+kaart)',
    cardHref: '/digijuht',
    icon: TrendingUp,
  },
  {
    number: '03',
    tag: 'AI · Automatiseerimine · Kiire',
    title: 'Praktiline Anti-Hype AI',
    desc: 'Unusta kallid tehisintellekti uuringud. Automatiseerime su rutiinsed käsitöö-protsessid (Excel, e-mailid) lihtsate tööriistadega — nähtav ajasääst juba esimestel nädalatel.',
    cta: 'Broneeri Tasuta Vestlus',
    href: '/kontakt?allikas=Broneeri+Tasuta+Vestlus+(AI+kaart)',
    cardHref: '/ai',
    icon: Clock,
  },
];


const caseStudies = [
  {
    result: 'Kallis ERP, mis ei tööta',
    desc: 'Olete ostnud kalli majandustarkvara, kuid töötajad teevad asju ikka Excelis. Aitan murda vastupanu ja panna süsteemi reaalselt tööle.',
  },
  {
    result: 'Käsitöösse uppuv meeskond',
    desc: 'Ettevõte kasvab, aga andmeid sisestatakse endiselt käsitsi süsteemide vahel. Ehitan lihtsad automatiseerimised, mis säästavad kümneid töötunde kuus.',
  },
  {
    result: 'Hirm IT-lepingute ees',
    desc: 'Vajate uut tarkvara, aga pakkumised on segased ja kallid. Teen sõltumatu auditi ja kaitsen teie eelarvet ülemaksmise eest.',
  },
];

const mapGridStyle: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(201, 160, 39, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201, 160, 39, 0.05) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export function HeroSectionV2() {
  return (
    <div className="bg-[#1A1A18] text-[#F8F5EE]">

      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#1A1A18] pt-20"
        style={mapGridStyle}
      >
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,160,39,0.04) 0%, transparent 70%)' }}
        />

        {/* Large compass — right side, same as V1 */}
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#C9A027] text-[1.12rem] font-semibold tracking-[0.35em] uppercase mb-8 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="inline-block w-8 h-px bg-[#C9A027]" />
              Sõltumatu Digijuht
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-8 leading-[1.08]"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.72rem, 5.1vw, 4.68rem)' }}
            >
              <span className="text-[#F8F5EE] font-light block">Väldi 50 000 €</span>
              <em className="text-[#C9A027] font-light not-italic block">viga enne IT-lepingut.</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-[1.12rem] text-[#C0B49A] max-w-lg leading-[1.8] mb-12 border-l-2 border-[#C9A027]/40 pl-5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Olen istunud läbirääkimistelaua igal küljel. Nüüd aitan omanikel ja tegevjuhtidel navigeerida keerulistes IT-otsustes, vältida venivaid tarkvaraprojekte ning valida lahendusi, mis toovad ettevõttele päriselt kasu. Sõltumatu digijuhtimine, mis säästab aega ja toob kiire ROI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/kontakt?allikas=Küsi+sõltumatut+auditit+(esileht)"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C9A027] text-[#1A1A18] text-[1.12rem] font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Küsi sõltumatut auditit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#161614] py-32 px-8 md:px-14">
        <div className="max-w-[1440px] mx-auto">

          <div className="flex items-end justify-between mb-16 border-b border-[#2A2820] pb-8">
            <div>
              <p
                className="text-[#C9A027] text-[1.12rem] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                — Kuidas ma aitan?
              </p>
              <h2
                className="text-[#F8F5EE] font-light"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.55rem)' }}
              >
                Kolm teenust. Üks eesmärk: sinu ROI.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-[#1A1A18] border border-[#2A2820] p-10 hover:border-[#C9A027]/30 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between mb-10">
                  <span
                    className="text-[#C9A027]/70 text-[1.12rem] tracking-widest font-mono"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.number}
                  </span>
                  <span
                    className="text-[#A89E8A] text-[0.94rem] tracking-[0.2em] uppercase border border-[#3A3830] px-2 py-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.tag}
                  </span>
                </div>

                <Link href={s.cardHref} className="block group/inner">
                    <h3
                      className="text-[#F8F5EE] font-light mb-6 hover:text-[#C9A027] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.19rem, 1.7vw, 1.62rem)' }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[#B0A690] text-[1.12rem] leading-relaxed mb-12"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {s.desc}
                    </p>
                  </Link>


                <div className="flex-1" />
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-[#C9A027] text-[1.12rem] tracking-wide group-hover:gap-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {s.cta} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / AUTHORITY ── */}
      <section id="kogemus" className="bg-[#F8F5EE] py-32 px-8 md:px-14">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

          <div>
            <p
              className="text-[#C9A027] text-[1.32rem] tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              — Miks mind usaldada?
            </p>
            <h2
              className="text-[#1A1A18] font-light mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem, 3vw, 2.55rem)' }}
            >
              Tere, mina olen <strong className="font-semibold">Veiko-Peeter Kargu.</strong>
            </h2>
            <p
              className="text-[#1A1A18] text-[1.15rem] font-light italic mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Kapten, kes tunneb nii karisid kui ka avamere võimalusi.
            </p>
            <p
              className="text-[#4A4236] text-[1.12rem] leading-relaxed mb-10"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ma ei ole klassikaline IT-konsultant. Minu eelis on laua igal küljel istumise kogemus. Ma ei räägi keerulises IT-žargoonis — tõlgin tehnoloogia tagasi puhtasse ärikeelde, säästes sinu aega, närve ja eelarvet.
            </p>
            <Link
              href="/kontakt?allikas=Kogemus+sektsioon+-+Võta+ühendust"
              className="inline-flex items-center gap-2 text-[#1A1A18] text-[1.12rem] tracking-wide border-b border-[#C9A027]/60 pb-0.5 hover:border-[#C9A027] transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Võta ühendust <ArrowRight size={14} />
            </Link>
            <div className="mt-6">
              <a
                href="https://www.kargu.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4236] text-[0.9rem] hover:text-[#C9A027] transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Loe minu tausta ja elufilosoofiat lähemalt → <span className="underline underline-offset-2">www.kargu.ee</span>
              </a>
            </div>
          </div>


          <div className="space-y-6">
            {[
              {
                role: 'Praktikust Ettevõtja (Klick Eesti 0 → 30 poodi)',
                desc: 'Tean, mida tähendab ettevõtja risk ja vastutus. Tehnoloogia pole eesmärk — eesmärk on kasum ja sujuvad protsessid.',
              },
              {
                role: 'Nõudlik Suurostja (Eesti Raudtee IT-hanked)',
                desc: 'Olen juhtinud riiklikult kriitilisi hankeid tellija vaatest. Oskan tagada, et suured projektid püsivad eelarves ja tarnijad peavad kinni lubatud kvaliteedist.',
              },
              {
                role: 'Kogenud IT-partner (BCS Itera ERP)',
                desc: 'Mõistan sügavalt IT-sektori loogikat, hinnastamismudeleid ja juurutusprotsesse. See aitab leida alati optimaalseima ja läbipaistvaima lahenduse.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-[#C9A027]/30 pl-6 py-1 hover:border-[#C9A027] transition-colors duration-300">
                <p
                  className="text-[#1A1A18] text-[1.122rem] font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.role}
                </p>
                <p
                  className="text-[#4A4236] text-[0.952rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="bg-[#1A1A18] py-32 px-8 md:px-14">
        <div className="max-w-[1440px] mx-auto">
          <p
            className="text-[#C9A027] text-[1.122rem] tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            — Tunned oma ettevõtte ära?
          </p>
          <h2
            className="text-[#F8F5EE] font-light mb-16 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.445rem, 2.55vw, 2.1675rem)' }}
          >
            Levinud olukorrad, mida ma aitan lahendada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-[#2A2820] p-8 hover:border-[#C9A027]/30 transition-all duration-500"
              >
                <div className="w-8 h-px bg-[#C9A027] mb-6" />
                <h3
                  className="text-[#F8F5EE] font-semibold mb-4"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.122rem' }}
                >
                  {c.result}
                </h3>
                <p
                  className="text-[#B0A690] text-[1.0rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-40 px-8 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A18 0%, #0F0F0E 60%, #1A1510 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#C9A027 1px, transparent 1px), linear-gradient(90deg, #C9A027 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <p
            className="text-[#C9A027] text-[0.952rem] tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            — Lõpetame oletamise
          </p>
          <h2
            className="text-[#F8F5EE] font-light mb-8 leading-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.792rem, 3.6125vw, 3.247rem)' }}
          >
            Tee oma järgmine IT-otsus <em className="text-[#C9A027] not-italic">kindlustundega.</em>
          </h2>
          <p
            className="text-[#C0B49A] text-[1.122rem] leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Esimene 30-minutiline konsultatsioon on tasuta. Räägi oma valupunktist — mina ütlen ausalt, kas ja kuidas saan aidata.
          </p>
          <Link
            href="/kontakt?allikas=Broneeri+Tasuta+Vestlus+(lehe+lõpp)"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C9A027] text-[#1A1A18] text-[1.12rem] font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Broneeri Tasuta Vestlus <ArrowRight size={16} />
          </Link>

        </motion.div>
      </section>

    </div>
  );
}
