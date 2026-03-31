"use client";

import Link from "next/link";
import Styles from "./SolutionsList.module.css";
import { FaArrowRight } from "react-icons/fa6";

const solutionsData = [
  {
    id: "strato",
    number: "01",
    title: "Strato Solutions",
    image: "/images/solutions1.png",
    link: "/solutions/strato-solutions",
    colorClass: "strato",
    items: [
      "Web Development",
      "Application Development",
      "UX/UI Design & Products Design",
      "Comprehensive ERP Systems for Your Business",
    ],
  },
  {
    id: "power",
    number: "02",
    title: "Power Solutions",
    image: "/images/solutions2.png",
    link: "/solutions/power-solutions",
    colorClass: "power",
    items: [
      "Solar energy Solutions",
      "Alternative Energy Solutions",
      "Integrated electrical solutions",
    ],
  },
  {
    id: "cyber",
    number: "03",
    title: "Cyber Solutions",
    image: "/images/solutions3.png",
    link: "/solutions/cyber-solutions",
    colorClass: "cyber",
    items: [
      "Data Centers",
      "Cybersecurity Solutions",
      "Network Management Solutions",
    ],
  },
  {
    id: "smart",
    number: "04",
    title: "Smart Solutions",
    image: "/images/solutions4.png",
    link: "/solutions/smart-solutions",
    colorClass: "smart",
    items: [
      "Interactive Smart Fountains",
      "Smart Building Control Systems",
      "Smart Monitoring and Control Systems",
    ],
  },
  {
    id: "graphic",
    number: "05",
    title: "Graphic Solutions",
    image: "/images/solutions5.png",
    link: "/solutions/graphic-solutions",
    colorClass: "graphic",
    items: ["Brand Identity", "Marketing & Advertising Design"],
  },
];

export default function SolutionsList({ excludeId = null }) {
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
                        aria-label={`Go to ${solution.title}`}
                      >
                        <img src={solution.image} alt={solution.title} />
                      </Link>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12">
                      <ul className={Styles.features}>
                        {solution.items.map((item, i) => (
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
                    aria-label={`Go to ${solution.title}`}
                  >
                    <FaArrowRight />
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