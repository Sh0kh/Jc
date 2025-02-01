import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../Style/Gallary.css";
import foto1 from '../../img/photo_2025-01-03_16-55-03.jpg';
import foto2 from '../../img/photo_2025-01-04_10-43-18.jpg';
import foto3 from '../../img/photo_2025-01-13_19-21-24.jpg';
import foto4 from '../../img/photo_2025-01-14_10-25-41.jpg';
import foto5 from '../../img/photo_2025-01-18_00-53-09.jpg';
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../i18n/i18n';

export default function Gallary() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { type: "image", src: foto1 },
        { type: "image", src: foto2 },
        { type: "image", src: foto3 },
        { type: "image", src: foto4 },
        { type: "image", src: foto5 },
    ];

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const modalContent = images[currentIndex];
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section id="gallary" className="gallary">
            <h1 data-aos="fade-up">{t('Gallary-Title')}</h1>
            <Swiper
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    0: { slidesPerView: 2 },
                    500: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="gallary_card"
                            onClick={() => openModal(index)}
                            style={{ cursor: "pointer" }}
                        >
                            {item.type === "image" ? (
                                <img src={item.src} alt={`Gallery item ${index}`} />
                            ) : (
                                <video src={item.src} muted />
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Modal */}
            {isModalOpen && (
                <div className="custom_modal">
                    <div className="modal_content">
                        <button onClick={goToPrev} className="nav_button prev_button">
                            ❮
                        </button>
                        {modalContent.type === "image" ? (
                            <img src={modalContent.src} alt="Modal Content" className="modal_image" />
                        ) : (
                            <video src={modalContent.src} controls autoPlay className="modal_video" />
                        )}
                        <button onClick={goToNext} className="nav_button next_button">
                            ❯
                        </button>
                        <button onClick={closeModal} className="close_button">
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
