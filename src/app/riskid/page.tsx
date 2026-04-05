import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'IT-lepingute Riskiregister | Navik OÜ',
    description: '10 kõige levinumat ohumärki Eesti IT-lepingutes. Avalik, elav dokument. Kontrolli oma lepingut enne allkirja.',
    openGraph: {
        title: 'IT-lepingute Riskiregister — Navik OÜ',
        description: '10 ohumärki, mida iga tegevjuht peab teadma enne IT-lepingu allkirjastamist.',
        type: 'article',
    },
};

const redFlags = [
    {
        number: '🚩 01',
        quote: '"Implementatsiooni maksumus selgub projekti käigus"',
        meaning: 'Tähendab: sa ei tea, mida ostad. Aga ettemaks on makstud. Scope puudub, projekt venib, eelarve plahvatab.',
        action: 'Nõua fikseeritud scope + maksumus enne allkirja. Kui vendor keeldub — see on vastus.',
        severity: 'Kriitiline',
    },
    {
        number: '🚩 02',
        quote: '"Litsents on per-user, hind muutub igal aastal"',
        meaning: 'Tähendab: hind tõuseb iga aasta 5–15%. 3 aasta pärast maksad 50% rohkem kui alguses. 5 aasta pärast on see topelt.',
        action: 'Nõua 3-aasta hinnalukk. Küsi: "Mis on maksimaalne hinnatõus aastas?"',
        severity: 'Kõrge',
    },
    {
        number: '🚩 03',
        quote: '"Me kohandame lahendust teie vajadustele"',
        meaning: 'Tähendab: standardlahendus ei sobi, aga selle asemel et seda öelda, müüakse sulle kallis custom-arendus. Custom = sõltuvus = lock-in.',
        action: 'Küsi: "Mida standard-lahendus EI tee, mida meie vajame? Mitu tundi customeerimist see nõuab?"',
        severity: 'Kõrge',
    },
    {
        number: '🚩 04',
        quote: '"See on valmis 3 kuuga"',
        meaning: 'Panorama 2025 uuring: keskmine ERP-projekt kestab 21 kuud ja eelarve ületatakse 240%. Iga. Kord. "3 kuud" on müügilubadus, mitte projektiplaan.',
        action: 'Küsi referentse konkreetse tähtajaga. "Nimetage 3 Eesti klienti, kellel te tõesti 3 kuuga valmis saite."',
        severity: 'Kriitiline',
    },
    {
        number: '🚩 05',
        quote: '"Teil pole vaja teist pakkumist, meie hind on parim"',
        meaning: 'Tähendab: nad ei taha, et sa nende hinda kellegagi võrdleksid. Kui hind on parim, siis nad ei peaks kartma võrdlust.',
        action: 'Alati võta vähemalt 2 pakkumist. EIS nõuab seda üle 20 000€ projektidel niikuinii.',
        severity: 'Keskmine',
    },
    {
        number: '🚩 06',
        quote: '"Need arendajad on 100% teie projekti peal"',
        meaning: 'Tähendab: need samad arendajad töötavad samal ajal 3 teise kliendi projektiga. Sinu projekt on üks mitmest.',
        action: 'Nõua lepingusse kirja: konkreetsed inimesed nimeliselt, konkreetne tundide arv nädalas, iganädalane raporteerimiskohustus.',
        severity: 'Kõrge',
    },
    {
        number: '🚩 07',
        quote: '"Koolitus sisaldub"',
        meaning: 'Tähendab: 2 tundi YouTube-tasemel demo-tutvustust. Päris koolitus koos harjutuste, testide ja follow-up\'iga maksab 5 000–15 000€ lisaks.',
        action: 'Nõua koolituskava detailne kirjeldus lepingusse: mitme inimese jaoks, mitu tundi, mis formaadis, kas sisaldab harjutusi ja teste.',
        severity: 'Keskmine',
    },
    {
        number: '🚩 08',
        quote: '"Cloud\'iga pole vaja muretseda infrastruktuuri pärast"',
        meaning: 'Tähendab: andmed on kellegi teise serveris, kellegi teise reeglite järgi, kellegi teise hinnakirjaga. Ja kui tahad lahkuda — "ekspordi" funktsioon on piiratud.',
        action: 'Küsi enne allkirja: "Mis formaadis saan oma andmed kätte, kui leping lõppeb? Kui kaua see protsess kestab? Mis see maksab?"',
        severity: 'Kõrge',
    },
    {
        number: '🚩 09',
        quote: '"Tulemuspõhine hinnastamine garanteerib teile riskivaba projekti"',
        meaning: 'Hea tulemuspõhine leping tähendab, et IT-partner jagab sinuga äririski — ta teenib rohkem ainult siis, kui sinu äri võidab. Halb tulemuspõhine leping tähendab, et "tulemused" on defineeritud nii ebamääraselt, et vendor saab alati väita edu. Või veel hullem — lepingusse on peidetud trahvid tellijale, kui tema meeskond ei täida vendori poolt seatud "koostöö-KPI-sid".',
        action: 'Nõua enne allkirja: (1) Konkreetsed KPI-d numbrites — mis mõõdik, mis baastase, mis sihtarv, mis tähtaeg. (2) Kes mõõdab — sõltumatu kolmas osapool, mitte vendor ise. (3) Mis juhtub, kui tulemust pole — kas vendor kannab kulu või sina? Kui vastus on "jah, aga..." — ära allkirjasta.',
        severity: 'Kriitiline',
    },
    {
        number: '🚩 10',
        quote: '"Tehniline partner kogu elutsükliks"',
        meaning: 'Tähendab: lock-in. Kui lahkud, kaotad: andmed, kohandused, integratsioonid, aastate investeeringu. See on plaan, mitte kokkusattumus.',
        action: 'Küsi enne allkirja: "Mis juhtub, kui me tahame 2 aasta pärast vendorit vahetada? Mis formaadis saame andmed, kohandused ja dokumentatsiooni kätte?"',
        severity: 'Kriitiline',
    },
];

