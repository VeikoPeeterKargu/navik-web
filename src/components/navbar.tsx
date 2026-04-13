'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { NavikLogo } from './logo';

/*
  LOGO: kasutatakse logo.tsx NavikLogo komponenti mis kasutab kinnitatud PNG faile.
  variant='light' = hele logo (tume taust) = 7-Navik-tagline-tume-taust.png
  EI TOHI muuta logo valikut ilma kliendi loata.
*/

const LEFT_NAV = [
  { name: 'IT-Audit', href: '/audit' },
  { name: 'Digijuht', href: '/digijuht' },
  { name: 'Praktiline AI', href: '/ai' },
];
const RIGHT_NAV = [
  { name: 'Veeb', href: '/veeb' },
  { name: 'Kogemus', href: '/#kogemus' },
  { name: 'Kontakt', href: '/#footer-contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        isScrolled
          ? 'bg-[#1A1A18]/96 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      {/* ── Main nav row ── */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-14 h-28 flex items-center">

        {/* LEFT links */}
        <nav className="hidden md:flex items-center gap-10 flex-1">
          {LEFT_NAV.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
        </nav>

        {/* CENTER — kinnitatud logo PNG (7-Navik-tagline-tume-taust) */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            aria-label="Navik — avaleht"
            className="flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <NavikLogo variant="light" height={81} />
          </Link>
        </div>

        {/* RIGHT links + CTA */}
        <nav className="hidden md:flex items-center gap-10 flex-1 justify-end">
          {RIGHT_NAV.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
          <Link
            href="/kontakt"
            className="text-[#C9A027] text-[1.07rem] tracking-[0.12em] border-b border-[#C9A027]/50 pb-0.5 hover:border-[#C9A027] transition-all duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            → Võta ühendust
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-[#F8F5EE] hover:text-[#C9A027] transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüü"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Gold hairline separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A027]/40 to-transparent" />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#1A1A18] border-t border-[#2A2820] px-8 py-10 flex flex-col gap-2"
          >
            {[...LEFT_NAV, ...RIGHT_NAV].map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.href === '/veeb' ? (
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block text-2xl font-light py-4 border-b border-[#2A2820] transition-colors',
                      pathname === item.href ? 'text-[#C9A027]' : 'text-[#F8F5EE] hover:text-[#C9A027]'
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block text-2xl font-light py-4 border-b border-[#2A2820] transition-colors',
                      pathname === item.href ? 'text-[#C9A027]' : 'text-[#F8F5EE] hover:text-[#C9A027]'
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-6"
            >
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="inline-block text-[#C9A027] text-base tracking-wide border-b border-[#C9A027]/50 pb-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                → Võta ühendust
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ item, pathname }: { item: { name: string; href: string }; pathname: string }) {
  const isActive = pathname === item.href;
  // /veeb on staatiline HTML (public/veeb/), vajab täislehe navigatsiooni
  const isStatic = item.href === '/veeb';
  const Tag = isStatic ? 'a' : Link;
  const linkProps = isStatic ? { href: item.href } : { href: item.href };
  return (
    <Tag
      {...linkProps}
      className={cn(
        'relative text-[1.07rem] tracking-[0.1em] transition-colors pb-0.5',
        isActive ? 'text-[#C9A027]' : 'text-[#F8F5EE]/85 hover:text-[#F8F5EE]'
      )}
      style={{ fontFamily: 'var(--font-body)' }}
    >
      {item.name}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A027]"
          initial={false}
          transition={{ type: 'spring', stiffness: 350, damping: 32 }}
        />
      )}
    </Tag>
  );
}
