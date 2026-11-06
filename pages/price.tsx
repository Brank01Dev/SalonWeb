import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../locales/translations';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { Sparkles, Calendar, MessageCircle, Phone, Info } from 'lucide-react';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      allTranslations: translations,
    },
  };
}

export default function Price({ allTranslations }: { allTranslations: any }) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  const womenServices = [
    {
      name: { sr: 'Šišanje', en: 'Trimming / Haircut' },
      short: '15 KM',
      medium: '15 KM',
      long: '20 KM',
      popular: true,
      desc: { sr: 'Oblikovanje, skraćivanje i definisanje forme', en: 'Shaping, trimming, and definition' },
    },
    {
      name: { sr: 'Pranje i sušenje', en: 'Washing & drying' },
      short: '10 KM',
      medium: '10 KM',
      long: '15 KM',
      desc: { sr: 'Dubinsko pranje uz profesionalnu njegu', en: 'Deep wash with professional care' },
    },
    {
      name: { sr: 'Feniranje', en: 'Blow drying' },
      short: '13 KM',
      medium: '15 – 20 KM',
      long: '20 – 35 KM',
      popular: true,
      desc: { sr: 'Glatka kosa ili feniranje na volumen', en: 'Smooth finish or voluminous styling' },
    },
    {
      name: { sr: 'Pramenovi', en: 'Highlights & Balayage' },
      short: '45 KM',
      medium: '70 KM',
      long: '85 – 120 KM',
      popular: true,
      badge: { sr: 'Najtraženije', en: 'Top Pick' },
      desc: { sr: 'Precizne tehnike posvjetljivanja i sjenčenja', en: 'Precision lightening and shading' },
    },
    {
      name: { sr: 'Farbanje', en: 'Hair coloring' },
      short: '40 KM',
      medium: '55 KM',
      long: '70 – 85 KM',
      desc: { sr: 'Kompletna koloracija uz vrhunske pigmente', en: 'Full color with premium pigments' },
    },
    {
      name: { sr: 'Lokne', en: 'Curls & Waves' },
      short: '—',
      medium: '15 KM',
      long: '20 – 25 KM',
      desc: { sr: 'Talasi ili definisane lokne za svaku priliku', en: 'Waves or defined curls for any occasion' },
    },
    {
      name: { sr: 'Peglanje kose', en: 'Hair straightening' },
      short: '—',
      medium: '15 KM',
      long: '20 – 25 KM',
      desc: { sr: 'Savršeno ravna i sjajna kosa uz termičku zaštitu', en: 'Sleek, straight, heat-protected hair' },
    },
    {
      name: { sr: 'Usluga nanošenja farbe', en: 'Coloring service (application)' },
      short: '5 KM',
      medium: '—',
      long: '—',
      desc: { sr: 'Uslužno farbanje sa vašim preparatom', en: 'Application with your own dye' },
    },
  ];

  const menServices = [
    {
      name: { sr: 'Muško šišanje', en: 'Men’s haircut' },
      price: '14 KM',
      popular: true,
      desc: { sr: 'Klasično ili fade šišanje uz precizne konture', en: 'Classic or fade cut with precise edges' },
    },
    {
      name: { sr: 'Pranje kose', en: 'Hair wash' },
      price: '7 KM',
      desc: { sr: 'Masaža vlasišta i osvježavajući šampon', en: 'Scalp massage and refreshing wash' },
    },
    {
      name: { sr: 'Brijanje', en: 'Shaving' },
      price: '10 KM',
      desc: { sr: 'Tradicionalno brijanje i njega kože lica', en: 'Classic shave and skin soothing' },
    },
    {
      name: { sr: 'Šišanje + pranje kose', en: 'Haircut + Wash' },
      price: '18 KM',
      popular: true,
      desc: { sr: 'Kompletan tretman za svjež izgled', en: 'Full refresh treatment' },
    },
    {
      name: { sr: 'Šišanje + brijanje', en: 'Haircut + Shave' },
      price: '20 KM',
      desc: { sr: 'Kompletno dotjerivanje glave i brade', en: 'Full grooming package' },
    },
    {
      name: { sr: 'Oblikovanje brade i brkova', en: 'Beard & mustache shaping' },
      price: '6 KM',
      desc: { sr: 'Trimer, definisanje linija i ulje za bradu', en: 'Trimming, line definition, and beard oil' },
    },
    {
      name: { sr: 'Šišanje + oblikovanje brade', en: 'Haircut + Beard shaping' },
      price: '18 KM',
      desc: { sr: 'Savršena simetrija frizure i brade', en: 'Complete hair & beard combo' },
    },
  ];

  const whatsappMessage = encodeURIComponent(
    language === 'sr'
      ? 'Zdravo, pogledao/la sam cjenovnik i želio/la bih da zakažem termin.'
      : 'Hello, I viewed your price list and would like to book an appointment.'
  );
  const whatsappUrl = `https://wa.me/38765601652?text=${whatsappMessage}`;

  return (
    <div>
      <Head>
        <title>
          {language === 'sr'
            ? 'Cjenovnik Usluga | Frizerski Salon Nina D Banja Luka'
            : 'Price List | Hair Salon Nina D Banja Luka'}
        </title>
        <meta
          name="description"
          content={
            language === 'sr'
              ? 'Pogledajte transparentan cjenovnik frizerskih usluga Salona Nina D. Žensko i muško šišanje, feniranje, pramenovi, balayage i njega kose u Banja Luci.'
              : 'Browse transparent pricing for hair services at Nina D Salon in Banja Luka. Women and men haircuts, blow dry, highlights, and coloring.'
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold bg-white/60 border border-neutral-200/60 px-4 py-1.5 rounded-full inline-block mb-3">
              {language === 'sr' ? 'Transparentne Cijene' : 'Transparent Pricing'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-normal tracking-tight">
              {language === 'sr' ? 'Cjenovnik Naših Usluga' : 'Services & Price List'}
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base mt-3 font-light leading-relaxed">
              {language === 'sr'
                ? 'Vrhunski kvalitet, profesionalni preparati i posvećenost detaljima. Izaberite kategoriju za pregled cijena.'
                : 'Top quality, professional products, and attention to detail. Select a category below.'}
            </p>

            {/* Category Tabs Switcher */}
            <div className="inline-flex p-1.5 bg-neutral-200/50 backdrop-blur-md rounded-full mt-6 border border-neutral-300/40">
              <button
                onClick={() => setActiveTab('women')}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'women'
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {language === 'sr' ? 'Ženski Cjenovnik' : 'Women’s Services'}
              </button>
              <button
                onClick={() => setActiveTab('men')}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'men'
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {language === 'sr' ? 'Muški Cjenovnik' : 'Men’s Services'}
              </button>
            </div>
          </div>

          {/* Women's Table/Cards */}
          {activeTab === 'women' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-all animate-fade-in">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 mb-6">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-neutral-900">
                    {language === 'sr' ? 'Tretmani i stilizovanje za nju' : 'Styling & Treatments for Women'}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                    {language === 'sr'
                      ? 'Cijene su izražene po dužinama kose (kratka, srednja, duga)'
                      : 'Prices according to hair length (short, medium, long)'}
                  </p>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-neutral-200 text-xs uppercase tracking-widest text-neutral-500 font-medium">
                      <th className="py-3.5 px-4">{language === 'sr' ? 'Usluga' : 'Service'}</th>
                      <th className="py-3.5 px-4 text-center">{language === 'sr' ? 'Kratka kosa' : 'Short'}</th>
                      <th className="py-3.5 px-4 text-center">{language === 'sr' ? 'Srednja kosa' : 'Medium'}</th>
                      <th className="py-3.5 px-4 text-center">{language === 'sr' ? 'Duga kosa' : 'Long'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200/60 text-sm">
                    {womenServices.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/40 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-neutral-900">
                              {language === 'sr' ? item.name.sr : item.name.en}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                {language === 'sr' ? item.badge.sr : item.badge.en}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-500 font-light mt-0.5">
                            {language === 'sr' ? item.desc.sr : item.desc.en}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-center font-medium text-neutral-700">{item.short}</td>
                        <td className="py-4 px-4 text-center font-medium text-neutral-700">{item.medium}</td>
                        <td className="py-4 px-4 text-center font-semibold text-neutral-900">{item.long}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List */}
              <div className="md:hidden space-y-4">
                {womenServices.map((item, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-4 sm:p-5 border border-white/80">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-neutral-900 text-base">
                            {language === 'sr' ? item.name.sr : item.name.en}
                          </h4>
                          {item.badge && (
                            <span className="text-[10px] uppercase tracking-wider font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                              {language === 'sr' ? item.badge.sr : item.badge.en}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 font-light mt-1">
                          {language === 'sr' ? item.desc.sr : item.desc.en}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-neutral-200/60 text-center bg-white/40 rounded-xl p-2.5">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-0.5">
                          {language === 'sr' ? 'Kratka' : 'Short'}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-neutral-800">{item.short}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-0.5">
                          {language === 'sr' ? 'Srednja' : 'Medium'}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-neutral-800">{item.medium}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-0.5">
                          {language === 'sr' ? 'Duga' : 'Long'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-neutral-900">{item.long}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Men's Table/Cards */}
          {activeTab === 'men' && (
            <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-all animate-fade-in">
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200/80 mb-6">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-neutral-900">
                    {language === 'sr' ? 'Usluge za muškarce i brijanje' : 'Men’s Grooming & Styling'}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
                    {language === 'sr' ? 'Klasični i moderni stilovi' : 'Classic and contemporary cuts'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {menServices.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 border border-white/80 flex items-center justify-between gap-4 hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">
                          {language === 'sr' ? item.name.sr : item.name.en}
                        </h4>
                        {item.popular && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full">
                            ★
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 font-light mt-1">
                        {language === 'sr' ? item.desc.sr : item.desc.en}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base sm:text-lg font-bold text-neutral-900 bg-white/70 px-3 py-1.5 rounded-xl border border-neutral-200/60 shadow-2xs">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Helpful Information Notice */}
          <div className="mt-8 p-5 rounded-2xl bg-white/40 border border-neutral-200/60 backdrop-blur-sm flex items-start gap-3.5 text-xs sm:text-sm text-neutral-600 font-light">
            <Info className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>
                {language === 'sr'
                  ? 'Napomena: Cijene feniranja, pramenova i preliva mogu blago varirati u zavisnosti od gustine i trenutnog stanja kose.'
                  : 'Note: Prices for blow drying, coloring, and highlights may slightly vary based on hair density and length.'}
              </p>
              <p className="text-neutral-500">
                {language === 'sr'
                  ? 'Za veće promjene ili konsultacije, stojimo vam na raspolaganju prije samog termina.'
                  : 'For consultations or dramatic hair transformations, feel free to reach out before booking.'}
              </p>
            </div>
          </div>

          {/* Direct CTA Box */}
          <div className="mt-12 glass-panel rounded-3xl p-8 text-center max-w-2xl mx-auto border border-white/80 shadow-lg">
            <h3 className="font-serif text-2xl text-neutral-900">
              {language === 'sr' ? 'Želite zakazati termin?' : 'Ready to book a session?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 font-light mt-2 max-w-md mx-auto">
              {language === 'sr'
                ? 'Pošaljite nam poruku na WhatsApp ili nas pozovite. Rado ćemo vam rezervisati termin u željenom vremenu.'
                : 'Send us a quick WhatsApp message or call us directly. We will gladly reserve your spot.'}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'sr' ? 'Zakaži preko WhatsApp-a' : 'Book on WhatsApp'}</span>
              </a>
              <a
                href="tel:+38765601652"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs uppercase tracking-widest font-semibold transition-all shadow-xs active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>065 601 652</span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
