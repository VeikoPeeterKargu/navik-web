import Link from 'next/link';

export const metadata = {
    title: 'IT-otsuse Audit | Navik',
    description: 'Oled ostmas uut tarkvara? Annan 2 nädalaga sõltumatu hinnangu: osta, ära osta või oota.',
};

export default function AuditPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    IT-otsuse <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Audit</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Oled ostmas uut tarkvara (ERP, WMS, CRM)? Annan 2 nädalaga sõltumatu ja ausa hinnangu: <strong>osta, ära osta või oota.</strong> Aitan vältida ebaefektiivseid IT-investeeringuid ja tagan, et valitud lahendus toetab päriselt Sinu äri kasvu.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Selge otsus — 2 nädalaga</h2>
                        <p className="text-muted-foreground">OSTA, ÄRA OSTA või OOTA — üks selge leht ilma IT-žargoonita. Fikseeritud hinnaga (2 500 €) sõltumatu hinnang, mis säästab Sind tuhandete eurost vigast investeeringust.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Realistlikud variandid</h2>
                        <p className="text-muted-foreground">Kolm alternatiivset lahendusteed koos eelarve ja riskidega: lihtne (0–5k€), keskmine (10–30k€) ja põhjalik (50–100k€). Tead täpselt, mida sul on päriselt vaja.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Konkreetne tegevusplaan</h2>
                        <p className="text-muted-foreground">30–60–90 päeva sammud ja kriitilised küsimused, mida IT-müüjalt küsida — et vältida varjatud kulusid ja ülepaisutatud lubadusi.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-primary">Garantii & Kogemus</h2>
                        <p className="text-muted-foreground">Selgus ja tegevusplaan — või raha tagasi. Olen istunud läbirääkimistelaua igal küljel: ERP-müüjana (BCS Itera), suurostjana (Eesti Raudtee) ja ettevõtjana (Klick Eesti, 0→30 poodi).</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/kontakt?allikas=Küsi+sõltumatut+auditit+(Audit+leht)"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-lg font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md"
                    >
                        Küsi sõltumatut auditit →
                    </Link>
                </div>
            </div>
        </main>
    );
}
