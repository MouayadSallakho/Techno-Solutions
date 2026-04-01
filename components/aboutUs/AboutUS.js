"use client";

import Styles from "./AboutUs.module.css";
import { useLanguage } from "@/context/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function AboutUs() {
  const { t, isArabic } = useLanguage();

  const brands = [
    { id: 1, image: "/images/brand1.png", alt: t.about.brands.brand1 },
    { id: 2, image: "/images/brand2.png", alt: t.about.brands.brand2 },
    { id: 3, image: "/images/brand3.png", alt: t.about.brands.brand3 },
    { id: 4, image: "/images/brand1.png", alt: t.about.brands.brand4 },
    { id: 5, image: "/images/brand2.png", alt: t.about.brands.brand5 },
    { id: 6, image: "/images/brand3.png", alt: t.about.brands.brand6 },
    { id: 7, image: "/images/brand1.png", alt: t.about.brands.brand7 },
    { id: 8, image: "/images/brand2.png", alt: t.about.brands.brand8 },
    { id: 9, image: "/images/brand3.png", alt: t.about.brands.brand9 },
  ];

  const loopBrands = [...brands, ...brands, ...brands];

  return (
    <section className={Styles.about} dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <div className={Styles.text}>
          <div className={Styles.heading}>
            <span className={Styles.line}></span>
            <p>{t.about.label}</p>
          </div>

          <p className={Styles.description}>{t.about.description}</p>
        </div>
      </div>

      <div className={Styles.sliderWrapper} dir="ltr">
        <Swiper
          key={isArabic ? "rtl-brands" : "ltr-brands"}
          modules={[Autoplay]}
          className={Styles.mySwiper}
          loop={true}
          dir="ltr"
          style={{ direction: "ltr" }}
          allowTouchMove={false}
          simulateTouch={false}
          grabCursor={false}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: isArabic,
          }}
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            480: {
              slidesPerView: 2.4,
              spaceBetween: 14,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
        >
          {loopBrands.map((brand, index) => (
            <SwiperSlide key={`${brand.id}-${index}`}>
              <div className={Styles.brandCard}>
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className={Styles.brandImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}