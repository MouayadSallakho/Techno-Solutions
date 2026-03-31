"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  FaBolt,
  FaPlug,
  FaLightbulb,
  FaChartLine,
  FaTabletAlt,
  FaHotel,
  FaLeaf,
  FaShieldAlt,
  FaEye,
  FaCogs,
  FaLink,
  FaExchangeAlt,
  FaUserCog,
  FaLock,
  FaStar,
  FaSyncAlt,
  FaMusic,
  FaGem,
  FaTools,
  FaWater,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainSmartAccordion.module.css";

const smartSolutionsData = [
  {
    id: "smart-building-control",
    label: "Smart Building Control Systems",
    title: "Smart Building Control Systems",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Smart control systems seamlessly connect technology with your building environment for enhanced performance and flexibility. We integrate sensors, lighting, HVAC, security, and energy systems into one unified platform, giving you the power to manage everything effortlessly, reduce energy consumption, and elevate user comfort throughout the space.",
      },
      {
        heading: "Why Your Facility Needs Smart Control?",
        type: "text",
        content:
          "Smart building control systems offer an integrated experience for facilities seeking to enhance operational efficiency and save energy. This service is aimed at commercial buildings, upscale residences, hotels, and smart complexes, enabling the integration of technology with infrastructure to improve performance, comfort, and safety.",
      },
      {
        heading: "Integrated Control for Your Facility’s Future",
        type: "text",
        content:
          "Smart control begins with understanding your facility’s needs. Our solutions are designed to seamlessly integrate technology within buildings, enhancing performance, saving energy, and improving the user experience comprehensively. By integrating lighting, HVAC, and smart devices, we help commercial buildings, residential complexes, and hotels optimize operational efficiency, reduce waste, and deliver a seamless, intelligent user experience.",
      },
      {
        heading: "From Concept to Full Automation",
        type: "list",
        items: [
          "Building Needs Assessment: Analyzing the current environment to identify opportunities for improved efficiency and safety.",
          "Smart System Integration: Connecting lighting, HVAC, and smart devices into a unified system.",
          "Process Automation: Automating lighting, temperature, and other systems to save energy and enhance comfort.",
          "Performance Monitoring & Analysis: Tracking energy consumption and system performance for continuous improvement.",
          "Seamless User Experience: Easy-to-use control interfaces for building administrators and occupants.",
        ],
      },
      {
        heading: "Innovation and Comfort in Every Corner",
        type: "cards",
        items: [
          { title: "Enhanced energy efficiency", icon: FaBolt },
          { title: "Seamless smart system integration", icon: FaPlug },
          { title: "Automated lighting and climate control", icon: FaLightbulb },
          { title: "Performance monitoring and analytics", icon: FaChartLine },
          { title: "Easy and intuitive user experience", icon: FaTabletAlt },
          {
            title: "Support for commercial, residential, and hotel facilities",
            icon: FaHotel,
          },
          { title: "Waste reduction and sustainability", icon: FaLeaf },
          {
            title: "Improved comfort and safety within the building",
            icon: FaShieldAlt,
          },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Smart Building Solutions?",
        type: "text",
        content:
          "Choosing us means accessing end-to-end smart building solutions. We don’t just provide control systems; we offer custom design, seamless system integration, continuous maintenance, and technical support to ensure optimal performance. Our integrated technical expertise allows us to deliver solutions that go beyond smart control to enhance energy efficiency, security, and occupant comfort, giving your facility a clear competitive edge and peace of mind.",
      },
      {
        heading: "Your Vision Drives Building Intelligence",
        type: "text",
        content:
          "Your vision for smart control and sustainable efficiency drives us to deliver comprehensive building solutions that seamlessly integrate technology to enhance performance, reduce waste, and improve occupant comfort, while providing easy and effective management of all smart systems in your facility.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "smart-monitoring-control",
    label: "Smart Monitoring and Control Systems",
    title: "Smart Monitoring and Control Systems",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Advanced devices and systems automatically monitor and manage various aspects of your facility, from lighting and temperature to security and surveillance, delivering a seamless operational experience, reducing waste, and enhancing energy efficiency and overall performance.",
      },
      {
        heading: "Who Needs Smart Sensor Systems?",
        type: "text",
        content:
          "Sensor systems provide an ideal solution for projects that require precise monitoring and smart management of all operational aspects. This service targets commercial buildings, hotels, upscale residential complexes, and industrial facilities seeking to enhance efficiency, reduce waste, and ensure smooth, intelligent operation of their various systems.",
      },
      {
        heading: "Effective Monitoring Across Your Project",
        type: "text",
        content:
          "Sensor systems focus on facilities that require precise monitoring and intelligent control of all operations. By integrating sensors with lighting, HVAC, security, and surveillance systems, commercial buildings, hotels, and residential complexes can enhance performance, reduce waste, and benefit from automated operation that ensures immediate and effective response to every change within the project.",
      },
      {
        heading: "How Our Sensor Systems Work",
        type: "list",
        items: [
          "Identifying Monitoring Points: Analyzing the project to determine critical areas for operational monitoring.",
          "Installing Sensors and Smart Devices: Connecting sensors with various systems to ensure automated operation.",
          "Control Automation: Managing lighting, HVAC, security, and surveillance automatically to enhance efficiency and reduce waste.",
          "Data Monitoring & Analysis: Collecting and analyzing sensor data for informed decision-making and performance improvement.",
          "Seamless Operational Experience: Easy-to-use control interfaces for administrators to effectively manage all systems in the facility.",
        ],
      },
      {
        heading: "Intelligent Control in Every Detail",
        type: "cards",
        items: [
          { title: "Continuous and precise monitoring", icon: FaEye },
          { title: "Operational process automation", icon: FaCogs },
          { title: "Seamless integration with building systems", icon: FaLink },
          { title: "Improved energy efficiency and waste reduction", icon: FaBolt },
          { title: "Automated response to any change", icon: FaExchangeAlt },
          { title: "Easy-to-use interfaces for administrators", icon: FaUserCog },
          {
            title: "Support for commercial, residential, and hotel facilities",
            icon: FaHotel,
          },
          { title: "Enhanced security and comfort within the facility", icon: FaLock },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Smart Sensor Systems?",
        type: "text",
        content:
          "Choosing us means accessing end-to-end smart sensor solutions. We don’t just provide devices and sensors; we offer custom design, seamless system integration, continuous maintenance, and technical support to ensure optimal operation. Our integrated technical expertise allows us to deliver solutions that enhance energy efficiency, strengthen security, and improve user experience, giving your project a clear competitive edge and peace of mind.",
      },
      {
        heading: "Your Vision Transformed into Smart Control",
        type: "text",
        content:
          "Your vision for continuous and intelligent control drives us to deliver comprehensive sensor systems that seamlessly integrate technology within your building, enhancing performance, reducing waste, and improving occupant comfort, while ensuring automated and effective responses to every change in your facility.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "interactive-smart-fountains",
    label: "Interactive Smart Fountains",
    title: "Interactive Smart Fountains",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Designing and implementing innovative fountains that add elegance and sophistication to projects, integrating smart control technologies that allow fountains to interact with sound, lighting, and visitor movement, delivering a unique visual and auditory experience that enhances the facility’s ambiance and value.",
      },
      {
        heading: "Who Needs Smart Fountains?",
        type: "text",
        content:
          "Smart fountains target projects aiming to add a distinguished artistic and aesthetic touch, such as luxury hotels, shopping centers, public parks, and upscale residential complexes. This service is ideal for those seeking an interactive visual and auditory experience that enhances the appeal of the space and leaves a lasting impression on visitors.",
      },
      {
        heading: "Unique Interaction Enhancing Your Project",
        type: "text",
        content:
          "Smart fountains focus on projects aiming to deliver a unique and memorable experience for visitors. By integrating interactive control of lighting, sound, and motion, we help hotels, shopping centers, parks, and residential complexes enhance engagement and attractiveness, transforming any space into a complete visual and auditory attraction.",
      },
      {
        heading: "Transforming Spaces into Interactive Experiences",
        type: "list",
        items: [
          "Innovative Artistic Design: Selecting fountain shapes and arrangements that suit the project’s space and aesthetics.",
          "Smart Technology Integration: Installing control systems for lighting, sound, and water movement to enable automatic interaction with the environment and visitors.",
          "Professional Implementation: Installing fountains with high-quality materials to ensure aesthetic performance and long-term durability.",
          "Interactive Programming: Setting synchronized patterns between lighting, water, and sound to deliver a complete visual and auditory experience.",
          "Ongoing Maintenance & Support: Providing regular follow-up and maintenance services to ensure optimal performance of smart fountains.",
        ],
      },
      {
        heading: "Features That Bring Your Project to Life",
        type: "cards",
        items: [
          { title: "Innovative and attractive artistic design", icon: FaStar },
          {
            title: "Automatic interaction with sound, lighting, and motion",
            icon: FaSyncAlt,
          },
          { title: "Complete visual and auditory experience", icon: FaMusic },
          { title: "Adds elegance and sophistication to any project", icon: FaGem },
          { title: "High-quality materials for durability", icon: FaTools },
          { title: "Synchronized operating patterns programming", icon: FaChartLine },
          { title: "Continuous maintenance and support", icon: FaWater },
          {
            title: "Enhances visitor experience and space attractiveness",
            icon: FaLightbulb,
          },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Smart Fountains?",
        type: "text",
        content:
          "Choosing us means receiving a complete experience from design to operation, with smart technology integration ensuring smooth and aesthetic fountain interaction within the project. Our expertise in delivering innovative solutions, adherence to the highest quality standards, and continuous support make us the ideal partner to create fountains that add elegance and appeal to your project with complete peace of mind.",
      },
      {
        heading: "Your Vision Transformed into an Interactive Experience",
        type: "text",
        content:
          "Your vision for transforming spaces into interactive experiences drives us to deliver smart fountains that combine beauty, elegance, and technology, offering seamless visitor interaction and innovative visual and auditory experiences that add distinctive value to your project.",
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

export default function MainSmartAccordion() {
  const [activeTab, setActiveTab] = useState("smart-building-control");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = useMemo(() => {
    return (
      smartSolutionsData.find((item) => item.id === activeTab) ||
      smartSolutionsData[0]
    );
  }, [activeTab]);

  useEffect(() => {
    const currentIndex = smartSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, smartSolutionsData.length - 1));
    setActiveTab(smartSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  return (
    <section className={styles.mainSmartAccordionSection}>
      <div className={styles.holderTags}>
        {smartSolutionsData.map((item) => (
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
            {smartSolutionsData[activeIndex].label}
          </button>

          {activeIndex < smartSolutionsData.length - 1 ? (
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
          {smartSolutionsData.map((item, index) => (
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
                  <img src={image} alt={`smart-solution-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}