"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  FaNetworkWired,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaExpandArrowsAlt,
  FaChartLine,
  FaLock,
  FaSearch,
  FaEye,
  FaBug,
  FaKey,
  FaUserShield,
  FaFileAlt,
  FaSyncAlt,
  FaBolt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useLanguage } from "@/context/LanguageContext";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainCyberAccordion.module.css";

const cyberSolutionsMeta = [
  {
    id: "network-management",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "data-centers",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "cybersecurity-solutions",
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
];

const iconMap = {
  FaNetworkWired,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaExpandArrowsAlt,
  FaChartLine,
  FaLock,
  FaSearch,
  FaEye,
  FaBug,
  FaKey,
  FaUserShield,
  FaFileAlt,
  FaSyncAlt,
  FaBolt,
};

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

function renderCards(items, styles) {
  return (
    <>
      <div className={styles.cardsDesktop}>
        <div className="row g-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className={styles.cardBox}>
                  <div className={styles.cardIconWrap}>
                    {Icon ? <Icon className={styles.cardIcon} /> : null}
                  </div>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
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
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <SwiperSlide key={index}>
                <div className={styles.cardBox}>
                  <div className={styles.cardIconWrap}>
                    {Icon ? <Icon className={styles.cardIcon} /> : null}
                  </div>
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default function MainCyberAccordion() {
  const { t, isArabic } = useLanguage();

  const accordionContent = t.mainCyberAccordion;

  const cyberSolutionsData = useMemo(() => {
    return accordionContent.items.map((item) => {
      const meta = cyberSolutionsMeta.find((metaItem) => metaItem.id === item.id);

      return {
        ...item,
        images: meta?.images || [],
      };
    });
  }, [accordionContent]);

  const [activeTab, setActiveTab] = useState(cyberSolutionsData[0]?.id || "");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!cyberSolutionsData.length) return;

    const hasActiveTab = cyberSolutionsData.some((item) => item.id === activeTab);

    if (!hasActiveTab) {
      setActiveTab(cyberSolutionsData[0].id);
      setActiveIndex(0);
    }
  }, [cyberSolutionsData, activeTab]);

  const activeSolution = useMemo(() => {
    return (
      cyberSolutionsData.find((item) => item.id === activeTab) ||
      cyberSolutionsData[0]
    );
  }, [activeTab, cyberSolutionsData]);

  useEffect(() => {
    const currentIndex = cyberSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab, cyberSolutionsData]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, cyberSolutionsData.length - 1));
    setActiveTab(cyberSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  if (!activeSolution) return null;

  return (
    <section className={styles.mainCyberAccordionSection}>
      <div className={styles.holderTags}>
        {cyberSolutionsData.map((item) => (
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
              aria-label={t.mainCyberAccordion.ui.previousSolution}
            >
              {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}

          <button type="button" className={styles.mobileCurrentTab}>
            {cyberSolutionsData[activeIndex].label}
          </button>

          {activeIndex < cyberSolutionsData.length - 1 ? (
            <button
              type="button"
              className={`${styles.mobileNavBtn} ${styles.mobileNextBtn}`}
              onClick={goNext}
              aria-label={t.mainCyberAccordion.ui.nextSolution}
            >
              {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
          ) : (
            <div className={styles.mobileNavBtnPlaceholder}></div>
          )}
        </div>

        <div className={styles.mobileTabsDots}>
          {cyberSolutionsData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.mobileDot} ${
                index === activeIndex ? styles.mobileDotActive : ""
              }`}
              onClick={() => goToIndex(index)}
              aria-label={`${t.mainCyberAccordion.ui.goTo} ${item.label}`}
            ></button>
          ))}
        </div>
      </div>

      <div className={styles.address}>
        <h2>{activeSolution.title}</h2>

        <button
          type="button"
          className={styles.arrowButton}
          aria-label={t.mainCyberAccordion.ui.openSection}
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

            {section.type === "plain-list" && (
              <ul className={styles.plainList}>{renderListItems(section.items)}</ul>
            )}

            {section.type === "cards" && renderCards(section.items, styles)}
          </div>
        ))}

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