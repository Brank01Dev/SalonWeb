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
        <h1 className="text-4xl font-bold mb-8">
          {language === 'sr' ? 'Cjenovnik' : 'Price List'}
        </h1>
        
      </div>
    </Layout>
  );
}