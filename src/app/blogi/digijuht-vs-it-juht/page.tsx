import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Miks su ettevõte vajab digijuhti, mitte IT-juhti | Navik',
    description: 'IT-juht haldab servereid. Digijuht haldab äri ja tehnoloogia piiriala. Miks osalise ajaga digijuht on 2026. aastal VKE-le mõistlikum kui täiskohaga IT-inimene.',
    alternates: { canonical: 'https://navik.ee/blogi/digijuht-vs-it-juht' },
    openGraph: {
        title: 'Miks su ettevõte vajab digijuhti, mitte IT-juhti',
        description: 'IT-juht haldab servereid. Digijuht haldab äri ja tehnoloogia piiriala.',
        url: 'https://navik.ee/blogi/digijuht-vs-it-juht',
        type: 'article',
        publishedTime: '2026-04-15T00:00:00.000Z',
        authors: ['Veiko-Peeter Kargu'],
    },
};

export default function DigijuhtVsItJuhtPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Miks su ettevõte vajab digijuhti, mitte IT-juhti",
        "datePublished": "2026-04-15",
        "dateModified": "2026-04-15",
        "author": { "@type": "Person", "name": "Veiko-Peeter Kargu", "url": "https://kargu.ee" },
        "publisher": { "@type": "Organization", "name": "Navik OÜ", "url": "https://navik.ee" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://navik.ee/blogi/digijuht-vs-it-juht" },
        "keywords": ["digijuht", "fractional CIO", "IT-juht", "VKE IT", "digitaalne juhtimine"]
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="max-w-3xl w-full">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Navik</Link>
                    <span>/</span>
                    <Link href="/blogi" className="hover:text-primary transition-colors">Blogi</Link>
                    <span>/</span>
                    <span className="text-foreground">Digijuht vs IT-juht</span>
                </nav>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">Digijuhtimine</span>
                        <span className="text-sm text-muted-foreground">6 min lugemist</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        Miks su ettevõte vajab{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">digijuhti</span>
                        , mitte IT-juhti
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        IT-juht hoiab printerid töös ja serverid käimas. Digijuht küsib: <strong className="text-foreground">&quot;Kas meil on üldse vaja printerit?&quot;</strong> See on fundamentaalne erinevus.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <span>Veiko-Peeter Kargu</span><span>·</span>
                        <time dateTime="2026-04-15">15. aprill 2026</time>
                    </div>
                </header>

                <div className="space-y-10">
                    {/* Comparison table */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-foreground">IT-juht vs digijuht — mis vahe?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Teema</th>
                                        <th className="text-left py-3 pr-4 font-semibold text-muted-foreground">IT-juht</th>
                                        <th className="text-left py-3 font-semibold text-primary">Digijuht</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted-foreground">
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4 font-medium text-foreground">Põhifookus</td>
                                        <td className="py-3 pr-4">Infrastruktuur, turvalisus</td>
                                        <td className="py-3 text-primary">Äri ja tehnoloogia kokkusobitamine</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4 font-medium text-foreground">Küsimus</td>
                                        <td className="py-3 pr-4">&quot;Kuidas seda tööle saada?&quot;</td>
                                        <td className="py-3 text-primary">&quot;Kas seda üldse vaja on?&quot;</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4 font-medium text-foreground">Tarkvara valik</td>
                                        <td className="py-3 pr-4">Valib tehniliselt parima</td>
                                        <td className="py-3 text-primary">Valib äriliselt mõistlikuma</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4 font-medium text-foreground">Müüjale vastukaalu</td>
                                        <td className="py-3 pr-4">Võimalik huvide konflikt</td>
                                        <td className="py-3 text-primary">100% sõltumatu, ei müü tarkvara</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-3 pr-4 font-medium text-foreground">Kulu (VKE-le)</td>
                                        <td className="py-3 pr-4">3 000–5 000 €/kuu (täiskohaga)</td>
                                        <td className="py-3 text-primary">1 000–2 500 €/kuu (osalise ajaga)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4 font-medium text-foreground">AI ja innovatsioon</td>
                                        <td className="py-3 pr-4">Implementeerib, mis on juba otsustatud</td>
                                        <td className="py-3 text-primary">Avastab võimalusi, testib, esitleb</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* When do you need one */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Millal tekib vajadus?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">Tüüpilised signaalid:</p>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">→</span>
                                <span>Su ettevõte on <strong className="text-foreground">kasvanud 10+ töötajani</strong> ja äkki on 5 erinevat tabelit, mis ei räägi omavahel</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">→</span>
                                <span>IT-müüjad helistavad igal nädalal ja <strong className="text-foreground">sa ei tea, kellest kuulata</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">→</span>
                                <span>Oled valmis tegema <strong className="text-foreground">suurt IT-investeeringut</strong> (ERP, CRM, WMS) ja vajad sõltumatut pilku — loe ka <Link href="/blogi/erp-vale-valik" className="text-primary hover:underline">5 hoiatusmärki vale ERP valiku kohta</Link></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">→</span>
                                <span>Tunned, et <strong className="text-foreground">konkurendid liiguvad kiiremini</strong> — neil on paremad tööriistad, kiirem teenindus</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1 shrink-0">→</span>
                                <span><strong className="text-foreground">Täiskohaga IT-juht on liiga kallis</strong>, aga ilma kellegi kompetentseta teed vigu</span>
                            </li>
                        </ul>
                    </section>

                    {/* What fractional CIO does */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Mis osalise ajaga digijuht tegelikult teeb?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-card border border-border">
                                <h3 className="font-bold text-foreground mb-2">🗺️ IT-teekonna kaardistamine</h3>
                                <p className="text-sm text-muted-foreground">Kus sa oled? Kuhu tahad jõuda? Mis selle tegelikult maksab? 12-kuuline plaan, mitte 50-leheline dokument.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-card border border-border">
                                <h3 className="font-bold text-foreground mb-2">🛡️ Müüjate filtreerimine</h3>
                                <p className="text-sm text-muted-foreground">Istun läbirääkimistel kõrval. Oskan küsida küsimusi, mida müüjad ei taha kuulda. Tean, millal hind on liiga hea.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-card border border-border">
                                <h3 className="font-bold text-foreground mb-2">🔍 Riskide ennetamine</h3>
                                <p className="text-sm text-muted-foreground">Vaatan lepinguid enne allkirjastamist. Lukustusklauslid, peidetud kulud, SLA puudused — kõik välja.</p>
                            </div>
                            <div className="p-5 rounded-xl bg-card border border-border">
                                <h3 className="font-bold text-foreground mb-2">🤖 AI võimaluste avastamine</h3>
                                <p className="text-sm text-muted-foreground">Testin uusi tööriistu sinu protsessidel. Kui töötab — juurutan. Kui ei — säästsin sulle aega ja raha. Loe konkreetseid näiteid meie <Link href="/blogi/ai-automatiseerimine" className="text-primary hover:underline">AI automatiseerimise juhendist</Link>.</p>
                            </div>
                        </div>
                    </section>

                    {/* Cost comparison */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Numbrid räägivad</h2>
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center p-4">
                                    <p className="text-sm text-muted-foreground mb-2">Täiskohaga IT-juht</p>
                                    <p className="text-3xl font-bold text-foreground">3 500 €/kuu</p>
                                    <p className="text-xs text-muted-foreground mt-1">+ sotsiaalmaks + IT-haridus + boonused</p>
                                    <p className="text-lg font-bold text-foreground mt-2">≈ 60 000 €/aasta</p>
                                </div>
                                <div className="text-center p-4 border-t md:border-t-0 md:border-l border-primary/20">
                                    <p className="text-sm text-primary mb-2">Osalise ajaga digijuht</p>
                                    <p className="text-3xl font-bold text-primary">1 000–2 500 €/kuu</p>
                                    <p className="text-xs text-muted-foreground mt-1">Paindlik: 1–2 päeva nädalas, vastavalt vajadusele</p>
                                    <p className="text-lg font-bold text-primary mt-2">≈ 12 000–30 000 €/aasta</p>
                                </div>
                            </div>
                            <p className="text-center text-sm text-muted-foreground mt-4">
                                Sääst: <strong className="text-primary">30 000–48 000 €/aasta</strong> — ja saad kogenuma inimese.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="p-8 rounded-2xl bg-card border border-border text-center">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Vajad sõltumatut digijuhti?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Esimene konsultatsioon on tasuta. Kaardistame koos sinu IT-olukorra ja vaatame, kas osalise ajaga digijuht annab sulle lisaväärtust.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/digijuht" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md">
                                Vaata teenust →
                            </Link>
                            <Link href="/kontakt?allikas=digijuht+artikkel" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold tracking-wider hover:border-primary/40 transition-all duration-200 rounded-md">
                                Tasuta konsultatsioon
                            </Link>
                        </div>
                    </section>
                </div>

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
                    <Link href="/blogi" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Tagasi blogisse</Link>
                </div>
            </article>
        </main>
    );
}
