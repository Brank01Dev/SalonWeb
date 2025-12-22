
import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Custom500() {
    const router = useRouter();
    const { locale } = router;
    const language = locale || 'sr';

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-6xl font-bold mb-6">500</h1>
                <h2 className="text-2xl mb-8 uppercase tracking-widest">
                    {language === 'sr' ? 'Naš server ima loš dan za frizuru' : 'Our server is having a bad hair day'}
                </h2>
                <Link
                    href="/"
                    className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm"
                >
                    {language === 'sr' ? 'Povratak na početnu' : 'Back to home'}
                </Link>
            </div>
        </Layout>
    );
}