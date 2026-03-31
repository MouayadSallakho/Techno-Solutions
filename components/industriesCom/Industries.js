"use client";

import Styles from "./Industries.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

export default function Industries() {
  const { t, isArabic } = useLanguage();
  const industriesData = t.industries.items;

  return (
    <section
      className={Styles.industries}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className={Styles.text}>
          <div className={Styles.heading}>
            <span className={Styles.line}></span>
            <p>{t.industries.label}</p>
          </div>

          <div className={Styles.textContent}>
            <p className={Styles.description}>{t.industries.title}</p>
            <span className={Styles.subText}>{t.industries.subtitle}</span>
          </div>
        </div>

        <div className={Styles.desktopContent}>
          <div className="row g-3">
            {industriesData.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                <div className={Styles.box}>
                  <img src={item.image} alt={item.title} />
                  <div className={Styles.overlay}></div>

                  <p className={Styles.boxTitle}>
                    <span></span>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={Styles.mobileContent}>
          <div
            className={Styles.swiperWrap}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <Swiper
              key={isArabic ? "rtl" : "ltr"}
              modules={[Pagination]}
              slidesPerView={1.12}
              spaceBetween={14}
              pagination={{ clickable: true }}
              dir={isArabic ? "rtl" : "ltr"}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
              breakpoints={{
                420: {
                  slidesPerView: 1.12,
                  spaceBetween: 14,
                },
                576: {
                  slidesPerView: 1.25,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 1.5,
                  spaceBetween: 18,
                },
                992: {
                  slidesPerView: 2.1,
                  spaceBetween: 18,
                },
              }}
              className={Styles.industriesSwiper}
            >
              {industriesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={`${Styles.box} ${Styles.swiperBox}`}>
                    <img src={item.image} alt={item.title} />
                    <div className={Styles.overlay}></div>

                    <p className={Styles.boxTitle}>
                      <span></span>
                      {item.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}