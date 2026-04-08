'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';

function GAAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && 'gtag' in window) {
      // Manual trigger for client-side routing
      // window.location is used so basePath is naturally included
      type GtagWindow = typeof window & { gtag: (...args: unknown[]) => void };
      (window as GtagWindow).gtag('config', 'G-1CQ79NTTPS', {
        page_path: window.location.pathname + window.location.search,
        content_group: 'Navik'
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1CQ79NTTPS"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1CQ79NTTPS', {
            page_path: window.location.pathname + window.location.search,
            content_group: 'Navik'
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <GAAnalytics />
      </Suspense>
    </>
  );
}
