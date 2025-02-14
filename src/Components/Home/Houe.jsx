import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Style/House.css';
import rar from '../../img/about-company.png';

export default function Houe() {

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, });
    }, []);

    return (
        <section className="house">
            <div className="Container">
                <div className="house_wrapper flex items-center justify-between gap-[80px]">
                    <img className='w-[500px] relative z-10' src={rar} alt="" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" />
                    <div className='Houseline absolute left-0 top-[280px] z-0 w-[400px] h-[80px] bg-[#FBA821]'></div>
                    <div className="house_content"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <h1>{t('HouseTitle')}</h1>
                        <p>{t('HouseText1')}</p>
                        <p>{t('HouseText2')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
