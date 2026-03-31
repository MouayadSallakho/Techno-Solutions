"use client";

import Link from "next/link";
import styles from "./SolutionsCom.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Solutions() {
  const { t, isArabic } = useLanguage();
  const solutionsData = t.solutionsSection.items;

  return (
    <section className={styles.Solutions}>
      <div className="container">
        <div className={styles.text}>
          <div className={styles.heading}>
            <span className={styles.line}></span>
            <p>{t.solutionsSection.label}</p>
          </div>

          <div className={styles.textContent}>
            <p className={styles.description}>{t.solutionsSection.title}</p>
            <span className={styles.subText}>
              {t.solutionsSection.subtitle}
            </span>
          </div>
        </div>

        <div className="row align-items-start g-5">
          <div className="col-lg-7">
            <div className={styles.leftSide}>
              {solutionsData.map((item) => (
                <div
                  className={`${styles.solutionItem} ${styles[item.colorClass]}`}
                  key={item.id}
                >
                  <Link href={item.href} className={styles.solutionInfo}>
                    <span className={styles.number}>{item.id}</span>
                    <h3>{item.title}</h3>
                  </Link>

                  <Link
                    href={item.href}
                    className={styles.arrowBtn}
                    aria-label={item.ariaLabel}
                  >
                    <svg
                      width="29"
                      height="16"
                      viewBox="0 0 29 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.33 9.13423C28.955 8.50923 28.955 7.49423 28.33 6.86923L21.93 0.469232C21.47 0.00923157 20.785 -0.125769 20.185 0.124232C19.585 0.374232 19.2 0.959232 19.2 1.60423V4.80423L2.4 4.80423C1.075 4.80423 0 5.87923 0 7.20423L0 8.80423C0 10.1292 1.075 11.2042 2.4 11.2042L19.2 11.2042V14.4042C19.2 15.0492 19.59 15.6342 20.19 15.8842C20.79 16.1342 21.475 15.9942 21.93 15.5342L28.33 9.13423Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className={styles.rightSide}>
              <img
                src="/images/solutions-com.png"
                alt={t.solutionsSection.previewAlt}
                className={styles.previewImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}