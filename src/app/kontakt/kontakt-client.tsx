'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function KontaktForm() {
    const searchParams = useSearchParams();
    const allikas = searchParams.get('allikas') || 'Otselink menüüst';

    return (
        <form
            className="flex flex-col gap-6"
            action="https://formsubmit.co/peeter@kargu.ee"
            method="POST"
        >
            {/* FormSubmit settings */}
            <input type="hidden" name="_subject" value={`Navik päring — ${allikas}`} />
            <input type="hidden" name="_next" value="https://navik.ee/kontakt/?sent=1" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="Allikas" value={allikas} />
            {/* Honeypot spam kaitse */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Nimi</label>
                    <input
                        type="text"
                        id="name"
                        name="Nimi"
                        className="h-10 px-3 rounded-md bg-background border border-border focus:outline-none focus:border-[#C9A027] transition-colors"
                        placeholder="Sinu nimi"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                    <input
                        type="tel"
                        id="phone"
                        name="Telefon"
                        className="h-10 px-3 rounded-md bg-background border border-border focus:outline-none focus:border-[#C9A027] transition-colors"
                        placeholder="+372 ..."
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                    E-post <span className="text-red-400">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="E-post"
                    required
                    className="h-10 px-3 rounded-md bg-background border border-border focus:outline-none focus:border-[#C9A027] transition-colors"
                    placeholder="sinu@email.ee"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Sõnum</label>
                <textarea
                    id="message"
                    name="Sõnum"
                    rows={5}
                    className="p-3 rounded-md bg-background border border-border focus:outline-none focus:border-[#C9A027] transition-colors resize-y"
                    placeholder="Kirjelda oma olukorda — kuidas saan aidata?"
                />
            </div>

            <button
                type="submit"
                className="h-12 bg-[#C9A027] text-[#1A1A18] font-semibold tracking-wider hover:bg-[#D4AA2C] transition-colors rounded-md"
            >
                Saada päring →
            </button>
        </form>
    );
}

export default function KontaktClient() {
    return (
        <Suspense fallback={null}>
            <KontaktForm />
        </Suspense>
    );
}
