import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasutustingimused | NAVIK OÜ",
  description: "NAVIK OÜ veebilehe ja teenuste kasutustingimused.",
};

export default function KasutustingimusedPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1A1A18] py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-light mb-12 border-b border-[#C9A027]/30 pb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Kasutustingimused
        </h1>
        
        <div 
          className="space-y-8 text-[1.05rem] leading-relaxed text-[#4A4236]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <p>
            Tere tulemast NAVIK OÜ veebilehele. Kasutades meie veebilehte ja teenuseid, nõustute te alljärgnevate kasutustingimustega. 
            Palun lugege need hoolikalt läbi.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">1. Teenuste sisu ja eesmärk</h2>
            <p>
              NAVIK OÜ pakub sõltumatut IT-nõustamist, digijuhtimise ja tehisintellekti potentsiaali väärindamise teenuseid 
              (edaspidi "Teenused"). Veebilehel olev teave on mõeldud üldiseks informeerimiseks ega asenda spetsialisti otsest konsultatsiooni 
              teie konkreetse situatsiooni osas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">2. Intellektuaalomand</h2>
            <p>
              Kogu veebilehel olev sisu (sealhulgas tekstid, disain, graafika, logod, pildid ja tarkvara) kuulub 
              NAVIK OÜ-le ning on kaitstud autoriõiguse ja muude intellektuaalomandi õigustega. 
              Sisu loata kopeerimine, levitamine või muutmine on keelatud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">3. Vastutuse piirang</h2>
            <p>
              NAVIK OÜ ei vastuta võimalike kahjude eest, mis võivad tekkida veebilehe kasutamisest või 
              seal esitatud teabele tuginemisest. Rakendame parimaid mõistlikke jõupingutusi veebilehe 
              katkematu ja turvalise töö tagamiseks, kuid ei osuta otseseid garantiisid süsteemide absoluutsele toimivusele.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">4. Kolmandate osapoolte lingid</h2>
            <p>
              Meie veebileht võib sisaldada viiteid välislinkidele. NAVIK OÜ ei kontrolli ega vastuta kolmandate osapoolte 
              lehtede sisu ja turvalisuse eest ning need lingid on esitatud vaid teavituse eesmärgil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">5. Tingimuste muutmine</h2>
            <p>
              NAVIK OÜ jätab endale õiguse neid kasutustingimusi igal ajal ette teatamata uuendada. 
              Muudatused jõustuvad alates nende avaldamisest sel lehel. Veebilehe edasine kasutamine 
              pärast muudatuste tegemist tähendab uute tingimustega nõustumist.
            </p>
          </section>
          
          <div className="mt-12 pt-8 border-t border-[#C9A027]/30 text-sm text-[#A89E8A]">
            <p>Viimati uuendatud: {new Date().toLocaleDateString('et-EE')}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