const severityColor: Record<string, string> = {
    Kriitiline: 'text-red-400 border-red-400/30 bg-red-400/5',
    Kõrge: 'text-orange-400 border-orange-400/30 bg-orange-400/5',
    Keskmine: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
};

export default function RiskidPage() {
    return (
        <main className="bg-[#1A1A18] text-[#F8F5EE] min-h-screen">

            {/* Hero */}
            <section className="relative pt-44 pb-20 px-6 md:px-10 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(201,160,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,39,0.04) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="max-w-4xl mx-auto relative z-10">
                    <p
                        className="text-[#C9A027] text-sm tracking-[0.35em] uppercase mb-8 flex items-center gap-3"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <span className="inline-block w-8 h-px bg-[#C9A027]" />
                        Elav Dokument · Uuendatud Aprill 2026
                    </p>
                    <h1
                        className="mb-6 leading-[1.12] font-light"
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
                    >
                        IT-lepingute{' '}
                        <em className="text-[#C9A027] not-italic">Riskiregister</em>
                    </h1>
                    <p
                        className="text-xl text-[#C0B49A] leading-relaxed max-w-2xl mb-8"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        10 kõige levinumat ohumärki Eesti IT-lepingutes. Iga flag sisaldab: mida see lause tegelikult tähendab ja mida sinult nõuda enne allkirja.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#8A7E6A]" style={{ fontFamily: 'var(--font-body)' }}>
                        <span className="inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500/80" />
                            Viimati uuendatud: Aprill 2026
                        </span>
                        <span>·</span>
                        <span>Autor: Veiko-Peeter Kargu</span>
                    </div>
                </div>
            </section>

            {/* Risk Legend */}
            <section className="px-6 md:px-10 pb-8">
                <div className="max-w-4xl mx-auto flex flex-wrap gap-4">
                    {[
                        { label: 'Kriitiline', desc: 'Võib lõhkuda projekti' },
                        { label: 'Kõrge', desc: 'Tõsine finants-risk' },
                        { label: 'Keskmine', desc: 'Varjatud kulu' },
                    ].map((s) => (
                        <span
                            key={s.label}
                            className={`text-xs tracking-wider uppercase px-3 py-1 border rounded ${severityColor[s.label]}`}
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {s.label}: {s.desc}
                        </span>
                    ))}
                </div>
            </section>

            {/* Red Flags */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    {redFlags.map((flag, i) => (
                        <article
                            key={i}
                            className="border border-[#2A2820] p-8 md:p-10 hover:border-[#C9A027]/30 transition-all duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <span
                                    className="text-[#C9A027]/60 text-sm tracking-widest"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {flag.number}
                                </span>
                                <span
                                    className={`text-xs tracking-wider uppercase px-3 py-1 border rounded w-fit ${severityColor[flag.severity]}`}
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {flag.severity}
                                </span>
                            </div>

                            {/* The quote */}
                            <blockquote
                                className="text-[#F8F5EE] text-xl md:text-2xl font-light italic mb-6 border-l-2 border-[#C9A027]/40 pl-6"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {flag.quote}
                            </blockquote>

                            {/* Meaning */}
                            <div className="mb-6">
                                <p
                                    className="text-xs text-[#C9A027] tracking-[0.2em] uppercase mb-2"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    Mida see tähendab
                                </p>
                                <p
                                    className="text-[#B0A690] text-base leading-relaxed"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {flag.meaning}
                                </p>
                            </div>

                            {/* Action */}
                            <div className="bg-[#1E1E1C] border border-[#2A2820] p-5">
                                <p
                                    className="text-xs text-[#C9A027] tracking-[0.2em] uppercase mb-2"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    ✅ Mida nõuda enne allkirja
                                </p>
                                <p
                                    className="text-[#F8F5EE] text-base leading-relaxed font-medium"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {flag.action}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-4xl mx-auto border-t border-[#2A2820] pt-16">
                    <h2
                        className="text-2xl font-light mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Tundsid mõne <em className="text-[#C9A027] not-italic">oma lepingust ära?</em>
                    </h2>
                    <p
                        className="text-[#B0A690] text-base leading-relaxed mb-8 max-w-xl"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Esimene 30-minutiline konsultatsioon on tasuta. Vaatan su lepingu üle ja ütlen ausalt, kas seal on riske — ja mida nendega teha.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link
                            href="/kontakt?allikas=Riskiregister+CTA"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A027] text-[#1A1A18] text-base font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Lase oma leping üle vaadata →
                        </Link>
                        <Link
                            href="/manifest"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A027]/40 text-[#C9A027] text-base tracking-wider hover:border-[#C9A027] transition-all duration-200"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Loe manifesti: 200 miljonit →
                        </Link>
                    </div>

                    {/* EIS Grant Notice */}
                    <div className="mt-12 bg-[#1E1E1C] border border-[#C9A027]/20 p-6 md:p-8 max-w-2xl">
                        <p
                            className="text-[#C9A027] text-xs tracking-[0.2em] uppercase mb-3"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            💡 Kas teadsid?
                        </p>
                        <p
                            className="text-[#C0B49A] text-base leading-relaxed mb-4"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            EIS digitaliseerimise teekaardi toetus on praegu <strong className="text-[#F8F5EE]">avatud</strong>.
                            Riik katab kuni 70% teekaardi koostamise kuludest (maksimaalselt 10 000€).
                            Navik saab aidata teekaardi koostamisel — sinu kulu alates 1 500€.
                        </p>
                        <a
                            href="https://eis.ee/teenused/digitaliseerimise-teekaardi-toetus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C9A027] text-sm hover:underline"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Loe EIS toetusest lähemalt →
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
