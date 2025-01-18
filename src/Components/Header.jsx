import { useTranslation } from "react-i18next";
import '../i18n/i18n'; // Убедитесь, что инициализация i18next вызывается
// import logo from '../img/logo.png'
import '../Style/Header.css'
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Headerfoto from '../img/header.png';

export default function Header() {

    const { t, i18n } = useTranslation();
    const lan = localStorage.getItem('i18nextLng')    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Переключение языка
        setLan(lng)
    };

    return (
        <header className="">
            <div className="bg-[#EFF0F2] pt-[10px]" >
                <div className="Container flex items-center justify-between">
                    <div className="cursor-pointer">
                        <img className="w-[150px]" src={Headerfoto} alt="" />
                    </div>
                    <div className="header__nav flex items-center justify-between  gap-[50px] ">
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[50px] h-[50px] border-[2px] border-[#FBA821] text-[white] text-[30px] rounded-[50%] bg-[#FFB337] cursor-pointer flex items-center justify-center hover:bg-transparent hover:text-[#FBA821] duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" /></g></svg>
                            </div>
                            <h2 className="w-[150px] cursor-pointer hover:text-[#FBA821] duration-300">
                                {t('Location')}
                            </h2>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[50px] h-[50px] border-[2px] border-[#FBA821] text-[white] text-[30px] rounded-[50%] bg-[#FFB337] cursor-pointer flex items-center justify-center hover:bg-transparent hover:text-[#FBA821] duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" /></svg>
                            </div>
                            <div className="flex items-center flex-col">
                                <a className="hover:text-[#FBA821] duration-300" href="tel:+99833 219 4444">+99833 219 4444</a>
                                <a className="hover:text-[#FBA821] duration-300" href="tel:+99894 752 2000">+99894 752 2000</a>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center text-[19px] gap-[15px]">
                        <button
                            className={`${lan === 'en' ? 'text-[#FFB337]' : ' text-[black] '}`}
                            onClick={() => changeLanguage("en")}
                        >
                            EN
                        </button>
                        <button
                            className={` ${lan === 'ru' ? 'text-[#FFB337]' : 'text-[black] '}`}
                            onClick={() => changeLanguage("ru")}
                        >
                            РУС
                        </button>
                        <button
                            className={` ${lan === 'uz' ? 'text-[#FFB337]' : ''}`}
                            onClick={() => changeLanguage("uz")}
                        >
                            O'Z
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#79A01B] p-[20px] h-[60px] headerNav">
                <div className="Container flex items-center justify-center gap-[300px]">
                    {/* <div className="logo ">
                        <h1 className="h1-title text-[35px] text-[white]">
                            Jizzax Construction
                        </h1>
                    </div> */}

                    <ul className="header_content">
                        <li><a href="#hero">{t('Home')}</a></li>
                        <li><a href="#bigCompany">{t('AboutUs')}</a></li>
                        <li><a href="#work">{t("Service")}</a></li>
                        <li><a href="#project">{t('Project')}</a></li>
                        <li><a href="#gallary">{t('Social')}</a></li>
                        <li><a href="#contact">{t('Contact')}</a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}