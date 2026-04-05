# NAVIK OÜ — Veebileht

Sõltumatu IT-konsultatsiooni ettevõtte veebileht.  
🌐 **Live:** [kargu.ee/navik](https://kargu.ee/navik) | [navik.ee](https://navik.ee)

---

## Ülevaade

NAVIK OÜ pakub Eesti VKE-dele sõltumatut IT-otsuste auditit, osalise koormusega digijuhtimist ja praktilist AI-automatiseerimist. See repo sisaldab ettevõtte veebiportaali lähtekoodi.

## Tech Stack

| Komponent | Tehnoloogia |
|-----------|-------------|
| Framework | Next.js 16 (App Router, static export) |
| Keel | TypeScript 5 |
| Styling | TailwindCSS 4 |
| Animatsioonid | Framer Motion |
| Hosting | Zone.ee (staatiline) |
| Analytics | GA4 (G-1CQ79NTTPS) |

## Lehed

| Route | Kirjeldus |
|-------|-----------|
| `/` | Avaleht — hero section teenuste tutvustusega |
| `/audit` | IT-otsuse Audit teenuse leht |
| `/digijuht` | Fractional CIO / osalise ajaga digijuht |
| `/ai` | Praktiline AI & Automatiseerimine |
| `/kontakt` | Kontaktivorm |

## Arendamine

```bash
# Installeeri sõltuvused
npm install

# Käivita dev server
npm run dev

# Ava: http://localhost:3000/navik
```

## Build & Deploy

```bash
# Loo staatiline build
npm run build

# Output: ./out/ kaust → lae Zone.ee-sse
```

> **NB:** Projekt kasutab `output: 'export'` ja `basePath: '/navik'`. Kõik geneeritud failid peavad minema kargu.ee serveri `/navik/` alamkausta.

## SEO & AI Discovery

- `public/sitemap.xml` — otsingumootorite kaart
- `public/llms.txt` — AI-agentide discovery fail
- JSON-LD structured data (ProfessionalService schema) — `layout.tsx`
- OpenGraph + Twitter Card meta tagid

## Kontakt

- **Asutaja:** Veiko-Peeter Kargu
- **E-post:** peeter@kargu.ee
- **Registrikood:** 17454389
