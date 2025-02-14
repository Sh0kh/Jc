import '../../Style/FooterMini.css'
import { useTranslation } from "react-i18next";
import '../../i18n/i18n';
import Aos from 'aos';
import { useEffect } from 'react';

export default function FooterMini() {

    const { t, i18n } = useTranslation();
    const lan = localStorage.getItem('i18nextLng')
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Переключение языка
        setLan(lng)
    };

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section id='contact' className="footer_mini"
            data-aos="fade-zoom-in"
            data-aos-delay="100"
            data-aos-offset="0"
        >
            <div className="Container">
                <div className="footer_mini_wrapper">
                    <div className='FooterCard flex items-center gap-[20px]'>
                        <div className='w-[45px] h-[45px] border-[1px] text-[#494035] border-[#494035] rounded-[50%] flex items-center justify-center text-[30px] cursor-pointer hover:bg-[#FFA500] hover:border-[#FFA500] duration-300' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" /></svg>
                        </div>
                        <a className='hover:text-[#FFA500] duration-300' href="tel:+99894 752 2000">+99894 752 2000</a>
                    </div>
                    <div className='FooterCard flex items-center gap-[20px]'>
                        <div className='w-[45px] h-[45px] border-[1px] text-[#494035] border-[#494035] rounded-[50%] flex items-center justify-center text-[20px] cursor-pointer hover:bg-[#FFA500] hover:border-[#FFA500] duration-300' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" /></svg>
                        </div>
                        <a className='hover:text-[#FFA500] duration-300' target='_blank' href="http://facebook.com">Folow us</a>
                    </div>
                    <div className='FooterCard flex items-center gap-[20px]'>
                        <div className='w-[45px] h-[45px] border-[1px] border-[#494035] rounded-[50%] flex items-center justify-center text-[30px] cursor-pointer text-[#494035] hover:bg-[#FFA500] hover:border-[#FFA500] duration-300' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" /></svg>
                        </div>
                        <a className='hover:text-[#FFA500] duration-300' href="tel:+99833 219 4444">+99833 219 4444</a>
                    </div>
                    <div className='FooterCard flex items-center gap-[20px]'>
                        <div className='w-[45px] h-[45px] border-[1px] border-[#494035] rounded-[50%] flex items-center justify-center text-[30px] cursor-pointer text-[#494035] hover:bg-[#FFA500] hover:border-[#FFA500] duration-300' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0" /></svg>
                        </div>
                        <p className='w-[200px] cursor-pointer hover:text-[#FFA500] duration-300'>
                            {t('Location')}

                        </p>
                    </div>
                    <a href="#hero">
                        <button>
                            Order a project
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}