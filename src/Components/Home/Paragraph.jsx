import React, { useState } from "react";
import ParagraphCard from "../others/ParagraphCard";
import "../../Style/Paragraph.css";
import { useTranslation } from "react-i18next";
import '../../i18n/i18n'; // Убедитесь, что инициализация i18next вызывается
export default function Paragraph() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, i18n } = useTranslation();
    const lan = localStorage.getItem('i18nextLng')    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Переключение языка
        setLan(lng)
    };


  const items = [
    t('P-Title1'),
    t('P-Title2'),
    t('P-Title3'),
    t('P-Title4'),
    t('P-Title5'),
    t('P-Title6'),
   
  ];

  return (
    <section id="work" className="paragraph">
      <div className="Container">
        <div className="paragraph_wrapper">
          <div className="paragraph_mini">
            {items.map((item, index) => (
              <ParagraphCard
                key={index}
                h1={item}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <div className="paragraph_content">
            <h1>{items[activeIndex]}</h1>
            <p>{t('P-Plus1')}</p>
            <ul>
              <li>{t('P-Plus2')}</li>
              <li>{t('P-Plus3')}</li>
              <li>{t('P-Plus4')}</li>
            </ul>

            {t('P-Plus5')}
          </div>
        </div>
      </div>
    </section>
  );
}
