import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import QuickBookingBar from './QuickBookingBar';
import { Phone, Instagram, MapPin, Clock, Calendar } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLocale = () => {
    const newLocale = language === 'sr' ? 'en' : 'sr';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  const navLinks = [
    { href: '/', label: language === 'sr' ? 'Početna' : 'Home' },
    { href: '/price', label: language === 'sr' ? 'Cjenovnik' : 'Price List' },
    { href: '/contact', label: language === 'sr' ? 'Kontakt & Lokacija' : 'Contact & Location' },
  ];

  const whatsappMessage = encodeURIComponent(
    language === 'sr'
      ? 'Zdravo, želio/la bih da zakažem termin u salonu Nina D.'
      : 'Hello, I would like to book an appointment at salon Nina D.'
  );
  const whatsappUrl = `https://wa.me/38765601652?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans text-neutral-800 bg-[#faf9f6]">
      {/* Background with subtle luxury overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/graphics/background.png"
          alt="Background"
          fill
          className="object-cover opacity-25 blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/90 via-[#faf9f6]/80 to-[#faf9f6]/95" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/60 border-b border-neutral-200/50 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/graphics/ninalogo.png"
              alt="Frizerski Salon Nina D"
              width={160}
              height={50}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-all duration-200 py-1 relative ${
                    isActive
                      ? 'text-neutral-950 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-neutral-900'
                      : 'text-neutral-600 hover:text-neutral-950 font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="text-xs uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-neutral-700 hover:text-neutral-950 border border-neutral-200/80 transition-all shadow-xs"
              aria-label="Promijeni jezik"
            >
              {language === 'sr' ? 'EN' : 'SR'}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'sr' ? 'Zakaži termin' : 'Book Now'}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 rounded-lg hover:bg-white/60 transition-colors"
              aria-label="Meni"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200/60 bg-white/95 backdrop-blur-xl px-4 py-5 shadow-xl animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base tracking-wider uppercase py-2 px-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-neutral-100 font-semibold text-neutral-950'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-semibold py-3 rounded-xl bg-neutral-900 text-white shadow-sm"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{language === 'sr' ? 'Zakaži termin preko WhatsApp-a' : 'Book via WhatsApp'}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {children}
      </main>

      {/* Luxury Minimalist Footer */}
      <footer className="w-full border-t border-neutral-200/60 bg-white/40 backdrop-blur-md pt-12 pb-24 md:pb-12 mt-16 text-neutral-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Column 1: Brand & Philosophy */}
            <div className="md:col-span-2 space-y-4">
              <Image
                src="/graphics/ninalogo.png"
                alt="Salon Nina D"
                width={140}
                height={45}
                className="h-9 w-auto object-contain"
              />
              <p className="text-sm font-light text-neutral-600 max-w-sm leading-relaxed">
                {language === 'sr'
                  ? 'Frizerski salon posvećen individualnom pristupu, zdravlju kose i modernom stilu. Vaša nova omiljena adresa u Banja Luci.'
                  : 'A hair salon dedicated to individual approach, hair health, and modern styling. Your favorite spot in Banja Luka.'}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-pink-600 hover:border-pink-300 transition-colors shadow-2xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-emerald-600 hover:border-emerald-300 transition-colors shadow-2xs"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </a>
                <a
                  href="tel:+38765601652"
                  className="w-9 h-9 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-neutral-950 transition-colors shadow-2xs"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Working Hours */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-neutral-400" />
                {language === 'sr' ? 'Radno Vrijeme' : 'Working Hours'}
              </h4>
              <ul className="text-xs space-y-1.5 font-light text-neutral-600">
                <li className="flex justify-between">
                  <span>{language === 'sr' ? 'Ponedjeljak – Petak' : 'Monday – Friday'}</span>
                  <span className="font-medium text-neutral-800">08:00 – 19:00</span>
                </li>
                <li className="flex justify-between">
                  <span>{language === 'sr' ? 'Subota' : 'Saturday'}</span>
                  <span className="font-medium text-neutral-800">08:00 – 14:00</span>
                </li>
                <li className="flex justify-between text-neutral-400">
                  <span>{language === 'sr' ? 'Nedjelja' : 'Sunday'}</span>
                  <span>{language === 'sr' ? 'Zatvoreno' : 'Closed'}</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Location & Contact */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-neutral-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-400" />
                {language === 'sr' ? 'Lokacija' : 'Location'}
              </h4>
              <p className="text-xs font-light text-neutral-600 leading-relaxed">
                Karađorđeva 11<br />
                78000 Banja Luka<br />
                Bosna i Hercegovina
              </p>
              <p className="text-xs font-medium text-neutral-800 pt-1">
                Tel: <a href="tel:+38765601652" className="hover:underline">065 601 652</a>
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-neutral-200/50 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-light gap-3">
            <p>© {new Date().getFullYear()} Frizerski salon "Nina D" | Banja Luka. Sva prava zadržana.</p>
            <p className="text-neutral-400">Designed with care & simplicity</p>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Quick Booking Bar for Mobile */}
      <QuickBookingBar language={language} />
    </div>
  );
}
