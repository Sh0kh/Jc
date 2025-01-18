import { useTranslation } from 'react-i18next';
import '../../Style/House.css'
import rar from '../../img/about-company.png'
export default function Houe() {

    const { t, i18n } = useTranslation();

    return (
        <section className="house">
            <div className="Container">

                <div className="house_wrapper flex items-center justify-between gap-[80px]">
                    <img className='w-[500px] relative z-10' src={rar} alt="" />
                    <div className='Houseline absolute left-0 top-[280px] z-0 w-[400px] h-[80px] bg-[#FBA821]'>

                    </div>
                    <div className="house_content">
                        <h1>{t('HouseTitle')}</h1>
                        <p>{t('HouseText1')}</p>

                        <p>{t('HouseText2')}</p>
                        {/* <button>More about the company</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}