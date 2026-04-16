'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollTracker() {
    const firedRef = useRef(false);
    const pathname = usePathname();

    useEffect(() => {
        firedRef.current = false; // reset on page change

        const handleScroll = () => {
            if (firedRef.current) return;

            const scrollPercentage =
                (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;

            if (scrollPercentage >= 0.9) {
                firedRef.current = true;
                if (typeof window !== 'undefined' && 'gtag' in window) {
                    type GtagWindow = typeof window & { gtag: (...args: unknown[]) => void };
                    (window as GtagWindow).gtag('event', 'scroll_90', {
                        event_category: 'engagement',
                        event_label: pathname,
                        non_interaction: true
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return null;
}
