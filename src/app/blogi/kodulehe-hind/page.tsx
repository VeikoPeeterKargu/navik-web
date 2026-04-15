import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kodulehe hind Eestis 2026 — mida sa tegelikult maksad? | Navik',
    description: 'Põhjalik ülevaade kodulehe loomise hindadest Eestis: agentuur (3000-15000€), freelancer (800-3000€) vs AI-toega lahendus (100-500€). Ausad numbrid, peidetud kulud ja praktiline nõuanne.',
    alternates: {
        canonical: 'https://navik.ee/blogi/kodulehe-hind',
    },
    openGraph: {
        title: 'Kodulehe hind Eestis 2026 — mida sa tegelikult maksad?',
        description: 'Agentuur vs freelancer vs AI-lahendus. Ausad numbrid, peidetud kulud ja praktiline nõuanne.',
        url: 'https://navik.ee/blogi/kodulehe-hind',
        type: 'article',
        publishedTime: '2026-04-15T00:00:00.000Z',
        authors: ['Veiko-Peeter Kargu'],
    },
};

export default function KoduleheHindPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kodulehe hind Eestis 2026 — mida sa tegelikult maksad?",
        "description": "Põhjalik ülevaade kodulehe loomise hindadest Eestis: agentuur, freelancer ja AI-toega lahendused.",
        "datePublished": "2026-04-15",
        "dateModified": "2026-04-15",
        "author": {
            "@type": "Person",
            "name": "Veiko-Peeter Kargu",
            "url": "https://kargu.ee"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Navik OÜ",
            "url": "https://navik.ee"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://navik.ee/blogi/kodulehe-hind"
        },
        "keywords": ["kodulehe hind", "kodulehe tegemine", "veebileht hind", "koduleht Eesti", "veebiarendus hind"]
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="max-w-3xl w-full">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Navik</Link>
                    <span>/</span>
                    <Link href="/blogi" className="hover:text-primary transition-colors">Blogi</Link>
                    <span>/</span>
                    <span className="text-foreground">Kodulehe hind</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                            Veebiarendus
                        </span>
                        <span className="text-sm text-muted-foreground">8 min lugemist</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Kodulehe hind Eestis 2026 —{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                            mida sa tegelikult maksad?
                        </span>
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Veiko-Peeter Kargu</span>
                        <span>·</span>
                        <time dateTime="2026-04-15">15. aprill 2026</time>
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose-article space-y-8">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Kui sa oled ettevõtja ja vajad kodulehte, on esimene küsimus alati sama: <strong className="text-foreground">mis see maksab?</strong> Vastus sõltub sellest, kelle poole pöördud. Siin on aus ülevaade.
                    </p>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Kolm teed koduleheni</h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Eesti turul on kolm põhilist viisi kodulehe saamiseks. Igaühel on oma hinnaklass, kiirus ja riskid.
                        </p>

                        {/* Price comparison cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="p-6 rounded-xl bg-card border border-border">
                                <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-2">Agentuur</p>
                                <p className="text-2xl font-bold text-foreground mb-1">3 000–15 000 €</p>
                                <p className="text-sm text-muted-foreground">4–12 nädalat</p>
                                <div className="mt-3 pt-3 border-t border-border/50">
                                    <p className="text-xs text-muted-foreground">+ hooldus 50–150 €/kuu</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-card border border-border">
                                <p className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-2">Freelancer</p>
                                <p className="text-2xl font-bold text-foreground mb-1">800–3 000 €</p>
                                <p className="text-sm text-muted-foreground">2–6 nädalat</p>
                                <div className="mt-3 pt-3 border-t border-border/50">
                                    <p className="text-xs text-muted-foreground">+ hooldus 30–80 €/kuu</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                                <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">AI + ekspert</p>
                                <p className="text-2xl font-bold text-primary mb-1">100–500 €</p>
                                <p className="text-sm text-muted-foreground">3–7 päeva</p>
                                <div className="mt-3 pt-3 border-t border-primary/10">
                                    <p className="text-xs text-primary">Muudatused 40 €/h</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Mida sa agentuuri hinnaga tegelikult saad?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Agentuurid müüvad meelerahu ja täisteenust. Sa maksad projektijuhi, disaineri, arendaja ja testija aja eest. Protsess on struktureeritud ja tulemus on tavaliselt professionaalne.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <strong className="text-foreground">Aga on ka varjatud kulud:</strong>
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">⚠️</span>
                                <span><strong className="text-foreground">Lukustusefekt:</strong> CMS, mille lähtekood on agentuuri peos. Kui lahkud, alustab uus tegija nullist.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">⚠️</span>
                                <span><strong className="text-foreground">Igavene hooldus:</strong> 50–150 €/kuus selle eest, et keegi hoiab WordPressi pluginaid uuendatuna.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">⚠️</span>
                                <span><strong className="text-foreground">Üle-ehitamine:</strong> Sulle müüakse 50-leheline WordPress, kuigi vajad 3 lehte ja kontaktvormi.</span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Miks AI muudab reegleid?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            2026. aastal ei ole enam vaja maksta tuhandeid eurosid lihtsa ärilehe eest. AI-tööriistade abil saab kogenud spetsialist luua professionaalse kodulehe murdosa ajaga:
                        </p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">Disain:</strong> AI genereerib paigutuse, mida ekspert kohandab sinu brändiga.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">Kood:</strong> Puhas, kiire HTML/CSS ilma raskete CMS-deta. Laadib sekundiga.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">SEO:</strong> Schema, meta tagid, mobiilioptimeerimine — kõik on kohe sees.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">Kiirus:</strong> 3–7 päeva, mitte 3 kuud.</span>
                            </li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            See ei tähenda, et AI asendab inimest. <strong className="text-foreground">AI kiirendab tööd, aga strateegia, brändi mõistmine ja kliendi ärist arusaamine nõuab kogemust.</strong> Sellepärast on optimaalne mudel: AI teeb rasket tööd, ekspert juhib protsessi.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Kellele see sobib?</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Vajadus</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Parim valik</th>
                                        <th className="text-left py-3 font-semibold text-foreground">Hinnaklass</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4">Lihtne ärikoduleht (1–5 lk)</td>
                                        <td className="py-3 pr-4 text-primary font-medium">AI + ekspert</td>
                                        <td className="py-3">100–300 €</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4">Portfoolio + blogi</td>
                                        <td className="py-3 pr-4">AI + ekspert / freelancer</td>
                                        <td className="py-3">200–800 €</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4">E-pood (kuni 50 toodet)</td>
                                        <td className="py-3 pr-4">Freelancer</td>
                                        <td className="py-3">1 500–4 000 €</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4">Keeruline veebirakendus</td>
                                        <td className="py-3 pr-4">Agentuur</td>
                                        <td className="py-3">5 000–30 000+ €</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Enterprise + integratsioonid</td>
                                        <td className="py-3 pr-4">Agentuur</td>
                                        <td className="py-3">15 000–100 000+ €</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Praktiline nõuanne</h2>
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                            <p className="text-foreground leading-relaxed mb-3">
                                <strong>Enne kui maksad kellegi teise arvamuse eest, küsi endalt:</strong>
                            </p>
                            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                                <li>Mitu lehekülge mul tegelikult vaja on?</li>
                                <li>Kas mul on vaja sisuhaldust (blogi, tooted) või on staatiline leht piisav?</li>
                                <li>Kes hooldab lehte pärast? Kui tihti muudatusi teen?</li>
                                <li>Kas mul on vaja e-poodi, broneerimist või kontaktvormi?</li>
                                <li>Mis on mu lehekülje <em>peamine eesmärk</em> — müük, usaldus, kontakt?</li>
                            </ol>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Vajad kodulehte?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Professionaalne koduleht alates 100 € — valmis 3–7 päevaga. Mobiilisõbralik, kiire, Google&apos;is leitav.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/veeb/"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md"
                            >
                                Vaata teenust →
                            </Link>
                            <Link
                                href="/kontakt?allikas=kodulehe+hind+artikkel"
                                className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold tracking-wider hover:border-primary/40 transition-all duration-200 rounded-md"
                            >
                                Küsi pakkumist
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Back to blog */}
                <div className="mt-12 pt-6 border-t border-border">
                    <Link href="/blogi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        ← Tagasi blogisse
                    </Link>
                </div>
            </article>
        </main>
    );
}
