import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kodulehe hind Eestis 2026 — mille eest sa tegelikult maksad? | Navik',
    description: 'Põhjalik ülevaade kodulehe loomise hindadest Eestis: agentuur (3000-15000€), freelancer (800-3000€) vs AI-toega lahendus (100-500€). Ausad numbrid, peidetud kulud ja praktiline nõuanne.',
    alternates: {
        canonical: 'https://navik.ee/blogi/kodulehe-hind',
    },
    openGraph: {
        title: 'Kodulehe hind Eestis 2026 — mille eest sa tegelikult maksad?',
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
        "headline": "Kodulehe hind Eestis 2026 — mille eest sa tegelikult maksad?",
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

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Mitu lehekülge mul tegelikult vaja on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Enamik väikeettevõtteid vajab 3–5 lehekülge: avaleht, teenused/tooted, meist ja kontakt. Blogi on lisaväärtus SEO jaoks. Ära lase kellelgi müüa sulle 20-lehelist saiti, kui vajad 4 lehte."
                }
            },
            {
                "@type": "Question",
                "name": "Kas mul on vaja sisuhaldust (CMS) või on staatiline leht piisav?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kui sa muudad sisu harvem kui kord kuus, on staatiline leht kiirem, turvalisem ja odavam. CMS (WordPress, Webflow) tasub ennast ära ainult siis, kui lisad regulaarselt blogi- või tootepostitusi."
                }
            },
            {
                "@type": "Question",
                "name": "Kes hooldab lehte pärast ja kui tihti muudatusi teen?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Staatilise lehe hoolduskulu on praktiliselt 0 €. WordPress vajab regulaarseid uuendusi (50–150 €/kuu). Mõtle ette: kui viimati vajasid kodulehe muudatust, siis mis see oli ja kui tihti see juhtub?"
                }
            },
            {
                "@type": "Question",
                "name": "Kas mul on vaja e-poodi, broneerimist või kontaktvormi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Kontaktivormi saab lisada tasuta (Formspree, Netlify Forms). E-pood vajab spetsiaalset platvormi (Shopify alates 30 €/kuu). Broneerimine käib kolmanda osapoole tööriistaga (Calendly, Cal.com)."
                }
            },
            {
                "@type": "Question",
                "name": "Mis on kodulehe peamine eesmärk — müük, usaldus või kontakt?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "See küsimus määrab kogu lehe arhitektuuri. Müügileht vajab tugevaid CTA-sid ja sotsiaalseid tõendeid. Usalduslehe fookus on portfooliol ja referentsidel. Kontaktileht peab tegema ühenduse võtmise maksimaalselt lihtsaks."
                }
            },
            {
                "@type": "Question",
                "name": "Kas Wix või Squarespace pole tasuta alternatiiv?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wixi tasuta versioonis on sinu-nimi.wixsite.com domeen, Wixi reklaam lehel, aeglane laadimisaeg ja piiratud SEO. Tasuline Wix maksab 17–45 €/kuus (204–540 €/aastas) ja sa ei saa isegi lähtekoodi. Tellitud leht alates 100 € on ühekordne kulu, ilma kuumakseta, täieliku SEO-ga ja lähtekoodi omandiõigusega."
                }
            }
        ]
    };

    const reviewJsonLd = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Service",
            "name": "Kodulehe loomine",
            "provider": {
                "@type": "Organization",
                "name": "Navik OÜ",
                "url": "https://navik.ee"
            }
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Raul"
        },
        "reviewBody": "Mina juba sain seda teenust ja väga rahul. Kui mõnel tuttaval ka vaja siis kindlasti soovitan!",
        "datePublished": "2026-04-15"
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
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
                            mille eest sa tegelikult maksad?
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
                                <span><strong className="text-foreground">Lukustusefekt:</strong> CMS, mille lähtekood on agentuuri peos. Kui lahkud, alustab uus tegija nullist. Selle probleemi kohta loe ka meie <Link href="/blogi/erp-vale-valik" className="text-primary hover:underline">ERP valikuvigade artiklist</Link> — sama muster kehtib kodulehtede puhul.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">⚠️</span>
                                <span><strong className="text-foreground">Igavene hooldus:</strong> 50–150 €/kuus selle eest, et keegi hoiab WordPressi pluginaid uuendatuna.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">⚠️</span>
                                <span><strong className="text-foreground">Üle-ehitamine:</strong> Sulle müüakse 50-leheline WordPress, kuigi vajad 3 lehte ja kontaktvormi. Kas tunned, et IT-partner survestab? <Link href="/audit" className="text-primary hover:underline">Sõltumatu audit</Link> annab selguse.</span>
                            </li>
                        </ul>
                    </section>

                    {/* NEW: Case Study */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Reaalne näide: Rsauto24</h2>
                        <div className="p-6 rounded-xl bg-card border border-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <div className="pl-4">
                                <p className="text-sm font-semibold tracking-wider uppercase text-primary mb-3">Kliendilugu</p>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    <a href="https://rsauto24.ee" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Rsauto24</a> — autohoolduse ettevõte, kes vajas professionaalset kodulehte teenuste ja hinnakirjaga. Eelmine leht oli vananenud ja mobiilis kasutamatu.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">1</p>
                                        <p className="text-xs text-muted-foreground">päevaga valmis</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">96+</p>
                                        <p className="text-xs text-muted-foreground">PageSpeed skoor</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">0,6s</p>
                                        <p className="text-xs text-muted-foreground">laadimisaeg</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">100%</p>
                                        <p className="text-xs text-muted-foreground">mobiilisõbralik</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Tulemus: puhas HTML/CSS leht ilma WordPressita, Google Analytics, GDPR-compliant küpsisebanner, JSON-LD schema ja täielik SEO ülesseadmine — kõik <strong className="text-foreground">murdu sellest, mida agentuur oleks küsinud.</strong>
                                </p>
                                {/* Client testimonial */}
                                <blockquote className="mt-5 pt-5 border-t border-primary/20">
                                    <p className="text-foreground italic leading-relaxed mb-3">
                                        &ldquo;Mina juba sain seda teenust ja väga rahul. Kui mõnel tuttaval ka vaja siis kindlasti soovitan!&rdquo;
                                    </p>
                                    <footer className="flex items-center gap-2 text-sm">
                                        <span className="text-primary font-semibold">Raul</span>
                                        <span className="text-muted-foreground">·</span>
                                        <a href="https://rsauto24.ee" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            Rsauto24
                                        </a>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
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
                                <span><strong className="text-foreground">Kood:</strong> Puhas, kiire HTML/CSS ilma raskete CMS-deta. <strong className="text-foreground">Google PageSpeed 95+</strong> ja laadimisaeg alla 1 sekundi — mitte 3–5 sekundit nagu keskmisel WordPressi lehel.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">SEO:</strong> Schema markup, Open Graph tagid, mobiilioptimeerimine, Consent Mode v2 — kõik on esimesest päevast sees. Loe meie <Link href="/blogi/ai-automatiseerimine" className="text-primary hover:underline">AI automatiseerimise artiklist</Link>, kuidas sama loogika töötab muudes äriprotsessides.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">✓</span>
                                <span><strong className="text-foreground">Kiirus:</strong> 3–7 päeva, mitte 3 kuud. Rsauto24 leht oli valmis 1 päevaga.</span>
                            </li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            See ei tähenda, et AI asendab inimest. <strong className="text-foreground">AI kiirendab tööd, aga strateegia, brändi mõistmine ja kliendi ärist arusaamine nõuab kogemust.</strong> Sellepärast on optimaalne mudel: AI teeb rasket tööd, ekspert juhib protsessi. Kui sa ei ole kindel, millist rolli peaks IT sinu ettevõttes mängima, loe meie artiklit <Link href="/blogi/digijuht-vs-it-juht" className="text-primary hover:underline">digijuhist vs IT-juhist</Link>.
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

                    {/* Wix/Squarespace comparison */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Aga kas Wix või Squarespace pole tasuta?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Aus vastus: <strong className="text-foreground">jah, sa saad Wixis „kodulehe“ teha tasuta.</strong> Aga tasuta versioonil on häda:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="p-5 rounded-xl bg-card border border-border">
                                <h3 className="font-bold text-foreground mb-2">Wix/Squarespace tasuta</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2"><span className="text-red-400 shrink-0">✗</span> Domeeni asemel <code>sinu-nimi.wixsite.com</code></li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 shrink-0">✗</span> Wixi reklaam ja logo sinu lehel</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 shrink-0">✗</span> Aeglane laadimisaeg (3–5 sek)</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 shrink-0">✗</span> Piiratud SEO kontroll</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400 shrink-0">✗</span> Platvormile lukustatud</li>
                                </ul>
                            </div>
                            <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                                <h3 className="font-bold text-primary mb-2">Tellitud leht (AI + ekspert)</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Sinu oma domeen (ettevõte.ee)</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Puhas bränd, 0 võõrast reklaami</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Laadimisaeg alla 1 sekundi</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Täielik SEO + schema markup</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Lähtekood on sinu oma</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Wixi tasuline plaan maksab 17–45 €/kuus. Aastaga on see <strong className="text-foreground">204–540 €</strong> — ja sa ei saa isegi lähtekoodi. Tellitud leht alates 100 € on <strong className="text-foreground">ühekordne kulu, ilma kuumakseta.</strong>
                        </p>
                    </section>

                    {/* Section 5 — FAQ with schema */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Korduma kippuvad küsimused</h2>
                        <div className="space-y-4">
                            <details className="p-5 rounded-xl bg-card border border-border group" open>
                                <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                                    Mitu lehekülge mul tegelikult vaja on?
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
                                </summary>
                                <p className="text-muted-foreground mt-3 leading-relaxed">Enamik väikeettevõtteid vajab <strong className="text-foreground">3–5 lehekülge</strong>: avaleht, teenused/tooted, meist ja kontakt. Blogi on lisaväärtus SEO jaoks. Ära lase kellelgi müüa sulle 20-lehelist saiti, kui vajad 4 lehte.</p>
                            </details>
                            <details className="p-5 rounded-xl bg-card border border-border group">
                                <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                                    Kas mul on vaja sisuhaldust (CMS) või on staatiline leht piisav?
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
                                </summary>
                                <p className="text-muted-foreground mt-3 leading-relaxed">Kui sa muudad sisu <strong className="text-foreground">harvem kui kord kuus</strong>, on staatiline leht kiirem, turvalisem ja odavam. CMS (WordPress, Webflow) tasub ennast ära ainult siis, kui lisad regulaarselt blogi- või tootepostitusi.</p>
                            </details>
                            <details className="p-5 rounded-xl bg-card border border-border group">
                                <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                                    Kes hooldab lehte pärast? Kui tihti muudatusi teen?
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
                                </summary>
                                <p className="text-muted-foreground mt-3 leading-relaxed">Staatilise lehe hoolduskulu on <strong className="text-foreground">praktiliselt 0 €</strong>. WordPress vajab regulaarseid uuendusi (50–150 €/kuu). Mõtle ette: kui viimati vajasid kodulehe muudatust, siis mis see oli ja kui tihti see juhtub?</p>
                            </details>
                            <details className="p-5 rounded-xl bg-card border border-border group">
                                <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                                    Kas mul on vaja e-poodi, broneerimist või kontaktvormi?
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
                                </summary>
                                <p className="text-muted-foreground mt-3 leading-relaxed">Kontaktivormi saab lisada <strong className="text-foreground">tasuta</strong> (Formspree, Netlify Forms). E-pood vajab spetsiaalset platvormi (Shopify alates 30 €/kuu). Broneerimine käib kolmanda osapoole tööriistaga (Calendly, Cal.com).</p>
                            </details>
                            <details className="p-5 rounded-xl bg-card border border-border group">
                                <summary className="font-bold text-foreground cursor-pointer list-none flex justify-between items-center">
                                    Mis on kodulehe peamine eesmärk — müük, usaldus või kontakt?
                                    <span className="text-primary group-open:rotate-180 transition-transform duration-200">▼</span>
                                </summary>
                                <p className="text-muted-foreground mt-3 leading-relaxed">See küsimus määrab kogu lehe arhitektuuri. <strong className="text-foreground">Müügileht</strong> vajab tugevaid CTA-sid ja sotsiaalseid tõendeid. <strong className="text-foreground">Usalduslehe</strong> fookus on portfooliol ja referentsidel. <strong className="text-foreground">Kontaktileht</strong> peab tegema ühenduse võtmise maksimaalselt lihtsaks.</p>
                            </details>
                        </div>
                    </section>

                    {/* CTA with urgency */}
                    <section className="mt-12 p-8 rounded-2xl bg-card border border-border text-center">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Vajad kodulehte?</h2>
                        <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
                            Professionaalne koduleht alates 100 € — valmis 3–7 päevaga. Google PageSpeed 95+, mobiilisõbralik, GDPR-compliant.
                        </p>
                        <p className="text-sm text-primary font-semibold mb-6">
                            ⚡ Rsauto24 leht valmis 1 päevaga. Sinu oma võib olla järgmine.
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

                {/* Related articles + Back */}
                <div className="mt-12 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground mb-4">Loe ka:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        <Link href="/blogi/erp-vale-valik" className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm">
                            <span className="text-primary font-medium">5 märki, et su ERP valik on vale</span>
                            <p className="text-muted-foreground text-xs mt-1">IT-audit · 10 min</p>
                        </Link>
                        <Link href="/blogi/ai-automatiseerimine" className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm">
                            <span className="text-primary font-medium">AI automatiseerimine väikeettevõttele</span>
                            <p className="text-muted-foreground text-xs mt-1">AI · 7 min</p>
                        </Link>
                    </div>
                    <Link href="/blogi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        ← Tagasi blogisse
                    </Link>
                </div>
            </article>
        </main>
    );
}
