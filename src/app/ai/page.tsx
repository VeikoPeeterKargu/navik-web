export const metadata = {
    title: 'Praktiline AI | Navik',
    description: 'AI tööriistad ja automatiseerimine VKE-le — reaalne kasu ilma tehnikažargoonita.',
};

export default function AiPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    Praktiline <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    AI ei ole enam ainult suurkorporatsioonide privileeg. Aitan Sul leida konkreetsed tööriistad, mis säästavad Sinu meeskonna aega — ilma kuude pikkuse juurutusprojektita.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">AI-tööriistad igapäevatööks</h2>
                        <p className="text-muted-foreground">Hindan Sinu meeskonna töövooge ja valin välja konkreetsed AI-lahendused (tekstikirjutamine, andmeanalüüs, klienditugi), mida saab kasutusele võtta nädalaga — mitte kuudega.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Rutiinülesannete automatiseerimine</h2>
                        <p className="text-muted-foreground">Kaardistame korduvad manuaalsed protsessid (aruanded, e-kirjad, andmesisestus) ja automatiseerime need AI-põhiste tööriistadega. Sinu meeskond tegeleb sellega, mis päriselt loeb.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">AI-koolitus meeskonnale</h2>
                        <p className="text-muted-foreground">Praktiline poolepäevane töötuba Sinu tiimile: kuidas kasutada AI-tööriistu turvaliselt, efektiivselt ja äriliselt tulemuslikult. Lahkute koos konkreetsete kasutusjuhtudega.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">ROI-põhine lähenemine</h2>
                        <p className="text-muted-foreground">Iga AI-lahendus peab end ära tasuma. Arvutame koos säästetud tundide ja kulude kokkuhoiu ning mõõdame tulemusi — et teaksid alati, kas investeering tasus end ära.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
