
import '../../Style/Work.css'
import { useTranslation } from 'react-i18next';
import Foto1 from '../../img/5-years.png'
import Foto2 from '../../img/combain-mini.png'
import Foto3 from '../../img/complex.png'
import Foto4 from '../../img/team-prof.png'

export default function Work() {
    const { t } = useTranslation();

    return (
        <section id='bigCompany' className="work">
            <div className="Container  flex items-center justify-around">
                <div className="work_content flex items-center justify-between gap-[20px]">
                    <img src={Foto1} alt="" />
                    <div className="work_mini">
                        <h1>{t('Medal1')}</h1>
                        <p>{t('Medal2')}</p>
                    </div>
                </div>
                <div className="work_content flex items-center justify-between gap-[20px]">
                    <img src={Foto4} alt="" />
                    <div className="work_mini">
                        <h1>{t('Work1')}</h1>
                        <p>{t('Work2')}</p>
                    </div>
                </div>
                <div className="work_content flex items-center justify-between gap-[20px]">
                    <img src={Foto3} alt="" />
                    <div className="work_mini">
                        <h1>{t('Work3')}</h1>
                        <p>{t('Work4')}r</p>
                    </div>
                </div>
                <div className="work_content flex items-center justify-between gap-[20px]">
                    <img src={Foto2} alt="" />
                    <div className="work_mini">
                        <h1>{t('Work5')}</h1>
                        <p>{t('Work6')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}