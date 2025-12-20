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

export default function Contact({ allTranslations }: { allTranslations: any }) {
  const router = useRouter();
  const { locale } = router;
  const language = locale || 'sr';

  const content = allTranslations[language];

  return (
    <div>
      <h1>Comming soon...</h1>
    </div>
  );
}