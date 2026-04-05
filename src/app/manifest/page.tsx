import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '200 miljonit — 7 tõde Eesti IT-müügist | Navik OÜ',
    description: 'Ma müüsin Eestis IT-vara üle 200 miljoni euro eest. Siin on 7 asja, mida ma nüüd sellest tean. Veiko-Peeter Kargu — Navik OÜ.',
    openGraph: {
        title: '200 miljonit — 7 tõde Eesti IT-müügist',
        description: 'Ma müüsin Eestis IT-vara üle 200 miljoni euro eest. Siin on 7 ebamugavat tõde, mida keegi teine sulle ei ütle.',
        type: 'article',
    },
};

const truths = [
    {
        number: '01',
        title: 'Enamik IT-projekte ei ebaõnnestu tehnilistel põhjustel.',
        content: `Nad ebaõnnestuvad seetõttu, et keegi ei küsinud õiget küsimust enne allkirja. Ma olen istunud laua mõlemal poolel — 250 inimese ettevõtte juhina (Klick Eesti, 0→30 poodi) ja 1000+ inimese ettevõtte hanke poolel (Eesti Raudtee). Probleem on alati sama: ostja ei tea, mida ta tegelikult vajab. Müüja teab seda ja kasutab seda ära.`,
    },
    {
        number: '02',
        title: 'Parim IT-lahendus on sageli "ära osta midagi."',
        content: `BCS Iteras müüsin ma tarkvara, mis maksis kliendile 30 000–150 000€. Polnud ühtki korda, mil ma poleks mõelnud: "See klient saaks hakkama 5 000€ lahendusega." Aga minu tööülesanne oli müüa kallimat paketti. See on süsteemi probleem, mitte inimeste probleem.`,
    },
    {
        number: '03',
        title: '"Digitaliseerimine" on kõige kallim sõna Eesti ärikeeles.',
        content: `Kui konsultant ütleb "digitaliseerimine", tähendab see tavaliselt: "Ma ei tea, mida sa vajad, aga see kõlab kallis ja oluline." Mina kasutan seda sõna ainult siis, kui ma täpselt tean, millist protsessi see tähendab, mida see maksab ja millal see ennast ära tasub.`,
    },
    {
        number: '04',
        title: 'IT-müüja on alati sinust targem. Aga mitte sinu ärist.',
        content: `See on asümmeetria, mida keegi ei räägi. Vendor tunneb oma toodet paremini kui sina kunagi tunned. Sina tunned oma äri paremini kui tema kunagi tunneb. Probleem on selles, et tema räägib sinuga sinu äri keeles — ja sa arvad, et ta ka mõistab seda.`,
    },
    {
        number: '05',
        title: 'Hanked on vaatemäng.',
        content: `Ma olen kirjutanud hankeid Eesti Raudteel miljonite eest. Ma tean, kuidas need on üles ehitatud. Ja ma tean, et enamik neist on disainitud nii, et üks kindel vendor võidab. Väike ettevõte, kes ostab 50 000€ tarkvara, on samasuguses olukorras — ainult et tal pole advokaati laua taga.`,
    },
    {
        number: '06',
        title: 'Kõige ohtlikum lause IT-lepingus pole hind. See on "scope."',
        content: `"Implementatsiooni maksumus selgub projekti käigus" tähendab: sa ei tea, mida sa ostad. Ja müüja ei tea, mida ta müüb. Aga allkirjad on pandud. Ja ettemaks on makstud.`,
    },
    {
        number: '07',
        title: 'Ma lahkusin IT-müügist, sest ma ei suutnud seda enam teha.',
        content: `See pole PR-lause. See on tõsi. Pärast Klicki, Raudteed ja Iterat mõistsin, et süsteem sööb inimesi. Ülemakstud projektid. Venivad tähtajad. Lubadused, mida keegi ei kavatsegi täita. Nüüd olen ma laua teisele poolele istunud. Mitte müüma. Mitte konsulteerima. Vaid kaitsma.`,
    },
];

export default function ManifestPage() {
    return (
        <main className="bg-[#1A1A18] text-[#F8F5EE] min-h-screen">

            {/* Hero */}
            <section className="relative pt-44 pb-24 px-6 md:px-10 overflow-hidden">
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(201,160,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,39,0.04) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                <div className="max-w-3xl mx-auto relative z-10">
                    <p
                        className="text-[#C9A027] text-sm tracking-[0.35em] uppercase mb-8 flex items-center gap-3"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <span className="inline-block w-8 h-px bg-[#C9A027]" />
                        Manifest
                    </p>
                    <h1
                        className="mb-8 leading-[1.12] font-light"
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
                    >
                        Ma müüsin Eestis IT-vara üle{' '}
                        <em className="text-[#C9A027] not-italic">200 miljoni euro</em> eest.
                    </h1>
                    <p
                        className="text-2xl md:text-3xl font-light leading-snug text-[#C0B49A] mb-12"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Siin on 7 asja, mida ma nüüd sellest tean.
                    </p>
                    <div className="border-l-2 border-[#C9A027]/40 pl-6 mb-16">
                        <p
                            className="text-[#8A7E6A] text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <strong className="text-[#C0B49A]">Veiko-Peeter Kargu</strong> — endine Klick Eesti juht (0→30 poodi),
                            Eesti Raudtee IT-hangete juht, BCS Itera ERP-müüja. Nüüd sõltumatu digijuht ja IT-ostja kaitsja.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7 Truths */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-3xl mx-auto space-y-20">
                    {truths.map((t, i) => (
                        <article key={i} className="group">
                            <div className="flex items-start gap-6 mb-6">
                                <span
                                    className="text-[#C9A027]/40 text-5xl font-light shrink-0 leading-none"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {t.number}
                                </span>
                                <h2
                                    className="text-[#F8F5EE] font-light leading-snug pt-2"
                                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
                                >
                                    {t.title}
                                </h2>
                            </div>
                            <div className="ml-0 md:ml-[4.5rem]">
                                <p
                                    className="text-[#B0A690] text-[1.05rem] leading-[1.85] border-l border-[#2A2820] pl-6 group-hover:border-[#C9A027]/40 transition-colors duration-500"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {t.content}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pb-32 px-6 md:px-10">
                <div className="max-w-3xl mx-auto border-t border-[#2A2820] pt-16">
                    <div className="border-l-2 border-[#C9A027]/40 pl-6 mb-12">
                        <p
                            className="text-[#C0B49A] text-lg leading-relaxed mb-4"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Sellepärast lõin Navik OÜ — et olla laua <strong>teisele poolele</strong>.
                            Mitte müüma, mitte konsulteerima — vaid kaitsma.
                        </p>
                        <p
                            className="text-[#8A7E6A] text-base leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Kui sa oled just praegu ostmas tarkvara, vahetamas ERP-d või arutamas IT-pakkumisi —
                            räägi enne minuga. 30 minutit. Tasuta. Ausalt.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-6">
                        <Link
                            href="/kontakt?allikas=Manifest+CTA"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A027] text-[#1A1A18] text-base font-semibold tracking-wider hover:bg-[#D4AA2C] transition-all duration-200"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Räägi minuga →
                        </Link>
                        <Link
                            href="/riskid"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A027]/40 text-[#C9A027] text-base tracking-wider hover:border-[#C9A027] transition-all duration-200"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Vaata IT-lepingute riskiregistrit →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
