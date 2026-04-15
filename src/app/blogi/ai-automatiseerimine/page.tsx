import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI automatiseerimine väikeettevõttele 2026 — praktiline juhend | Navik',
    description: 'Kuidas väikeettevõte saab AI-d kasutada ilma suure eelarveta: arved, pakkumised, klienditugi, sisu. Konkreetsed tööriistad ja ROI arvutus.',
    alternates: { canonical: 'https://navik.ee/blogi/ai-automatiseerimine' },
    openGraph: {
        title: 'AI automatiseerimine väikeettevõttele 2026',
        description: 'Praktiline juhend: kuidas automatiseerida arved, klienditugi ja sisu ilma programmeerimata.',
        url: 'https://navik.ee/blogi/ai-automatiseerimine',
        type: 'article',
        publishedTime: '2026-04-12T00:00:00.000Z',
        authors: ['Veiko-Peeter Kargu'],
    },
};

export default function AiAutomatiseeriminePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI automatiseerimine väikeettevõttele 2026 — praktiline juhend",
        "datePublished": "2026-04-12",
        "dateModified": "2026-04-12",
        "author": { "@type": "Person", "name": "Veiko-Peeter Kargu", "url": "https://kargu.ee" },
        "publisher": { "@type": "Organization", "name": "Navik OÜ", "url": "https://navik.ee" },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://navik.ee/blogi/ai-automatiseerimine" },
        "keywords": ["AI automatiseerimine", "väikeettevõte AI", "protsesside automatiseerimine", "AI tööriistad"]
    };

    const useCases = [
        { icon: '📧', title: 'E-kirjad ja vastused', before: '45 min/päev', after: '5 min/päev', tool: 'Gmail + Gemini', desc: 'AI koostab vastuse mustandid, sa ainult kinnitad. Rutiinsed päringud (hinnapakkumised, saadavus) käivad automaatselt.' },
        { icon: '📄', title: 'Arved ja pakkumised', before: '2h/nädal', after: '15 min/nädal', tool: 'Make.com + Google Sheets', desc: 'Klient täidab vormi → AI genereerib pakkumise → saadab PDF-i e-postiga. Sinu ainus töö: kinnita hind.' },
        { icon: '💬', title: 'Klienditugi (FAQ)', before: '1h/päev', after: '10 min/päev', tool: 'Chatbot + teadmistebaas', desc: 'AI vastab 80% korduma kipuvatele küsimustele. Keerulised jäävad sulle. Klient saab vastuse 30 sekundit, mitte 24 tundi.' },
        { icon: '✍️', title: 'Sotsiaalmeedia ja sisu', before: '3h/nädal', after: '30 min/nädal', tool: 'Claude/ChatGPT + Canva', desc: 'AI kirjutab postituse mustandi sinu tooniga. Sina lisad isiklikku kogemust ja kohendad. 5x kiirem kui nullist.' },
        { icon: '📊', title: 'Andmete kokkuvõtted', before: '1h/nädal', after: '2 min/nädal', tool: 'Google Sheets + Apps Script', desc: 'Müügiandmed, kulud, KPI-d — AI genereerib iganädalase kokkuvõtte ja tõstab esile anomaaliad.' },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="max-w-3xl w-full">
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">Navik</Link>
                    <span>/</span>
                    <Link href="/blogi" className="hover:text-primary transition-colors">Blogi</Link>
                    <span>/</span>
                    <span className="text-foreground">AI automatiseerimine</span>
                </nav>

                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">AI & Automatiseerimine</span>
                        <span className="text-sm text-muted-foreground">7 min lugemist</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                        AI automatiseerimine väikeettevõttele{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">2026</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Sa ei pea olema tehnikainimene ega omama suurt eelarvet. AI tööriistade abil saab iga 1–20 töötajaga ettevõte automatiseerida <strong className="text-foreground">5–10 tundi nädalas</strong> aeganõudvat rutiini.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                        <span>Veiko-Peeter Kargu</span><span>·</span>
                        <time dateTime="2026-04-12">12. aprill 2026</time>
                    </div>
                </header>

                <div className="space-y-10">
                    {/* Intro */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Mida &quot;automatiseerimine&quot; tegelikult tähendab?</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Unusta robotid ja tehisintellekt filmidest. Praktiline AI automatiseerimine tähendab lihtsalt seda: <strong className="text-foreground">masin teeb igava töö ära, sina teed otsused.</strong>
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            See ei tähenda töötajate asendamist. See tähendab, et sinu parim müügimees ei pea enam pool päeva Excelis numbreid kokku lööma. Ja äraspidi — kui sul on <Link href="/blogi/erp-vale-valik" className="text-primary hover:underline">vale tarkvara</Link>, ei aita ka AI. Alusta alati aluspõhjast.
                        </p>
                    </section>

                    {/* Use cases */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-foreground">5 kõige mõjusamat kohta</h2>
                        <div className="space-y-4">
                            {useCases.map((uc, i) => (
                                <div key={i} className="p-6 rounded-xl bg-card border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl shrink-0">{uc.icon}</span>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-foreground mb-2">{uc.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">{uc.desc}</p>
                                            <div className="flex flex-wrap gap-4 text-sm">
                                                <span className="flex items-center gap-1.5">
                                                    <span className="text-red-400">Enne:</span>
                                                    <span className="text-muted-foreground">{uc.before}</span>
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <span className="text-green-400">Pärast:</span>
                                                    <span className="text-muted-foreground">{uc.after}</span>
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <span className="text-primary">Tööriist:</span>
                                                    <span className="text-muted-foreground">{uc.tool}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ROI */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Konkreetne ROI arvutus</h2>
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <p className="text-3xl font-bold text-primary">~8h</p>
                                    <p className="text-sm text-muted-foreground mt-1">säästetud nädalas</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">~35h</p>
                                    <p className="text-sm text-muted-foreground mt-1">säästetud kuus</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-primary">~1 050 €</p>
                                    <p className="text-sm text-muted-foreground mt-1">väärtus kuus (30 €/h)</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm mt-4 text-center">
                                Ülesseadmine: 500–1 500 € ühekordselt. Tasuvusaeg: 1–2 kuud.
                            </p>
                        </div>
                    </section>

                    {/* How to start */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Kuidas alustada?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">1</span>
                                <div>
                                    <h3 className="font-bold text-foreground">Kaardista ajaröövlid</h3>
                                    <p className="text-muted-foreground text-sm">Kirjuta 1 nädal üles kõik ülesanded, mis kestavad üle 30 min ja mida teed iganädalaselt. See on su automatiseerimise shortlist.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">2</span>
                                <div>
                                    <h3 className="font-bold text-foreground">Vali üks</h3>
                                    <p className="text-muted-foreground text-sm">Ära proovi kõike korraga. Vali üks korduv ülesanne, sea üles, testi 2 nädalat.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">3</span>
                                <div>
                                    <h3 className="font-bold text-foreground">Mõõda</h3>
                                    <p className="text-muted-foreground text-sm">Kui see säästad 2+ tundi nädalas — tee järgmine. Kui mitte — sõnasta probleem ümber. Vajad kedagi, kes seda protsessi juhiks? Loe, miks <Link href="/blogi/digijuht-vs-it-juht" className="text-primary hover:underline">digijuht on parem valik kui IT-juht</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="p-8 rounded-2xl bg-card border border-border text-center">
                        <h2 className="text-2xl font-bold mb-4 text-foreground">Vajad abi ülesseadmisega?</h2>
                        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                            Aitan sul kaardistada automatiseerimise võimalused ja seada üles esimesed töövood. Praktiline, mitte teoreetiline.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/ai" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md">
                                Vaata AI teenust →
                            </Link>
                            <Link href="/kontakt?allikas=ai+artikkel" className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground font-semibold tracking-wider hover:border-primary/40 transition-all duration-200 rounded-md">
                                Broneeri konsultatsioon
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
                        <Link href="/blogi/kodulehe-hind" className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors text-sm">
                            <span className="text-primary font-medium">Kodulehe hind Eestis 2026</span>
                            <p className="text-muted-foreground text-xs mt-1">Veebiarendus · 8 min</p>
                        </Link>
                    </div>
                    <Link href="/blogi" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Tagasi blogisse</Link>
                </div>
            </article>
        </main>
    );
}
