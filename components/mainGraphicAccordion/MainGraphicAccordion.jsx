"use client";

import { useEffect, useMemo, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  FaPalette,
  FaPenNib,
  FaFont,
  FaBookOpen,
  FaBullhorn,
  FaObjectGroup,
  FaHandshake,
  FaEye,
  FaImages,
  FaFileAlt,
  FaFilePowerpoint,
  FaShareAlt,
  FaComments,
  FaChartBar,
  FaDesktop,
  FaMobileAlt,
  FaSitemap,
  FaCheckCircle,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainGraphicAccordion.module.css";

const graphicSolutionsData = [
  {
    id: "brand-identity",
    label: "Brand Identity",
    title: "Brand Identity",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "A visual identity is more than a logo… it’s a story that’s seen before it’s heard. A strong visual identity shapes the first impression of any brand, defining how its values, personality, and message are perceived. From carefully chosen colors and typography to design styles and brand elements, a cohesive identity creates instant recognition and a professional presence that stands apart.",
      },
      {
        heading: "Why a Strong Visual Identity Isn’t Optional Anymore?",
        type: "text",
        content:
          "Because a visual identity is now essential for building trust and differentiation, it is needed by organizations seeking a professional appearance, stronger market presence, and a memorable brand image. It is vital for startups, brands undergoing development, and any business aiming to establish a strong, consistent identity that reflects its values and message.",
      },
      {
        heading: "The Need Behind Every Successful Brand",
        type: "text",
        content:
          "Modern businesses rely on consistent, clear communication across all customer touchpoints. A strong visual identity becomes a practical tool—not just an aesthetic one—helping unify brand expression, support marketing efforts, and elevate professionalism. Organizations benefit from this service by enhancing their digital and print presence, improving brand recognition, and building stronger connections with their target audience.",
      },
      {
        heading: "From Concept to Visual Vision",
        type: "text",
        content:
          "Visual identity encompasses the design of core brand elements such as the logo, colors, typography, and visual symbols that reflect the company’s personality and values. It also includes creating a comprehensive usage guide to ensure consistent visual messaging across all communication channels, enhancing brand recognition and strengthening customer connection.",
      },
      {
        heading: "Comprehensive Visual Identity Features",
        type: "cards",
        items: [
          { title: "Professional and distinctive logo design", icon: FaPenNib },
          { title: "Color selection that reflects brand personality", icon: FaPalette },
          { title: "Unified typography and visual style", icon: FaFont },
          { title: "Comprehensive brand usage guide creation", icon: FaBookOpen },
          { title: "Enhancing brand recognition", icon: FaEye },
          { title: "Ensuring visual consistency across all channels", icon: FaObjectGroup },
          { title: "Strengthening customer-brand connection", icon: FaHandshake },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Your Visual Identity?",
        type: "text",
        content:
          "Choosing our company means gaining a comprehensive visual identity that combines creativity with professional precision. Our designs are not just logos and colors—they are strategic tools that reflect the brand’s personality and values, ensuring consistent visual messaging across all channels, providing a clear competitive edge and strengthening customer-brand connection.",
      },
      {
        heading: "Your Vision Visualized",
        type: "text",
        content:
          "The brand’s vision guides all visual identity elements to deliver a cohesive image that reflects the project’s personality, enhances recognition, and builds an emotional connection with clients, with innovative design solutions ensuring clarity of messaging and strong visual impact.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "marketing-advertising-design",
    label: "Marketing & Advertising Design",
    title: "Marketing & Advertising Design",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Advertising and marketing design transforms ideas and concepts into powerful visual messages that leave a lasting impact on the audience and strengthen brand communication. This includes designing ad campaigns, brochures, booklets, presentations, promotional materials, and social media designs, providing comprehensive marketing tools that enable projects to convey messages effectively while capturing attention in an innovative and professional manner.",
      },
      {
        heading: "The Need Behind Every Impactful Visual Message",
        type: "text",
        content:
          "Advertising and marketing design is essential for any project aiming to capture attention, communicate messages clearly, and boost audience engagement. Companies, stores, restaurants, and organizations seeking to showcase their brand and deliver content in an innovative and effective way require this service.",
      },
      {
        heading: "Target Audience Strategy & Visual Impact",
        type: "text",
        content:
          "Companies and organizations aiming to strengthen their visual presence and maximize marketing campaigns require integrated visual messaging design. This service enables them to transform ideas into clear, impactful visual content that ensures the right messages reach the target audience and achieves communication and marketing goals effectively.",
      },
      {
        heading: "Steps to Effective Visual Design",
        type: "list",
        items: [
          "Needs Analysis: Study project goals and target audience.",
          "Visual Strategy Planning: Define messages, colors, fonts, and overall design style.",
          "Content Creation: Design ads, brochures, booklets, presentations, and social media materials.",
          "Review & Refinement: Ensure designs align with brand identity and messaging.",
          "Delivery & Implementation: Provide final designs in all formats for digital and print use.",
        ],
      },
      {
        heading: "Features That Elevate Your Brand Visually",
        type: "cards",
        items: [
          { title: "Complete advertising campaign design", icon: FaBullhorn },
          { title: "Professional brochures and booklets", icon: FaFileAlt },
          { title: "Engaging and clear presentations", icon: FaFilePowerpoint },
          {
            title: "Customized promotional materials reflecting the brand",
            icon: FaImages,
          },
          { title: "Innovative social media designs", icon: FaShareAlt },
          { title: "Message clarity and increased engagement", icon: FaComments },
          { title: "Alignment with brand visual identity", icon: FaObjectGroup },
          { title: "Enhanced brand awareness", icon: FaChartBar },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for Your Advertising & Marketing Design?",
        type: "text",
        content:
          "The company stands out by providing comprehensive advertising and marketing design solutions covering every project need from concept to execution. The ability to combine creativity with brand strategy, along with expertise in designing all digital and print materials, ensures clear messaging and strong visual impact, making it the ideal choice for any project seeking distinction.",
      },
      {
        heading: "Visual Innovation Reflecting Your Brand Identity",
        type: "text",
        content:
          "The vision of advertising and marketing design focuses on blending innovation with visual appeal to maximize audience engagement. The solutions reflect brand identity, communicate messages clearly, and create impactful visual experiences that strengthen customer connections and support the project’s marketing goals.",
      },
    ],
    images: [
      "/images/lastStrato1.png",
      "/images/lastStrato2.png",
      "/images/lastStrato3.png",
    ],
  },
  {
    id: "ui-ux-design",
    label: "UI/UX Design",
    title: "UI/UX Design",
    sections: [
      {
        heading: "Overview",
        type: "text",
        content:
          "Carefully crafted digital interfaces make interacting with your products smooth, enjoyable, and effective. From apps to websites, every design aims to simplify the user journey, enhance satisfaction, and turn every click or tap into a meaningful experience that supports project goals.",
      },
      {
        heading: "The Need Behind a Seamless User Experience",
        type: "text",
        content:
          "UI/UX design is essential for any digital project aiming to attract users, simplify interactions, and enhance customer satisfaction. Companies, apps, and websites seeking to provide smooth and effective experiences for their users require this service to ensure a complete and enjoyable user journey.",
      },
      {
        heading: "Complete User Experience from Start to Finish",
        type: "text",
        content:
          "UI/UX design translates user needs and project goals into practical, intuitive interfaces that are easy to engage with. The service ensures a smooth experience from the first interaction to completion, while boosting engagement, strengthening user loyalty, and efficiently achieving digital objectives.",
      },
      {
        heading: "Steps to Transform Ideas into Seamless Interfaces",
        type: "list",
        items: [
          "User Experience Analysis: Study audience needs and digital behaviors.",
          "Interaction Mapping: Design a smooth, logical user journey within the app or website.",
          "Interface Design: Transform ideas into clear, user-friendly visual elements.",
          "Usability Testing: Test designs with real users to ensure ease of use and effectiveness.",
          "Final Implementation: Deliver ready-to-use digital interfaces aligned with project goals.",
        ],
      },
      {
        heading: "Features That Perfect the Digital Experience",
        type: "cards",
        items: [
          { title: "Intuitive and user-friendly interface design", icon: FaDesktop },
          { title: "Smooth and enjoyable user experience", icon: FaMobileAlt },
          { title: "Full alignment with brand identity", icon: FaPalette },
          { title: "Enhanced engagement and customer loyalty", icon: FaHandshake },
          { title: "Multi-platform support (websites, apps)", icon: FaMobileAlt },
          { title: "Clear and logical user journey mapping", icon: FaSitemap },
          {
            title: "Usability testing to ensure design effectiveness",
            icon: FaCheckCircle,
          },
          { title: "Continuous user experience improvement", icon: FaChartBar },
        ],
      },
    ],
    closingSections: [
      {
        heading: "Why Choose Us for a Perfect Digital User Experience?",
        type: "text",
        content:
          "The company offers comprehensive expertise in UI/UX design, covering all aspects of a digital project from start to finish. By combining creativity, user behavior analysis, and modern interface design standards, it ensures an exceptional experience that supports project goals and maximizes user satisfaction.",
      },
      {
        heading: "Design Focused on Users and Vision",
        type: "text",
        content:
          "The vision of UI/UX design focuses on simplifying digital interactions, making every click or tap an enjoyable and effective experience. Innovative solutions reflect the project’s identity, meet user needs, and enhance natural and meaningful engagement with the product, supporting project goals and increasing customer satisfaction.",
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

export default function MainGraphicAccordion() {
  const [activeTab, setActiveTab] = useState("brand-identity");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = useMemo(() => {
    return (
      graphicSolutionsData.find((item) => item.id === activeTab) ||
      graphicSolutionsData[0]
    );
  }, [activeTab]);

  useEffect(() => {
    const currentIndex = graphicSolutionsData.findIndex(
      (item) => item.id === activeTab
    );
    setActiveIndex(currentIndex === -1 ? 0 : currentIndex);
  }, [activeTab]);

  const goToIndex = (index) => {
    const safeIndex = Math.max(0, Math.min(index, graphicSolutionsData.length - 1));
    setActiveTab(graphicSolutionsData[safeIndex].id);
  };

  const goPrev = () => goToIndex(activeIndex - 1);
  const goNext = () => goToIndex(activeIndex + 1);

  return (
    <section className={styles.mainGraphicAccordionSection}>
      <div className={styles.holderTags}>
        {graphicSolutionsData.map((item) => (
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
            {graphicSolutionsData[activeIndex].label}
          </button>

          {activeIndex < graphicSolutionsData.length - 1 ? (
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
          {graphicSolutionsData.map((item, index) => (
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
                  <img src={image} alt={`graphic-solution-${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}