import HeaderGraphic from "@/components/layout/HeaderGraphic";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainGraphicAccordion from "@/components/mainGraphicAccordion/MainGraphicAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";

export default function GraphicSolutionsPage() {
  return (
    <main>
      <HeaderGraphic />

      <section className={styles.graphicHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>


        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>Solutions</p>
            </div>

            <h1 className={styles.heroTitle}>Graphic Solutions</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Grafic_Banner.png"
                alt="Graphic Solutions"
                className={styles.heroImage}
              />
            </div>
          </div>



          <MainGraphicAccordion />
          <SolutionsList excludeId="graphic" />

          <ContactSection />
          <Footer />
        </div>
      </section>
    </main>
  );
}
