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
  FaWifi,
  FaBolt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainCyberAccordion.module.css";

const cyberSolutionsData = [
  {
    id: "network-management",
    label: "Network Management Solutions",
    title: "Network Management Solutions",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "In a world where data moves at the speed of light, networks become the backbone of your business. Our network management solutions keep your infrastructure stable, secure, and efficient through performance monitoring, device organization, secure connectivity, and proactive issue resolution.",
      },
      {
        heading: "Stability Starts with Your Network",
        type: "text",
        content:
          "Because modern organizations depend on fast and continuous connectivity, network management is no longer optional. It is essential for businesses handling sensitive data, relying on internal systems, or managing remote teams that need stable, protected, and uninterrupted performance.",
      },
      {
        heading: "Network Operations That Boost Your Enterprise Performance",
        type: "text",
        content:
          "Our service supports organizations that rely on secure communication between teams, systems, and data. Through monitoring, organization, and connection security, we reduce downtime, improve productivity, and help businesses focus on their core work with confidence.",
      },
      {
        heading: "Your Network, Mastered Step by Step",
        type: "list",
        items: [
          "Network Assessment: Examine the current network structure and identify strengths and weaknesses.",
          "Planning & Organization: Design a comprehensive plan to optimally arrange devices and infrastructure.",
          "Performance Monitoring: Continuously track data flow and network performance to ensure stability and efficiency.",
          "Security & Protection: Safeguard the network against cyber threats and prevent breaches.",
          "Maintenance & Updates: Conduct regular maintenance and system updates to ensure uninterrupted network operation.",
        ],
      },
      {
        heading: "The Power Behind Your Network",
        type: "plain-list",
        items: [
          "24/7 network monitoring",
          "Stable and fast connectivity",
          "Network security and data protection",
          "Efficient device and infrastructure management",
          "Minimizing downtime and outages",
          "Regular updates and maintenance",
          "Comprehensive data traffic analytics",
          "Continuous technical support for optimal readiness",
        ],
      },
    ],
    closingSections: [
      {
        heading: "Comprehensive Network Solutions from A to Z",
        type: "text",
        content:
          "Choosing us means accessing a complete network management solution that covers every aspect of your organization’s digital infrastructure. We handle device organization, internal system integration, access control, data protection, and regular maintenance to ensure every part of your network operates seamlessly.",
      },
      {
        heading: "Your Network at the Heart of Your Vision",
        type: "text",
        content:
          "Your vision for stable operations drives us to deliver innovative network solutions that ensure continuous connectivity, data protection, and enhanced performance across all areas of your organization—allowing you to focus on growing your business with confidence and peace of mind.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "data-centers",
    label: "Data Centers",
    title: "Data Centers",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "We provide comprehensive data center solutions that ensure secure and efficient hosting of your data, supported by robust infrastructure for high performance and future scalability. Our services include design, server installation, storage management, and infrastructure security.",
      },
      {
        heading: "Why Your Organization Needs Data Centers",
        type: "text",
        content:
          "Organizations that handle large volumes of sensitive data or operate critical systems need a secure and reliable environment. This service is ideal for banks, educational institutions, tech companies, and manufacturing facilities that demand strong continuity and full data protection.",
      },
      {
        heading: "Your Network and Data in Safe Hands",
        type: "text",
        content:
          "Our data center solutions are designed for organizations that require a stable and secure environment to store and operate critical data. Through infrastructure design, server setup, storage management, and system security, we maximize efficiency while ensuring continuity and information protection.",
      },
      {
        heading: "From Design to Operation: Every Step Covered",
        type: "list",
        items: [
          "Custom Design: Set up infrastructure that meets organizational needs and supports future scalability.",
          "Server Installation & Operation: Organize and deploy servers for optimal performance.",
          "Data & Storage Management: Securely organize and store data for easy access.",
          "Security & Protection: Safeguard infrastructure and data against cyber threats.",
          "Maintenance & Continuous Support: Monitor performance and provide regular maintenance to ensure uninterrupted operations.",
        ],
      },
      {
        heading: "Advantages That Make Your Data Center Stand Out",
        type: "cards",
        items: [
          { title: "Custom infrastructure", icon: FaNetworkWired },
          { title: "Efficient server setup", icon: FaServer },
          { title: "Secure data management", icon: FaDatabase },
          { title: "Full threat protection", icon: FaShieldAlt },
          { title: "Regular maintenance", icon: FaTools },
          { title: "Continuous support", icon: FaHeadset },
          { title: "Scalable solutions", icon: FaExpandArrowsAlt },
          { title: "Accurate reporting & analytics", icon: FaChartLine },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Data Centers?",
        type: "text",
        content:
          "Choosing us means accessing complete data center solutions that cover every aspect of your digital infrastructure, from design and installation to operation and maintenance. We ensure network stability, data protection, and operational efficiency with continuous support.",
      },
      {
        heading: "Protection and Performance That Match Your Ambition",
        type: "text",
        content:
          "Your vision for secure and stable operations drives us to deliver comprehensive data centers that offer maximum data protection, high performance, and innovative solutions—ensuring operational continuity and allowing you to focus confidently on growing your business.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "cybersecurity-solutions",
    label: "Cybersecurity Solutions",
    title: "Cybersecurity Solutions",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "We provide cybersecurity solutions designed to protect your organization from increasing digital threats. Our services include risk assessment, network and system security, threat monitoring, and rapid incident response to ensure data safety, business continuity, and a secure digital environment.",
      },
      {
        heading: "Why Your Organization Needs Cybersecurity",
        type: "text",
        content:
          "Modern organizations increasingly depend on digital systems and applications, which makes them vulnerable to threats and breaches. This service is ideal for companies, banks, educational institutions, e-commerce platforms, and any organization seeking to protect data, maintain continuity, and build trust.",
      },
      {
        heading: "Full Control Over Digital Threats",
        type: "text",
        content:
          "Your data’s safety starts with understanding your needs. Our cybersecurity solutions are tailored for organizations relying on digital systems, helping them protect sensitive data, reduce digital risks, and secure business continuity so they can focus on growth with confidence.",
      },
      {
        heading: "Step by Step to a Secure Network",
        type: "list",
        items: [
          "Risk Assessment: Analyze the digital environment to identify vulnerabilities and potential threats.",
          "Network & System Protection: Implement advanced security layers to safeguard data and systems.",
          "Continuous Monitoring: Track suspicious activity and potential attacks around the clock.",
          "Rapid Incident Response: Handle any threat or breach quickly and effectively to minimize impact.",
          "Employee Awareness & Support: Train teams on best practices to strengthen internal cybersecurity.",
        ],
      },
      {
        heading: "Security Features That Make the Difference",
        type: "cards",
        items: [
          { title: "Multi-layer protection", icon: FaShieldAlt },
          { title: "Early threat detection", icon: FaSearch },
          { title: "24/7 real-time monitoring", icon: FaEye },
          { title: "Advanced data encryption", icon: FaLock },
          { title: "Rapid incident response", icon: FaBolt },
          { title: "Malware and ransomware defense", icon: FaBug },
          { title: "Strict access control", icon: FaKey },
          { title: "Detailed analytical reporting", icon: FaFileAlt },
          { title: "Continuous support & maintenance", icon: FaSyncAlt },
          { title: "Employee awareness training", icon: FaUserShield },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why We’re Your Secure Choice?",
        type: "text",
        content:
          "We don’t just deliver cybersecurity solutions—we build an integrated protection ecosystem that covers your networks, data, systems, and every layer of your digital infrastructure. Because we understand the full technical environment, we design advanced protection aligned with your business needs.",
      },
      {
        heading: "A Vision That Protects Your Data and Elevates Your Growth",
        type: "text",
        content:
          "Our vision begins with protecting yours. We develop innovative cybersecurity solutions that provide a secure, stable, and advanced digital environment—turning digital challenges into opportunities to strengthen your technological ecosystem and safeguard the future of your data.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
];

function renderCards(items, styles) {
  return (
    <>
      <div className={styles.cardsDesktop}>
        <div className="row g-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className={styles.cardBox}>
                  <div className={styles.cardIconWrap}>
                    <Icon className={styles.cardIcon} />
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
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className={styles.cardBox}>
                  <div className={styles.cardIconWrap}>
                    <Icon className={styles.cardIcon} />
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
  const [activeTab, setActiveTab] = useState("network-management");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = useMemo(() => {
    return (
      cyberSolutionsData.find((item) => item.id === activeTab) ||
      cyberSolutionsData[0]
    );
  }, [activeTab]);

  useEffect(() => {
    const currentIndex = cyberSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, cyberSolutionsData.length - 1));
    setActiveTab(cyberSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

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
              aria-label="Previous solution"
            >
              <FaArrowLeft />
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
              aria-label="Next solution"
            >
              <FaArrowRight />
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

            {section.type === "cards" && renderCards(section.items, styles)}
          </div>
        ))}

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
                  <img src={image} alt={`cyber-solution-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}