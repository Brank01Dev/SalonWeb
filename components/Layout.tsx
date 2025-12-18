import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';


export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { locale } = router;
    const language = locale || 'sr';


    const toggleLocale = () => {
        const newLocale = language === "sr" ? "en" : "sr";
        router.push(router.pathname, router.asPath, { locale: newLocale });
    };


    const navLinks = [
        { href: "/", label: language === 'sr' ? 'Početna' : 'Home' },
        { href: "/price", label: language === 'sr' ? 'Cjenovnik' : 'Price' },
        { href: "/contact", label: language === 'sr' ? 'Kontakt' : 'Contact' },
    ];

    const activeLinkClassName = 'text-black border-b border-black';

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

            <div className="relative min-h-screen w-full font-sans text-gray-800">

                <div className="fixed inset-0 -z-10">

                    <div className="absolute inset-0 bg-white/30" />
                </div>

                <header className="flex justify-between items-center p-6">
                    <div className="w-42">
                        <Image src="/graphics/ninalogo.png" alt="Logo" width={300} height={300} />
                    </div>

                    <nav className="flex gap-6">
                        {navLinks.map((link) => {
                            const isActive = router.pathname === link.href;
                            if (isActive) return null;

                            return (
                                <Link key={link.href} href={link.href} className="hover:text-black hover:scale-105 transition-all duration-300 border-b border-transparent hover:border-black pb-1">
                                    {link.label}
                                </Link>
                            )

                        })}
                    </nav>


                    <button onClick={toggleLocale}>
                        {language === 'sr' ? 'SR | EN' : 'SR | EN'}
                    </button>
                </header>

                <main className="px-4 py-12">
                    {children}
                </main>

            </div>
        </div>
    );
}