import Link from 'next/link';

export const metadata = {
    title: 'Osalise ajaga Digijuht | Navik',
    description: 'IT-strateegia ja protsesside juhtimine VKE-le — tippjuhi kompetents murdosa hinnaga.',
};

export default function StrateegiaPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    Osalise ajaga <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Digijuht</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    IT-strateegia ja protsessid vajavad peremeest, kuid täiskohaga tippjuht maksab 5 000–8 000 €/kuu. Tulen Sinu meeskonda osalise koormusega, võtan tehnoloogiaprojektid enda peale ja vabastan Sinu aja äri kasvatamiseks.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-accent">Selge IT-teekaart ja strateegia</h2>
                        <p className="text-muted-foreground">Paneme paika plaani, milliseid süsteeme arendada, et toetada äri kasvu. Ei mingit tehnoloogiat tehnoloogia pärast — fookus on ainult ROI-l ja efektiivsusel.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-accent">Sinu isiklik IT-tõlk ja advokaat</h2>
                        <p className="text-muted-foreground">Suhtlen arendajate ja IT-partneritega nende omas keeles. Nõuan kvaliteeti, jälgin rangelt eelarvet ning kaitsen Sind ülemaksmise ja tühjade lubaduste eest.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-accent">Inimkeskne muutuste juhtimine</h2>
                        <p className="text-muted-foreground">Uus tarkvara ei tööta, kui inimesed seda ei kasuta. Viin meeskonna sujuvalt läbi digimuutuste, murran vastupanu ja muudan uued protsessid harjumuseks.</p>
                    </div>

                    <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4 text-accent">Tippjuht paindliku kuluga</h2>
                        <p className="text-muted-foreground">Saad tipptasemel IT-juhi kompetentsi murdosa eest täiskohaga juhi palgast — täpselt sellise koormusega nagu vaja (nt 1–2 päeva nädalas). Kuutasu kokkuleppel, ilma tööjõumaksudeta.</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/kontakt?allikas=Digijuht+leht"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-[#1A1A18] text-lg font-semibold tracking-wider hover:opacity-90 transition-all duration-200 rounded-md"
                    >
                        Küsi tasuta konsultatsiooni →
                    </Link>
                </div>
            </div>
        </main>
    );
}
