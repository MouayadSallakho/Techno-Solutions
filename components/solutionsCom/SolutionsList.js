"use client";

import Link from "next/link";
import Styles from "./SolutionsList.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

const solutionsMeta = [
  {
    id: "strato",
    image: "/images/Last_Strato_Bannerr.webp",
    link: "/solutions/strato-solutions",
    colorClass: "strato",
  },
  {
    id: "power",
    image: "/images/Last_Power_Bannerr.webp",
    link: "/solutions/power-solutions",
    colorClass: "power",
  },
  {
    id: "cyber",
    image: "/images/Last_Cyber_Banerr.webp",
    link: "/solutions/cyber-solutions",
    colorClass: "cyber",
  },
  {
    id: "smart",
    image: "/images/Last_Smart_Bannerr.webp",
    link: "/solutions/smart-solutions",
    colorClass: "smart",
  },
  {
    id: "graphic",
    image: "/images/Last_Grafic_Bannerr.webp",
    link: "/solutions/graphic-solutions",
    colorClass: "graphic",
  },
];

export default function SolutionsList({ excludeId = null }) {
  const { t, isArabic } = useLanguage();

  const solutionsData = solutionsMeta.map((solutionMeta) => {
    const translatedItem = t.solutionsList.items.find(
      (item) => item.id === solutionMeta.id
    );

    return {
      ...solutionMeta,
      ...translatedItem,
    };
  });

  const filteredSolutions = excludeId
    ? solutionsData.filter((solution) => solution.id !== excludeId)
    : solutionsData;

  return (
    <section className={Styles.solutionsList}>
      <div className="container">
        {filteredSolutions.map((solution) => (
          <div
            className={`${Styles.solutionItem} ${Styles[solution.colorClass]}`}
            key={solution.id}
          >
            <div className="row g-4 align-items-start">
              <div className="col-lg-2 col-md-2 col-12">
                <div className={Styles.number}>{solution.number}</div>
              </div>

              <div className="col-lg-8 col-md-8 col-12">
                <div className={Styles.content}>
                  <Link href={solution.link} className={Styles.titleLink}>
                    <h3>{solution.title}</h3>
                  </Link>

                  <div className="row g-4 g-lg-5 align-items-start">
                    <div className="col-lg-5 col-md-5 col-12">
                      <Link
                        href={solution.link}
                        className={Styles.imageWrapper}
                        aria-label={`${t.solutionsList.ariaLabelPrefix} ${solution.title}`}
                      >
                        <img src={solution.image} alt={solution.title} />
                      </Link>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12">
                      <ul className={Styles.features}>
                        {solution.features.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-12">
                <div className={Styles.actionWrapper}>
                  <Link
                    href={solution.link}
                    className={Styles.arrowBtn}
                    aria-label={`${t.solutionsList.ariaLabelPrefix} ${solution.title}`}
                  >
                    <FaArrowRight className={isArabic ? Styles.arrowRtl : ""} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}