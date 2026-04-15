import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '5 märki, et su ERP valik on vale — enne kui on hilja | Navik',
    description: 'Enamik ERP projekte ületab eelarvet ja ajakava. Siin on 5 selget hoiatusmärki, mida ettevõtjad ignoreerivad — ja kuidas sõltumatu audit aitab vältida 50 000€+ kaotust.',
    alternates: {
        canonical: 'https://navik.ee/blogi/erp-vale-valik',
    },
    openGraph: {
        title: '5 märki, et su ERP valik on vale',
        description: '73% ERP projektidest ületab eelarvet. Siin on 5 hoiatusmärki, mida ettevõtjad ignoreerivad.',
        url: 'https://navik.ee/blogi/erp-vale-valik',
        type: 'article',
        publishedTime: '2026-04-08T00:00:00.000Z',
        authors: ['Veiko-Peeter Kargu'],
    },
};

export default function ErpValeValikPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "5 märki, et su ERP valik on vale — enne kui on hilja",
        "description": "Enamik ERP projekte ületab eelarvet ja ajakava. 5 hoiatusmärki ja kuidas sõltumatu audit aitab.",
        "datePublished": "2026-04-08",
        "dateModified": "2026-04-08",
        "author": { "@type": "Person", "name": "Veiko-Peeter Kargu", "url": "https://kargu.ee" },
        "publisher": { "@type": "Organization", "name": "Navik OÜ", "url": "https://navik.ee" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://navik.ee/blogi/erp-vale-valik" },
        "keywords": ["ERP valik", "ERP audit", "IT audit", "tarkvara valik", "ERP projekt"]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Kui kaua kestab ERP juurutamine?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ERP juurutamise keskmine kestus on 12\u201318 kuud. Kui keegi lubab 3 kuud, siis kas l\u00f5igatakse nurki, unustatakse andmemigratsioon v\u00f5i m\u00fc\u00fcakse midagi, mis pole p\u00e4ris ERP. K\u00fcsi alati detailset ajajoonist iga faasi jaoks."
                }
            },
            {
                "@type": "Question",
                "name": "Mis on ERP projekti suurim varjatud kulu?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Muudatused (change requests) on ERP projektide suurim varjatud kulu. N\u00f5ua pakkumises eraldi rida muudatuste tunnihinnaga p\u00e4rast scope freeze\u2019t. Kui see on \u00fcle 150 \u20ac/h, kaalusta alternatiive."
                }
            },
            {
                "@type": "Question",
                "name": "Kas v\u00e4ikeettev\u00f5te vajab ERP-d?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mitte alati. Paljud v\u00e4ikeettev\u00f5tted saavad h\u00e4sti hakkama raamatupidamistarkvara + eraldi CRM-i + t\u00f6\u00f6riistade kombinatsiooniga. ERP tasub ennast \u00e4ra alates 20\u201350 t\u00f6\u00f6tajast, kui protsessid on piisavalt keerulised. S\u00f5ltumatu audit aitab otsustada."
                }
            }
        ]
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <article className="max-w-3xl w-full">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Navik</Link>
                    <span>/</span>
                    <Link href="/blogi" className="hover:text-primary transition-colors">Blogi</Link>
                    <span>/</span>
                    <span className="text-foreground">ERP vale valik</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">IT-audit</span>
                        <span className="text-sm text-muted-foreground">10 min lugemist</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        5 märki, et su ERP valik on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">vale</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Tööstuse uuringud näitavad järjepidevalt: <strong className="text-foreground">enamik ERP projekte ületab eelarvet</strong> ja ajakava, sageli <strong className="text-foreground">kordades algse plaani.</strong> Siin on 5 hoiatusmärki, mida sa saad kontrollida ENNE lepingule allkirjastamist.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <span>Veiko-Peeter Kargu</span>
                        <span>·</span>
                        <time dateTime="2026-04-08">8. aprill 2026</time>
                    </div>
                </header>

                {/* Content */}
                <div className="space-y-10">

                    {/* Sign 1 */}
                    <section className="p-6 rounded-xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-primary shrink-0">1</span>
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-foreground">Müüja ei küsi sinu äriprotsesside kohta</h2>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    Kui esimesel kohtumisel näidatakse sulle kohe demot ja räägivad funktsioonidest, mitte sinu probleemidest — on ohumärk. Hea ERP-partner alustab alati küsimusest: <em>&quot;Kuidas te praegu töötate?&quot;</em>
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Mida teha:</strong> Enne ühtegi demot kirjelda paberil oma 5 kriitilisiimat äriprotsessi. Kui müüja ei küsi nende kohta — ta müüb sulle tarkvara, mitte lahendust.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sign 2 */}
                    <section className="p-6 rounded-xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-primary shrink-0">2</span>
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-foreground">&quot;Juurutus 3 kuuga&quot; — väikesel ettevõttel</h2>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    ERP juurutamise keskmine kestus on 12–18 kuud. Kui keegi lubab 3 kuud, siis kas: a) nad lõikavad nurki, b) unustavad andmemigratsiooni, või c) müüvad sulle midagi, mis pole päris ERP.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Mida teha:</strong> Küsi detailset ajajoonist iga faasi jaoks: analüüs → konfiguratsioon → andmemigratsioon → testimine → koolitus → go-live.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sign 3 */}
                    <section className="p-6 rounded-xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-primary shrink-0">3</span>
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-foreground">Hind ei sisalda muudatuste haldust</h2>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    Pakkumises näed ilusat fikseeritud summat. Aga lugesid sa ka seda, mis juhtub kui avastathakse &quot;ootamatuid&quot; vajadusi? Muudatused (change requests) on ERP projektide kõige suurem varjatud kulu.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Mida teha:</strong> Nõua pakkumises eraldi rida: &quot;Muudatuste tunnihind pärast scope freeze&apos;t.&quot; Kui see on üle 150 €/h — kaalusta alternatiive.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sign 4 */}
                    <section className="p-6 rounded-xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-primary shrink-0">4</span>
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-foreground">Referentsid on ainult suurettevõtted</h2>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    Kui ERP müüja näitab referentsidena 1000+ töötajaga tehaseid, aga sinu ettevõttes on 15 inimest — on sul vale partner. Suurettevõtte lahendus ei skaleeru allapoole.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Mida teha:</strong> Küsi spetsiifiliselt: &quot;Näidake mulle 3 klienti meie suurusega ja meie valdkonnas.&quot; Helista neile. Küsi ausalt, mis läks hästi ja mis halvasti.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Sign 5 */}
                    <section className="p-6 rounded-xl bg-card border border-border">
                        <div className="flex items-start gap-4">
                            <span className="text-3xl font-bold text-primary shrink-0">5</span>
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-foreground">Sa tunned survet &quot;kohe otsustada&quot;</h2>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                    &quot;See hind kehtib ainult selle kuu lõpuni.&quot; &quot;Meie juurutustiim saab alustada kohe.&quot; Kiirustamine on suurte IT-investeeringute vaenlane nr 1.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Mida teha:</strong> Võta üks lisa-nädal. Kaasa sõltumatu konsultant, kes vaatab pakkumise üle ilma emotsioonideta. 2 500 € audit võib säästa 50 000 €.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Summary */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Kokkuvõte: üks lihtsus enne suurt otsust</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            ERP valik on üks kallimaid otsuseid, mida ettevõte teeb. Vale valik ei maksa ainult raha — see maksab aega, meeskonna motivatsiooni ja konkurentsivõimet. Kui sul pole ettevõttes kedagi, kes seda otsust juhiks, loe meie artiklit <Link href="/blogi/digijuht-vs-it-juht" className="text-primary hover:underline">digijuhist vs IT-juhist</Link>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            <strong className="text-foreground">Üks sõltumatu pilk enne lepingut</strong> — see on kõik, mis vaja. Mitte teine müügikõne. Mitte veel üks demo. Vaid aus hinnang: osta, ära osta, või oota. Ja pärast otsust — <Link href="/blogi/ai-automatiseerimine" className="text-primary hover:underline">automatiseeri korduvad protsessid AI-ga</Link>, et investeering end kiiremini ära tasuks.
                        </p>
                        <p className="text-sm text-muted-foreground italic">
                            Artikli autor on 30 aasta jooksul istunud IT-läbirääkimiste laua igal poolel: ostjana (Eesti Raudtee IT-hange), müüjana (BCS Itera ERP) ja ettevõtjana (Klick Eesti, 0–30 kauplust).
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="p-8 rounded-2xl bg-card border border-border text-center">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Oled ERP ostu ees?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Sõltumatu IT-otsuse audit — 2 nädalat, fikseeritud hind 2 500 €. Selge vastus: osta, ära osta või oota.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/audit" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md">
                                Loe auditi kohta →
                            </Link>
                            <Link href="/kontakt?allikas=erp+artikkel" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold tracking-wider hover:border-primary/40 transition-all duration-200 rounded-md">
                                Broneeri konsultatsioon
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Related articles */}
                <div className="mt-12 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-4">Loe ka:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <Link href="/blogi/digijuht-vs-it-juht" className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm">
                            <span className="text-primary font-medium">Miks su ettevõte vajab digijuhti?</span>
                            <p className="text-muted-foreground text-xs mt-1">Digijuhtimine · 6 min</p>
                        </Link>
                        <Link href="/blogi/ai-automatiseerimine" className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm">
                            <span className="text-primary font-medium">AI automatiseerimine väikeettevõttele</span>
                            <p className="text-muted-foreground text-xs mt-1">AI · 7 min</p>
                        </Link>
                    </div>
                    <Link href="/blogi" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Tagasi blogisse</Link>
                </div>
            </article>
        </main>
    );
}

