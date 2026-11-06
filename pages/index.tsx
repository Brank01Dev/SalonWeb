import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { translations } from '../locales/translations';
import Layout from '../components/Layout';
import {
  Sparkles,
  Scissors,
  HeartHandshake,
  ShieldCheck,
  Star,
  ArrowRight,
  MessageCircle,
  Phone,
  Instagram,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      allTranslations: translations,
    },
  };
}

export default function Home({ allTranslations }: { allTranslations: any }) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';

  const whatsappMessage = encodeURIComponent(
    language === 'sr'
      ? 'Zdravo, želio/la bih da zakažem termin u salonu Nina D.'
      : 'Hello, I would like to book an appointment at salon Nina D.'
  );
  const whatsappUrl = `https://wa.me/38765601652?text=${whatsappMessage}`;
  const instagramUrl = 'https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm';
  const phoneUrl = 'tel:+38765601652';

  // Structured Data for Google Local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'Frizerski Salon Nina D',
    image: 'https://frizerskisalonninad.com/photo1.jpeg',
    telephone: '+38765601652',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Karađorđeva 11',
      addressLocality: 'Banja Luka',
      postalCode: '78000',
      addressCountry: 'BA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.771519,
      longitude: 17.179968,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
  };

  const services = [
    {
      title: { sr: 'Balayage & Pramenovi', en: 'Balayage & Highlights' },
      desc: {
        sr: 'Personalizovane tehnike sjenčenja i posvjetljivanja za prirodan prelaz, dimenziju i dugotrajan sjaj.',
        en: 'Custom shading and brightening techniques for seamless transitions and luminous hair.',
      },
      tag: { sr: 'Specijalnost', en: 'Signature' },
      icon: Sparkles,
    },
    {
      title: { sr: 'Precizno Šišanje & Feniranje', en: 'Precision Cut & Blowout' },
      desc: {
        sr: 'Šišanje prilagođeno vašim crtama lica, teksturi kose i svakodnevnom stilu, uz postojano feniranje.',
        en: 'Haircuts tailored to your facial features and routine, finished with a lasting blowout.',
      },
      tag: { sr: 'Za nju', en: 'Women' },
      icon: Scissors,
    },
    {
      title: { sr: 'Tretmani za Oporavak Kose', en: 'Hair Repair Treatments' },
      desc: {
        sr: 'Dubinska hidratacija i regeneracija profesionalnim preparatima koji kosi vraćaju elastičnost i mekoću.',
        en: 'Deep hydration and intensive repair bringing back hair elasticity, softness, and vigor.',
      },
      tag: { sr: 'Njega', en: 'Care' },
      icon: ShieldCheck,
    },
    {
      title: { sr: 'Muško Šišanje & Brada', en: 'Men’s Grooming & Beard' },
      desc: {
        sr: 'Moderne i klasične forme muškog šišanja, fade tehnike i precizno oblikovanje brade.',
        en: 'Modern and classic cuts, fade techniques, and sharp beard detailing.',
      },
      tag: { sr: 'Za njega', en: 'Men' },
      icon: HeartHandshake,
    },
  ];

  const googleMapsReviewsUrl =
    'https://www.google.com/maps/place/Frizerski+salon+Nina+D/@44.7715194,17.1799688,19z/data=!4m6!3m5!1s0x475e039c7a24df77:0xb93943eebeb90e1c!8m2!3d44.7715194!4d17.1799688!16s%2Fg%2F11wvgvck_v';
  const googleWriteReviewUrl =
    'https://search.google.com/local/writereview?placeid=ChIJd98kesEDXkcRHA65vu5DObk';

  return (
    <div>
      <Head>
        <title>
          {language === 'sr'
            ? 'Frizerski Salon Nina D | Banja Luka | Vaša Kosa, Naša Strast'
            : 'Hair Salon Nina D | Banja Luka | Your Hair, Our Passion'}
        </title>
        <meta
          name="description"
          content={
            language === 'sr'
              ? 'Dobrodošli u Frizerski Salon Nina D u Banja Luci (Karađorđeva 11). Vrhunsko šišanje, balayage, pramenovi, koloracija i njega kose. Zakažite termin jednostavno u 1 klik!'
              : 'Welcome to Hair Salon Nina D in Banja Luka (Karadjordjeva 11). Premier haircuts, balayage, highlights, and hair treatments. Book easily in 1 click!'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Layout>
        {/* HERO SECTION */}
        <section className="relative pt-6 sm:pt-12 pb-16 md:pb-24 text-center max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-2xs mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-neutral-600 font-medium">
              Banja Luka • Karađorđeva 11
            </span>
          </div>

          {/* Big Salon Logo */}
          <div className="max-w-[480px] sm:max-w-[540px] mx-auto mb-8 animate-fade-in">
            <Image
              src="/graphics/ninalogo.png"
              width={600}
              height={190}
              alt="Frizerski Salon Nina D Logo"
              className="w-full h-auto drop-shadow-xs mx-auto"
              priority
            />
          </div>

          {/* Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 font-normal tracking-tight leading-tight mb-6">
            {language === 'sr' ? (
              <>
                Mjesto gdje stil susreće{' '}
                <span className="italic font-light text-neutral-700">pažnju i njegu.</span>
              </>
            ) : (
              <>
                Where personal style meets{' '}
                <span className="italic font-light text-neutral-700">crafted care.</span>
              </>
            )}
          </h1>

          {/* Subtext */}
          <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
            {language === 'sr'
              ? 'Posvećeni zdravlju vaše kose, modernim tehnikama koloracije i opuštenoj atmosferi. Rezervišite svoj termin brzo i jednostavno bez komplikacija.'
              : 'Dedicated to your hair’s natural vitality, modern coloring techniques, and an unhurried boutique experience.'}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{language === 'sr' ? 'Zakažite Termin' : 'Book Appointment'}</span>
            </a>

            <Link
              href="/price"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/40 hover:bg-white/60 text-neutral-900 border border-white/50 backdrop-blur-md text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-95"
            >
              <span>{language === 'sr' ? 'Cjenovnik Usluga' : 'View Price List'}</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>
        </section>

        {/* 4 VALUE PILLARS / HIGHLIGHTS */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                title: { sr: 'Individualan Pristup', en: 'Personal Attention' },
                desc: { sr: 'Konsultacije prije svakog tretmana', en: 'Consultation tailored to your hair' },
              },
              {
                title: { sr: 'Top Preparati', en: 'Premium Products' },
                desc: { sr: 'Kvalitetna profesionalna njega', en: 'Top salon-grade formulas' },
              },
              {
                title: { sr: 'Karađorđeva 11', en: 'Central Location' },
                desc: { sr: 'Pristupačna lokacija u Banja Luci', en: 'Convenient spot in Banja Luka' },
              },
              {
                title: { sr: '1-Klik Zakazivanje', en: '1-Click Booking' },
                desc: { sr: 'Preko WhatsApp-a ili pozivom', en: 'Instant via WhatsApp or phone' },
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-4 sm:p-5 text-center border border-white/40"
              >
                <div className="w-2 h-2 rounded-full bg-neutral-900 mx-auto mb-2 opacity-60"></div>
                <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm tracking-wide">
                  {language === 'sr' ? pillar.title.sr : pillar.title.en}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-light mt-1">
                  {language === 'sr' ? pillar.desc.sr : pillar.desc.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SIGNATURE SERVICES */}
        <section className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold bg-white/60 border border-neutral-200/60 px-4 py-1.5 rounded-full inline-block mb-3">
              {language === 'sr' ? 'Izdvojeno iz ponude' : 'Signature Services'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal">
              {language === 'sr' ? 'Usluge kreirane za vaš stil' : 'Services Crafted For You'}
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm font-light mt-2">
              {language === 'sr'
                ? 'Od osvježavanja krajeva do potpunih transformacija boje i stila.'
                : 'From delicate trims to complete color transformations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/40 hover:shadow-lg transition-all group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/40 border border-white/50 backdrop-blur-md flex items-center justify-center text-neutral-900 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/40 border border-white/30 text-neutral-700">
                      {language === 'sr' ? item.tag.sr : item.tag.en}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 mb-2">
                    {language === 'sr' ? item.title.sr : item.title.en}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {language === 'sr' ? item.desc.sr : item.desc.en}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/price"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-neutral-900 hover:text-black hover:gap-3 transition-all"
            >
              <span>{language === 'sr' ? 'Pogledajte sve cijene i dužine kose' : 'Explore full pricing'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* SALON SPACE PREVIEW (MINI GALLERY) */}
        <section className="mb-20 glass-panel rounded-3xl p-6 sm:p-8 border border-white/40 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                {language === 'sr' ? 'Ambijent' : 'The Space'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-neutral-900 mt-1">
                {language === 'sr' ? 'Ugodan i svijetao prostor' : 'Bright, Airy & Relaxed'}
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider font-semibold text-neutral-700 hover:text-neutral-950 inline-flex items-center gap-1.5"
            >
              <span>{language === 'sr' ? 'Više fotografija & Lokacija' : 'More photos & map'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: '/photo1.jpeg', label: 'Salon enterijer' },
              { src: '/photo3.jpeg', label: 'Prostor za feniranje' },
              { src: '/photo4.jpeg', label: 'Detalji i njega' },
            ].map((p, i) => (
              <div
                key={i}
                className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <span className="text-xs text-white font-light tracking-wide">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GOOGLE REVIEWS & TRUST BANNER */}
        <section className="mb-20 glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/40 shadow-xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-neutral-200 shadow-2xs mb-5">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
              <span>Google Maps Ocjena:</span>
              <span className="flex text-amber-500 font-bold">5.0 ★★★★★</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-900 font-normal mb-3">
            {language === 'sr' ? 'Transparentne ocjene naših klijenata' : 'Authentic Reviews on Google'}
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mb-8">
            {language === 'sr'
              ? 'Vjerujemo u potpunu iskrenost i kvalitet. Sve stvarne utiske i ocjene posjetilaca možete pročitati direktno na našem zvaničnom Google Maps profilu, a biće nam drago i da ostavite svoje utiske nakon posjete.'
              : 'We believe in complete honesty and quality. You can browse all genuine client feedback directly on our official Google Maps profile, or leave a review after your visit.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <a
              href={googleMapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <span>{language === 'sr' ? 'Pogledaj recenzije na Google-u' : 'Read Google Reviews'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs uppercase tracking-widest font-semibold transition-all shadow-xs active:scale-95"
            >
              <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
              <span>{language === 'sr' ? 'Ostavi ocjenu' : 'Leave a Review'}</span>
            </a>
          </div>
        </section>

        {/* BOUTIQUE 1-CLICK BOOKING SECTION */}
        <section className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto border border-white/40 shadow-2xl relative overflow-hidden">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full inline-block mb-4">
            {language === 'sr' ? 'Jednostavno & Direktno' : 'Simple & Direct'}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal mb-3">
            {language === 'sr' ? 'Zakažite vaš termin u 1 klik' : 'Book Your Session in 1 Click'}
          </h2>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-lg mx-auto leading-relaxed mb-8">
            {language === 'sr'
              ? 'Nema komplikovanih formulara i registracija. Javite nam se na način koji vam najviše prija — odmah ćemo vam ponuditi slobodne termine.'
              : 'No tedious registrations or account logins. Message us on your favorite channel and reserve your spot instantly.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all group flex flex-col items-center justify-center text-center shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-neutral-900">WhatsApp</span>
              <span className="text-[11px] text-emerald-700 font-medium mt-0.5">
                {language === 'sr' ? 'Brz odgovor' : 'Fast reply'}
              </span>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-pink-50/70 hover:bg-pink-100/70 border border-pink-200 transition-all group flex flex-col items-center justify-center text-center shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-neutral-900">Instagram DM</span>
              <span className="text-[11px] text-pink-700 font-medium mt-0.5">
                {language === 'sr' ? 'Pošaljite sliku' : 'Send inspiration'}
              </span>
            </a>

            {/* Phone Call */}
            <a
              href={phoneUrl}
              className="p-4 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-300 transition-all group flex flex-col items-center justify-center text-center shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-neutral-900">
                {language === 'sr' ? 'Poziv' : 'Call'}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium mt-0.5">065 601 652</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200/60 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-light">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              Pon – Pet: 08:00 – 19:00 | Sub: 08:00 – 14:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              Karađorđeva 11, Banja Luka
            </span>
          </div>
        </section>
      </Layout>
    </div>
  );
}
