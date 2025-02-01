import 'swiper/css';
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';
import '../../Style/Hero.css';
import heroImage from '../../img/heroImage.jpg';
import heroImage2 from '../../img/heroImg2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Hero() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id='hero' className="Hero bg-[#EFF0F2] ">
            <h1 data-aos="fade-right">{t('Hero-title')}</h1>
            <p className='Hero-p'  data-aos="fade-up">{t('Hero-p')}</p>
            <div className="w-full ">
                <img className='HeroImg1 w-full rounded-[10px] mt-[15px] cursor-pointer' src={heroImage} alt="" />
            </div>
            <div className="w-full ">
                <img className='HeroImg2 h-[200px] object-cover w-full rounded-[10px] mt-[15px] cursor-pointer' src={heroImage2} alt="" />
            </div>
        </section>
    );
}
