import Link from 'next/link';

export const metadata = {
    title: 'Blogi | Navik OÜ — IT, veeb ja AI teemadel',
    description: 'Navik OÜ blogi: praktilised artiklid kodulehe hinnast, IT-auditist, digijuhtimisest ja AI automatiseerimisest Eesti ettevõtetele.',
    alternates: {
        canonical: 'https://navik.ee/blogi',
    },
    openGraph: {
        title: 'Blogi | Navik OÜ',
        description: 'Praktilised artiklid kodulehe hinnast, IT-auditist ja AI automatiseerimisest.',
        url: 'https://navik.ee/blogi',
        type: 'website',
    },
};

const articles = [
    {
        slug: 'digijuht-vs-it-juht',
        title: 'Miks su ettevõte vajab digijuhti, mitte IT-juhti',
        description: 'IT-juht haldab servereid. Digijuht haldab äri ja tehnoloogia piiriala. Miks osalise ajaga digijuht on VKE-le mõistlikum kui täiskohaga IT-inimene.',
        date: '2026-04-15',
        readTime: '6 min',
        tag: 'Digijuhtimine',
    },
    {
        slug: 'ai-automatiseerimine',
        title: 'AI automatiseerimine väikeettevõttele 2026 — praktiline juhend',
        description: 'Kuidas väikeettevõte saab AI-d kasutada ilma suure eelarveta: arved, pakkumised, klienditugi, sisu. Konkreetsed tööriistad ja ROI arvutus.',
        date: '2026-04-15',
        readTime: '7 min',
        tag: 'AI & Automatiseerimine',
    },
    {
        slug: 'erp-vale-valik',
        title: '5 märki, et su ERP valik on vale — enne kui on hilja',
        description: '73% ERP projektidest ületab eelarvet. Siin on 5 selget hoiatusmärki, mida ettevõtjad ignoreerivad — ja kuidas sõltumatu audit aitab.',
        date: '2026-04-15',
        readTime: '10 min',
        tag: 'IT-audit',
    },
    {
        slug: 'kodulehe-hind',
        title: 'Kodulehe hind Eestis 2026 — mille eest sa tegelikult maksad?',
        description: 'Põhjalik ülevaade kodulehe loomise hindadest Eestis: agentuuri vs freelancer vs AI-toega lahendused. Ausad numbrid ja peidetud kulud.',
        date: '2026-04-15',
        readTime: '8 min',
        tag: 'Veebiarendus',
    },
];

export default function BlogiPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Navik OÜ Blogi",
        "description": "Praktilised artiklid IT, veebi ja AI teemadel Eesti ettevõtetele",
        "url": "https://navik.ee/blogi",
        "publisher": {
            "@type": "Organization",
            "name": "Navik OÜ",
            "url": "https://navik.ee"
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl w-full">
                {/* Header */}
                <div className="mb-16">
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                        Blogi
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Mõtted ja{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                            teadmised
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Praktilised artiklid IT-otsustest, kodulehtedest ja AI automatiseerimisest — kirjutatud ettevõtjale, mitte insenerile.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="space-y-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blogi/${article.slug}`}
                            className="group block p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                                            {article.tag}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {article.readTime} lugemist
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-primary font-semibold text-sm shrink-0 mt-2 md:mt-4 group-hover:translate-x-1 transition-transform duration-200">
                                    Loe edasi
                                    <span aria-hidden="true">→</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <time className="text-sm text-muted-foreground" dateTime={article.date}>
                                    {new Date(article.date).toLocaleDateString('et-EE', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
