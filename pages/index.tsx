import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const translations = {
  en: {
    greeting: "Hello",
    content: "This is a simple content page supporting English and Spanish.",
    switch: "Switch to Serbian",
  },
  sr: {
    greeting: "Pozdrav",
    content: "Ovo je jednostavna stranica na srpskom",
    switch: "Promjeni na Engleski",
  },
};

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


      <div className="absolute top-6 right-12 z-20">
        <button
          onClick={toggleLocale}
          className="text-base font-bold tracking-widest hover:text-black transition-all duration-300 uppercase bg-white/30 backdrop-blur-md border border-white/20 shadow-lg px-10 py-3 rounded-full"
        >
          {language === 'sr' ? 'SR | EN' : 'SR | EN'}
        </button>
      </div>


      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12">


        <div className="mb-12 w-full max-w-[600px] animate-fade-in">
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
          <a href="#" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Početna' : 'Home'}
          </a>
          <a href="#" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Cjenovnik' : 'Price'}
          </a>
          <a href="#" className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
            {language === 'sr' ? 'Kontakt' : 'Contact'}
          </a>
        </nav>


        <div className="absolute bottom-8">
          <a
            href="https://instagram.com"
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
        </div>

      </main>
    </div>
  );
}
