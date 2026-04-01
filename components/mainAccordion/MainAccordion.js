"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainAccordion.module.css";

const variantClassMap = {
  strato: "variantStrato",
  cyber: "variantCyber",
  graphic: "variantGraphic",
  smart: "variantSmart",
  power: "variantPower",
};

const solutionsMeta = [
  {
    id: "web-development",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "application-development",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "ux-ui-product-design",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "erp-systems",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
];

function renderTextContent(content, styles) {
  if (Array.isArray(content)) {
    return content.map((paragraph, index) => (
      <span key={index} className={styles.textParagraph}>
        {paragraph.strong ? <strong>{paragraph.strong} </strong> : null}
        {paragraph.text}
      </span>
    ));
  }

  return <span className={styles.textContent}>{content}</span>;
}

function renderCards(items, styles) {
  return (
    <>
      <div className={styles.cardsDesktop}>
        <div className="row g-3">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className={styles.box}>
                <div className={styles.iconHolder}>
                  <img
                    src={item.icon}
                    alt={item.iconAlt || item.title}
                    className={styles.cardIcon}
                  />
                </div>

                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cardsMobile}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={1.08}
          spaceBetween={14}
          pagination={{ clickable: true }}
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
              slidesPerView: 1.5,
              spaceBetween: 18,
            },
          }}
          className={styles.cardsSwiper}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.box}>
                <div className={styles.iconHolder}>
                  <img
                    src={item.icon}
                    alt={item.iconAlt || item.title}
                    className={styles.cardIcon}
                  />
                </div>

                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default function MainAccordion({ variant = "strato" }) {
  const { t, isArabic } = useLanguage();

  const accordionContent = t.mainAccordion;

  const solutionsData = useMemo(() => {
    return accordionContent.items.map((item) => {
      const meta = solutionsMeta.find((metaItem) => metaItem.id === item.id);

      return {
        ...item,
        images: meta?.images || [],
      };
    });
  }, [accordionContent]);

  const [activeTab, setActiveTab] = useState(solutionsData[0]?.id || "");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!solutionsData.length) return;

    const hasActiveTab = solutionsData.some((item) => item.id === activeTab);

    if (!hasActiveTab) {
      setActiveTab(solutionsData[0].id);
      setActiveIndex(0);
    }
  }, [solutionsData, activeTab]);

  const activeSolution = useMemo(() => {
    return (
      solutionsData.find((item) => item.id === activeTab) || solutionsData[0]
    );
  }, [activeTab, solutionsData]);

  useEffect(() => {
    const currentIndex = solutionsData.findIndex((item) => item.id === activeTab);
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab, solutionsData]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, solutionsData.length - 1));
    setActiveTab(solutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  if (!activeSolution) return null;

  return (
    <section
      className={`${styles.mainAccordionSection} ${
        styles[variantClassMap[variant] || "variantStrato"]
      }`}
    >
      <div className={styles.holderTags}>
        {solutionsData.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.tagButton} ${
              activeTab === item.id ? styles.activeTag : ""
            }`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.mobileTabsWrap}>
        <div className={styles.mobileTabsControls}>
          {activeIndex > 0 ? (
            <button
              type="button"
              className={`${styles.mobileNavBtn} ${styles.mobilePrevBtn}`}
              onClick={goPrev}
              aria-label={t.mainAccordion.ui.previousSolution}
            >
              {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}

          <button
            type="button"
            className={styles.mobileCurrentTab}
            onClick={() => setActiveTab(solutionsData[activeIndex].id)}
          >
            {solutionsData[activeIndex].label}
          </button>

          {activeIndex < solutionsData.length - 1 ? (
            <button
              type="button"
              className={`${styles.mobileNavBtn} ${styles.mobileNextBtn}`}
              onClick={goNext}
              aria-label={t.mainAccordion.ui.nextSolution}
            >
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}
        </div>

        <div className={styles.mobileTabsDots}>
          {solutionsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.mobileDot} ${
                index === activeIndex ? styles.mobileDotActive : ""
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`${t.mainAccordion.ui.goTo} ${item.label}`}
            ></button>
          ))}
        </div>
      </div>

      <div className={styles.address}>
        <h2>{activeSolution.title}</h2>

        <button
          type="button"
          className={styles.arrowButton}
          aria-label={t.mainAccordion.ui.openSection}
        >
          <MdOutlineArrowOutward />
        </button>
      </div>

      <div key={activeSolution.id} className={styles.allDetails}>
        {activeSolution.sections.map((section, index) => (
          <div className={styles.sec} key={index}>
            <p>{section.heading}</p>

            {section.type === "text" &&
              renderTextContent(section.content, styles)}

            {section.type === "list" && (
              <ul className={styles.list}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {typeof item === "object" && item.strong ? (
                      <>
                        <strong>{item.strong} </strong>
                        {item.text}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            )}

            {section.type === "plain-list" && (
              <ul className={styles.plainList}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {activeSolution.featureSection && (
          <div className={styles.sec}>
            <p>{activeSolution.featureSection.heading}</p>
            {renderCards(activeSolution.featureSection.items, styles)}
          </div>
        )}

        {activeSolution.closingSections &&
          activeSolution.closingSections.map((section, index) => (
            <div className={styles.sec} key={`closing-${index}`}>
              <p>{section.heading}</p>
              {renderTextContent(section.content, styles)}
            </div>
          ))}

        <div className={styles.holderImages}>
          <div className="row g-3">
            {activeSolution.images.map((image, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className={styles.boxx}>
                  <img
                    src={image}
                    alt={`${activeSolution.title} ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}