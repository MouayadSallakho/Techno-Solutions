"use client";

import HeaderCyber from "@/components/layout/HeaderCyber";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainCyberAccordion from "@/components/mainCyberAccordion/MainCyberAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function CyberSolutionsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <HeaderCyber />

      <section className={styles.cyberHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>{t.cyberPage.hero.tag}</p>
            </div>

            <h1 className={styles.heroTitle}>{t.cyberPage.hero.title}</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Cyber_Banner.png"
                alt={t.cyberPage.hero.imageAlt}
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainCyberAccordion />
        </div>
      </section>

      <SolutionsList excludeId="cyber" />
      <ContactSection />
      <Footer />
    </main>
  );
}