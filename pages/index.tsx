import React, {useEffect, useState} from 'react';
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

export async function getStaticProps({ locale } : { locale: string }) {
  return {
    props: {
      allTranslations: translations,
      locale,
    },
  };
}

export default function Home({ allTranslations, locale } : { allTranslations: any, locale: string }) {
  const [language, setLanguage] = useState<string>(locale); 

  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const normalized = navigator.language.split("-")[0];
    setLanguage(normalized in allTranslations ? normalized : "sr");
    setShowResult(true);
  }, []);
  

  const toggleLocale = () => {
    const newLocale = language === "sr" ? "en" : "sr";
    setLanguage(newLocale);
  };

  const content = allTranslations[language];

  return showResult && (
    <div>
      <div>
        <div className="w-full flex justify-center">
          <Image
            src="/graphics/ninalogo.png"
            width={600}
            height={190}
            alt="Logo"
          />
        </div>

      </div>
      <h1>{content.greeting}</h1>
      <p>{content.content}</p>
      <button onClick={toggleLocale}>
        {language === 'sr' ? 'Switch to English' : 'Promjeni na srpski'}
      </button>
    </div>
  );
}

