import React, { useState } from 'react';
import { Phone, Instagram, Calendar, X, Clock, MapPin } from 'lucide-react';

interface QuickBookingBarProps {
  language?: string;
}

export default function QuickBookingBar({ language = 'sr' }: QuickBookingBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    language === 'sr'
      ? 'Zdravo, želio/la bih da se raspitam za slobodan termin u salonu Nina D.'
      : 'Hello, I would like to inquire about an available appointment at salon Nina D.'
  );

  const whatsappUrl = `https://wa.me/38765601652?text=${whatsappMessage}`;
  const instagramUrl = 'https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm';
  const phoneUrl = 'tel:+38765601652';

  return (
    <>
      {/* Floating Bottom Bar for Mobile */}
      <aside aria-label="Brzo zakazivanje" className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <div className="bg-neutral-900/90 text-white backdrop-blur-xl rounded-full p-2 pl-4 pr-2 shadow-2xl border border-white/20 flex items-center justify-between gap-3 max-w-md mx-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 text-left flex-1"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                {language === 'sr' ? 'Brzo zakazivanje' : 'Quick Booking'}
              </p>
              <p className="text-sm font-semibold text-white tracking-wide">
                {language === 'sr' ? 'Zakaži termin' : 'Book Appointment'}
              </p>
            </div>
          </button>

          <div className="flex items-center gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-full transition-transform active:scale-95 shadow-md flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            <a
              href={phoneUrl}
              className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-transform active:scale-95 border border-white/10 flex items-center justify-center"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* Booking Options Modal (Desktop & Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-white/80 relative text-gray-900">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
              aria-label="Zatvori"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {language === 'sr' ? 'Jednostavno & Direktno' : 'Easy & Direct'}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal mt-3 text-neutral-900">
                {language === 'sr' ? 'Rezervišite termin' : 'Book an Appointment'}
              </h3>
              <p className="text-sm text-neutral-600 mt-2 font-light leading-relaxed">
                {language === 'sr'
                  ? 'Svakom klijentu pristupamo individualno. Javite nam se na način koji vam najviše odgovara:'
                  : 'We tailor every service individually. Contact us via your preferred channel:'}
              </p>
            </div>

            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/60 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">WhatsApp</h4>
                    <p className="text-xs text-neutral-500">
                      {language === 'sr' ? 'Najbrži odgovor uz poruku' : 'Quick reply & chat'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full group-hover:bg-emerald-200 transition-colors">
                  {language === 'sr' ? 'Preporučeno' : 'Recommended'}
                </span>
              </a>

              {/* Instagram DM */}
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-pink-50/60 hover:bg-pink-100/60 border border-pink-200/60 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">Instagram DM</h4>
                    <p className="text-xs text-neutral-500">
                      {language === 'sr' ? 'Pošaljite sliku željene frizure' : 'Send us photo inspirations'}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-rose-700">@frizerskisalon_nina_d</span>
              </a>

              {/* Phone call */}
              <a
                href={phoneUrl}
                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/80 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">
                      {language === 'sr' ? 'Telefonski poziv' : 'Phone Call'}
                    </h4>
                    <p className="text-xs text-neutral-500">065 601 652</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-neutral-700">
                  {language === 'sr' ? 'Pozovite' : 'Call now'}
                </span>
              </a>
            </div>

            {/* Working hours reminder */}
            <div className="mt-5 pt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                Pon - Pet: 08:00 - 19:00 | Sub: 08:00 - 14:00
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                Karađorđeva 11
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
