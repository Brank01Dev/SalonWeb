import React from 'react';
import { useRouter } from 'next/router';
import { translations } from '../locales/translations';
import Layout from '../components/Layout';

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

  const content = allTranslations[language];

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          {language === 'sr' ? 'Cjenovnik' : 'Price List'}
        </h1>

        <div className="flex justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md mt-12 p-10 md:p-20 max-w-7xl w-full rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-left text-gray-800">
              {language === 'sr' ? 'Ženski' : 'Women'}
            </h3>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xl">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-4 px-6 font-bold text-gray-700">{language === 'sr' ? 'Dužina kose' : 'Length of hair'}</th>
                    <th className="py-4 px-6 font-bold text-center text-gray-700">{language === 'sr' ? 'Kratka' : 'Short'}</th>
                    <th className="py-4 px-6 font-bold text-center text-gray-700">{language === 'sr' ? 'Srednja' : 'Medium'}</th>
                    <th className="py-4 px-6 font-bold text-center text-gray-700">{language === 'sr' ? 'Duga' : 'Long'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: { sr: 'Šišanje', en: 'Trimming' }, prices: ['15 KM', '15 KM', '20 KM'] },
                    { name: { sr: 'Pranje i sušenje', en: 'Washing and drying' }, prices: ['10 KM', '10 KM', '15 KM'] },
                    { name: { sr: 'Feniranje', en: 'Blow drying' }, prices: ['13 KM', '15 KM', '20-25 KM'] },
                    { name: { sr: 'Pramenovi', en: 'Highlights' }, prices: ['45 KM', '70 KM', '85-120 KM'] },
                    { name: { sr: 'Farbanje', en: 'Coloring' }, prices: ['40 KM', '55 KM', '70-85 KM'] },
                    { name: { sr: 'Lokne', en: 'Curls' }, prices: ['-', '15 KM', '20-25 KM'] },
                    { name: { sr: 'Peglanje', en: 'Straightening' }, prices: ['-', '15 KM', '20-25 KM'] },
                    { name: { sr: 'Usluga farbanja', en: 'Coloring service' }, prices: ['5 KM', '-', '-'] },
                  ].map((service, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-800">{language === 'sr' ? service.name.sr : service.name.en}</td>
                      {service.prices.map((price, idx) => (
                        <td key={idx} className="py-4 px-6 text-center text-gray-600">{price}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-6">
              {[
                { name: { sr: 'Šišanje', en: 'Trimming' }, prices: ['15 KM', '15 KM', '20 KM'] },
                { name: { sr: 'Pranje i sušenje', en: 'Washing and drying' }, prices: ['10 KM', '10 KM', '15 KM'] },
                { name: { sr: 'Feniranje', en: 'Blow drying' }, prices: ['13 KM', '15 KM', '20-25 KM'] },
                { name: { sr: 'Pramenovi', en: 'Highlights' }, prices: ['45 KM', '70 KM', '85-120 KM'] },
                { name: { sr: 'Farbanje', en: 'Coloring' }, prices: ['40 KM', '55 KM', '70-85 KM'] },
                { name: { sr: 'Lokne', en: 'Curls' }, prices: ['-', '15 KM', '20-25 KM'] },
                { name: { sr: 'Peglanje', en: 'Straightening' }, prices: ['-', '15 KM', '20-25 KM'] },
                { name: { sr: 'Usluga farbanja', en: 'Coloring service' }, prices: ['5 KM', '-', '-'] },
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-600 pb-2">
                    {language === 'sr' ? service.name.sr : service.name.en}
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase mb-1">{language === 'sr' ? 'Kratka' : 'Short'}</span>
                      <span className="font-semibold text-gray-700">{service.prices[0]}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase mb-1">{language === 'sr' ? 'Srednja' : 'Medium'}</span>
                      <span className="font-semibold text-gray-700">{service.prices[1]}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase mb-1">{language === 'sr' ? 'Duga' : 'Long'}</span>
                      <span className="font-semibold text-gray-700">{service.prices[2]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* men */}

        <div className="flex justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md mt-12 p-10 md:p-20 max-w-7xl w-full rounded-[3rem] shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-left text-gray-800">
              {language === 'sr' ? 'Muški' : 'Men'}
            </h3>

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-xl">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-4 px-6 font-bold text-gray-700">{language === 'sr' ? 'Usluga' : 'Service'}</th>
                    <th className="py-4 px-6 font-bold text-center text-gray-700">{language === 'sr' ? 'Cijena' : 'Price'}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: { sr: 'Šišanje', en: 'Trimming' }, prices: ['12 KM'] },
                    { name: { sr: 'Pranje kose', en: 'Hair washing' }, prices: ['7 KM'] },
                    { name: { sr: 'Brijanje', en: 'Beard trimming' }, prices: ['10 KM'] },
                    { name: { sr: 'Šišanje + pranje', en: 'Trimming + washing' }, prices: ['17 KM'] },
                    { name: { sr: 'Šišanje + brijanje', en: 'Trimming + beard trimming' }, prices: ['20 KM'] },
                    { name: { sr: 'Oblikovanje brade i brkova', en: 'Beard and mustache shaping' }, prices: ['6 KM'] },
                    { name: { sr: 'Šišanje + oblikovanje brade', en: 'Trimming + beard shaping' }, prices: ['16 KM'] },
                  ].map((service, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-white/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-gray-800">{language === 'sr' ? service.name.sr : service.name.en}</td>
                      {service.prices.map((price, idx) => (
                        <td key={idx} className="py-4 px-6 text-center text-gray-600">{price}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-6">
              {[
                { name: { sr: 'Šišanje', en: 'Trimming' }, prices: ['12 KM'] },
                { name: { sr: 'Pranje kose', en: 'Hair washing' }, prices: ['7 KM'] },
                { name: { sr: 'Brijanje', en: 'Beard trimming' }, prices: ['10 KM'] },
                { name: { sr: 'Šišanje + pranje', en: 'Trimming + washing' }, prices: ['17 KM'] },
                { name: { sr: 'Šišanje + brijanje', en: 'Trimming + beard trimming' }, prices: ['20 KM'] },
                { name: { sr: 'Oblikovanje brade i brkova', en: 'Beard and mustache shaping' }, prices: ['6 KM'] },
                { name: { sr: 'Šišanje + oblikovanje brade', en: 'Trimming + beard shaping' }, prices: ['16 KM'] },
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-300 pb-2">
                    {language === 'sr' ? service.name.sr : service.name.en}
                  </h4>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500 uppercase mb-1">{language === 'sr' ? 'Cijena' : 'Price'}</span>
                      <span className="font-semibold text-gray-700">{service.prices[0]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}