import HeaderSmart from "@/components/layout/HeaderSmart";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainSmartAccordion from "@/components/mainSmartAccordion/MainSmartAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";

export default function SmartSolutionsPage() {
  return (
    <main>
      <HeaderSmart />

      <section className={styles.smartHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>Solutions</p>
            </div>

            <h1 className={styles.heroTitle}>Smart Solutions</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Smart_Banner.png"
                alt="Smart Solutions"
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainSmartAccordion />
          <SolutionsList excludeId="smart" />

          <ContactSection/>

          <Footer/>
        </div>
      </section>
    </main>
  );
}