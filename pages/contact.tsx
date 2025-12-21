import React from 'react';
import { useRouter } from 'next/router';
import { translations } from '../locales/translations';
import Layout from '../components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";

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
            <div className="bg-white/10 backdrop-blur-md mt-8 p-6 w-full rounded-[3rem] shadow-2xl">
                <Swiper
                    className="rounded-[2rem]"
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    speed={1800}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}>

                    <SwiperSlide><img src="/frisure1.jpeg" alt="image1" /></SwiperSlide>
                    <SwiperSlide><img src="/frisure1.jpeg" alt="image2" /></SwiperSlide>
                    <SwiperSlide><img src="/frisure1.jpeg" alt="image3" /></SwiperSlide>
                    <SwiperSlide><img src="/frisure1.jpeg" alt="image4" /></SwiperSlide>
                </Swiper>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">

                <div className="flex flex-col justify-center items-center min-h-[500px] h-full gap-4">

                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 group">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-full text-gray-700 group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-light uppercase tracking-widest text-gray-500 mb-1">
                                    {language === 'sr' ? 'Adresa' : 'Address'}
                                </h3>
                                <p className="text-lg font-medium text-gray-800">
                                    Kradjorjdeva 11, Banja Luka
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                        <h3 className="text-sm font-light uppercase tracking-widest text-gray-500 mb-4 ml-2">
                            {language === 'sr' ? 'Kontakt informaciije' : 'Contact Information'}
                        </h3>

                        <div className="flex flex-col gap-4">
                            <a href="tel:+38765601652" className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/20 transition-all">
                                <div className="p-2 bg-white/20 rounded-full text-gray-700 group-hover:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-medium text-gray-800">065 601 652</span>
                            </a>

                            <a href="https://wa.me/38765601652" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/20 transition-all">
                                <div className="p-2 bg-white/20 rounded-full text-gray-700 group-hover:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-medium text-gray-800">WhatsApp</span>
                            </a>

                            
                            <a href="viber://chat?number=%2B38765601652" className="flex items-center gap-4 group cursor-pointer p-2 rounded-xl hover:bg-white/20 transition-all">
                                <div className="p-2 bg-white/20 rounded-full text-gray-700 group-hover:text-black transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-medium text-gray-800">Viber</span>
                            </a>
                        </div>
                    </div>

                    <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 group">
                        <a href="https://www.instagram.com/frizerskisalon_nina_d?igsh=M2VvdjFuM3AzNjFm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/20 rounded-full text-gray-700 group-hover:text-pink-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-sm font-light uppercase tracking-widest text-gray-500 mb-1">
                                        Instagram
                                    </h3>
                                    <p className="text-lg font-medium text-gray-800">
                                        @frizerskisalon_nina_d
                                    </p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:translate-x-1 transition-transform">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </a>
                    </div>

                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.32077300035897!2d17.17996884703554!3d44.77151939515941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e039c7a24df77%3A0xb93943eebeb90e1c!2sFrizerski%20salon%20Nina%20D!5e0!3m2!1sen!2sch!4v1766321617724!5m2!1sen!2sch"
                    width="100%"
                    height="520"
                    className="rounded-[3rem] shadow-2xl border border-white/10"
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </div>

        </Layout>
    );
}