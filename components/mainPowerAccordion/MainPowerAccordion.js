"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainPowerAccordion.module.css";

const powerSolutionsData = [
  {
    id: "solar-energy",
    label: "Solar energy Solutions",
    title: "Solar energy Solutions",
    sections: [
      {
        heading: "Turning Sunlight into Limitless Energy",
        type: "text",
        content:
          "We provide solar energy solutions because they offer organizations and individuals an effective and sustainable way to reduce energy costs, increase self-reliance, and enhance project sustainability.",
      },
      {
        heading:
          "A Smart Investment for Modern Businesses_ Energy that Powers Your Efficiency",
        type: "text",
        content:
          "Businesses rely on high energy consumption, leading to rising costs. Our solar solutions help reduce expenses, increase energy independence, and enhance environmental reputation through clean, sustainable power.",
      },
      {
        heading: "Clean and Reliable Solar Systems",
        type: "list",
        items: [
          "We handle site assessment, design, supply, installation, and maintenance, executed by specialized engineers using top-tier global technologies for maximum efficiency and safety.",
          "Our systems deliver clean, reliable power — grid-connected or off-grid — reducing costs and ensuring long-term sustainability for residential, commercial, and industrial facilities.",
        ],
      },
    ],
    featureSection: {
      heading: "Advantages of Going Solar with Us",
      items: [
        { icon: "/images/icons_SVG/power1.svg", title: "Cost Savings" },
        {
          icon: "/images/icons_SVG/power2.svg",
          title: "Environmental Sustainability",
        },
        {
          icon: "/images/icons_SVG/power3.svg",
          title: "Energy Independence",
        },
        {
          icon: "/images/icons_SVG/power4.svg",
          title: "High Efficiency & Reliability",
        },
        {
          icon: "/images/icons_SVG/power5.svg",
          title: "Flexible & Scalable Solutions",
        },
        {
          icon: "/images/icons_SVG/power6.svg",
          title: "Easy Monitoring & Maintenance",
        },
        {
          icon: "/images/icons_SVG/power7.svg",
          title: "Innovative Technology",
        },
        {
          icon: "/images/icons_SVG/power8.svg",
          title: "Added Value for Facilities",
        },
      ],
    },
    closingSections: [
      {
        heading: "Why Choose Us for Solar Energy?",
        type: "text",
        content: (
          <>
            As an integrated tech company, we provide{" "}
            <strong>comprehensive solar energy</strong>{" "}
            <strong>solutions</strong> that seamlessly connect with our other
            services — from software and networking systems to smart solutions and
            graphic design. Choosing us means a{" "}
            <strong>solar system tailored to your project</strong>, featuring
            innovative technology, smart monitoring, and continuous support to
            ensure reliable performance and long-term sustainability.
          </>
        ),
      },
      {
        heading: "Peace of Mind, Powered by Your Vision",
        type: "text",
        content:
          "We place our clients’ trust and vision at the core of everything we do, delivering innovative solar solutions that reflect our commitment to a sustainable future. We ensure peace of mind and complete confidence while enhancing the value of their projects and helping them achieve their goals.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "integrated-electrical",
    label: "Integrated electrical solutions",
    title: "Integrated electrical solutions",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Our Integrated Electrical Power Solutions department delivers specialized engineering services for designing and implementing complete electrical systems for buildings and facilities. We provide safe, reliable solutions built on global standards — from distribution and control panels to protection and grounding systems — ensuring stable performance and high efficiency.",
      },
      {
        heading: "The Purpose Behind the Service and the Benefiting Sectors",
        type: "text",
        content:
          "We offer comprehensive electrical power solutions to help businesses and facilities ensure stable, safe, and efficient energy operations. This service is essential for companies that rely on uninterrupted power, high-load systems, or expanding infrastructures—providing reliability, reduced downtime, and long-term operational efficiency.",
      },
      {
        heading: "Connecting Your Operations to Reliable Electrical Power",
        type: "text",
        content:
          "Targeted companies operate with high electrical demands that require stable, safe, and uninterrupted power. Our integrated electrical solutions support their workflow by providing reliable systems, reducing downtime, and enhancing overall operational efficiency. Through proper planning, installation, and maintenance, businesses can ensure consistent performance and long-term energy stability.",
      },
      {
        heading: "Reliable and Integrated Electrical Systems",
        type: "text",
        content:
          "We provide comprehensive electrical solutions, including system design, equipment supply, installation, and operational testing to ensure safe and reliable performance. Our systems are tailored to meet the needs of residential, commercial, and industrial facilities, focusing on efficiency, operational continuity, and compliance with the highest safety standards.",
      },
    ],
    featureSection: {
      heading: "Key Features of Our Electrical Systems",
      items: [
        {
          icon: "/images/icons_SVG/power9.svg",
          title: "Reliable Performance",
        },
        {
          icon: "/images/icons_SVG/power10.svg",
          title: "High Operational Efficiency",
        },
        {
          icon: "/images/icons_SVG/power11.svg",
          title: "Comprehensive Solutions for All Facilities",
        },
        {
          icon: "/images/icons_SVG/power12.svg",
          title: "Precision Engineering Design",
        },
        {
          icon: "/images/icons_SVG/power13.svg",
          title: "Supply & Installation with Advanced Equipment",
        },
        {
          icon: "/images/icons_SVG/power14.svg",
          title: "Regular Maintenance & Monitoring",
        },
        {
          icon: "/images/icons_SVG/power15.svg",
          title: "Compliance with Highest Safety Standards",
        },
        {
          icon: "/images/icons_SVG/power16.svg",
          title: "Reduced Operational Costs",
        },
      ],
    },
    closingSections: [
      {
        heading: "Why Choose Our Company?",
        type: "text",
        content:
          "As an integrated tech company, we provide comprehensive electrical solutions that align with our other services — from software and networking systems to smart solutions and design. Choosing us ensures a customized electrical system for your project, incorporating advanced technology, smart monitoring, and continuous support for optimal performance and long-term sustainability.",
      },
      {
        heading: "Efficiency, Safety, and Sustainability",
        type: "text",
        content:
          "We deliver innovative electrical solutions that precisely address your needs, focusing on efficiency, safety, and project sustainability. Our vision is to empower you with reliable power that keeps your operations running smoothly while adding lasting value to your projects.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "alternative-energy",
    label: "Alternative Energy Solutions",
    title: "Alternative Energy Solutions",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "We provide advanced alternative energy solutions that offer sustainable and efficient alternatives to conventional power. Our services include the design and implementation of renewable energy systems such as solar and wind, focusing on operational efficiency, emission reduction, and long-term project sustainability to meet the needs of residential, commercial, and industrial facilities.",
      },
      {
        heading: "The Energy of the Future Starts Here",
        type: "text",
        content:
          "We provide alternative energy solutions to help individuals and businesses reduce costs and rely on sustainable power sources. These solutions are ideal for facilities seeking stable, eco-friendly energy that supports continuous operations.",
      },
      {
        heading: "How Alternative Energy Supports Your Operations?",
        type: "text",
        content:
          "Businesses and facilities require stable, efficient power to support their daily operations. Alternative energy solutions provide a sustainable source that reduces costs and enhances operational efficiency. From industrial sites to commercial buildings and residential projects, these solutions enable organizations to rely on clean, reliable, and cost-effective power in the long run.",
      },
      {
        heading: "Your Journey to Sustainable Energy Solutions",
        type: "list",
        items: [
          "We provide alternative energy systems tailored to each facility’s needs, including engineering assessment, technology selection, supply, installation, and operational testing to ensure stable and efficient performance.",
          "Our solutions rely on renewable sources such as solar and wind energy, with hybrid options that integrate with the grid or operate independently.",
          "This offers greater flexibility and improved energy efficiency for our clients.",
        ],
      },
    ],
    featureSection: {
      heading: "Smart Energy, Brighter Future",
      items: [
        {
          icon: "/images/icons_SVG/power17.svg",
          title: "Sustainable & eco-friendly energy",
        },
        {
          icon: "/images/icons_SVG/power18.svg",
          title: "High-efficiency systems",
        },
        {
          icon: "/images/icons_SVG/power19.svg",
          title: "Scalable solutions",
        },
        {
          icon: "/images/icons_SVG/power20.svg",
          title: "Continuous support & maintenance",
        },
        {
          icon: "/images/icons_SVG/power21.svg",
          title: "Advanced solar & wind technologies",
        },
        {
          icon: "/images/icons_SVG/power22.svg",
          title: "Compliant with quality & sustainability standards",
        },
        {
          icon: "/images/icons_SVG/power23.svg",
          title: "High reliability",
        },
        {
          icon: "/images/icons_SVG/power24.svg",
          title: "Customized engineering for each project",
        },
      ],
    },
    closingSections: [
      {
        heading: "Why Choose Our Company for Alternative Energy?",
        type: "list",
        items: [
          <>
            As an integrated tech company, we deliver{" "}
            <strong>comprehensive and innovative alternative energy solutions</strong>{" "}
            that seamlessly integrate with our other services — from software and
            networking systems to smart solutions and design.
          </>,
          "Choosing us ensures a customized energy system for your project, incorporating advanced technology, smart monitoring, and continuous support for optimal performance and long-term sustainability.",
          "Our solutions offer greater flexibility and improved energy efficiency for our clients.",
        ],
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
];

function renderFeatureCards(items, styles) {
  return (
    <>
      <div className={styles.cardsDesktop}>
        <div className="row g-3">
          {items.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className={styles.box}>
                <div className={styles.iconWrap}>
                  <img src={item.icon} alt={item.title} />
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
                  <img src={item.icon} alt={item.title} />
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
  const [activeTab, setActiveTab] = useState("solar-energy");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = useMemo(() => {
    return (
      powerSolutionsData.find((item) => item.id === activeTab) ||
      powerSolutionsData[0]
    );
  }, [activeTab]);

  useEffect(() => {
    const currentIndex = powerSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, powerSolutionsData.length - 1));
    setActiveTab(powerSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

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

      {/* Mobile selector */}
      <div className={styles.mobileTabsWrap}>
        <div className={styles.mobileTabsControls}>
          {activeIndex > 0 ? (
            <button
              type="button"
              className={`${styles.mobileNavBtn} ${styles.mobilePrevBtn}`}
              onClick={goPrev}
              aria-label="Previous solution"
            >
              <FaArrowLeft />
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
              aria-label="Next solution"
            >
              <FaArrowRight />
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
              aria-label={`Go to ${item.label}`}
            ></button>
          ))}
        </div>
      </div>

      <div className={styles.address}>
        <h2>{activeSolution.title}</h2>

        <button type="button" className={styles.arrowButton}>
          <MdOutlineArrowOutward />
        </button>
      </div>

      <div key={activeSolution.id} className={styles.allDetails}>
        {activeSolution.sections.map((section, index) => (
          <div className={styles.sec} key={index}>
            <p>{section.heading}</p>

            {section.type === "text" && (
              <span className={styles.textContent}>{section.content}</span>
            )}

            {section.type === "list" && (
              <ul className={styles.list}>
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
            {renderFeatureCards(activeSolution.featureSection.items, styles)}
          </div>
        )}

        {activeSolution.closingSections &&
          activeSolution.closingSections.map((section, index) => (
            <div className={styles.sec} key={`closing-${index}`}>
              <p>{section.heading}</p>

              {section.type === "text" && (
                <span className={styles.textContent}>{section.content}</span>
              )}

              {section.type === "list" && (
                <ul className={styles.list}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        <div className={styles.holderImages}>
          <div className="row g-3">
            {activeSolution.images.map((image, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className={styles.boxx}>
                  <img src={image} alt={`power-solution-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}