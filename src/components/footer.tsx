'use client';

import Link from 'next/link';
import { NavikLogo } from '@/components/logo';

type GtagWindow = typeof window & { gtag: (...args: unknown[]) => void };

function trackEvent(eventName: string, label: string) {
    if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as GtagWindow).gtag('event', eventName, {
            event_category: 'conversion',
            event_label: label
        });
    }
}

const footerLinks = {
    Teenused: [
        { name: 'Vale IT-Otsuse Audit', href: '/audit' },
        { name: 'Osalise ajaga Digijuht', href: '/digijuht' },
        { name: 'Praktiline AI', href: '/ai' },
    ],
    Ettevõte: [
        { name: 'Meist', href: '/meist' },
        { name: 'Kontakt', href: '/kontakt' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-[#111110] text-[#F8F5EE]">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-[#2A2820]">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <NavikLogo variant="light" size="md" className="mb-7" />
                        <p
                            className="text-[#8A8070] text-sm leading-relaxed max-w-xs"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Aitame omanikel ja tegevjuhtidel navigeerida keerulistes IT-otsustes ning viia digiprojektid edukalt lõpuni.
                        </p>
                    </div>

                    {/* Teenused */}
                    <div>
                        <p
                            className="text-[#C9A027] text-xs tracking-[0.2em] uppercase mb-5"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Teenused
                        </p>
                        <ul className="space-y-3">
                            {footerLinks.Teenused.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[#7A7060] hover:text-[#F8F5EE] transition-colors"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div id="footer-contact">
                        <p
                            className="text-[#C9A027] text-xs tracking-[0.2em] uppercase mb-5"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Navik OÜ
                        </p>
                        <address
                            className="not-italic text-[#8A8070] text-sm leading-loose"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <span className="block">Registrikood: 17454389</span>
                            <a href="mailto:peeter@kargu.ee" className="hover:text-[#C9A027] transition-colors block" onClick={() => trackEvent('email_klikk', 'footer_email')}>peeter@kargu.ee</a>
                            <a href="tel:+3725067651" className="hover:text-[#C9A027] transition-colors block" onClick={() => trackEvent('telefon_klikk', 'footer_telefon')}>+372 50 67 651</a>
                            <span className="block">Tallinn, Eesti</span>
                        </address>
                        <a
                            href="https://www.linkedin.com/company/navik-o%C3%BC/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 text-sm text-[#7A7060] hover:text-[#C9A027] transition-colors"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p
                        className="text-xs text-[#5A5248]"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        © {new Date().getFullYear()} Navik OÜ. Kõik õigused kaitstud.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privaatsuspoliitika"
                            className="text-xs text-[#5A5248] hover:text-[#C9A027] transition-colors"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Privaatsuspoliitika
                        </Link>
                        <Link
                            href="/kasutustingimused"
                            className="text-xs text-[#5A5248] hover:text-[#C9A027] transition-colors"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Kasutustingimused
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
