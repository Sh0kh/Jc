import CompanyCard from "../others/CompanyCard";
import { useTranslation } from "react-i18next";
import '../../i18n/i18n'; 
import '../../Style/BigCompany.css'
export default function BigCompany() {
    const { t, i18n } = useTranslation();
    const lan = localStorage.getItem('i18nextLng')    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Переключение языка
        setLan(lng)
    };
    return (
        <section className="big_company">
            <div className="Container">
                <div className="company_wrapper">
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/call.png" h4={t('B-Title1')} p={t('B-Plus1')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/calculator.png" h4={t('B-Title2')} p={t('B-Plus2')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/call.png" h4={t('B-Title3')} p={t('B-Plus3')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/kaska.png" h4={t('B-Title4')} p={t('B-Plus4')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/list.png" h4={t('B-Title5')} p={t('B-Plus5')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/hands.png" h4={t('B-Title6')} p={t('B-Plus6')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/start-rabot.png" h4={t('B-Title7')} p={t('B-Plus7')} />
                    <CompanyCard img="https://uzgnb.uz/wp-content/uploads/2021/12/like-hand.png" h4={t('B-Title8')} p={t('B-Plus8')} />
                </div>
            </div>
        </section>
    )
}