import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../locales/translations';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Head from 'next/head';
import { MapPin, Clock, Phone, Instagram, Navigation, Sparkles } from 'lucide-react';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      allTranslations: translations,
    },
  };
}

export default function Contact({ allTranslations }: { allTranslations: any }) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';

  const photos = [
    { src: '/photo1.jpeg', label: 'Salon enterijer' },
    { src: '/photo3.jpeg', label: 'Prostor za rad' },
    { src: '/photo4.jpeg', label: 'Ugodna atmosfera' },
  ];

  const googleMapsUrl = 'https://maps.app.goo.gl/9bN6C5yK6P4W8V9B7';
  const whatsappUrl = 'https://wa.me/38765601652?text=' + encodeURIComponent(
    language === 'sr'
      ? 'Zdravo, želio/la bih da zakažem termin u salonu Nina D.'
      : 'Hello, I would like to book an appointment at salon Nina D.'
  );

  return (
    <div>
      <Head>
        <title>
          {language === 'sr'
            ? 'Kontakt & Lokacija | Frizerski Salon Nina D Banja Luka'
            : 'Contact & Location | Hair Salon Nina D Banja Luka'}
        </title>
        <meta
          name="description"
          content={
            language === 'sr'
              ? 'Posjetite nas na adresi Karađorđeva 11, Banja Luka. Telefon: 065 601 652. Radno vrijeme, lokacija na mapi i brzo zakazivanje termina.'
              : 'Visit Hair Salon Nina D at Karadjordjeva 11, Banja Luka. Phone: +387 65 601 652. Working hours and fast booking.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold bg-white/60 border border-neutral-200/60 px-4 py-1.5 rounded-full inline-block mb-3">
              {language === 'sr' ? 'Dobrodošli' : 'Welcome'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
              {language === 'sr' ? 'Kontakt & Lokacija' : 'Contact & Find Us'}
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
              {language === 'sr'
                ? 'Nalazimo se u Karađorđevoj ulici u Banja Luci. Pogledajte naš prostor ili nas kontaktirajte za rezervaciju termina.'
                : 'Located at Karadjordjeva street in Banja Luka. Tour our space or get in touch to book your appointment.'}
            </p>
          </div>

          {/* Photos Swiper Slider */}
          <div className="mb-12 glass-panel p-3 sm:p-4 rounded-3xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
                {language === 'sr' ? 'Pogled u naš salon' : 'A glimpse inside'}
              </span>
              <span className="text-[11px] text-neutral-400 font-light">
                {language === 'sr' ? 'Prevucite za više slika' : 'Swipe for more'}
              </span>
            </div>

            <Swiper
              className="rounded-2xl overflow-hidden"
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              speed={1200}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {photos.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group overflow-hidden rounded-2xl bg-neutral-100">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs text-white font-light tracking-wide">{item.label}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid: Contact Information & Google Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Contact Info Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Address Card */}
              <div className="glass-card rounded-2xl p-6 border border-white/80 hover:shadow-md transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-900 text-white rounded-2xl shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                      {language === 'sr' ? 'Adresa Salona' : 'Salon Address'}
                    </h3>
                    <p className="text-base font-semibold text-neutral-900">
                      Karađorđeva 11
                    </p>
                    <p className="text-xs text-neutral-500 font-light mt-0.5">
                      78000 Banja Luka, BiH
                    </p>
                    <a
                      href="https://maps.google.com/?q=Frizerski+salon+Nina+D+Karadjordjeva+11+Banja+Luka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-900 font-semibold mt-3 hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{language === 'sr' ? 'Pokreni navigaciju' : 'Get directions'}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="glass-card rounded-2xl p-6 border border-white/80 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neutral-900 text-white rounded-2xl shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                        {language === 'sr' ? 'Radno Vrijeme' : 'Working Hours'}
                      </h3>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                        {language === 'sr' ? 'Otvoreno' : 'Open'}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between font-light">
                        <span className="text-neutral-600">{language === 'sr' ? 'Ponedjeljak – Petak:' : 'Monday – Friday:'}</span>
                        <span className="font-semibold text-neutral-900">08:00 – 19:00</span>
                      </div>
                      <div className="flex justify-between font-light">
                        <span className="text-neutral-600">{language === 'sr' ? 'Subota:' : 'Saturday:'}</span>
                        <span className="font-semibold text-neutral-900">08:00 – 14:00</span>
                      </div>
                      <div className="flex justify-between font-light text-neutral-400 pt-1 border-t border-neutral-200/50">
                        <span>{language === 'sr' ? 'Nedjelja:' : 'Sunday:'}</span>
                        <span>{language === 'sr' ? 'Zatvoreno' : 'Closed'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking & Channels Card */}
              <div className="glass-card rounded-2xl p-6 border border-white/80">
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                  {language === 'sr' ? 'Zakažite Termin' : 'Direct Booking'}
                </h3>

                <div className="space-y-2">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-900 block">WhatsApp</span>
                        <span className="text-[11px] text-neutral-500">065 601 652</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {language === 'sr' ? 'Poruka' : 'Chat'}
                    </span>
                  </a>

                  {/* Viber */}
                  <a
                    href="viber://chat?number=%2B38765601652"
                    className="flex items-center justify-between p-3 rounded-xl bg-purple-50/70 hover:bg-purple-100/70 border border-purple-200/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7360f2] text-white flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-900 block">Viber</span>
                        <span className="text-[11px] text-neutral-500">065 601 652</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-purple-700">Viber Chat</span>
                  </a>

                  {/* Phone Call */}
                  <a
                    href="tel:+38765601652"
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-900 block">
                          {language === 'sr' ? 'Direktan Poziv' : 'Phone Call'}
                        </span>
                        <span className="text-[11px] text-neutral-500">065 601 652</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-neutral-700">Pozovi</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-pink-50/50 hover:bg-pink-100/60 border border-pink-200/60 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-neutral-900 block">Instagram</span>
                        <span className="text-[11px] text-neutral-500">@frizerskisalon_nina_d</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-pink-700">Prati nas</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Google Map (7 Cols) */}
            <div className="lg:col-span-7 glass-panel p-3 sm:p-4 rounded-3xl shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 mb-2">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                  {language === 'sr' ? 'Google Mapa & Lokacija' : 'Interactive Map'}
                </span>
                <span className="text-xs text-neutral-400 font-light">Karađorđeva 11</span>
              </div>
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden border border-neutral-200/60 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.32077300035897!2d17.17996884703554!3d44.77151939515941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e039c7a24df77%3A0xb93943eebeb90e1c!2sFrizerski%20salon%20Nina%20D!5e0!3m2!1sen!2sch!4v1766321617724!5m2!1sen!2sch"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Frizerski Salon Nina D Lokacija"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
