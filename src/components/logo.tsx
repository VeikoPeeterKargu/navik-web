import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * NavikLogo — kinnitatud logo komponent
 *
 * Kasutab täpset pixel-crop-i et näidata ainult logo sisu
 * 640×640px PNG canvasest, ilma üleliigse tühja ruumita.
 *
 * Tumeda (navbar/footer) jaoks: 7-Navik-tagline-tume-taust.png
 *   Logo sisu: x=32..607, y=192..399 → 575×207 px
 *
 * Heleda tausta jaoks: 2-Navik-wordmark.png
 *   Logo sisu: x=15..625, y=192..411 → 610×219 px
 *
 * LUKUSTATUD: ei muuda ilma kliendi loata.
 */

// Crop koordinaadid tumeda versiooni jaoks (7-Navik-tagline-tume-taust.png)
const DARK_CROP = { x: 32, y: 188, w: 576, h: 215, imgW: 640, imgH: 640 };
// Crop koordinaadid heleda versiooni jaoks (2-Navik-wordmark.png)
const LIGHT_CROP = { x: 15, y: 188, w: 610, h: 225, imgW: 640, imgH: 640 };

interface NavikLogoProps {
  className?: string;
  /** Kuvamise kõrgus pikslites */
  height?: number;
  /** 'light' = tume logo heledale taustale | 'dark' = hele logo tumedale taustale */
  variant?: 'dark' | 'light';
  /** Tagasiühilduvus — ignoreeritakse kui height on antud */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** @deprecated — enam ei kasutata */
  iconOnly?: boolean;
  /** @deprecated */
  context?: string;
}

function resolveHeight(size?: string, height?: number): number {
  if (height) return height;
  const map: Record<string, number> = { sm: 28, md: 36, lg: 48, xl: 64 };
  return map[size ?? 'md'] ?? 36;
}

export function NavikLogo({ className, height, size, variant = 'light' }: NavikLogoProps) {
  const displayH = resolveHeight(size, height);

  const useDark = variant === 'light'; // 'light' variant = tume taust → kasuta heledaid värve
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const src = useDark
    ? `${basePath}/logod/7-Navik-tagline-tume-taust.png`
    : `${basePath}/logod/2-Navik-wordmark.png`;
  const crop = useDark ? DARK_CROP : LIGHT_CROP;

  const scale = displayH / crop.h;
  const displayW = Math.round(crop.w * scale);
  const bgW = Math.round(crop.imgW * scale);
  const bgH = Math.round(crop.imgH * scale);
  const bgX = -Math.round(crop.x * scale);
  const bgY = -Math.round(crop.y * scale);

  return (
    <div
      className={cn('inline-block select-none flex-shrink-0', className)}
      style={{
        width: displayW,
        height: displayH,
        backgroundImage: `url(${src})`,
        backgroundSize: `${bgW}px ${bgH}px`,
        backgroundPosition: `${bgX}px ${bgY}px`,
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
      role="img"
      aria-label="Navik logo"
    />
  );
}

/** Wrapper lingiga — kasutamiseks Navbaris */
export function NavikLogoLink({ className, height, size, variant }: NavikLogoProps) {
  return (
    <Link href="/" className={cn('flex items-center', className)} aria-label="Navik — avaleht">
      <NavikLogo height={height} size={size} variant={variant} />
    </Link>
  );
}
