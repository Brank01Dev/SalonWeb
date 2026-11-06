import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="sr">
            <Head>
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="NinaD" />
                <link rel="manifest" href="/site.webmanifest" />
                
                {/* Google Fonts: Playfair Display (Serif) & Plus Jakarta Sans (Clean Modern Sans) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="antialiased selection:bg-neutral-800 selection:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
