"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainPowerAccordion.module.css";

const powerSolutionsMeta = [
  {
    id: "solar-energy",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "integrated-electrical",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "alternative-energy",
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

function renderListItems(items) {
  return items.map((item, itemIndex) => (
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
  ));
}

function renderFeatureCards(items, styles) {
  return (
    <>
      <div className={styles.cardsDesktop}>
        <div className="row g-3">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className={styles.box}>
                <div className={styles.iconWrap}>
                  <img src={item.icon} alt={item.iconAlt || item.title} />
                </div>
                <p>{item.title}</p>
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
                <div className={styles.iconWrap}>
                  <img src={item.icon} alt={item.iconAlt || item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default function MainPowerAccordion() {
  const { t, isArabic } = useLanguage();

  const accordionContent = t.mainPowerAccordion;

  const powerSolutionsData = useMemo(() => {
    return accordionContent.items.map((item) => {
      const meta = powerSolutionsMeta.find((metaItem) => metaItem.id === item.id);

      return {
        ...item,
        images: meta?.images || [],
      };
    });
  }, [accordionContent]);

  const [activeTab, setActiveTab] = useState(powerSolutionsData[0]?.id || "");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!powerSolutionsData.length) return;

    const hasActiveTab = powerSolutionsData.some((item) => item.id === activeTab);

    if (!hasActiveTab) {
      setActiveTab(powerSolutionsData[0].id);
      setActiveIndex(0);
    }
  }, [powerSolutionsData, activeTab]);

  const activeSolution = useMemo(() => {
    return (
      powerSolutionsData.find((item) => item.id === activeTab) ||
      powerSolutionsData[0]
    );
  }, [activeTab, powerSolutionsData]);

  useEffect(() => {
    const currentIndex = powerSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab, powerSolutionsData]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, powerSolutionsData.length - 1));
    setActiveTab(powerSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  if (!activeSolution) return null;

  return (
    <section className={styles.mainPowerAccordionSection}>
      <div className={styles.holderTags}>
        {powerSolutionsData.map((item) => (
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
              aria-label={t.mainPowerAccordion.ui.previousSolution}
            >
              {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}

          <button
            type="button"
            className={styles.mobileCurrentTab}
            onClick={() => setActiveTab(powerSolutionsData[activeIndex].id)}
          >
            {powerSolutionsData[activeIndex].label}
          </button>

          {activeIndex < powerSolutionsData.length - 1 ? (
            <button
              type="button"
              className={`${styles.mobileNavBtn} ${styles.mobileNextBtn}`}
              onClick={goNext}
              aria-label={t.mainPowerAccordion.ui.nextSolution}
            >
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}
        </div>

        <div className={styles.mobileTabsDots}>
          {powerSolutionsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.mobileDot} ${
                index === activeIndex ? styles.mobileDotActive : ""
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`${t.mainPowerAccordion.ui.goTo} ${item.label}`}
            ></button>
          ))}
        </div>
      </div>

      <div className={styles.address}>
        <h2>{activeSolution.title}</h2>

        <button
          type="button"
          className={styles.arrowButton}
          aria-label={t.mainPowerAccordion.ui.openSection}
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
              <ul className={styles.list}>{renderListItems(section.items)}</ul>
            )}
          </div>
        ))}

        {activeSolution.featureSection && (
          <div className={styles.sec}>
            <p>{activeSolution.featureSection.heading}</p>
            {renderFeatureCards(activeSolution.featureSection.items, styles)}
          </div>
        )}

        {activeSolution.closingSections &&
          activeSolution.closingSections.map((section, index) => (
            <div className={styles.sec} key={`closing-${index}`}>
              <p>{section.heading}</p>

              {section.type === "text" &&
                renderTextContent(section.content, styles)}

              {section.type === "list" && (
                <ul className={styles.list}>{renderListItems(section.items)}</ul>
              )}
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