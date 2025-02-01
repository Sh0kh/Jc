import React from 'react';
import ProjectCard from "../others/ProjectCard";
import '../../Style/Project.css'
import Foto1 from '../../img/photo_2025-01-18_00-52-49.jpg'
import Foto2 from '../../img/20240710_184115.jpg'
import Foto3 from '../../img/20240710_184253.jpg'
import Foto4 from '../../img/photo_2025-01-18_00-53-09.jpg'
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../../i18n/i18n';

export default function Project() {

    const { t, i18n } = useTranslation();
    
    // Switch language functionality
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng); // Saving language to localStorage
    }

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className="Project">
            <div className="Container">
                <h1 className="pro_title" data-aos="fade-up">{t('Pro-Title')}</h1>
                <div className="project_wrapper" data-aos="zoom-in">
                    <ProjectCard title={t('Pro-Title1')} img={Foto1} date="14/12/2021" Length="100m" />
                    <ProjectCard title={t('Pro-Title2')} img={Foto2} date="14/12/2021" Length="99m" />
                    <ProjectCard title={t('Pro-Title3')} img={Foto3} date="14/12/2021" Length="9999m" />
                    <ProjectCard title={t('Pro-Title4')} img={Foto4} date="14/12/2021" Length="1009m" />
                </div>
            </div>
        </section>
    )
}
