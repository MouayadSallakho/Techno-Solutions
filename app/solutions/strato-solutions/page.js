import HeaderStrato from "@/components/layout/HeaderStrato";
import styles from "./page.module.css";
import MainAccordion from "@/components/mainAccordion/MainAccordion";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";

export default function StratoSolutionsPage() {
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
              <p>Solutions</p>
            </div>

            <h1 className={styles.heroTitle}>Strato Solutions</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Banner-Strato.png"
                alt="Strato Solutions"
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainAccordion />
        </div>
      </section>

      <SolutionsList excludeId="strato" />

      <ContactSection/>

      <Footer/>
    </main>
  );
}