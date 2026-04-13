# Infrastruktuuri arhitektuur — aprill 2026

## Ülevaade

Veiko-Peeter Kargu veebilehed jagunevad kahte loogilisse gruppi:
- **Isiklik** (kargu.ee + alamlehed) → Zone.ee Apache
- **Äri** (navik.ee + kõik teenuslehed) → Vercel CDN

## kargu.ee (Zone.ee — 217.146.69.16)

Isiklik portfoolio + purjereisid + okas.

| URL | Sisu | Repo |
|-----|------|------|
| kargu.ee | Isiklik portfoolio | VeikoPeeterKargu/kargu.ee |
| kargu.ee/purjereisid/ | Purjereisid & katamaraani rent | VeikoPeeterKargu/purjereisid |
| kargu.ee/okas/ | Evald Okas erakogu | VeikoPeeterKargu/okas |

**Deploy:** GH Actions → FTP (iga repo oma alamkausta)  
**Redirect'id (.htaccess):** /navik/* → navik.ee, /veeb/* → navik.ee/veeb

## navik.ee (Vercel — 76.76.21.21)

Navik OÜ äri, sh kodulehtede teenus.

| URL | Sisu |
|-----|------|
| navik.ee | Avaleht — konsultatsioon |
| navik.ee/audit | IT-audit teenus |
| navik.ee/digijuht | Osalise ajaga digijuht |
| navik.ee/ai | Praktiline AI |
| navik.ee/kontakt | Kontaktvorm |
| navik.ee/veeb | Kodulehtede Vabrik müügileht (staatiline, public/veeb/) |
| navik.ee/manifest | Peidetud landing ("7 tõde") |
| navik.ee/riskid | Peidetud landing ("10 klauslit") |

**Deploy:** Vercel autodeploy (git push origin main)  
**Repo:** VeikoPeeterKargu/navik-web (Next.js SSR)

## Reeglid

1. **Iga domään = üks repo = üks hosting = üks deploy pipeline.**
2. **navik-web deployib AINULT Vercelisse.** Mitte kunagi FTP kaudu Zone.ee peale.
3. **Zone.ee FTP:** Iga repo kirjutab AINULT oma alamkausta.
4. **Ristviited:** kargu.ee → navik.ee (MITTE kargu.ee/navik/).
5. **Kliendilehed:** Eraldi repo igal kliendil, kliendi enda serveril.
