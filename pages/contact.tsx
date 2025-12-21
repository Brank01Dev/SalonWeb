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
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2300,
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
            
            <div className="container mx-auto flex justify-center items-center min-h-[50vh]">
                <h1 className="">
                    {language === 'sr' ? 'Mobilni kontakt: 065 601 652' : 'Mobile contact: 065 601 652'}
                </h1>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.32077300035897!2d17.17996884703554!3d44.77151939515941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e039c7a24df77%3A0xb93943eebeb90e1c!2sFrizerski%20salon%20Nina%20D!5e0!3m2!1sen!2sch!4v1766321617724!5m2!1sen!2sch"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

        </Layout>
    );
}