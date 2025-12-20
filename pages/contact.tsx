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

    return (
        <Layout>
            <div className="container mx-auto flex justify-center items-center min-h-[50vh]">
                <h1 className="text-5xl font-bold text-white">
                    {language === 'sr' ? 'Uskoro...' : 'Coming soon...'}
                </h1>
            </div>
        </Layout>
    );
}