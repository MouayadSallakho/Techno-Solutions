"use client";

import HeaderStrato from "@/components/layout/HeaderStrato";
import styles from "./page.module.css";
import MainAccordion from "@/components/mainAccordion/MainAccordion";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function StratoSolutionsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <HeaderStrato />

      <section className={styles.stratoHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>{t.stratoPage.hero.tag}</p>
            </div>

            <h1 className={styles.heroTitle}>{t.stratoPage.hero.title}</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Banner-Strato.png"
                alt={t.stratoPage.hero.imageAlt}
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainAccordion />
        </div>
      </section>

      <SolutionsList excludeId="strato" />

      <ContactSection />
      <Footer />
    </main>
  );
}