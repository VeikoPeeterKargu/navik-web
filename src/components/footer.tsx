import Link from 'next/link';
import { NavikLogo } from '@/components/logo';

const footerLinks = {
    Teenused: [
        { name: 'Vale IT-Otsuse Audit', href: '/audit' },
        { name: 'Osalise ajaga Digijuht', href: '/digijuht' },
        { name: 'Praktiline AI', href: '/audit' },
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
                            <a href="mailto:peeter@kargu.ee" className="hover:text-[#C9A027] transition-colors block">peeter@kargu.ee</a>
                            <a href="tel:+3725067651" className="hover:text-[#C9A027] transition-colors block">+372 50 67 651</a>
                            <span className="block">Tallinn, Eesti</span>
                        </address>
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
                        {['Privaatsuspoliitika', 'Kasutustingimused'].map((t) => (
                            <Link
                                key={t}
                                href="#"
                                className="text-xs text-[#5A5248] hover:text-[#C9A027] transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {t}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
