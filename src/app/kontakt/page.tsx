import KontaktClient from './kontakt-client';

export const metadata = {
    title: 'Kontakt | Navik',
    description: 'Võta ühendust — esimene 30-minutiline konsultatsioon on tasuta.',
};

export default function KontaktPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start pt-32 pb-16 px-4 md:px-6">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
                    Kirjuta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A027] to-[#D4AA2C]">mulle</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-10 text-center">
                    Esimene 30-minutiline konsultatsioon on tasuta. Jäta oma kontakt — vastan esimesel võimalusel.
                </p>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                    <KontaktClient />
                </div>
            </div>
        </main>
    );
}
