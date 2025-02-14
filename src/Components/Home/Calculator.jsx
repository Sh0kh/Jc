import { useState, useEffect } from "react";
import "../../Style/Calculator.css";
import { useTranslation } from "react-i18next";
import Skfoto from '../../img/sk.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS kutubxonasini import qilish

export default function Calculator() {
    const { t, i18n } = useTranslation();

    const [material, setMaterial] = useState("Polyethylene");
    const [diameter, setDiameter] = useState(110);
    const [price, setPrice] = useState(350000);
    const [pipeLength, setPipeLength] = useState("1");

    const pipeData = [
        { diameter: 110, polyethylene: 350000, steel: 370000 },
        { diameter: 160, polyethylene: 440000, steel: 465400 },
        { diameter: 225, polyethylene: 530000, steel: 559000 },
        { diameter: 280, polyethylene: 600000, steel: 632000 },
        { diameter: 315, polyethylene: 750000, steel: 790000 },
        { diameter: 400, polyethylene: 1000000, steel: 1100000 },
        { diameter: 500, polyethylene: 1350000, steel: 1400000 },
        { diameter: 630, polyethylene: 1700000, steel: 1850000 },
        { diameter: 700, polyethylene: 2100000, steel: 2200000 },
        { diameter: 800, polyethylene: 2500000, steel: 2600000 },
        { diameter: 900, polyethylene: 2900000, steel: 3000000 },
        { diameter: 1020, polyethylene: 3100000, steel: 3200000 },
        { diameter: 1220, polyethylene: 3300000, steel: 3400000 },
        { diameter: 1420, polyethylene: 3500000, steel: 3600000 },
        { diameter: 1620, polyethylene: 3700000, steel: 3800000 },
        { diameter: 2000, polyethylene: 4000000, steel: 4100000 },
    ];

    const updatePrice = (newMaterial, selectedDiameter) => {
        const selectedPipe = pipeData.find((pipe) => pipe.diameter === selectedDiameter);
        if (selectedPipe) {
            const fetchedPrice =
                newMaterial === "Polyethylene"
                    ? selectedPipe.polyethylene
                    : selectedPipe.steel;
            setPrice(fetchedPrice);
        }
    };

    const handleMaterialChange = (newMaterial) => {
        setMaterial(newMaterial);
        if (diameter) {
            updatePrice(newMaterial, diameter);
        }
    };

    const handleDiameterChange = (selectedDiameter) => {
        setDiameter(selectedDiameter);
        updatePrice(material, selectedDiameter);
    };

    const handlePipeLengthChange = (e) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            setPipeLength(inputValue);
        }
    };

    // AOS init function
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section id="project" className="calculator" data-aos="fade-up"
            data-aos-duration="3000" >
            <div className="Container">
                {/* SKFOTO rasmiga scroll bo‘lganda ko‘rinish berish */}
                <img
                    className="SKFOTO w-[100px] cursor-pointer absolute right-[320px] top-[350px] rotate-[20deg]"
                    src={Skfoto}
                    alt="foto"
                    data-aos="zoom-in" // AOS animatsiyasini qo‘shish
                />
                <h1 data-aos="fade-right">{t('CalculatorTitle')}</h1>
                <div className="calculator_wrapper">
                    <div className="calculator_material">
                        <h4>{t('CalculatorTitle2')}</h4>
                        <div className="Metal__wrapper">
                            <button
                                className={material === "Polyethylene" ? 'calculator_materialActive' : ''}
                                onClick={() => handleMaterialChange("Polyethylene")}
                            >
                                {t('metal1')}
                            </button>
                            <button
                                className={material === "Steel" ? 'calculator_materialActive' : ''}
                                onClick={() => handleMaterialChange("Steel")}
                            >
                                {t('metal2')}
                            </button>
                        </div>

                        <h4>{t('MaterialDm')}</h4>
                        <input
                            type="text"
                            value={pipeLength}
                            onChange={handlePipeLengthChange}
                            placeholder="Enter length"
                        />
                    </div>

                    <div className="calculator_btn">
                        <h4>{t('Diametrs')}</h4>
                        <div className="cal_btn_wrapper">
                            {pipeData.map((pipe) => (
                                <button
                                    className={pipe.diameter === diameter ? "cal_btn_wrapperActive" : ""}
                                    key={pipe.diameter}
                                    onClick={() => handleDiameterChange(pipe.diameter)}
                                >
                                    {pipe.diameter}
                                </button>
                            ))}
                        </div>

                        <div className="big_btn_wr">
                            <div className="small_btn_wr">
                                <button className="small_btn">
                                    {price && pipeLength
                                        ? `${(price * parseInt(pipeLength || 0)).toLocaleString()} uzs`
                                        : "0 uzs"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[#FFB337] border-[2px] mt-[30px] p-[10px]">
                    <p className="text-[#FFB337] text-[15px]">
                        {t("CalculatorSk")}
                    </p>
                </div>
                <div className="border-[#B3A99D] border-[1px] mt-[30px] p-[10px]">
                    <p className="text-[#B3A99D] text-[15px]">
                        {t("CalculatorText")}
                    </p>
                </div>
            </div>
        </section>
    );
}
