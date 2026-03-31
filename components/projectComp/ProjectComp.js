"use client";

import styles from "./ProjectComp.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectComp() {
  const { t, isArabic } = useLanguage();
  const projects = t.projects.items;

  return (
    <section
      className={styles.Project}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.contentGroup}>
            <div className={styles.heading}>
              <span className={styles.line}></span>
              <p>{t.projects.label}</p>
            </div>

            <h2 className={styles.description}>{t.projects.title}</h2>
          </div>

          <div className={styles.btnWrapper}>
            <a href="#" className={styles.viewAllBtn}>
              <span className={styles.viewAllText}>{t.projects.viewAll}</span>

              <span className={styles.arrowCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 7H17V15"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.desktopContent}>
          <div className="row">
            {projects.map((project, index) => {
              const colClass =
                index === 0 || index === 1 || index === 2
                  ? "col-lg-4 col-md-6"
                  : index === 3
                  ? "col-lg-5 col-md-6"
                  : "col-lg-7 col-md-6";

              return (
                <div className={colClass} key={project.id}>
                  <a
                    href="#"
                    className={`${styles.holderInfo} ${styles[project.cardClass]}`}
                  >
                    <div className={styles.imageWrapper}>
                      <img src={project.image} alt={project.alt} />
                    </div>

                    <div className={styles.infoRow}>
                      <p>{project.title}</p>
                      <span>{project.date}</span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.mobileContent}>
          <div className={styles.mobileTop}>
            <div className={styles.heading}>
              <span className={styles.line}></span>
              <p>{t.projects.label}</p>
            </div>

            <h2 className={styles.description}>{t.projects.title}</h2>

            <div className={styles.btnWrapper}>
              <a href="#" className={styles.viewAllBtn}>
                <span className={styles.viewAllText}>{t.projects.viewAll}</span>

                <span className={styles.arrowCircle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 7H17V15"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div
            className={styles.swiperWrap}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <Swiper
              key={isArabic ? "rtl" : "ltr"}
              modules={[Pagination]}
              slidesPerView={1.08}
              spaceBetween={14}
              pagination={{ clickable: true }}
              dir={isArabic ? "rtl" : "ltr"}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
              breakpoints={{
                420: {
                  slidesPerView: 1.1,
                  spaceBetween: 14,
                },
                576: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 1.35,
                  spaceBetween: 18,
                },
              }}
              className={styles.projectSwiper}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <a
                    href="#"
                    className={`${styles.holderInfo} ${styles.mobileCard}`}
                  >
                    <div className={styles.mobileImageWrap}>
                      <img src={project.image} alt={project.alt} />
                    </div>

                    <div className={styles.infoRow}>
                      <p>{project.title}</p>
                      <span>{project.date}</span>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}