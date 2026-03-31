import HeaderCyber from "@/components/layout/HeaderCyber";
import styles from "./page.module.css";
import SolutionsList from "@/components/solutionsCom/SolutionsList";
import MainCyberAccordion from "@/components/mainCyberAccordion/MainCyberAccordion";
import ContactSection from "@/components/contactSection/ContactSection";
import Footer from "@/components/footer/Footer";

export default function CyberSolutionsPage() {
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
              <p>Solutions</p>
            </div>

            <h1 className={styles.heroTitle}>Cyber Solutions</h1>

            <div className={styles.heroImageWrap}>
              <img
                src="/images/Cyber_Banner.png"
                alt="Cyber Solutions"
                className={styles.heroImage}
              />
            </div>
          </div>

          <MainCyberAccordion />
          <SolutionsList excludeId="cyber" />
          <ContactSection/>

          <Footer/>
        </div>
      </section>
    </main>
  );
}