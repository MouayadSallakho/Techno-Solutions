"use client";

import HeaderPower from "@/components/layout/HeaderPower";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainPowerAccordion from "@/components/mainPowerAccordion/MainPowerAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function PowerSolutions() {
  const { t } = useLanguage();

  return (
    <main>
      <HeaderPower />

      <section className={styles.powerHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>{t.powerPage.hero.tag}</p>
            </div>

            <h1 className={styles.heroTitle}>{t.powerPage.hero.title}</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Bannerpower.png"
                alt={t.powerPage.hero.imageAlt}
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainPowerAccordion />
        </div>
      </section>

      <SolutionsList excludeId="power" />

      <ContactSection />

      <Footer />
    </main>
  );
}