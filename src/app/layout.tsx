import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://kargu.ee/navik";

export const metadata: Metadata = {
  title: "Navik OÜ | Piirideta Potentsiaal — Sõltumatu Digijuht & IT-audit",
  description:
    "Aitan VKE-del vältida kalleid IT-vigu. Sõltumatu IT-otsuste audit, osalise ajaga digijuht ja praktiline AI-automatiseerimine. Esimene konsultatsioon tasuta.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Navik OÜ | Piirideta Potentsiaal — Sõltumatu Digijuht & IT-audit",
    description:
      "Aitan VKE-del vältida kalleid IT-vigu. Sõltumatu IT-otsuste audit, osalise ajaga digijuht ja AI-automatiseerimine.",
    url: SITE_URL,
    siteName: "Navik OÜ",
    locale: "et_EE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1024,
        height: 1024,
        alt: "Navik OÜ — Sõltumatu Digijuht & IT-audit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navik OÜ | Piirideta Potentsiaal — Sõltumatu Digijuht & IT-audit",
    description:
      "Aitan VKE-del vältida kalleid IT-vigu. Esimene konsultatsioon tasuta.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Navik OÜ",
    url: "https://kargu.ee/navik",
    description:
      "Sõltumatu IT-otsuste audit ja osalise ajaga digijuhtimine Eesti VKE-dele. Aitan vältida kalleid IT-vigu ERP, CRM ja WMS lahenduste soetamisel.",
    founder: {
      "@type": "Person",
      name: "Veiko-Peeter Kargu",
      jobTitle: "Sõltumatu Digijuht & IT-audiitor",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tallinn",
      addressCountry: "EE",
    },
    areaServed: "EE",
    serviceType: [
      "IT-otsuste Audit",
      "Fractional CIO",
      "Sõltumatu Digijuht",
      "AI Automatiseerimine",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Navik OÜ teenused",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vale IT-otsuse Audit",
            description:
              "2-nädalane sõltumatu analüüs enne uue tarkvara (ERP, CRM, WMS) ostmist.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sõltumatu Digijuht (Fractional CIO)",
            description:
              "Osalise koormusega IT-strateegia juhtimine ja IT-partnerite haldus.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Praktiline AI & Automatiseerimine",
            description:
              "Rutiinsete käsitöö-protsesside automatiseerimine lihtsate tööriistadega.",
          },
        },
      ],
    },
  };

  return (
    <html lang="et">
      <body className={`${cormorant.variable} ${jakarta.variable} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

