"use client";

/**
 * NavikLogo — inline SVG logo komponent
 *
 * Kinnitatud logo: N+purje ikoon (must N, kuldne diagonaal-purje kujund)
 * + "Navik" serif tekst paremal.
 *
 * LUKUSTATUD: Logokujundust ei muutu ilma kliendi loata.
 * Stiili muutused (kontrastsus, skaal) tehakse propi kaudu.
 */

interface NavikLogoProps {
  /** Kuvatav kõrgus pikslites (laius arvutatakse automaatselt) */
  height?: number;
  /** Ikoon+tekst (default) või ainult ikoon */
  variant?: "full" | "icon";
  /** 'dark' = cream/gold (tumeda tausta jaoks), 'light' = must (heleda tausta jaoks) */
  scheme?: "dark" | "light";
  className?: string;
}

export function NavikLogo({
  height = 56,
  variant = "full",
  scheme = "dark",
  className,
}: NavikLogoProps) {
  // Värvid vastavalt värviskeemile
  const nColor = scheme === "dark" ? "#F8F5EE" : "#1A1A18"; // N tähe värv
  const sailColor = "#C9A027"; // kuldne purje — muutumatu mõlema teema jaoks
  const textColor = scheme === "dark" ? "#F8F5EE" : "#1A1A18"; // "Navik" tekst

  // SVG viewBox: 0 0 260 80
  // Ikoon (N+purje): x=0..70, y=0..80
  // Tekst "Navik": x=85..260

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 80 80"
        height={height}
        style={{ width: "auto" }}
        aria-label="Navik logo"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* N täht — kaks vertikaalset jalga + diagonaal */}
        <rect x="4" y="12" width="10" height="56" fill={nColor} rx="1" />
        <rect x="56" y="12" width="10" height="56" fill={nColor} rx="1" />
        <polygon points="4,12 14,12 66,68 56,68" fill={nColor} />
        {/* Purje kujund — kuldne diagonaalne kaare + nool */}
        <path
          d="M22 62 Q40 4 62 10"
          stroke={sailColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M58 4 L68 14 L54 16 Z"
          fill={sailColor}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 290 80"
      height={height}
      style={{ width: "auto" }}
      aria-label="Navik — Piirideta potentsiaal"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Ikoon: N täht ── */}
      <rect x="4" y="12" width="10" height="56" fill={nColor} rx="1" />
      <rect x="56" y="12" width="10" height="56" fill={nColor} rx="1" />
      <polygon points="4,12 14,12 66,68 56,68" fill={nColor} />

      {/* ── Ikoon: Kuldne purje/nool ── */}
      <path
        d="M22 62 Q40 4 62 10"
        stroke={sailColor}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M58 4 L68 14 L54 16 Z" fill={sailColor} />

      {/* ── Tekst: "Navik" ── */}
      <text
        x="88"
        y="58"
        fontFamily="Georgia, 'Cormorant Garamond', serif"
        fontSize="48"
        fontWeight="400"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Navik
      </text>
    </svg>
  );
}
