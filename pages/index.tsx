import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { translations } from '../locales/translations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      allTranslations: translations,
    },
  };
}

import { useRouter } from 'next/router';

export default function Home({ allTranslations }: { allTranslations: any }) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setShowResult(true);
  }, []);

  const toggleLocale = () => {
    const newLocale = language === "sr" ? "en" : "sr";
    router.push('/', '/', { locale: newLocale });
  };

  const content = allTranslations[language];

  if (!showResult) return null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans text-gray-800">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/graphics/background.png"
          alt="Background"
          fill
          className="object-cover opacity-30 blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>


      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={toggleLocale}
          className="text-base font-light tracking-widest hover:text-black transition-all duration-200 uppercase bg-gray-200/60 backdrop-blur-md border border-gray-300/20 shadow-lg px-6 py-2 rounded-full"
        >
          {language === 'sr' ? 'SR | EN' : 'SR | EN'}
        </button>
      </div>


      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">


        <div className="mb-20 w-full max-w-[600px] animate-fade-in">
          <Image
            src="/graphics/ninalogo.png"
            width={600}
            height={190}
            alt="Nina Salon Logo"
            className="w-full h-auto drop-shadow-sm"
            priority
          />
        </div>


        <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-16 text-lg font-light tracking-widest uppercase mb-16">
          <Link href="/" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Početna' : 'Home'}
          </Link>
          <Link href="/price" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Cjenovnik' : 'Price'}
          </Link>
          <Link href="/contact" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Kontakt' : 'Contact'}
          </Link>
        </nav>



        {/* Insatgram icon  */}
        <div className="absolute bottom-20 flex gap-12">
          <a
            href="https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors transform hover:scale-110 duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* WhatsApp icon */}
          <a
            href="https://wa.me/38765601652"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors transform hover:scale-110 duration-300"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>

          {/* Phone icon */}
          <a
            href="tel:+38765601652"
            className="text-gray-600 hover:text-black transition-colors transform hover:scale-110 duration-300"
            aria-label="Phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>


      </main>
    </div>
  );
}
