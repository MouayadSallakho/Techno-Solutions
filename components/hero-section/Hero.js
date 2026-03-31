"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Hero.module.css";
import OrbitScene from "./OrbitScene";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t, isArabic } = useLanguage();

  const solutions = t.hero.items;

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
      duration: 900,
      offset: 40,
      delay: 0,
      easing: "ease-out",
      disableMutationObserver: true,
    });
  }, []);

  function handleToggle(index) {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  }

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroShell}`}>
        <div className={`row align-items-center g-4 g-xl-5 ${styles.heroBody}`}>
          <div
            className={`col-12 col-lg-6 ${styles.heroCopy}`}
            data-aos={isArabic ? "fade-left" : "fade-right"}
            data-aos-delay="80"
          >
            <h1 className={styles.heroTitle}>
              {t.hero.brand}
              <sup>&reg;</sup>
            </h1>

            <h2 className={styles.heroLeadAnimated}>{t.hero.slogan}</h2>

            <div className={styles.solutionsPanel}>
              <div className={`d-none d-lg-block ${styles.solutionsDesktop}`}>
                <div className={styles.solutionsTitle}>
                  <p>{t.hero.solutionsLabel}</p>
                  <img
                    src="/images/Image (8).png"
                    alt={t.hero.arrowAlt}
                    className={styles.titleArrow}
                  />
                </div>

                {solutions.map((solution) => (
                  <div className={styles.solutionItem} key={solution.id}>
                    <div className={styles.solutionSwap}>
                      <div className={styles.solutionHead}>
                        <span className={styles.solutionName}>
                          {solution.title}
                        </span>
                        <small>{solution.id}</small>
                      </div>

                      <div className={styles.solutionDescription}>
                        {solution.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`d-block d-lg-none ${styles.solutionsMobile}`}>
                <div className={styles.solutionsTitle}>
                  <p>{t.hero.solutionsLabel}</p>
                  <img
                    src="/images/Image (8).png"
                    alt={t.hero.arrowAlt}
                    className={styles.titleArrow}
                  />
                </div>

                <div className={styles.solutionsAccordion}>
                  {solutions.map((solution, index) => {
                    const isOpen = openIndex === index;

                    return (
                      <div
                        className={styles.solutionAccordionItem}
                        key={solution.id}
                      >
                        <button
                          type="button"
                          className={`${styles.solutionAccordionBtn} ${
                            isOpen ? styles.solutionAccordionBtnOpen : ""
                          }`}
                          onClick={() => handleToggle(index)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.solutionAccordionName}>
                            {solution.title}
                          </span>

                          <span className={styles.solutionAccordionIcon}>
                            <span
                              className={styles.solutionAccordionIconHorizontal}
                            ></span>
                            <span
                              className={`${
                                styles.solutionAccordionIconVertical
                              } ${
                                isOpen
                                  ? styles.solutionAccordionIconVerticalHidden
                                  : ""
                              }`}
                            ></span>
                          </span>
                        </button>

                        <div
                          className={`${styles.solutionAccordionCollapse} ${
                            isOpen ? styles.solutionAccordionCollapseOpen : ""
                          }`}
                        >
                          <div className={styles.solutionAccordionBody}>
                            {solution.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

<div className={`col-12 col-lg-6 d-none d-lg-block ${styles.sceneCol}`}>
  <OrbitScene />
</div>
        </div>
      </div>
    </section>
  );
}