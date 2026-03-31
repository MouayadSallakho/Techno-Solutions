import HeaderPower from "@/components/layout/HeaderPower";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainPowerAccordion from "@/components/mainPowerAccordion/MainPowerAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";


export default function PowerSolutions() {
  return (
    <main>
      <HeaderPower />

      <section className={styles.stratoHero}>
        <div className={styles.bgGlowOne}></div>
        <div className={styles.bgGlowTwo}></div>

        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.topTag}>
              <span></span>
              <p>Solutions</p>
            </div>

            <h1 className={styles.heroTitle}>Power Solutions</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Bannerpower.png"
                alt="Strato Solutions"
                className={styles.heroImage}
              />
            </div>
          </div>

          {/* <MainPowerAccordion /> */}
<MainPowerAccordion/>
          <SolutionsList excludeId="power" />

          <ContactSection/>

          <Footer/>
        </div>
      </section>
    </main>
  );
}
