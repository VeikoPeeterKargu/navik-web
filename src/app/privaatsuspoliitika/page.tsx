import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privaatsuspoliitika | NAVIK OÜ",
  description: "NAVIK OÜ privaatsuspoliitika ja andmekaitse.",
};

export default function PrivaatsuspoliitikaPage() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1A1A18] py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 
          className="text-4xl md:text-5xl font-light mb-12 border-b border-[#C9A027]/30 pb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Privaatsuspoliitika
        </h1>
        
        <div 
          className="space-y-8 text-[1.05rem] leading-relaxed text-[#4A4236]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <p>
            NAVIK OÜ (edaspidi "meie" või "ettevõte") hindab teie privaatsust kõrgelt ning 
            rakendab asjakohaseid meetmeid teie isikuandmete kaitsmiseks vastavalt 
            isikuandmete kaitse üldmäärusele (GDPR) ja teistele asjakohastele õigusaktidele.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">1. Vastutav töötleja</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ärinimi:</strong> NAVIK OÜ</li>
              <li><strong>Registrikood:</strong> 16932057</li>
              <li><strong>E-post:</strong> peeter@kargu.ee</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">2. Kogutavad andmed ja eesmärk</h2>
            <p className="mb-2">Kogume andmeid peamiselt siis, kui võtate meiega ühendust meie veebilehe kaudu (näiteks kasutades kontaktivormi või broneerides konsultatsiooni).</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Andmed:</strong> Nimi, e-posti aadress, ettevõte, sõnumi sisu.</li>
              <li><strong>Eesmärk:</strong> Päringutele vastamine, teenuste osutamine ja vajadusel kliendisuhete haldamine (nt pakkumiste tegemine).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">3. Andmete edastamine ja jagamine</h2>
            <p>
              Me ei müü, rendi ega jada teie isikuandmeid kolmandatele osapooltele turunduseesmärkidel. 
              Võime jagada andmeid usaldusväärsete partneritega (nt IT-teenuse pakkujad, juriidilised nõustajad), 
              kellega koos me töötame ja kes omakorda tagavad andmete konfidentsiaalsuse tagamise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">4. Küpsised (Cookies)</h2>
            <p>
              Meie veebileht kasutab küpsiseid, et pakkuda parimat kasutajakogemust ning analüüsida 
              veebiliiklust. Kasutajatel on võimalik oma brauseris küpsistest keelduda, hallates 
              seda meie spetsiaalsest nõusolekute bännerist veebilehe allservas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#1A1A18]">5. Teie õigused</h2>
            <p className="mb-2">Teil on õigus:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Taotleda juurdepääsu meie poolt kogutud teie isikuandmetele;</li>
              <li>Nõuda andmete parandamist, kui need on ebatäpsed;</li>
              <li>Nõuda isikuandmete kustutamist ("õigus olla unustatud");</li>
              <li>Võtta tagasi varasemalt antud nõusolek isikuandmete töötlemiseks.</li>
            </ul>
          </section>
          
          <div className="mt-12 pt-8 border-t border-[#C9A027]/30 text-sm text-[#A89E8A]">
            <p>Viimati uuendatud: katab nõuded seisuga {new Date().toLocaleDateString('et-EE')}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
