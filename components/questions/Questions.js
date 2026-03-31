"use client";

import Styles from "./Questions.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

export default function Questions() {
  const { t, isArabic } = useLanguage();
  const faqData = t.questions.items;

  return (
    <section className={Styles.questions}>
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <div className={Styles.leftSide}>
              <div className={Styles.text}>
                <div className={Styles.heading}>
                  <span className={Styles.line}></span>
                  <p>{t.questions.label}</p>
                </div>

                <h2 className={Styles.description}>
                  {t.questions.titleLine1}
                  <br />
                  {t.questions.titleLine2}
                </h2>
              </div>

              <p className={Styles.subDescription}>
                {t.questions.description}
              </p>

              <button type="button" className={Styles.holderB}>
                <span>{t.questions.cta}</span>
                <div>
                  <FaArrowRightLong />
                </div>
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className={`accordion ${Styles.customAccordion}`}
              id="faqAccordion"
            >
              {faqData.map((item, index) => (
                <div
                  className={`accordion-item ${Styles.accordionItem}`}
                  key={item.id}
                >
                  <h2
                    className={`accordion-header ${Styles.accordionHeader}`}
                    id={`heading${item.id}`}
                  >
                    <button
                      className={`accordion-button ${Styles.accordionButton} ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${item.id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${item.id}`}
                    >
                      <span className={Styles.questionText}>
                        {item.question}
                      </span>
                      <span className={Styles.icon}></span>
                    </button>
                  </h2>

                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${item.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className={`accordion-body ${Styles.accordionBody}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}