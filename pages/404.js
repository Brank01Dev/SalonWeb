import Link from 'next/link';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    const { locale } = router;
    const language = locale || 'sr';

    return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl mb-8 uppercase tracking-widest">
            {language === 'sr' ? 'Ups, ova frizura ne postoji' : 'Oops, this hairstyle does not exist'}
        </h2>
        <Link 
          href="/"
          className="px-8 py-3.5 bg-neutral-900 text-white hover:bg-neutral-800 transition-all rounded-full uppercase tracking-widest text-xs font-semibold shadow-md active:scale-95"
        >
          {language === 'sr' ? 'Povratak na početnu' : 'Back to home'}
        </Link>
      </div>
    </Layout>
  );
}