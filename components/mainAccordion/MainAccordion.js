"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainAccordion.module.css";

const solutionsData = [
  {
    id: "web-development",
    label: "Web Development",
    title: "Web Development",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content: (
          <>
            <strong>Your Digital World Starts Here </strong>
            We transform your ideas into smooth, engaging websites that combine
            professional design with an exceptional user experience, delivering
            performance across all devices and business needs.
          </>
        ),
      },
      {
        heading: "Your Site is The Foundation of Your Brand’s Trust.",
        type: "text",
        content: (
          <>
            <strong>Your Digital Presence Determines Your Success </strong>
            Powerful websites are the cornerstone of attracting customers and
            building trust. This service is for anyone looking to transform
            their ideas into an effective online platform that boosts
            performance and growth opportunities.
          </>
        ),
      },
      {
        heading: "Make Your Digital Mark.",
        type: "list",
        items: [
          "We focus on ambitious companies and individuals looking to elevate their digital presence and impress their audience.",
          "Our web platforms are crafted to reflect their brand identity, showcase products and services professionally, streamline operations, and attract a wider audience with confidence and efficiency.",
        ],
      },
      {
        heading: "From Concept to a Complete Website.",
        type: "list",
        items: [
          "Our websites focus on speed, security, and easy management, providing a robust platform that supports your business goals and enables effective customer engagement.",
          "We develop fully integrated websites covering all stages: from planning and UX/UI design, to coding and integration with other systems, up to testing and launch.",
        ],
      },
    ],
    featureSection: {
      heading: "Enhance Your Website’s Value and Impact.",
      type: "cards",
      items: [
        {
          icon: "/images/icons_SVG/design.svg",
          iconAlt: "Design icon",
          title: "Professional and attractive design",
          description:
            "Captivate your audience with visually stunning, modern aesthetics tailored to your brand identity.",
        },
        {
          icon: "/images/icons_SVG/uiux.svg",
          iconAlt: "UI UX icon",
          title: "Smooth user experience (UI/UX)",
          description:
            "Intuitive navigation and seamless interactions that keep your users engaged and satisfied.",
        },
        {
          icon: "/images/icons_SVG/device.svg",
          iconAlt: "Device compatibility icon",
          title: "Full device compatibility",
          description:
            "Responsive layouts ensuring your website looks perfect on desktops, tablets, and mobile devices.",
        },
        {
          icon: "/images/icons_SVG/security.svg",
          iconAlt: "Security icon",
          title: "Security and data protection",
          description:
            "Robust security measures to protect sensitive user data and prevent unauthorized access.",
        },
        {
          icon: "/images/icons_SVG/content.svg",
          iconAlt: "Content management icon",
          title: "Easy content management and updates",
          description:
            "User-friendly interfaces allowing you to update text and images without technical expertise.",
        },
        {
          icon: "/images/icons_SVG/integration.svg",
          iconAlt: "Integration icon",
          title: "Integration with other systems",
          description:
            "Seamless connectivity with CRMs, payment gateways, and third-party API services.",
        },
      ],
    },
    closingSections: [
      {
        heading: "How Our Clients Benefit from Our Platforms.",
        type: "text",
        content:
          "Our digital platforms are designed for companies and individuals aiming to strengthen their online presence and engage customers effectively. With a website tailored to their business needs, they can showcase products and services professionally, streamline daily operations, and maximize audience engagement, driving sustainable growth and success.",
      },
      {
        heading: "Start a Unique Web Experience",
        type: "text",
        content:
          "Our digital solutions give your business a distinctive presence, where technical innovation meets your vision to deliver a seamless, engaging web experience that reflects your identity and supports sustainable growth.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "application-development",
    label: "Application Development",
    title: "Application Development",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "We develop innovative mobile applications that transform ideas into smart, practical, and seamless digital experiences, tailored to fit users’ needs and support business growth.",
      },
      {
        heading: "Why You Need a Custom App?",
        type: "list",
        items: [
          "We offer app development because today’s businesses need a constant presence in the user’s hand.",
          "Companies, stores, restaurants, and organizations looking to expand their reach and enhance customer experience rely on apps as a faster and more interactive way to connect, sell, and provide services. An app is no longer a luxury—it’s a necessity that enables businesses to compete and grow steadily in a fast-changing world.",
        ],
      },
      {
        heading: "Your App Is a Direct Bridge to Customers",
        type: "list",
        items: [
          "Our apps target companies, stores, restaurants, and organizations that want their services always accessible to customers.",
          "Through a custom app, they can deliver products and services quickly, manage orders and sales efficiently, and communicate directly with customers, increasing satisfaction and supporting continuous business growth.",
        ],
      },
      {
        heading: "From Idea to Perfect User Experience.",
        type: "list",
        items: [
          "Our custom apps cover all stages of development: from planning and UI/UX design, to coding, integration with other systems, and operational testing up to launch.",
          "They focus on smooth performance, security, and excellent user experience, serving as a powerful tool to boost engagement, streamline operations, and support steady business growth.",
        ],
      },
      {
        heading: "Key Features of Our Smart Apps.",
        type: "plain-list",
        items: [
          "Security and data protection",
          "Fast and stable performance",
          "Smooth and attractive UI/UX design",
          "Continuous support and maintenance",
          "Seamless integration with other systems",
          "Easy content management and updates",
          "Full compatibility with smartphones and tablets",
          "Push notifications and direct customer engagement",
        ],
      },
      {
        heading: "Why Choose Us for Your App Development?",
        type: "list",
        items: [
          "Choosing us means accessing comprehensive expertise from a team specialized in every aspect of app development, from design to launch and ongoing support.",
          "We don’t just deliver an app—we create a complete digital experience that reflects your brand, ensures high performance, and integrates innovative solutions to give you a clear competitive advantage.",
        ],
      },
      {
        heading: "How Our Clients Benefit from Our Platforms.",
        type: "text",
        content:
          "Our digital platforms are designed for companies and individuals aiming to strengthen their online presence and engage customers effectively. With a website tailored to their business needs, they can showcase products and services professionally, streamline daily operations, and maximize audience engagement, driving sustainable growth and success.",
      },
      {
        heading: "Start a Unique Web Experience",
        type: "text",
        content:
          "Our digital solutions give your business a distinctive presence, where technical innovation meets your vision to deliver a seamless, engaging web experience that reflects your identity and supports sustainable growth.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "ux-ui-product-design",
    label: "UX/UI & Product Design",
    title: "UX/UI & Product Design",
    sections: [
      {
        heading: "User Experience Starts Here",
        type: "text",
        content:
          "Carefully crafted digital interfaces make interacting with your products smooth, enjoyable, and effective. From apps to websites, every design aims to simplify the user journey, enhance satisfaction, and turn every click or tap into a meaningful experience that supports project goals.",
      },
      {
        heading: "The Need Behind a Seamless User Experience.",
        type: "list",
        items: [
          "UX/UI design is essential for any digital project aiming to attract users, simplify interactions, and enhance customer satisfaction.",
          "Companies, apps, and websites seeking to provide smooth and effective experiences for their users require this service to ensure a complete and enjoyable user journey.",
        ],
      },
      {
        heading: "Complete User Experience from Start to Finish",
        type: "list",
        items: [
          "UX/UI design translates user needs and project goals into practical, intuitive interfaces that are easy to engage with.",
          "The service ensures a smooth experience from the first interaction to completion, while boosting engagement, strengthening user loyalty, and efficiently achieving digital objectives.",
        ],
      },
      {
        heading: "Steps to Transform Ideas into Seamless Interfaces.",
        type: "list",
        items: [
          <>
            <strong>User Experience Analysis:</strong> Study audience needs and
            digital behaviors.
          </>,
          <>
            <strong>Interaction Mapping:</strong> Design a smooth, logical user
            journey within the app or website.
          </>,
          <>
            <strong>Interface Design:</strong> Transform ideas into clear,
            user-friendly visual elements.
          </>,
          <>
            <strong>Usability Testing:</strong> Test designs with real users to
            ensure ease of use and effectiveness.
          </>,
          <>
            <strong>Final Implementation:</strong> Deliver ready-to-use digital
            interfaces aligned with project goals.
          </>,
        ],
      },
      {
        heading: "Features That Perfect the Digital Experience",
        type: "plain-list",
        items: [
          "Intuitive and user-friendly interface design",
          "Smooth and enjoyable user experience",
          "Full alignment with brand identity",
          "Enhanced engagement and customer loyalty",
          "Multi-platform support (websites, apps)",
          "Clear and logical user journey mapping",
          "Usability testing to ensure design effectiveness",
          "Continuous user experience improvement",
        ],
      },
      {
        heading: "Why Choose Us for a Digital User Experience?",
        type: "list",
        items: [
          "The company offers comprehensive expertise in UX/UI design, covering all aspects of a digital project from start to finish.",
          "By combining creativity, user behavior analysis, and modern interface design standards, it ensures an exceptional experience that supports project goals and maximizes user satisfaction.",
        ],
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "erp-systems",
    label: "Comprehensive ERP Systems",
    title: "Comprehensive ERP Systems for Your Business",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "We provide comprehensive ERP systems that simplify the management of all your enterprise operations from a single platform, including HR, inventory, sales, and accounting. These systems enable real-time performance monitoring, enhance operational efficiency, and support strategic decision-making with accurate data and smart analytics.",
      },
      {
        heading: "Why Your Organization Needs ERP Systems?",
        type: "list",
        items: [
          "We provide ERP systems because companies and organizations need a unified platform to manage all operations efficiently and accurately.",
          "These systems are ideal for businesses looking to integrate different departments, monitor performance in real-time, and improve decision-making, enhancing productivity and reducing operational redundancies.",
        ],
      },
      {
        heading:
          "Methodology of Organizations and the Role of ERP in Their Development.",
        type: "list",
        items: [
          "Most target companies rely on multiple disconnected systems to run their operations, creating information gaps and making oversight difficult.",
          "This is where our ERP systems deliver value—by centralizing data and connecting departments such as finance, inventory, sales, and HR into one unified, seamless platform.",
          "This integration provides businesses with full operational visibility, enabling faster decision-making, reduced operational costs, and improved efficiency across all workflows.",
        ],
      },
      {
        heading: "Where Integrated Management Begins.",
        type: "list",
        items: [
          "The solution is implemented by experts to ensure seamless integration, high security, and user-friendly operation across all teams.",
          "Our ERP systems unify all departments within a single centralized platform, covering finance, HR, procurement, inventory, sales, and operational workflows.",
          "We analyze your business needs and develop a fully integrated system that simplifies data management, accelerates processes, and provides accurate reporting for better decision-making.",
        ],
      },
      {
        heading: "The Features That Give ERP Its Power.",
        type: "plain-list",
        items: [
          "High-level data security",
          "Real-time accurate reporting",
          "Continuous technical support",
          "Scalable system for growing needs",
          "Higher productivity and time efficiency",
          "Streamlined workflows with fewer errors",
          "Centralized management for all departments",
          "Full integration of operations and resources",
        ],
      },
      {
        heading: "Why Choose Us for ERP Implementation?",
        type: "list",
        items: [
          "Choosing us means leveraging comprehensive expertise across all aspects of ERP systems, from analysis and planning to implementation and ongoing support.",
          "We don’t just deliver a system—we provide integrated solutions that support your business strategies, enhance operational efficiency, and give you a clear competitive advantage.",
        ],
      },
      {
        heading: "Smart ERP That Reflects Your Ambition.",
        type: "text",
        content:
          "Your vision for business growth guides us in designing ERP systems that fully integrate departments, provide innovative resource management solutions, and smart analytics to support decision-making, enhancing efficiency and multiplying your organization’s growth opportunities.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
];

const variantClassMap = {
  strato: "variantStrato",
  cyber: "variantCyber",
  graphic: "variantGraphic",
  smart: "variantSmart",
  power: "variantPower",
};

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
  const [activeTab, setActiveTab] = useState("web-development");
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsSwiperRef = useRef(null);

  const activeSolution = useMemo(() => {
    return (
      solutionsData.find((item) => item.id === activeTab) || solutionsData[0]
    );
  }, [activeTab]);

  useEffect(() => {
    const currentIndex = solutionsData.findIndex((item) => item.id === activeTab);
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, solutionsData.length - 1));
    setActiveTab(solutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

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

      {/* Mobile accordion selector */}
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
            onClick={() => setActiveTab(solutionsData[activeIndex].id)}
          >
            {solutionsData[activeIndex].label}
          </button>

          {activeIndex < solutionsData.length - 1 ? (
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
          {solutionsData.map((item, index) => (
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
              <span className={styles.textContent}>{section.content}</span>
            </div>
          ))}

        <div className={styles.holderImages}>
          <div className="row g-3">
            {activeSolution.images.map((image, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className={styles.boxx}>
                  <img src={image} alt={`solution-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}