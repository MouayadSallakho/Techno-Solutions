"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Styles from "./statsKey.module.css";
import CountUpNumber from "./CountUpNumber";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsKey() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const { t, isArabic } = useLanguage();

  const stats = t.stats.items;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={Styles.statsKey} ref={sectionRef}>
      <div className="container">
        <div className={Styles.text} data-aos="fade-up">
          <div className={Styles.heading}>
            <span className={Styles.line}></span>
            <p>{t.stats.label}</p>
          </div>

          <p className={Styles.description}>{t.stats.description}</p>
        </div>

        <div className="row align-items-stretch g-lg-4 g-3">
          <div className="col-lg-4" data-aos={isArabic ? "fade-left" : "fade-right"}>
            <div className={Styles.imageWrapper}>
              <img
                src="/images/statesKey.png"
                alt={t.stats.imageAlt}
                className={Styles.statsImage}
              />
            </div>
          </div>

          <div className="col-lg-8">
            <div className={Styles.statsGrid}>
              {stats.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className={`${Styles.statItem} ${
                    item.number === null ? Styles.emptyItem : ""
                  }`}
                >
                  {item.number !== null && (
                    <>
                      <h3>
                        <CountUpNumber end={item.number} start={startCount} />
                        {item.suffix}
                      </h3>
                      <p>{item.label}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}